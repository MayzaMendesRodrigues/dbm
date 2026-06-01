---
name: code-review
model: sonnet
description: >
  Multi-agent code review orchestrator for this React/TypeScript frontend. Spawns specialist
  reviewer agents in parallel to analyze code for SOLID/clean code, UI/accessibility, and
  React violations. Produces a consolidated report with CRITICAL/HIGH/MEDIUM findings.
  Use when the user says "review code", "code review", "run code review", or "review these files".
---

# Multi-Agent Code Review

Orchestrate 3 specialist reviewer agents in parallel and consolidate their findings
into a single prioritized report.

---

## Specialist Agents

| Agent | File | Domain |
|---|---|---|
| solid-clean-code-reviewer | `.claude/agents/reviewers/solid-clean-code-reviewer.md` | SOLID principles, clean code, design quality |
| ui-reviewer | `.claude/agents/reviewers/ui-reviewer.md` | Accessibility, forms, animation, responsive, dark mode |
| react-reviewer | `.claude/agents/reviewers/react-reviewer.md` | Components, hooks, state, rendering, data fetching |

---

## Step 1 — Determine Scope

Identify the files to review. Accept scope from the user in any of these forms:

- **Explicit file list**: User provides paths directly
- **Directory**: Recursively find source files (`.ts`, `.tsx`, `.js`, `.jsx`, `.css`)
- **Git diff**: `git diff --name-only <base>..HEAD` for PR reviews
- **Changed files**: `git diff --name-only` for uncommitted work

If the user provides no scope, ask for it. Do not review the entire repository.

---

## Step 2 — Classify Files by Domain

Not every reviewer should see every file. Route files to relevant agents:

| File Pattern | Agents |
|---|---|
| `*.tsx`, `*.jsx` (components) | ui-reviewer, react-reviewer, solid-clean-code-reviewer |
| `*.css`, `*.module.css` | ui-reviewer |
| `*.ts`, `*.js` (hooks, context, non-component) | solid-clean-code-reviewer, react-reviewer |

When unsure, send the file to solid-clean-code-reviewer (it applies to all code).

---

## Step 3 — Spawn Specialist Agents

Launch all relevant agents **in parallel** using the Agent tool. For each agent:

1. Provide the agent's instructions (from its `.md` file)
2. Pass only the files relevant to that agent's domain
3. Request JSON output in the agent's specified format

Example Agent call for each specialist:

```
Agent(subagent_type: "{agent-name}", description: "Review {domain} concerns", mode: "acceptEdits")

You are the {agent-name}. Review the following files according to your rules.

Files to review:
- src/components/feature/Catalog/Catalog.tsx
- src/pages/HomePage/HomePage.tsx

Read each file, analyze it against your rules, and output your findings as JSON.
```

**Important**: Launch agents concurrently, not sequentially. Each agent works independently.

---

## Step 4 — Collect and Deduplicate

After all agents complete:

1. Parse the JSON findings from each agent
2. Deduplicate: if two agents flag the same file+line for overlapping concerns, keep the higher-severity finding and note both agents in the report
3. Sort by severity: CRITICAL first, then HIGH, then MEDIUM

---

## Step 5 — Generate Report

Output the consolidated report in this format:

```markdown
# Code Review Report

**Date**: {date}
**Scope**: {files reviewed}
**Agents**: {list of agents that ran}

## Summary

| Severity | Count |
|----------|-------|
| CRITICAL | X     |
| HIGH     | Y     |
| MEDIUM   | Z     |

---

## CRITICAL Findings

### [CRITICAL-1] {rule name}
- **Agent**: {agent name}
- **File**: `{file path}:{line}`
- **Description**: {description}
- **Recommendation**: {recommendation}

---

## HIGH Findings

### [HIGH-1] {rule name}
...

---

## MEDIUM Findings

### [MEDIUM-1] {rule name}
...

---

## Review Metadata

| Agent | Files Reviewed | Findings |
|-------|---------------|----------|
| solid-clean-code-reviewer | N | M |
| ui-reviewer | N | M |
| react-reviewer | N | M |
```

---

## Step 6 — Save Report

Save the report to `code-review-report.md` in the current working directory.
Print the path to the user.

---

## Edge Cases

**No files match a specialist's domain**: Skip that agent. Note it in the metadata as "skipped — no relevant files".

**Agent returns no findings**: Include in metadata with `0` findings. This is a positive signal.

**Conflicting findings**: If two agents recommend contradictory fixes for the same code, flag both and let the user decide. Prefix with `[CONFLICT]`.

**Large scope (>50 files)**: Warn the user that the review may take several minutes. Consider splitting by feature folder.

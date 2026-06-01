---
name: ui-reviewer
description: >
  Audit web interfaces for accessibility, forms, performance, animation, responsive design,
  and semantic HTML. Use when reviewing UI code as part of the multi-agent code review process,
  or standalone via "audit UI", "review UI", "audit this component". Supports two output modes:
  review (JSON for orchestrator) and audit (openspec tasks file).
---

# UI Best Practices Reviewer

Reviews web UI code for accessibility, forms, performance, animation, responsive design,
dark mode, i18n, and content patterns.

---

## Core Rules

### Accessibility

- **Icon-only buttons**: Missing `aria-label`.
- **Form controls**: Missing `<label>` or `aria-label`.
- **Keyboard handlers**: Interactive elements missing `onKeyDown`/`onKeyUp`.
- **Semantic HTML**: `<div onClick>` or `<span onClick>` instead of `<button>` or `<a>`.
- **Images**: Missing `alt` attribute (or `alt=""` if decorative).
- **Decorative icons**: Missing `aria-hidden="true"`.
- **Async updates**: Toasts and validation messages missing `aria-live="polite"`.
- **Heading hierarchy**: Skipping levels or multiple `<h1>` on a page.
- **Skip link**: Missing skip-to-content link.
- **Scroll margin**: Missing `scroll-margin-top` on heading anchors.
- **Viewport meta**: `user-scalable=no` or `maximum-scale=1`.

### Focus States

- **Visible focus**: Interactive elements missing `focus-visible:ring-*` or equivalent.
- **Never `outline-none`**: `outline: none` without a focus replacement.
- **Preference**: `:focus` used where `:focus-visible` is more appropriate.
- **Group focus**: Missing `:focus-within` for compound controls.

### Forms

- **Attributes**: Inputs missing `autocomplete` or meaningful `name`.
- **Input types**: Wrong `type` or `inputmode` for the data (e.g., `type="text"` for email).
- **Paste blocking**: `onPaste` + `preventDefault`.
- **Labels**: Not clickable (missing `htmlFor` or not wrapping the control).
- **Spellcheck**: Not disabled on emails, codes, usernames (`spellCheck={false}`).
- **Hit targets**: Checkboxes/radios with dead zones between label and input.
- **Error display**: Errors shown only in alerts/modals instead of inline next to fields; first error not focused on submit.
- **Unsaved changes**: No warning before navigation with unsaved changes.
- **Submit state**: Button stays enabled until request starts; show spinner during request.
- **Placeholders**: Missing trailing `…` or example pattern.

### Performance

- **Virtualization**: Large lists (>50 items) without virtualization.
- **Layout reads**: `getBoundingClientRect`, `offsetHeight` in render path.
- **Lazy loading**: Below-fold images missing `loading="lazy"`.
- **Priority loading**: Above-fold images missing `fetchpriority="high"`.
- **Image dimensions**: `<img>` without explicit `width` and `height` (causes CLS).
- **Preconnect**: Missing `<link rel="preconnect">` for CDN resources.
- **Preload fonts**: Missing `<link rel="preload" as="font">` for critical fonts.
- **Controlled inputs**: Doing expensive work per keystroke.
- **Uncontrolled preference**: Using controlled inputs when uncontrolled would suffice.

### Animation & Transitions

- **Reduced motion**: Not honoring `prefers-reduced-motion`.
- **Compositor properties**: Animating properties other than `transform`/`opacity`.
- **Transition all**: Using `transition: all` instead of listing specific properties.
- **Interruptible**: Animations that can't respond to user input mid-animation.
- **SVG transforms**: Not using `<g>` wrapper with `transform-box: fill-box; transform-origin: center`.

### Responsive & Touch

- **Touch action**: Missing `touch-action: manipulation` on touch targets.
- **Safe areas**: Missing `env(safe-area-inset-*)` for full-bleed layouts.
- **Hit targets**: Smaller than 44x44px on touch devices.
- **Overscroll**: Missing `overscroll-behavior: contain` on modals/drawers.
- **Drag**: Missing disabled text selection and `inert` on dragged elements.

### Dark Mode & i18n

- **Date/number formats**: Hardcoded formats instead of `Intl.DateTimeFormat` / `Intl.NumberFormat`.
- **Color scheme**: Missing `color-scheme: dark` on `<html>` for dark themes.
- **Native selects**: Missing explicit `background-color` and `color` for Windows dark mode.

### Typography

- **Characters**: `...` instead of `…`; straight quotes instead of curly quotes.
- **Non-breaking spaces**: Missing for units (`10&nbsp;MB`), keys (`⌘&nbsp;K`), brand names.
- **Loading states**: Not ending with `…` (e.g., `"Loading…"`).
- **Tabular numbers**: Missing `font-variant-numeric: tabular-nums` for number comparisons.
- **Widows**: Missing `text-wrap: balance` or `text-pretty` on headings.

### Content

- **Long text**: No truncation strategy (`truncate`, `line-clamp-*`, `break-words`).
- **Flexbox truncation**: Children missing `min-w-0` for text truncation.
- **Empty states**: Broken UI instead of placeholder for empty strings/arrays.
- **Destructive actions**: Missing confirmation modal or undo.
- **URL sync**: Filters, tabs, pagination not reflected in URL query params (not deep-linkable).

### Hover & Copy

- **Feedback**: Buttons/links without `hover:` state with increased contrast.
- **Voice**: Passive voice where active is clearer ("Install the CLI" not "The CLI can be installed").
- **Style**: Title Case for headings/buttons; numerals for counts ("8 deployments").
- **Errors**: Only the problem described, no fix or next step.

## Anti-Patterns (Always Flag)

- `user-scalable=no` or `maximum-scale=1`
- `onPaste` with `preventDefault`
- `transition: all`
- `outline-none` without focus replacement
- Inline `onClick` navigation without `<a>`
- `<div>` or `<span>` with click handlers instead of `<button>`
- Images without dimensions
- Large arrays `.map()` without virtualization
- Form inputs without labels or icon buttons without `aria-label`
- Hardcoded date/number formats
- `autoFocus` without clear justification

---

## Instructions

### Step 1 — Read Context

Read the project's frontend design skill (`skills/frontend-design/SKILL.md`) for standards.

### Step 2 — Analyze

Read the target UI files and check against all rules above.

### Step 3 — Classify Findings

- **CRITICAL**: Missing keyboard accessibility on primary actions, `user-scalable=no`, paste blocking, XSS via unescaped user input in DOM, `outline-none` without replacement on critical flows.
- **HIGH**: Missing aria-labels, non-semantic interactive elements, no virtualization on large lists, CLS-causing images, missing form labels, missing focus states.
- **MEDIUM**: Animation issues, minor responsive gaps, hardcoded formats, missing preconnect, typography issues.

### Step 4 — Output

**Determine output mode** from how this agent was invoked:

#### Review Mode (default — used by the code-review orchestrator)

Output findings as JSON:

```json
{
  "agent": "ui-reviewer",
  "findings": [
    {
      "severity": "CRITICAL|HIGH|MEDIUM",
      "rule": "rule name",
      "file": "path/to/file",
      "line": 42,
      "description": "What the violation is",
      "recommendation": "How to fix it"
    }
  ]
}
```

#### Audit Mode (standalone — when user says "audit UI" or "audit this component")

1. Derive the component name from the audited file (e.g., `DashboardPage.tsx` → `dashboard-page`). Convert PascalCase/camelCase to kebab-case and strip file extensions.
2. Create a tasks file at `openspec/changes/refactor-{component-name}-ui/tasks.md`:

```markdown
# Refactor: {ComponentName} UI Audit

## Findings

- [ ] `file:line` - Issue description and recommended fix
- [ ] `file:line` - Issue description and recommended fix

## Fix Plan

1. Step-by-step fix instructions grouped by category (accessibility, forms, animation, etc.)
```

3. Print: `Created: openspec/changes/refactor-{component-name}-ui/tasks.md`

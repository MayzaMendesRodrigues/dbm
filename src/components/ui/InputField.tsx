import React from 'react';
import { LucideIcon } from 'lucide-react';
import { TextField, InputAdornment, MenuItem } from '@mui/material';

interface InputFieldProps {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  options?: { value: string; label: string }[];
  Icon?: LucideIcon;
  multiline?: boolean;
  rows?: number;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  options,
  Icon,
  multiline,
  rows,
}) => {

  return (
    <TextField
      fullWidth
      id={id}
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type={type}
      placeholder={placeholder}
      error={!!error}
      helperText={error}
      select={!!options}
      multiline={multiline}
      rows={rows}
      InputProps={{
        startAdornment: Icon ? (
          <InputAdornment position="start">
            <Icon />
          </InputAdornment>
        ) : null,
      }}
      variant="outlined"
      sx={{ mb: 2 }}
    >
      {options && options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default InputField;

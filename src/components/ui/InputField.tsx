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
      InputProps={{
        startAdornment: Icon ? (
          <InputAdornment position="start">
            <Icon />
          </InputAdornment>
        ) : null,
      }}
      variant="outlined"
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

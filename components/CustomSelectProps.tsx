import React from "react";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  name: string;
  value?: string;
  placeholder?: string;
  options: Option[];
  onChange: (value: string) => void;
  className?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  name,
  value = "",
  placeholder,
  options,
  onChange,
  className = "",
}) => (
  <select
    name={name}
    value={value}
    className={`${className}`}
    onChange={e => onChange(e.target.value)}
    aria-label={placeholder || name}
  >
    {placeholder && (
      <option style={{fontSize: '18px'}} value="" disabled hidden>
        {placeholder}
      </option>
    )}
    {options.map(opt => (
      <option style={{fontSize: '1rem', paddingLeft: '4px'}} key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ))}
  </select>
);

export default CustomSelect;

interface BaseFieldProps {
  label: string;
  error?: string;
  required?: boolean;
}

interface InputFieldProps extends BaseFieldProps {
  type?: 'text' | 'number' | 'email' | 'url';
  value: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
  min?: number;
  max?: number;
  className?: string;
}

interface TextareaFieldProps extends BaseFieldProps {
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  placeholder?: string;
  className?: string;
}

/**
 * Reusable form input field with label and error handling
 */
export function FormField({
  label,
  type = 'text',
  value,
  onChange,
  error,
  required,
  placeholder,
  min,
  max,
  className = '',
}: InputFieldProps) {
  return (
    <div className={className}>
      <label className="form-label">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`field ${error ? 'border-red-500' : 'border-[var(--border)]'}`}
        placeholder={placeholder}
        required={required}
        min={min}
        max={max}
      />
      {error && (
        <p className="text-red-400 text-[length:var(--font-100)] mt-1">{error}</p>
      )}
    </div>
  );
}

/**
 * Reusable textarea field with label and error handling
 */
export function TextareaField({
  label,
  value,
  onChange,
  error,
  required,
  rows = 3,
  placeholder,
  className = '',
}: TextareaFieldProps) {
  return (
    <div className={className}>
      <label className="form-label">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className={`field ${error ? 'border-red-500' : 'border-[var(--border)]'}`}
        placeholder={placeholder}
        required={required}
      />
      {error && (
        <p className="text-red-400 text-[length:var(--font-100)] mt-1">{error}</p>
      )}
    </div>
  );
}

interface SelectFieldProps extends BaseFieldProps {
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string; label: string }>;
  className?: string;
}

/**
 * Reusable select field with label and error handling
 */
export function SelectField({
  label,
  value,
  onChange,
  options,
  error,
  required,
  className = '',
}: SelectFieldProps) {
  return (
    <div className={className}>
      <label className="form-label">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`admin-select w-full ${error ? 'border-red-500' : ''}`}
        required={required}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-red-400 text-[length:var(--font-100)] mt-1">{error}</p>
      )}
    </div>
  );
}

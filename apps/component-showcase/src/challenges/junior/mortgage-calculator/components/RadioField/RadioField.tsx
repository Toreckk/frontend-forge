import { Controller, useFormContext } from "react-hook-form";
import "./RadioField.css";

interface Item {
  text: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
}

export interface RadioFieldProps {
  name: string;
  label: string;
  items: Item[];
  rules?: object;
}

export const RadioField = ({ name, label, items, rules }: RadioFieldProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <div className="radio-field">
          <label htmlFor={name} className="input-label">
            {label}
          </label>
          {items.map((item) => (
            <label key={item.value} className="radio-label">
              <input
                type="radio"
                className="radio-input"
                id={name}
                {...field}
                value={item.value}
              />
              <span className="radio-custom-indicator" aria-hidden="true" />
              <span className="radio-text">{item.text}</span>
            </label>
          ))}
          {error && <p>This field is required</p>}
        </div>
      )}
    />
  );
};

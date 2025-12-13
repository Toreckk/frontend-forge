import { Controller, useFormContext, type FieldError } from "react-hook-form";
import "./NumberField.css";

type prefixFormat = "currency" | "years" | "percentage";

export interface NumberFieldProps {
  name: string;
  label: string;
  rules?: object;
  format: prefixFormat;
}

const getFormatDetails = (format: NumberFieldProps["format"]) => {
  switch (format) {
    case "currency":
      return { prefix: "€", isSuffix: false };
    case "years":
      return { suffix: "years", isSuffix: true };
    case "percentage":
      return { suffix: "%", isSuffix: true };
    default:
      return {};
  }
};

export const NumberField = ({
  name,
  label,
  rules,
  format,
}: NumberFieldProps) => {
  const { control } = useFormContext();
  const { prefix, suffix } = getFormatDetails(format);

  const unitElement = ({ error }: { error?: FieldError | undefined }) => (
    <span className={`input-unit unit-${format} ${error ? "input-error" : ""}`}>
      {prefix || suffix}
    </span>
  );

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <div className="number-field">
          <label htmlFor={name} className="input-label">
            {label}
          </label>
          <div className="input-container">
            {format === "currency" && unitElement({ error })}
            <input
              className="number-input"
              type="number"
              id={name}
              {...field}
            />
            {(format === "years" || format === "percentage") &&
              unitElement({ error })}
          </div>
          {error && (
            <p className="number-field-error">This field is required</p>
          )}
        </div>
      )}
    />
  );
};

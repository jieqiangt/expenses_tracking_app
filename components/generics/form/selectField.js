import SelectOption from "./selectOption";

export default function SelectField({
  label,
  name,
  fieldClassName,
  optionClassName,
  options,
  defaultValue,
}) {
  return (
    <div className={fieldClassName}>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} defaultValue={defaultValue}>
        {options.map((option) => (
          <SelectOption
            key={`${option.label}-${option.value}`}
            className={optionClassName}
            value={option.value}
            label={option.label}
          />
        ))}
      </select>
    </div>
  );
}

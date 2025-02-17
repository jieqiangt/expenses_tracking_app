export default function DateField({
  name,
  label,
  defaultValue,
  fieldClassName,
  ref
}) {
  return (
    <div className={fieldClassName}>
      <label htmlFor={name}>{label}</label>
      <input
        ref={ref}
        name={name}
        id={name}
        type="date"
        defaultValue={defaultValue}
      />
    </div>
  );
}

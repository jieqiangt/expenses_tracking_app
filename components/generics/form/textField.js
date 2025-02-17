export default function TextField({
  name,
  label,
  defaultValue,
  fieldClassName,
}) {
  return (
    <div className={fieldClassName}>
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} type="text" defaultValue={defaultValue} />
    </div>
  );
}

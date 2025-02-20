export default function EmailField({ name, label, fieldClassName }) {
  return (
    <div className={fieldClassName}>
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} type="text" required />
    </div>
  );
}

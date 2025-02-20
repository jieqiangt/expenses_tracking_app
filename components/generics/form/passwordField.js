export default function PasswordField({ name, label, fieldClassName }) {
  return (
    <div className={fieldClassName}>
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} type="password" />
    </div>
  );
}

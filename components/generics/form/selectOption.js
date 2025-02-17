export default function SelectOption({ value, label, className }) {
  return (
    <option className={className} value={value}>
      {label}
    </option>
  );
}

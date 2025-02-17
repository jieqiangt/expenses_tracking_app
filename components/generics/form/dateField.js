import { getCurrentDateTime } from "@/lib/utils";

export default function DateField({
  name,
  label,
  startingValue,
  fieldClassName,
  ref,
}) {
  let defaultValue = startingValue;

  if (!startingValue) {
    const { todayDateStr } = getCurrentDateTime();
    defaultValue = todayDateStr;
  }

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

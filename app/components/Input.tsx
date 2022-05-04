import {
  useField,
  useFormContext,
  useIsSubmitting,
} from "remix-validated-form";

type MyInputProps = {
  name: string;
  label: string;
};

export const MyInput = ({ name, label }: MyInputProps) => {
  const { error, getInputProps } = useField(name);
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input {...getInputProps({ id: name })} />
      {error && <span className="my-error-class">{error}</span>}
    </div>
  );
};

export const MySubmitButton = () => {
  const isSubmitting = useIsSubmitting();
  const { isValid } = useFormContext();
  const disabled = isSubmitting || !isValid;

  return (
    <button
      type="submit"
      disabled={disabled}
      className={disabled ? "disabled-btn" : "btn"}
    >
      {isSubmitting ? "Submitting..." : "Submit"}
    </button>
  );
};

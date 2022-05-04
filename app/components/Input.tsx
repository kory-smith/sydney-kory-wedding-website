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
      <input {...getInputProps({ id: name })} className="border-2 border-black" />
      {error && <span className="text-[#FF0000]">{error}</span>}
    </div>
  );
};

export const MyTextArea = ({ name, label }: MyInputProps) => {
  const { error, getInputProps } = useField(name);
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea {...getInputProps({ id: name })} className="border-2 border-black" />
      {error && <span className="text-[#FF0000]">{error}</span>}
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

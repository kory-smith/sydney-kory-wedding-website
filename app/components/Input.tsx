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
    <div className="flex flex-col mb-4 md:w-1/2">
      <label htmlFor={name}>{label}</label>
      <input {...getInputProps({ id: name })} className="border py-2 px-3 text-grey-darkest md:mr-2" onFocus={(e) => e.target.value = ""} />
      {error && <span className="text-[#FF0000]">{error}</span>}
    </div>
  );
};

export const MyTextArea = ({ name, label }: MyInputProps) => {
  const { error, getInputProps } = useField(name);
  return (
    <div className="flex flex-col mb-4 md:w-1/2">
      <label className="mb-2 uppercase font-bold text-lg text-grey-darkest md:ml-2" htmlFor={name}>{label}</label>
      <textarea {...getInputProps({ id: name })} className="border py-2 px-3 text-grey-darkest md:mr-2" onFocus={(e) => e.target.value = ""} />
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

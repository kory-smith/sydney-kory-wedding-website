import {
  useField,
  useFormContext,
  useIsSubmitting,
} from "remix-validated-form";

type MyInputProps = {
  name: string;
  label: string;
  placeholder?: string;
};

export const MyInput = ({ name, label, placeholder }: MyInputProps) => {
  const { error, getInputProps } = useField(name);
  return (
    <div className="flex flex-col mb-4 md:w-1/2">
      <label htmlFor={name} className="mb-2 uppercase font-bold text-lg text-grey-darkest md:ml-2">{label}</label>
      <input {...getInputProps({ id: name })} placeholder={ placeholder } className="border py-2 px-3 text-grey-darkest md:mr-2" />
      {error && <span className="text-[#FF0000]">{error}</span>}
    </div>
  );
};

export const MyTextArea = ({ name, label, placeholder }: MyInputProps) => {
  const { error, getInputProps } = useField(name);
  return (
    <div className="flex flex-col mb-4 w-full">
      <label className="mb-2 uppercase font-bold text-lg text-grey-darkest md:ml-2" htmlFor={name}>{label}</label>
      <textarea {...getInputProps({ id: name })} placeholder={placeholder} className="border py-2 px-3 text-grey-darkest md:mr-2" />
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
      className=" basis-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
    >
      {isSubmitting ? "Submitting..." : "Submit"}
    </button>
  );
};

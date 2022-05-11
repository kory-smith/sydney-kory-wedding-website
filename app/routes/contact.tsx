import { ActionFunction, LoaderFunction, redirect, useLoaderData } from "remix";
import * as yup from "yup";
import { validationError, ValidatedForm } from "remix-validated-form";
import { withYup } from "@remix-validated-form/with-yup";
import { MyInput, MySubmitButton, MyTextArea } from "~/components/Input";
import { sendEmail } from "~/services/emailer.server";


// Using yup in this example, but you can use anything
const validator = withYup(
  yup.object({
    name: yup.string().label("Name").required(),
    email: yup.string().email().label("Email").required(),
		message: yup.string().label("Message").required()
  })
);

export const action: ActionFunction = async ({ request }) => {
  const fieldValues = await validator.validate(await request.formData());
  if (fieldValues.error) return validationError(fieldValues.error);
  const { email, message, name } = fieldValues.data;

	await sendEmail(name, email, message );

  // Do something with correctly typed values;

  return redirect("/");
};

export const loader: LoaderFunction = () => {
  return {
    defaultValues: {
      name: "Spook Jackson",
      email: "spook@gmail.com",
      message: "I never thought I'd know somebody as handsome as you.",
    },
  };
};

export default function MyForm() {
  const { defaultValues } = useLoaderData();
  return (
    <ValidatedForm
      validator={validator}
      method="post"
      defaultValues={defaultValues}
    >
      <MyInput name="name" label="Name" />
      <MyInput name="email" label="Email" />
      <MyTextArea name="message" label="Message" />
      <MySubmitButton />
    </ValidatedForm>
  );
}

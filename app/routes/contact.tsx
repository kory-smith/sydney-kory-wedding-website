import { ActionFunction, LoaderFunction, redirect, useLoaderData } from "remix";
import * as yup from "yup";
import { validationError, ValidatedForm } from "remix-validated-form";
import { withYup } from "@remix-validated-form/with-yup";
import { MyInput, MySubmitButton, MyTextArea } from "~/components/Input";
import { sendEmail } from "~/services/emailer.server";


// Using yup in this example, but you can use anything
const validator = withYup(
  yup.object({
    firstName: yup.string().label("First Name").required(),
    lastName: yup.string().label("Last Name").required(),
    email: yup.string().email().label("Email").required(),
		message: yup.string().label("Message").required()
  })
);

export const action: ActionFunction = async ({ request }) => {
  const fieldValues = await validator.validate(await request.formData());
  if (fieldValues.error) return validationError(fieldValues.error);
  const { firstName, lastName, email, message } = fieldValues.data;

	await sendEmail();

  // Do something with correctly typed values;

  return redirect("/");
};

export const loader: LoaderFunction = () => {
  return {
    defaultValues: {
      firstName: "Jane",
      lastName: "Doe",
      email: "jane.doe@example.com",
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
      <MyInput name="firstName" label="First Name" />
      <MyInput name="lastName" label="Last Name" />
      <MyInput name="email" label="Email" />
      <MyTextArea name="message" label="Message" />
      <MySubmitButton />
    </ValidatedForm>
  );
}

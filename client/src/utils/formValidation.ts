import { FormikErrors } from "formik";

export const validateForm = (values: UserForm) => {
  const errors: FormikErrors<UserForm> = {};
  if (!values.password) {
    errors.password = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

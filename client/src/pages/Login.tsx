import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useFormik } from "formik";
import { validateForm } from "../utils/formValidation";

export const Login = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const formLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: validateForm,
    onSubmit: (values) => {
      if (authContext !== null) {
        authContext.login(values as UserForm);
        navigate("/");
      }
    },
  });

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Link to="/">
          <h1 className="text-5xl text-center text-primary font-bold">
            GiveMagic <span className="text-secondary">Images</span>
          </h1>
        </Link>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Log in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={formLogin.handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-black"
            >
              Email address
            </label>
            {formLogin.errors.email && (
              <span className="text-error text-xs">
                {formLogin.errors.email}
              </span>
            )}
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-white"
                onChange={formLogin.handleChange}
                value={formLogin.values.email}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            {formLogin.errors.password && (
              <span className="text-error text-xs">
                {formLogin.errors.password}
              </span>
            )}
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-secondary placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-white"
                onChange={formLogin.handleChange}
                value={formLogin.values.password}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-accent px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
              disabled={!formLogin.isValid}
            >
              Log in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-black">
          Not a member?{" "}
          <Link
            to="/signin"
            className="font-bold underline leading-6 text-black hover:opacity-80"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

import { TLoginFormFields, TRegisterFormFields } from "@/libs";
import { useForm } from "@tanstack/react-form";

const loginFormFields: TLoginFormFields = {
  email: "",
  password: "",
};
const registerFormFields: TRegisterFormFields = {
  name: "",
  email: "",
  password: "",
  repeatPassword: "",
};

export const LoginPage = () => {
  const loginForm = useForm({
    defaultValues: loginFormFields,
    onSubmit: async ({ value: loginFormValues }) => {
      console.log({ loginFormValues });
    },
  });

  const registerForm = useForm({
    defaultValues: registerFormFields,
    onSubmit: async ({ value: registerFormValues }) => {
      console.log({ registerFormValues });
    },
  });

  return (
    <div className="mx-5 lg:mx-auto lg:container min-h-screen flex items-center justify-center">
      <div className="grid grid-col-1 lg:grid-cols-2 size-full">
        <div className="login-form rounded-lg shadow-2xl p-10">
          <h3 className="text-center text-2xl mb-10">Login</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              loginForm.handleSubmit();
            }}
            className="max-w-sm mx-auto"
          >
            <div className="mb-5">
              <label htmlFor="email">Email</label>
              <loginForm.Field
                name="email"
                children={(field) => (
                  <input
                    type="email"
                    id="email"
                    name={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-md"
                    placeholder="userplaceholder@email.com"
                    autoComplete="off"
                    required
                  />
                )}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="password">Password</label>
              <loginForm.Field
                name="password"
                children={(field) => (
                  <input
                    type="password"
                    id="password"
                    name={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-md"
                    placeholder="******"
                    autoComplete="off"
                    required
                  />
                )}
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Login
            </button>
          </form>
        </div>
        <div className="register-form rounded-lg bg-blue-600 shadow-2xl p-10">
          <h3 className="text-center text-2xl text-white mb-10">Register</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              registerForm.handleSubmit();
            }}
            className="max-w-sm mx-auto"
          >
            <div className="mb-5">
              <label className="text-white" htmlFor="name">
                Name
              </label>
              <registerForm.Field
                name="name"
                children={(field) => (
                  <input
                    type="text"
                    id="name"
                    name={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="John Doe"
                    required
                  />
                )}
              />
            </div>
            <div className="mb-5">
              <label className="text-white" htmlFor="email">
                Email
              </label>
              <registerForm.Field
                name="email"
                children={(field) => (
                  <input
                    type="email"
                    id="email"
                    name={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="userplaceholder@email.com"
                    autoComplete="off"
                    required
                  />
                )}
              />
            </div>
            <div className="mb-5">
              <label className="text-white" htmlFor="name">
                Password
              </label>
              <registerForm.Field
                name="password"
                children={(field) => (
                  <input
                    type="password"
                    id="password"
                    name={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="******"
                    autoComplete="off"
                    required
                  />
                )}
              />
            </div>
            <div className="mb-5">
              <label className="text-white" htmlFor="name">
                Repeat Password
              </label>
              <registerForm.Field
                name="repeatPassword"
                children={(field) => (
                  <input
                    type="password"
                    id="repeatPassword"
                    name={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="******"
                    autoComplete="off"
                    required
                  />
                )}
              />
            </div>
            <button
              type="submit"
              className="text-blue-600 bg-white hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

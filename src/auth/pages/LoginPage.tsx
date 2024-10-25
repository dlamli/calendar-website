export const LoginPage = () => {
  return (
    <div className="mx-5 lg:mx-auto lg:container min-h-screen flex items-center justify-center">
      <div className="grid grid-col-1 lg:grid-cols-2 size-full">
        <div className="login-form rounded-lg shadow-2xl p-10">
          <h3 className="text-center text-2xl mb-10">Login</h3>
          <form className="max-w-sm mx-auto">
            <div className="mb-5">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-md"
                placeholder="userplaceholder@email.com"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-md"
                placeholder="******"
                required
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
          <form className="max-w-sm mx-auto">
            <div className="mb-5">
              <label className="text-white" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="mb-5">
              <label className="text-white" htmlFor="name">
                Email
              </label>
              <label className="text-white" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="userplaceholder@email.com"
                required
              />
            </div>
            <div className="mb-5">
              <label className="text-white" htmlFor="name">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="******"
                required
              />
            </div>
            <div className="mb-5">
              <label className="text-white" htmlFor="name">
                Repeat Password
              </label>
              <input
                type="password"
                id="repeatPassword"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="******"
                required
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

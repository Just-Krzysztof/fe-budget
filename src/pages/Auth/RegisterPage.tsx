import { CircleArrowRight } from 'lucide-react';

export const RegisterPage = () => {
  return (
    <div className="w-full max-w-xl rounded-xl bg-white p-8 shadow-md">
      <h2 className="text-3xl font-bold text-center pb-4">Register</h2>
      <form className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="email">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="********"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="group relative inline-flex items-center overflow-hidden rounded-md bg-blue-600 px-8 py-3 font-bold text-white focus:outline-none focus:ring active:bg-blue-500"
          >
            <span className="absolute inset-0 flex items-center justify-center -translate-x-full transition-transform duration-300 group-hover:translate-x-0">
              <CircleArrowRight />
            </span>

            <span className="transition-all group-hover:translate-x-full group-hover:opacity-0">
              Sign up
            </span>
          </button>
        </div>
        <p>
          You have account? <span className="text-blue-400 cursor-pointer">Sign in here!</span>
        </p>
      </form>
    </div>
  );
};

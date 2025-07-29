import { CircleArrowRight } from 'lucide-react';

export const LoginPage = () => {
  return (
    <div className="w-full max-w-xl rounded-xl bg-white p-8 shadow-md">
      <h2 className="mb-6 text-center text-2xl font-bold">Login</h2>
      <form>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="email"
            type="email"
            placeholder="you@example.com"
          />
        </div>
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="password"
            type="password"
            placeholder="********"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="group relative inline-flex items-center overflow-hidden rounded-md bg-blue-600 px-8 py-3 font-bold text-white focus:outline-none focus:ring active:bg-blue-500"
          >
            <span className="absolute inset-0 flex items-center justify-center -translate-x-full transition-transform duration-600 group-hover:translate-x-0 ">
              <CircleArrowRight />
            </span>

            <span className="transition-all group-hover:translate-x-full group-hover:opacity-0">
              Sign in
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

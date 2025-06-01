import React from "react";

import { Head } from "../../components/layouts";

const AuthPage = () => {
  return (
    <>
      <Head
        title="Authentication - Shophost Example"
        description="Log in to your Shophost account"
      />
      <div>
        <h1 className="text-3xl font-bold mb-4">Login to Your Account</h1>
        <p className="mb-6">
          Please enter your credentials to access your account.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full border rounded-md py-2 px-3"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full border rounded-md py-2 px-3"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md"
          >
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};

export default AuthPage;

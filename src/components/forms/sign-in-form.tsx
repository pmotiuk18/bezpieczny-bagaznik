"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { RiGoogleFill } from "@remixicon/react";
import { Button, Divider, Label, TextInput } from "@shophost/react-sdk";
import { SignInSchema } from "@shophost/rest-api/schemas";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { signIn } from "../../lib/better-auth";

type FormData = z.infer<typeof SignInSchema>;

const SignInForm = () => {
  const router = useRouter();
  const redirectPath = router.query.redirect ?? "/checkout/details/address";
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(SignInSchema),
    shouldFocusError: true,
  });

  const onSubmit = async (data: FormData) => {
    await signIn.email({
      email: data.email,
      password: data.password,
      callbackURL: `${process.env.NEXT_PUBLIC_APP_DOMAIN}${redirectPath}`,
    });
  };

  const onLoginWithGoogle = async (e: any) => {
    e.preventDefault();

    await signIn.social({
      provider: "google",
      callbackURL: `${process.env.NEXT_PUBLIC_APP_DOMAIN}${redirectPath}`,
    });
  };

  return (
    <>
      <div className="flex w-full flex-col items-start sm:max-w-sm">
        <div className="mt-6 flex flex-col">
          <h1 className="h4 font-black font-red-hat-display">Log in</h1>
          <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
            Login or create an account to continue. Don&rsquo;t have an account?{" "}
            <Link
              className="text-teal-500 hover:text-teal-600 dark:text-teal-500 dark:hover:text-teal-400"
              href={`/auth/sign-up?redirect=${redirectPath}`}
            >
              Sign up
            </Link>
          </p>
        </div>
        <div className="mt-10 w-full">
          <div className="gap-2 sm:flex sm:flex-row sm:items-center">
            <Button
              variant="secondary"
              type="button"
              className="mt-2 w-full sm:mt-0 shadow-none inline-flex items-center gap-2"
              onClick={onLoginWithGoogle}
            >
              <RiGoogleFill className="size-4" aria-hidden="true" />
              Login with Google
            </Button>
          </div>
          <Divider className="my-6">or</Divider>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col gap-y-6"
          >
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="email-form-item" className="font-medium">
                  Email
                </Label>
                <TextInput
                  type="email"
                  autoComplete="email"
                  id="email-form-item"
                  placeholder="emily.ross@acme.ch"
                  {...register("email")}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="password-form-item" className="font-medium">
                  Password
                </Label>
                <TextInput
                  type="password"
                  autoComplete="current-password"
                  id="password-form-item"
                  placeholder="Password"
                  {...register("password")}
                />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>
            <Button
              type="submit"
              className="shadow-none"
              isLoading={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Continue"}
            </Button>
          </form>
        </div>
        <Divider />
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Forgot your password?{" "}
          <a
            className="text-teal-500 hover:text-teal-600 dark:text-teal-500 dark:hover:text-teal-400"
            href="#"
          >
            Reset password
          </a>
        </p>
      </div>
    </>
  );
};

export { SignInForm };

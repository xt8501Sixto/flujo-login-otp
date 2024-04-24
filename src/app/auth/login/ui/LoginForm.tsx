"use client";
import clsx from "clsx";
import { authenticate } from "@/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { IoInformationOutline } from "react-icons/io5";

export const LoginForm = () => {
  const router = useRouter();
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  useEffect(() => {
    if (errorMessage === "Success") {
      router.replace("/auth/otp");
    }
  }, [errorMessage]);

  return (
    <form className="mt-8 space-y-6" action={dispatch}>
      <input type="hidden" name="remember" value="true" />
      <div className="relative">
        <input
          className="w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
          type="text"
          name="email"
          placeholder="Correo electrónico"
        />
      </div>
      <div className="mt-8 content-center">
        <input
          className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
          type="password"
          name="password"
          placeholder="Contraseña"
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="text-sm">
          <a
            href="#"
            className="font-medium text-indigo-500 hover:text-indigo-500"
          >
            Olvidaste tu contraseña?
          </a>
        </div>
      </div>

      <div>
        <LoginButton />

        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <IoInformationOutline className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
};
function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={clsx({
        'btn-primary w-full': !pending,
        'btn-disabled w-full': pending
      })}
      disabled={pending}
    >
      Ingresar
    </button>
  );
}

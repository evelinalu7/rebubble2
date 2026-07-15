import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Create Account",
};

export default function RegisterPage() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-content max-w-md">
        <SectionLabel align="center">Account</SectionLabel>
        <h1 className="mt-4 text-center font-serif text-title-mobile font-medium text-dark-blue md:text-[46px]">
          Create an Account
        </h1>

        <form className="mt-10 flex flex-col gap-5 rounded-xl2 border border-border bg-white p-8 shadow-card">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-[14px] font-medium text-dark-blue">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-[15px] outline-none focus:border-blue"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-[14px] font-medium text-dark-blue">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-[15px] outline-none focus:border-blue"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1.5 block text-[14px] font-medium text-dark-blue">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-[15px] outline-none focus:border-blue"
            />
          </div>
          <button
            type="submit"
            className="mt-2 rounded-full bg-blue px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-dark-blue"
          >
            Create Account
          </button>
          <p className="text-center text-[14px] text-body">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-blue hover:text-dark-blue">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

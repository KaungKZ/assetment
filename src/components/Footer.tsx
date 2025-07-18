"use client";

import React from "react";
import { Formik } from "formik";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import MaxWidthWrapper from "./MaxWidthWrapper";
import * as Yup from "yup";
import { SendHorizonal } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import Amex from "../../public/Amex.png";
import Mastercard from "../../public/Mastercard.png";
import ApplePay from "../../public/ApplePay.png";
import Visa from "../../public/Visa.png";
import Teddy from "../../public/teddy.png";
import Facebook from "../../public/facebook.svg";
import Instagram from "../../public/instagram.svg";

type FormValues = {
  email: string;
};

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("This field is required"),
});

export default function Footer() {
  return (
    <footer className="bg-[#f8f8f8] mt-20">
      <MaxWidthWrapper cls="pt-16">
        <div className="grid grid-cols-4 gap-0 border-b border-border pb-20 max-lgmx:grid-cols-2 max-lgmx:gap-8">
          <div className="flex flex-col">
            <h4 className="font-semibold text-secondary tracking-wide font-sans uppercase">
              Contact us
            </h4>
            <div className="flex flex-col gap-2 mt-4">
              <Link href="/" className="text-sm text-secondary tracking-wide">
                Book Apppointment
              </Link>
              <Link href="/" className="text-sm text-secondary tracking-wide">
                Visit our Stores
              </Link>
              <Link href="/" className="text-sm text-secondary tracking-wide">
                Email Us
              </Link>
              <Link href="/" className="text-sm text-secondary tracking-wide">
                Contact Us Schedule a consultation
              </Link>
              <Link href="/" className="text-sm text-secondary tracking-wide">
                Schedule a consultation
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="font-semibold text-secondary tracking-wide font-sans uppercase">
              The Art of Gifting
            </h4>
            <div className="flex flex-col gap-2 mt-4">
              <Link href="/" className="text-sm text-secondary tracking-wide">
                Luxury Gift Wrapping
              </Link>
              <Link href="/" className="text-sm text-secondary tracking-wide">
                Gift Cards
              </Link>
              <Link href="/" className="text-sm text-secondary tracking-wide">
                Private & White-Glove Delivery
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="font-semibold text-secondary tracking-wide font-sans uppercase">
              Bespoke & Services
            </h4>
            <div className="flex flex-col gap-2 mt-4">
              <Link href="/" className="text-sm text-secondary tracking-wide">
                Custom Jewelry Design
              </Link>
              <Link href="/" className="text-sm text-secondary tracking-wide">
                Private Jewelry Consultations
              </Link>

              <Link href="/" className="text-sm text-secondary tracking-wide">
                Jewelry Restoration & Care
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <Formik<FormValues>
              initialValues={{ email: "" }}
              validationSchema={SignupSchema}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                console.log(
                  `${values.email} has subscribed to newsletter. Sent an email to (process.env.EMAIL_ADDRESS)`
                );
                setSubmitting(false);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="flex items-end w-full">
                    <div className="flex-1">
                      <label
                        htmlFor="email"
                        className="capitalize text-secondary font-semibold font-sans mb-2.5 block"
                      >
                        Let&apos;s keep in touch
                      </label>
                      <Input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="rounded-none h-[46px] min-w-full"
                        value={values.email}
                        placeholder="Email Address"
                      />
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      type="submit"
                      className="w-[46px] h-[46px] bg-[#0D4269] rounded-none hover:bg-[#092a42] cursor-pointer transition-all"
                      disabled={isSubmitting}
                    >
                      <SendHorizonal className="text-white" />
                    </Button>
                  </div>
                  <div className="h-5">
                    <span className="text-red-600 text-sm opacity-75">
                      {errors.email && touched.email && errors.email}
                    </span>
                  </div>
                </form>
              )}
            </Formik>
            <div className="w-full">
              <h4 className="text-secondary font-semibold font-sans">
                Payment Methods
              </h4>
              <div className="flex gap-3 w-full mt-4">
                <Link href="/">
                  <Image src={Amex} alt="Amex" height={35} />
                </Link>
                <Link href="/">
                  <Image src={Mastercard} alt="Amex" height={35} />
                </Link>
                <Link href="/">
                  <Image src={ApplePay} alt="Amex" height={35} />
                </Link>
                <Link href="/">
                  <Image src={Visa} alt="Amex" height={35} />
                </Link>
                <Link href="/">
                  <Image src={Teddy} alt="Amex" height={35} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-between pb-8">
          <span className="text-secondary text-sm">
            &copy; 2025, All Rights Reserved - MyJewel
          </span>
          <div className="flex gap-8 items-center">
            <Link href="/" className="text-[12px] text-secondary">
              Terms & Conditions
            </Link>
            <Link href="/" className="text-[12px] text-secondary">
              Privacy Policy
            </Link>
            <Link href="/" className="text-[12px] text-secondary">
              Sitemap
            </Link>
            <Link href="/">
              <Image src={Facebook} alt="facebook" width={28}></Image>
            </Link>
            <Link href="/">
              <Image src={Instagram} alt="instagram" width={28}></Image>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}

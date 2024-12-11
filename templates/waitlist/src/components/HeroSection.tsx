"use client";
import Image from "next/image";
import { block } from "saitamadotfun/bunshi";

import { avatars } from "@/config/avatar";
import { object, string, InferType } from "yup";
import { Formik, FormikHelpers, Form, Field, ErrorMessage } from "formik";
import {
  addDoc,
  collection,
  getCountFromServer,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

export const HeroSection = block(
  function HeroSection({
    badge,
    headline,
    subtitle,
    callToAction,
    socialProof,
  }) {
    const [count, setCount] = useState(0);
    const validationSchema = object({
      email: string().email().required(),
    });

    const firestore = useMemo(() => getFirestore(), []);
    const waitlist = useMemo(
      () => collection(firestore, "waitlist"),
      [firestore]
    );

    useEffect(() => {
      getCountFromServer(waitlist).then((collection) =>
        setCount(collection.data().count)
      );
    }, [firestore, waitlist]);

    const onSubmit = async (
      value: InferType<typeof validationSchema>,
      { resetForm }: FormikHelpers<InferType<typeof validationSchema>>
    ) => {
      const q = query(waitlist, where("email", "==", value.email));
      const exist = await getDocs(q);
      if (exist.empty) {
        return addDoc(waitlist, value)
          .then(() => {
            resetForm();
            toast.success("Hurray, we just added you to our waitlist.");
          })
          .catch(() => toast.error("Oops, an unexpected error occur."));
      }

      return toast.error("Huh, you already on our waitlist.");
    };

    return (
      <section className="flex flex-col items-center justify-center space-y-8 py-16">
        <div className="flex items-center justify-center space-x-2 bg-primary-alpha text-primary px-2 text-sm px-4 py-1 border border-primary rounded-full">
          <div className="i-mdi:lightning-bolt-circle text-xl" />
          <span>{badge}</span>
        </div>
        <div className="flex flex-col space-y-4 md:space-y-8">
          <div className="flex flex-col space-y-2 text-center md:space-y-4">
            <div>
              {headline.split("/").map((headline, index) => {
                if (index % 2 === 1)
                  return (
                    <h1
                      key={index}
                      className="text-4xl font-black md:text-6xl"
                    >
                      {headline}
                    </h1>
                  );
                return (
                  <p
                    key={index}
                    className="text-2xl font-medium md:text-4xl"
                  >
                    {headline}
                  </p>
                );
              })}
            </div>
            <p
              className="text-black/75 md:text-base"
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
          </div>
          <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="self-center flex phone:flex-col phone:space-y-4 tablet:items-center tablet:space-x-2">
                <div className="flex flex-col m-auto">
                  <Field
                    type="email"
                    name="email"
                    placeholder="example.fun"
                    className="p-2 min-w-xs border border-black placeholder-black/75 rounded focus:ring-4 focus:ring-primary-alpha-25"
                  />
                  <ErrorMessage
                    component="small"
                    name="email"
                    className="text-xs text-red-500 first-letter:uppercase md:text-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center space-x-2 bg-primary text-inverse px-6 rounded-md hover:bg-primary-alpha-75 active:bg-primary phone:self-center tablet:self-start"
                >
                  <span className="py-2">{callToAction}</span>
                  {isSubmitting && (
                    <div className="size-6 border-3 border-inverse border-t-transparent rounded-full animate-spin" />
                  )}
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div>
          <div className="flex justify-center items-center">
            {avatars.map((avatar, index) => (
              <Image
                key={index}
                src={avatar.icon}
                width={48}
                height={48}
                alt={avatar.name}
                className="rounded-full border-4 border-white first:ml-0 -ml-4"
              />
            ))}
          </div>
          <p>{socialProof.replaceAll("{COUNT}", String(count))}</p>
        </div>
      </section>
    );
  },
  {
    title: "Hero Section",
    argsType: {
      badge: {
        control: "input",
      },
      headline: {
        control: "input",
      },
      subtitle: {
        control: "input",
        inputType: "textarea",
      },
      callToAction: {
        title: "Call to Action",
        control: "input",
      },
      socialProof: {
        title: "Social Proof",
        control: "input",
        inputType: "textarea",
      },
    },
    args: {
      badge: "Sign up now and get 50% off at launch",
      headline:
        "Revolutionizing Customer / Support as a service / with Blockchain and AI",
      subtitle:
        "Businesses can leverage SupportFi to offer their customers <br class='lt-md:hidden' /> support through phone calls, SMS, and a customizable web SDK.",
      callToAction: "Join The Waitlist",
      socialProof: "Join {COUNT} others waiting for the best app ever!",
    },
  }
);

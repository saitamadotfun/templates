"use client";

import { getFirestore, collection, addDoc } from "firebase/firestore";

import { useMemo } from "react";
import { object, string } from "yup";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import { MdClose } from "react-icons/md";
import { block } from "saitamadotfun/bunshi";
import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";

import { useFirebase } from "@/providers/FirebaseProvider";
import { useGlobalState } from "@/providers/GlobalStateProvider";

import Input from "../Input";

export default block(
  function ContactDialog({ title }) {
    const { app } = useFirebase();
    const { showContactDialog, setShowContactDialog } = useGlobalState();

    const firestore = useMemo(() => getFirestore(app), [app]);

    return (
      <Dialog
        open={showContactDialog}
        onClose={() => setShowContactDialog(false)}
        className="relative z-50"
      >
        <DialogBackdrop className="fixed inset-0 bg-white/25 backdrop-blur-sm" />
        <div className="fixed inset-0 flex flex-col">
          <DialogPanel className="m-auto flex flex-col w-sm bg-black/50 backdrop-blur-3xl text-white p-4 rounded-xl">
            <div className="flex items-center py-2">
              <h1
                className="flex-1 text-xl font-medium"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <button
                className="size-8 flex items-center justify-center bg-dark rounded-full"
                onClick={() => setShowContactDialog(false)}
              >
                <MdClose />
              </button>
            </div>
            <Formik
              initialValues={{
                fullName: "",
                email: "",
                phone: "",
                projectDescription: "",
              }}
              validationSchema={object({
                fullName: string().required(),
                email: string().email().required(),
                phone: string().required(),
                projectDescription: string().required(),
              })}
              onSubmit={(values) => {
                return addDoc(collection(firestore, "contacts"), {
                  ...values,
                })
                  .then(() =>
                    toast.success(
                      "Form sumitted successfully. Our team will be in touch with you."
                    )
                  )
                  .catch(() =>
                    toast.error("Oops, an unexpected error occured, try again!")
                  );
              }}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col space-y-4">
                  <div className="flex flex-col space-y-2">
                    <Input
                      name="fullName"
                      label="Full Name"
                      placeholder="Enter Your Full Name"
                    />
                    <Input
                      name="email"
                      label="Email"
                      placeholder="Enter your Email"
                    />
                    <Input
                      name="phone"
                      label="Phone"
                      placeholder="Phone Number"
                    />
                    <Input
                      name="projectDescription"
                      as="textarea"
                      label="Tell us a bit about your project"
                      placeholder="Describe your project here"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary !p-0 rounded"
                  >
                    {isSubmitting ? (
                      <div className="my-2.5 size-6 border-3 border-black border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <p className="p-3">Submit</p>
                    )}
                  </button>
                </Form>
              )}
            </Formik>
          </DialogPanel>
        </div>
      </Dialog>
    );
  },
  {
    title: "ContactDialog",
    argsType: {
      title: { control: "input" },
      email: { control: "input" },
    },
    args: {
      title: "Your vision. Our Expertise <br /> Let's Start today!",
      email: "contact@nexusbuilder.xyz",
    },
  }
);

"use client";

import { object, string } from "yup";
import { MdClose } from "react-icons/md";
import { Formik, Form } from "formik";
import { block } from "saitamadotfun/bunshi";
import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";

import { useGlobalState } from "@/providers/GlobalStateProvider";

import Input from "../Input";

export default block(
  function ContactDialog({ title }) {
    const { showContactDialog, setShowContactDialog } = useGlobalState();

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
              onSubmit={(values) => {}}
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
                    className="btn btn-primary !py-3 rounded"
                  >
                    Submit
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

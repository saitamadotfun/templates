import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { block } from "saitamadotfun/bunshi";

export default block(
  function ContactSection() {
    return (
      <section
        id="contacts"
        className="relative flex px-4 md:px-8"
      >
        <div className="flex-1 flex flex-col space-y-2">
          <h1 className="text-5xl font-extrabold">
            Ready to transform your product?
          </h1>
          <p className="text-xl">
            Let's work together to achieve your digital goals.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <Link
            href=""
            target="_blank"
            className="btn btn-primary space-x-2 rounded-md"
          >
            <span>Contact us</span>
            <MdArrowOutward />
          </Link>
        </div>
      </section>
    );
  },
  { title: "ContactSection", argsType: {}, args: {} }
);

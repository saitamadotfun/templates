import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { block } from "saitamadotfun/bunshi";

export default block(
  function ContactSection({ title, subtitle, action }) {
    return (
      <section
        id="contacts"
        className="relative flex px-4 phone:flex-col phone:space-y-4 tablet:px-8"
      >
        <div className="flex-1 flex flex-col space-y-2">
          <h1 className="text-5xl font-extrabold">{title}</h1>
          <p className="text-lg text-white/75">{subtitle}</p>
        </div>
        <div className="flex-1 flex items-center tablet:justify-end">
          <Link
            href={action.href}
            target="_blank"
            className="btn btn-primary space-x-2 rounded-md"
          >
            <span>{action.name}</span>
          </Link>
        </div>
      </section>
    );
  },
  {
    title: "ContactSection",
    argsType: {
      title: { control: "input" },
      subtitle: { control: "input", inputType: "textarea" },
      action: {
        control: "map",
        keys: {
          name: { control: "input" },
          href: { control: "input" },
        },
      },
    },
    args: {
      title: "Ready to transform your project?",
      subtitle: "Let's work together to achieve your digital goals.",
      action: {
        name: "Contact us",
        href: "https://t.me/nexusportal01",
      },
    },
  }
);

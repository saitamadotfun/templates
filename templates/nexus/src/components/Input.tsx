import { ErrorMessage } from "formik";

type InputProps = {
  name: string;
  label?: string;
  as?: "input" | "textarea";
  placeholder?: string;
};
export default function Input({ as = "input", label, ...props }: InputProps) {
  const As = as;

  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label className="text-white text-base md:text-lg">{label}</label>
      )}
      <As
        {...props}
        className="border border-white/50 rounded-md bg-transparent p-2 !placeholder-white/50"
      />
      <ErrorMessage
        name={props.name}
        component="small"
        className="text-red first-letter:uppercase"
      />
    </div>
  );
}

import clsx from "clsx";
import { useInView } from "react-intersection-observer";

type InViewProps = {
  as?: React.ElementType;
  className?: string;
  animateInClassName?: string;
};

export default function InView({
  as = "div",
  className,
  animateInClassName,
  children,
}: React.PropsWithChildren<InViewProps>) {
  const As = as;
  const [ref, inView] = useInView();

  return (
    <As
      ref={ref}
      className={clsx(className, { [animateInClassName ?? ""]: inView })}
    >
      {children}
    </As>
  );
}

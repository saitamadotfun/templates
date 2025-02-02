type IcLogoProps = {
  width: number;
  heigth: number;
  className?: string;
};
export default function IcLogo(props: IcLogoProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 512 416"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M394.118 167.472V263.852L393.929 263.922L304.917 316.969L255.937 284.7L345.786 231.272V199.963L152.285 77.1555L48.3644 141.76V416L0.0322266 388.918V110.44V109.328L101.712 46.1164L123.266 32.3517L152.182 13.8892L181.097 32.3517L190.102 38.1026L394.118 167.472Z"
        className="fill-primary"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M65.1768 248.529V152.148L65.3663 152.078L154.378 99.0339L203.358 131.303L113.509 184.728V216.038L307.01 338.845L410.931 274.24V0L459.263 27.0846V305.56V306.672L357.583 369.884L336.029 383.649L307.113 402.113L278.198 383.649L269.193 377.898L65.1768 248.529Z"
        className="fill-secondary dark:fill-white"
      />
    </svg>
  );
}

import { variantMatcher } from "@unocss/preset-mini/utils";
import {
  defineConfig,
  presetUno,
  presetIcons,
  type Variant,
  expandVariantGroup,
} from "unocss";

const deviceSelectors = ["phone", "tablet", "laptop", "desktop"] as const;
const deviceVariants = deviceSelectors.map((selector) =>
  variantMatcher(selector, (input) => ({
    prefix: `.${selector} ${input.prefix}`,
  }))
) as unknown as Variant[];

const prefix = ["page", "editor"] as const;
const prefixVariants = prefix.map((selector) =>
  variantMatcher(selector, (input) => ({
    prefix: `.${selector} ${input.prefix}`,
  }))
) as unknown as Variant[];

export default defineConfig({
  content: {
    filesystem: ["**/*.{html,js,ts,jsx,tsx,vue,svelte,astro,json}"],
  },
  layers: {
    default: -1,
    components: -1,
    utilities: 1,
  },
  shortcuts: {
    btn: "flex items-center justify-center",
    "btn-primary":
      "bg-primary text-black px-4 py-2  transition-all hover:scale-90",
    "font-helvetica": "font-[var(--font-helvetica)]",
    "text-gradient-primary":
      "bg-gradient-to-r from-black to-black/10 text-transparent bg-clip-text dark:from-white dark:to-white/10 ",
  },
  presets: [presetUno({ dark: "media" }), presetIcons()],
  theme: {
    colors: {
      primary: {
        DEFAULT: "var(--primary-default)",
        alpha: {
          "10": "var(--primary-alpha10)",
          "25": "var(--primary-alpha10)",
          "50": "var(--primary-alpha50)",
          "75": "var(--primary-alpha75)",
        },
      },
      alpha: {
        DEFAULT: "var(--alpha-default)",
      },
      inverse: {
        DEFAULT: "var(--inverse-default)",
      },
    },
    fonts: [],
  },
  safelist: [
    "i-fa-brands:twitter",
    "i-fa-brands:instagram",
    "i-fa-brands:tiktok",
    "i-fa-brands:facebook",
    "i-fa-brands:linkedin",
    "md:hidden",
    "lt-md:hidden",
    "!w-screen",
    "!lt-xl:w-7xl",
    "!w-lg",
  ],
  variants: [...deviceVariants, ...prefixVariants],
  transformers: [
    {
      name: "@saitama/transform-device-variant",
      enforce: "pre",
      async transform(code, _, { uno, invalidate }) {
        const matches = [
          ...code.original.matchAll(
            /(phone|tablet|laptop|desktop):([^\s("|')]+)/g
          ),
        ];
        const size = uno.config.safelist.length;
        if (!matches.length) return;

        for (const match of matches) {
          const [original, deviceVariant] = match;

          let body =
            match.length === 4 && match.groups
              ? expandVariantGroup(match[3].trim())
              : expandVariantGroup(match[2].trim());

          const start = match.index!;
          const include = [];

          let className;

          switch (deviceVariant) {
            case "phone":
              className = "page:lt-md:" + body;
              include.push(className);
              break;
            case "tablet":
              className = "page:md:" + body;
              include.push(className);
              break;
            case "laptop":
              className = "page:xl:" + body;
              include.push(className);
            case "desktop":
              className = "page:2xl:" + body;
              include.push(className);
              break;
          }

          include.push("editor:" + original);

          let clean = new Set(uno.config.safelist);

          include.forEach((include) => clean.add(include));
          uno.config.safelist = Array.from(clean.values());
          code.overwrite(start, start + original.length, include.join(" "));

          if (uno.config.safelist.length > size) invalidate();
        }
      },
    },
  ],
});

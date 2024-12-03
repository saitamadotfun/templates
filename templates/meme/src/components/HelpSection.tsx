"use client";

import { block } from "saitamadotfun/bunshi";

export const HelpSection = block(
  function HelpSection({ helps }) {
    return (
      <section className="flex flex-col px-2 tablet:px-8">
        {helps.map((help, index) => (
          <div
            key={index}
            className="flex space-x-4"
          >
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center w-8 h-8 bg-primary text-inverse rounded-full">
                {index + 1}
              </div>
              {index < helps.length - 1 && (
                <div className="w-0.5 h-16 bg-primary" />
              )}
            </div>
            <div>
              <h1 className="text-lg font-medium tablet:text-xl ">
                {help.title}
              </h1>
              <p className="text-sm text-white/80">{help.description}</p>
            </div>
          </div>
        ))}
      </section>
    );
  },
  {
    title: "Help Section",
    argsType: {
      helps: {
        control: "list",
        items: [
          {
            title: (props: { title: string; description: string }) => (
              <div className="flex flex-col overflow-x-hidden truncate">
                <h1 className="text-base font-medium">{props.title}</h1>
                <p className="text-sm text-black/75 line-clamp-2 truncate">
                  {props.description}
                </p>
              </div>
            ),
            control: "map",
            keys: {
              title: {
                control: "input",
              },
              description: {
                control: "input",
                inputType: "textarea",
              },
            },
          },
        ],
      },
    },
    args: {
      helps: [
        {
          title: "Connect on telegram",
          description:
            "Start by chatting with our MemeSol bot on Telegram. It's fast, free, and friendly.",
        },
        {
          title: "Choose or upload your image",
          description:
            "Select from our library of templates or upload your own image.",
        },
        {
          title: "Add Text and Customize",
          description:
            "Make it your own by adding text, choosing fonts, and applying effects.",
        },
        {
          title: "Share or download",
          description:
            "Get your meme instantly and ready to share with the world.",
        },
      ],
    },
  }
);

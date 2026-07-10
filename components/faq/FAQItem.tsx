"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({
  question,
  answer,
}: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`
        group
        overflow-hidden
        rounded-[34px]
        border
        backdrop-blur-[30px]
        transition-all
        duration-500

        ${
          open
            ? "border-blue-200/60 bg-white/55 shadow-[0_25px_100px_rgba(37,99,235,0.12)] ring-1 ring-white/40"
            : "border-white/40 bg-white/35 shadow-[0_15px_60px_rgba(15,23,42,0.05)] hover:border-blue-200/50 hover:bg-white/45 hover:shadow-[0_20px_80px_rgba(37,99,235,0.08)] ring-1 ring-white/25"
        }
      `}
    >
      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          w-full
          items-center
          justify-between
          px-9
          py-8
          text-left
        "
      >
        <h3
          className="
            pr-8
            text-[22px]
            font-bold
            leading-snug
            tracking-tight
            text-slate-900
          "
        >
          {question}
        </h3>

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-white/40
            bg-white/40
            backdrop-blur-xl
            text-blue-600
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:border-blue-200
          "
        >
          {open ? (
            <Minus size={22} strokeWidth={2.5} />
          ) : (
            <Plus size={22} strokeWidth={2.5} />
          )}
        </div>
      </button>

      <div
        className={`
          grid
          transition-all
          duration-500
          ease-in-out
          ${
            open
              ? "grid-rows-[1fr]"
              : "grid-rows-[0fr]"
          }
        `}
      >
        <div className="overflow-hidden">
          <div
            className="
              px-9
              pb-9
              text-[18px]
              leading-9
              text-slate-600
            "
          >
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}
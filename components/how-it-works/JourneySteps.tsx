"use client";

import { useState } from "react";

import JourneyCard from "./JourneyCard";
import JourneyPhone from "./JourneyPhone";
import JourneyLines from "./JourneyLines";

import { journeySteps } from "./steps";

export default function JourneySteps() {
  const [activeStep, setActiveStep] = useState(0);

  const leftSteps = journeySteps.filter((step) => step.side === "left");
  const rightSteps = journeySteps.filter((step) => step.side === "right");

  const current = journeySteps[activeStep];

  return (
    <div className="relative mt-24">

      {/* Connector Lines */}

      <JourneyLines />

      <div
        className="
          grid
          items-center
          gap-10
          lg:grid-cols-[1fr_360px_1fr]
        "
      >

        {/* LEFT */}

        <div className="space-y-8">

          {leftSteps.map((step) => (

            <div
              key={step.number}
              onMouseEnter={() =>
                setActiveStep(journeySteps.indexOf(step))
              }
              className="cursor-pointer"
            >
              <JourneyCard
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            </div>

          ))}

        </div>

        {/* PHONE */}

        <div className="sticky top-28">

          <JourneyPhone
            screenTitle={current.screenTitle}
            title={current.phoneTitle}
            description={current.phoneDescription}
            progress={current.progress}
          />

        </div>

        {/* RIGHT */}

        <div className="space-y-8">

          {rightSteps.map((step) => (

            <div
              key={step.number}
              onMouseEnter={() =>
                setActiveStep(journeySteps.indexOf(step))
              }
              className="cursor-pointer"
            >
              <JourneyCard
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            </div>

          ))}

        </div>

      </div>

    </div>
  );
}
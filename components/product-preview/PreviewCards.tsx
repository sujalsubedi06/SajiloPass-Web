import {
  Bus,
  CreditCard,
  MapPinned,
  QrCode,
} from "lucide-react";

type PreviewCardsProps = {
  side: "left" | "right";
};

export default function PreviewCards({
  side,
}: PreviewCardsProps) {
  const leftCards = [
    {
      icon: QrCode,
      title: "QR Ticket",
      description: "Scan & board instantly",
      color: "bg-blue-100 text-blue-600",
      animation: "animate-card-1",
    },
    {
      icon: Bus,
      title: "Digital Bus Pass",
      description: "Monthly & student passes",
      color: "bg-emerald-100 text-emerald-600",
      animation: "animate-card-3",
    },
  ];

  const rightCards = [
    {
      icon: CreditCard,
      title: "Digital Payments",
      description: "Khalti • eSewa • Cards",
      color: "bg-purple-100 text-purple-600",
      animation: "animate-card-2",
    },
    {
      icon: MapPinned,
      title: "Live Tracking",
      description: "Inside Kathmandu Valley",
      color: "bg-amber-100 text-amber-600",
      animation: "animate-card-4",
    },
  ];

  const cards = side === "left"
    ? leftCards
    : rightCards;

  return (
    <div className="flex flex-col gap-8">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className={`
              glass
              premium-card
              ${card.animation}
              group
              rounded-[28px]
              p-6
              transition-all
              duration-500
              hover:scale-[1.03]
              hover:shadow-[0_30px_70px_rgba(37,99,235,.18)]
            `}
          >
            <div className="flex items-start gap-4">
              <div
                className={`
                  ${card.color}
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  transition-transform
                  duration-500
                  group-hover:rotate-6
                  group-hover:scale-110
                `}
              >
                <Icon size={26} />
              </div>

              <div className="flex-1">
                <h3
                  className="
                    text-lg
                    font-bold
                    text-slate-900
                  "
                >
                  {card.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-slate-600
                  "
                >
                  {card.description}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="my-5 h-px bg-slate-200/70" />

            {/* Bottom */}
            <div className="flex items-center justify-between">
              <span
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-wider
                  text-slate-500
                "
              >
                Available Soon
              </span>

              <div
                className="
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-green-500
                  shadow-[0_0_14px_rgba(34,197,94,.8)]
                "
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
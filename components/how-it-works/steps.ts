import {
  QrCode,
  MapPinned,
  Bus,
  LogOut,
  Receipt,
  CheckCircle2,
} from "lucide-react";

export interface JourneyStep {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;

  side: "left" | "right";

  phoneTitle: string;
  phoneDescription: string;

  screenTitle: string;
  progress: number;
}

export const journeySteps: JourneyStep[] = [
  {
    number: "01",
    title: "Scan & Board",
    description:
      "Scan the QR code inside the bus to instantly start your journey without waiting for a conductor.",

    icon: QrCode,
    side: "left",

    phoneTitle: "Scan QR",
    phoneDescription:
      "Scan the QR code inside the bus to begin your trip.",

    screenTitle: "Scan QR",
    progress: 1,
  },

  {
    number: "02",
    title: "Journey Detection",
    description:
      "SajiloPass securely compares your live location with the bus GPS to detect your journey automatically.",

    icon: MapPinned,
    side: "left",

    phoneTitle: "Journey Started",
    phoneDescription:
      "Your ride is being tracked securely in the background.",

    screenTitle: "Journey Started",
    progress: 2,
  },

  {
    number: "03",
    title: "Enjoy the Ride",
    description:
      "Relax and travel normally. No tickets, no cash, and no manual fare collection required.",

    icon: Bus,
    side: "left",

    phoneTitle: "Travelling",
    phoneDescription:
      "Everything happens automatically while you enjoy your ride.",

    screenTitle: "Travelling",
    progress: 3,
  },

  {
    number: "04",
    title: "Leave the Bus",
    description:
      "Once your location no longer matches the bus route, SajiloPass automatically detects that your journey has ended.",

    icon: LogOut,
    side: "right",

    phoneTitle: "Journey Complete",
    phoneDescription:
      "We've detected that you've safely left the bus.",

    screenTitle: "Journey Complete",
    progress: 4,
  },

  {
    number: "05",
    title: "Confirm Fare",
    description:
      "Review the automatically calculated fare based on the exact distance travelled before completing payment.",

    icon: Receipt,
    side: "right",

    phoneTitle: "Fare Summary",
    phoneDescription:
      "Confirm the calculated fare securely using your wallet.",

    screenTitle: "Fare Summary",
    progress: 5,
  },

  {
    number: "06",
    title: "Payment Complete",
    description:
      "Your fare is deducted instantly and a receipt is delivered via SMS and email for every completed journey.",

    icon: CheckCircle2,
    side: "right",

    phoneTitle: "Payment Successful",
    phoneDescription:
      "Payment completed successfully. Receipt sent instantly.",

    screenTitle: "Success",
    progress: 6,
  },
];
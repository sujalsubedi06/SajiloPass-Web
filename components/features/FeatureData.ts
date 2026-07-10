import {
  Bus,
  CreditCard,
  MapPinned,
  QrCode,
  Route,
  ShieldCheck,
} from "lucide-react";

export const FEATURES = [
  {
    icon: QrCode,
    title: "QR Ticketing",
    description:
      "Board any bus instantly with secure QR tickets. No paper tickets required.",
    accent: "blue",
  },
  {
    icon: MapPinned,
    title: "Live Bus Tracking",
    description:
      "Track buses in real-time with accurate arrival estimates across Kathmandu Valley.",
    accent: "emerald",
  },
  {
    icon: CreditCard,
    title: "Digital Payments",
    description:
      "Pay securely using Khalti, eSewa, debit cards, or future payment methods.",
    accent: "purple",
  },
  {
    icon: Bus,
    title: "Digital Bus Pass",
    description:
      "Monthly and student passes are stored digitally and ready whenever you travel.",
    accent: "amber",
  },
  {
    icon: Route,
    title: "Smart Route Planning",
    description:
      "Find the quickest routes with fewer transfers and estimated travel times.",
    accent: "cyan",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    description:
      "Your tickets, payments, and personal information are protected with modern security.",
    accent: "rose",
  },
];
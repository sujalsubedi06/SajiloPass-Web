import {
  Wallet,
  Bus,
  BarChart3,
  Users,
  ShieldCheck,
  FileText,
} from "lucide-react";

export interface OperatorFeature {
  title: string;
  description: string;
  icon: React.ElementType;
}

export const operatorFeatures: OperatorFeature[] = [
  {
    title: "Automatic Fare Collection",
    description:
      "Eliminate cash handling and collect fares securely through YatraPass.",
    icon: Wallet,
  },
  {
    title: "Live Fleet Tracking",
    description:
      "Monitor every active bus in real time with GPS-powered journey tracking.",
    icon: Bus,
  },
  {
    title: "Revenue Analytics",
    description:
      "Access daily earnings, trip reports, and route performance from one dashboard.",
    icon: BarChart3,
  },
  {
    title: "Passenger Insights",
    description:
      "Understand passenger trends and peak travel hours with detailed analytics.",
    icon: Users,
  },
  {
    title: "Fraud Prevention",
    description:
      "Reduce fare leakage with automated journey detection and secure payments.",
    icon: ShieldCheck,
  },
  {
    title: "Digital Reports",
    description:
      "Generate digital receipts and operational reports instantly without paperwork.",
    icon: FileText,
  },
];
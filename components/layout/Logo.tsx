import { px } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  size?: number;
  showText?: boolean;
}

export default function Logo({
  size = 80,
  showText = true,
}: LogoProps) {
  return (
    <Link
      href="#home"
      className="flex items-center gap-2 transition-transform duration-300 hover:scale-[1.02]"
    >
      <Image
        src="/logos/logo_primary.png"
        alt="SajiloPass Logo"
        width={size}
        height={size}
        priority
        className="h-auto w-auto"
      />

      {showText && (
        <div>
          <h1 className="text-xl font-bold text-slate-900">
            SajiloPass
          </h1>

          <p className="text-sm text-slate-500">
            Smart Mobility
          </p>
        </div>
      )}
    </Link>
  );
}
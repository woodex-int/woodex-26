"use client";

import { useEffect, useState } from "react";
import { waLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./Icons";

export default function FloatingWhatsApp() {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const onScroll = () => setCollapsed(window.scrollY > 280);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Start a WhatsApp conversation with Woodex Interior"
      className={cn(
        "fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25d366] text-[#062b16] shadow-lg shadow-black/20 transition-all duration-300 hover:bg-[#1cb757]",
        collapsed ? "h-14 w-14 justify-center" : "px-4 py-3.5",
      )}
    >
      <WhatsAppIcon className="h-6 w-6 shrink-0" />
      <span
        className={cn(
          "whitespace-nowrap text-sm font-semibold transition-all duration-300",
          collapsed ? "hidden" : "inline",
        )}
      >
        WhatsApp
      </span>
    </a>
  );
}

"use client";

import { usePathname } from "next/navigation";
import Menu from "./Menu";

export default function ClientMenu() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <Menu />;
}

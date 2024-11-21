"use client";

import { ReactNode } from "react";

export default function LangSwitcherSelect({
  children,
}: {
  children: ReactNode;
}) {
  return <select className="lang-switcher">{children}</select>;
}

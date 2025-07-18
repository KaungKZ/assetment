import React from "react";

import { cn } from "../lib/utils";

interface MaxWidthWrapperProps {
  children: React.ReactNode;
  cls?: string;
}

export default function MaxWidthWrapper({
  children,
  cls = "",
}: MaxWidthWrapperProps) {
  return (
    <div className={cn("max-w-[1360px] mx-auto max-[1440px]:px-10", cls)}>
      {children}
    </div>
  );
}

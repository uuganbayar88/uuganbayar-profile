"use client";

import { useEffect } from "react";

// Keeps <html lang> correct per route (the root layout renders a static default).
export default function SetLang({ code }) {
  useEffect(() => {
    document.documentElement.lang = code;
  }, [code]);
  return null;
}

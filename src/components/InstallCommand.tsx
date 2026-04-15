"use client";

import { useState } from "react";

export function InstallCommand() {
  const [copied, setCopied] = useState(false);
  const command = "npx skills add celo-org/skills";

  function handleCopy() {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex items-center gap-3 rounded-full border border-hero-text/20 bg-hero-text/10 px-5 py-3 font-mono text-sm max-w-xl backdrop-blur-sm">
      <code className="text-hero-text/80 flex-1 truncate">{command}</code>
      <button
        onClick={handleCopy}
        className="text-hero-text/50 hover:text-hero-text transition-colors shrink-0 cursor-pointer"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

"use client";

import { useState } from "react";

export function MobileWarning() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="md:hidden rounded-2xl border border-yellow-200/60 bg-yellow-50/90 px-4 py-3 text-sm font-medium text-yellow-900 shadow-inner dark:border-yellow-300/50 dark:bg-yellow-950/60 dark:text-yellow-50">
      <div className="flex items-start gap-3">
        <span>Mobile layout is NOT fully supported yet. Use with caution.</span>
        <button
          type="button"
          aria-label="Dismiss mobile warning"
          className="ml-auto text-yellow-800/80 transition hover:text-yellow-900 dark:text-yellow-100/70 dark:hover:text-yellow-50"
          onClick={() => setVisible(false)}
        >
          ×
        </button>
      </div>
    </div>
  );
}

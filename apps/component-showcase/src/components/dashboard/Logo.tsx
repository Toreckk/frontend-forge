// src/components/dashboard/Logo.tsx
import { useEffect, useState } from "react";

export const Logo = ({ className = "" }: { className?: string }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    setIsDark(document.documentElement.classList.contains("dark"));

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Image - switches based on theme */}
      <img
        key={isDark ? "dark" : "light"}
        src={isDark ? "/logo-dark.jpg" : "/logo.png"}
        alt="Frontend Forge Logo"
        width="44"
        height="44"
        className="shrink-0"
      />

      {/* Text Brand */}
      <div className="hidden md:flex items-center text-xl font-bold tracking-tight">
        <span className="text-slate-700 dark:text-slate-200">Frontend</span>
        &#32;
        <span className="text-blue-600 dark:text-blue-500">Forge</span>
      </div>
    </div>
  );
};

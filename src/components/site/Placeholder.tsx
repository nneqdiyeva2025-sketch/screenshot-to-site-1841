import { cn } from "@/lib/utils";

export function Placeholder({ className, label = "Şəkil tezliklə" }: { className?: string; label?: string }) {
  return (
    <div className={cn("flex items-center justify-center bg-placeholder text-muted-foreground", className)}>
      <div className="flex flex-col items-center gap-2 text-center">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden>
          <path d="M12 3c2 3 3 6 3 9a3 3 0 0 1-6 0c0-3 1-6 3-9Z" />
          <path d="M8 21h8" />
        </svg>
        <span className="font-display text-sm italic tracking-wide">{label}</span>
      </div>
    </div>
  );
}

import { useEffect } from "react";
import type { Photo } from "@/config/site";

type Props = { photos: Photo[]; index: number | null; onClose: () => void; onChange: (i: number) => void };

export function Lightbox({ photos, index, onClose, onChange }: Props) {
  const open = index !== null && photos[index] !== undefined;
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (index === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % photos.length);
      if (e.key === "ArrowLeft") onChange((index - 1 + photos.length) % photos.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, index, photos.length, onClose, onChange]);

  if (!open || index === null) return null;
  const photo = photos[index]!;
  const btn = "absolute flex h-12 w-12 items-center justify-center rounded-full bg-background/90 text-foreground shadow-soft transition hover:bg-background";
  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-overlay p-4 animate-in fade-in duration-300" onClick={onClose}>
      <img src={photo.src} alt={photo.alt} className="max-h-[88vh] max-w-full rounded-xl object-contain shadow-soft animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()} />
      <button aria-label="Bağla" className={`${btn} right-4 top-4`} onClick={onClose}>✕</button>
      {photos.length > 1 && (
        <>
          <button aria-label="Əvvəlki" className={`${btn} left-3 top-1/2 -translate-y-1/2`} onClick={(e) => { e.stopPropagation(); onChange((index - 1 + photos.length) % photos.length); }}>‹</button>
          <button aria-label="Növbəti" className={`${btn} right-3 top-1/2 -translate-y-1/2`} onClick={(e) => { e.stopPropagation(); onChange((index + 1) % photos.length); }}>›</button>
        </>
      )}
    </div>
  );
}

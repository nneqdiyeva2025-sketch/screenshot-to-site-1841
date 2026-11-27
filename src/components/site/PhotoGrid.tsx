import { useState } from "react";
import type { Photo } from "@/config/site";
import { Lightbox } from "./Lightbox";
import { Placeholder } from "./Placeholder";

export function PhotoGrid({ photos, emptyCount = 6 }: { photos: Photo[]; emptyCount?: number }) {
  const [active, setActive] = useState<number | null>(null);
  if (photos.length === 0) {
    return (
      <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
        {Array.from({ length: emptyCount }, (_, i) => (
          <Placeholder key={i} className="aspect-[4/5] rounded-2xl border border-border" />
        ))}
      </div>
    );
  }
  return (
    <>
      <div className="columns-2 gap-3 sm:gap-5 md:columns-3">
        {photos.map((p, i) => (
          <button key={p.src + i} onClick={() => setActive(i)} className="group mb-3 block w-full overflow-hidden rounded-2xl bg-placeholder shadow-soft sm:mb-5">
            <img src={p.src} alt={p.alt} loading="lazy" decoding="async" className="w-full transition duration-700 group-hover:scale-[1.03]" />
          </button>
        ))}
      </div>
      <Lightbox photos={photos} index={active} onClose={() => setActive(null)} onChange={setActive} />
    </>
  );
}

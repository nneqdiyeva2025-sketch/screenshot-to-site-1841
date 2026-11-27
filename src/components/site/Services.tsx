import { useRef, useState } from "react";
import { services } from "@/config/site";
import { PhotoGrid } from "./PhotoGrid";
import { Placeholder } from "./Placeholder";

export function Services() {
  const [openId, setOpenId] = useState<string | null>(null);
  const top = useRef<HTMLDivElement>(null);
  const current = services.find((s) => s.id === openId);
  const go = (id: string | null) => {
    setOpenId(id);
    top.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={top} className="scroll-mt-24">
      {current ? (
        <div key={current.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <button onClick={() => go(null)} className="mb-8 inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-card px-5 text-sm tracking-wide text-foreground transition hover:bg-secondary">
            ← Xidmətlərə qayıt
          </button>
          <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3 border-b border-border pb-5">
            <h3 className="font-display text-3xl text-foreground sm:text-4xl">{current.name}</h3>
            <span className="font-display text-2xl text-champagne">{current.price} AZN</span>
          </div>
          <PhotoGrid photos={current.photos} />
        </div>
      ) : (
        <div className="animate-in fade-in duration-500">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {services.map((s) => {
              const thumb = s.photos[0];
              return (
                <button key={s.id} onClick={() => go(s.id)} className="group grid grid-cols-[88px_minmax(0,1fr)] items-center gap-4 rounded-2xl border border-border bg-card p-3 text-left shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift sm:block sm:p-0 sm:overflow-hidden">
                  <div className="aspect-square overflow-hidden rounded-xl sm:aspect-[4/3] sm:rounded-none">
                    {thumb ? (
                      <img src={thumb.src} alt={thumb.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    ) : (
                      <Placeholder className="h-full w-full" label="" />
                    )}
                  </div>
                  <div className="min-w-0 sm:p-6">
                    <h3 className="font-display text-xl leading-snug text-foreground sm:text-2xl">{s.name}</h3>
                    <div className="mt-2 flex items-center justify-between gap-2">
                      <span className="font-display text-2xl text-champagne">{s.price} AZN</span>
                      <span className="shrink-0 text-xs uppercase tracking-[0.18em] text-muted-foreground transition group-hover:text-foreground">İşlərə bax →</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
          <p className="mt-8 text-center font-display text-lg italic text-muted-foreground">Dizayn qiymətlərə daxil deyil.</p>
        </div>
      )}
    </div>
  );
}

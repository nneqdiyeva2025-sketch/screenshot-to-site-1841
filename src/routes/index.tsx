import { createFileRoute } from "@tanstack/react-router";
import { site, allPortfolioPhotos } from "@/config/site";
import { PhotoGrid } from "@/components/site/PhotoGrid";
import { Services } from "@/components/site/Services";
import { Placeholder } from "@/components/site/Placeholder";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Master Nur — Professional Nail Artist | Sumqayıt" },
      { name: "description", content: "Sumqayıtda zərif və estetik dırnaq dizaynları. 9 illik təcrübə. Xidmətlər, qiymətlər və əlaqə." },
      { property: "og:title", content: "Master Nur — Professional Nail Artist" },
      { property: "og:description", content: "Sumqayıtda zərif və estetik dırnaq dizaynları. 9 illik təcrübə." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10 text-center sm:mb-14">
      <p className="text-xs uppercase tracking-[0.35em] text-champagne">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">{title}</h2>
      <div className="mx-auto mt-5 h-px w-16 bg-champagne/60" />
    </div>
  );
}

function Index() {
  const nav = [
    ["portfolio", "İşlərim"],
    ["xidmetler", "Qiymətlər"],
    ["elaqe", "Əlaqə"],
  ] as const;
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-display text-lg tracking-[0.25em] text-foreground">MASTER NUR</button>
          <nav className="flex gap-1 sm:gap-4">
            {nav.map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="min-h-11 px-2 text-sm text-muted-foreground transition hover:text-foreground">{label}</button>
            ))}
          </nav>
        </div>
      </header>

      <section className="bg-hero">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-24">
          <div className="text-center md:text-left animate-in fade-in slide-in-from-bottom-6 duration-700">
            <p className="text-xs uppercase tracking-[0.35em] text-champagne">{site.experience}</p>
            <h1 className="mt-4 font-display text-6xl leading-none tracking-wide text-foreground sm:text-7xl lg:text-8xl">MASTER<br />NUR</h1>
            <p className="mt-4 font-display text-2xl italic text-muted-foreground">{site.title}</p>
            <p className="mx-auto mt-6 max-w-md leading-relaxed text-foreground/80 md:mx-0">{site.intro}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
              <button onClick={() => scrollTo("portfolio")} className="min-h-12 rounded-full bg-primary px-8 text-sm tracking-wide text-primary-foreground shadow-lift transition hover:opacity-90">İşlərimə bax</button>
              <button onClick={() => scrollTo("xidmetler")} className="min-h-12 rounded-full border border-foreground/20 bg-card/60 px-8 text-sm tracking-wide text-foreground transition hover:bg-card">Qiymətləri gör</button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rounded-[2.5rem] border border-champagne/40" />
            {site.heroImage ? (
              <img src={site.heroImage.src} alt={site.heroImage.alt} fetchPriority="high" className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-lift" />
            ) : (
              <Placeholder className="relative aspect-[4/5] w-full rounded-[2rem] shadow-lift" />
            )}
          </div>
        </div>
      </section>

      <section id="portfolio" className="scroll-mt-16 mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <SectionTitle eyebrow="Portfolio" title="Əl işlərim" />
        <PhotoGrid photos={allPortfolioPhotos()} />
      </section>

      <section id="xidmetler" className="scroll-mt-16 bg-secondary/60 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle eyebrow="Qiymət siyahısı" title="Xidmətlər və qiymətlər" />
          <Services />
        </div>
      </section>

      <section id="elaqe" className="scroll-mt-16 mx-auto max-w-3xl px-5 py-20 text-center sm:py-28">
        <SectionTitle eyebrow="Əlaqə" title="Əlaqə" />
        <p className="font-display text-2xl text-foreground">Master Nur</p>
        <p className="mt-2 text-muted-foreground">{site.address}</p>
        <a href={site.phoneHref} className="mt-1 inline-block text-lg text-foreground">{site.phoneDisplay}</a>
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-center rounded-full bg-primary px-6 text-sm text-primary-foreground shadow-lift transition hover:opacity-90">WhatsApp ilə əlaqə</a>
          <a href={site.phoneHref} className="flex min-h-12 items-center justify-center rounded-full border border-foreground/20 bg-card px-6 text-sm text-foreground transition hover:bg-secondary">Zəng et</a>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-center rounded-full border border-foreground/20 bg-card px-6 text-sm text-foreground transition hover:bg-secondary">Instagram</a>
        </div>
      </section>

      <footer className="border-t border-border bg-secondary/60 py-12 text-center">
        <p className="font-display text-2xl tracking-[0.25em] text-foreground">MASTER NUR</p>
        <p className="mt-2 font-display italic text-muted-foreground">{site.title} · {site.experience}</p>
        <div className="mt-5 flex justify-center gap-6 text-sm">
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground">Instagram</a>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground">WhatsApp</a>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">© {new Date().getFullYear()} Master Nur. Bütün hüquqlar qorunur.</p>
      </footer>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import heroPlayer from "@/assets/hero-player.jpg";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";
import arena from "@/assets/arena.jpg";
import logo from "@/assets/hit-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = ["Клуб", "Команда", "Матчі", "Новини", "Медіа", "Магазин"];

function Logo({ className = "" }: { className?: string }) {
  return <img src={logo} alt="ФК ХІТ Київ" className={className} />;
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV — Juventus-like: minimal, sparse, monochrome */}
      <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1800px] items-center justify-between px-6 lg:px-12">
          <a href="#" className="flex items-center gap-4">
            <Logo className="h-12 w-auto" />
          </a>
          <nav className="hidden items-center gap-10 lg:flex">
            {NAV.map((n) => (
              <a key={n} href="#" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/90 transition hover:text-hit-yellow">
                {n}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-6">
            <a href="#" className="hidden text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/70 hover:text-foreground md:inline">
              UA / EN
            </a>
            <button className="inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-5 text-[11px] font-bold uppercase tracking-[0.2em] text-background transition hover:bg-hit-yellow">
              Квитки
            </button>
          </div>
        </div>
        <div className="h-px w-full bg-white/10" />
      </header>

      {/* HERO — Juventus-style: full-bleed, massive italic display type, ghost logo */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <img
          src={heroPlayer}
          alt="Гравець ФК ХІТ Київ"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover object-[center_25%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />

        {/* ghost logo watermark */}
        <Logo className="pointer-events-none absolute opacity-[0.06] object-contain left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-auto lg:-right-24 lg:left-auto lg:translate-x-0 lg:h-[110vh] lg:w-auto lg:max-w-none" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1800px] flex-col justify-end px-6 pb-24 pt-32 lg:px-12 lg:pb-32">
          <div className="mb-8 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-hit-yellow">
            <span className="h-1.5 w-1.5 rounded-full bg-hit-yellow" />
            Favbet Екстра-ліга · Сезон 2024/25
          </div>
          <h1 className="max-w-[1400px] font-display text-[22vw] uppercase italic leading-[0.82] tracking-[-0.02em] md:text-[16vw] lg:text-[14vw]">
            Born
            <br />
            in Kyiv.
          </h1>
          <div className="mt-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <p className="max-w-md text-base leading-relaxed text-white/70">
              Футзальний клуб ХІТ — чинний чемпіон України. Швидкість, техніка, характер.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-background transition hover:bg-hit-yellow">
                Дивитись матч
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a href="#" className="inline-flex items-center gap-3 rounded-full border border-white/30 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] transition hover:border-foreground hover:bg-white/5">
                Купити квиток
              </a>
            </div>
          </div>
        </div>

        {/* thin ticker */}
        <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between border-t border-white/10 px-6 py-4 text-[10px] uppercase tracking-[0.3em] text-white/50 lg:px-12">
          <span>↓ Scroll</span>
          <span className="hidden md:inline">Est. 2006 · Kyiv · Ukraine</span>
          <span className="tabular-nums">24 / 25</span>
        </div>
      </section>

      {/* NEXT MATCH — quiet, bordered strip */}
      <section className="border-y border-white/10">
        <div className="mx-auto grid max-w-[1800px] grid-cols-1 lg:grid-cols-[1fr_2fr_1fr]">
          <div className="flex items-center gap-4 border-white/10 px-6 py-10 lg:border-r lg:px-12">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Наступний матч</div>
              <div className="mt-2 font-display text-3xl uppercase italic">SAT · 26.07</div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-6 border-white/10 px-6 py-10 lg:border-r lg:px-12">
            <div className="flex flex-1 items-center gap-5">
              <Logo className="h-14 w-auto" />
              <div>
                <div className="font-display text-2xl uppercase italic">ХІТ Київ</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Home</div>
              </div>
            </div>
            <div className="font-display text-3xl italic text-white/40">VS</div>
            <div className="flex flex-1 items-center justify-end gap-5 text-right">
              <div>
                <div className="font-display text-2xl uppercase italic">Benfica</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">UEFA Futsal CL</div>
              </div>
              <div className="grid h-14 w-14 place-items-center rounded-full border border-white/20 text-xs font-bold">SLB</div>
            </div>
          </div>
          <div className="flex items-center px-6 py-10 lg:px-12">
            <a href="#" className="inline-flex w-full items-center justify-between gap-3 rounded-full bg-foreground px-6 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-background transition hover:bg-hit-yellow">
              Квитки <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="mx-auto max-w-[1800px] px-6 py-28 lg:px-12 lg:py-40">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <div className="mb-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-hit-yellow">
              — Останні новини
            </div>
            <h2 className="font-display text-6xl uppercase italic leading-[0.9] md:text-8xl">
              Читай <br className="md:hidden" />
              <span className="text-white/40">клубні</span> новини
            </h2>
          </div>
          <a href="#" className="hidden text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground transition hover:text-foreground md:inline-flex">
            Всі новини →
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            { img: news1, cat: "Тріумф", date: "20.07.2026", title: "ХІТ — чемпіон Favbet Екстра-ліги 2024/25" },
            { img: news2, cat: "Трансфер", date: "20.07.2026", title: "Дмитро Дяченко — новий голкіпер команди" },
            { img: news3, cat: "Клуб", date: "19.07.2026", title: "З Днем тренера! Люди, що будують перемоги" },
          ].map((n) => (
            <a key={n.title} href="#" className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-card">
                <img src={n.img} alt={n.title} loading="lazy" width={1200} height={800}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute left-5 top-5 text-[10px] font-bold uppercase tracking-[0.3em] text-hit-yellow">
                  / {n.cat}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <div className="mb-3 text-[10px] uppercase tracking-[0.3em] text-white/60 tabular-nums">{n.date}</div>
                  <h3 className="font-display text-2xl uppercase italic leading-tight md:text-3xl">
                    {n.title}
                  </h3>
                  <div className="mt-4 inline-flex h-8 items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 transition group-hover:text-hit-yellow">
                    Читати <span>→</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="relative overflow-hidden border-y border-white/10">
        <img src={arena} alt="" width={1920} height={1080} loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
        <div className="relative mx-auto max-w-[1800px] px-6 py-28 lg:px-12 lg:py-40">
          <div className="mb-20 max-w-4xl">
            <div className="mb-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-hit-yellow">
              — Since 2006
            </div>
            <h2 className="font-display text-6xl uppercase italic leading-[0.9] md:text-9xl">
              Історія,
              <br />
              <span className="text-white/40">написана</span>
              <br />
              на паркеті.
            </h2>
          </div>

          <div className="grid grid-cols-2 divide-white/10 border-y border-white/10 lg:grid-cols-4 lg:divide-x">
            {[
              ["04", "Титули Екстра-ліги"],
              ["06", "Кубки України"],
              ["19", "Років у топ-дивізіоні"],
              ["01", "Ліга чемпіонів UEFA"],
            ].map(([n, l]) => (
              <div key={l} className="px-4 py-10 lg:px-8 lg:py-14">
                <div className="font-display text-7xl italic leading-none md:text-9xl">{n}</div>
                <div className="mt-6 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="mx-auto max-w-[1800px] px-6 py-28 lg:px-12 lg:py-40">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="group relative aspect-[4/3] overflow-hidden bg-hit-blue lg:aspect-[5/4]">
            <Logo className="pointer-events-none absolute -right-16 -top-16 h-[120%] w-auto opacity-10" />
            <div className="relative flex h-full flex-col justify-between p-10 lg:p-16">
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">UEFA Futsal Champions League</div>
              <div>
                <h3 className="font-display text-5xl uppercase italic leading-[0.9] md:text-7xl">
                  Європейська<br/>сцена
                </h3>
                <p className="mt-6 max-w-md text-sm text-white/80">
                  Група з Benfica, ElPozo Murcia та Tigers. ХІТ представляє Україну.
                </p>
                <a href="#" className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/40 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] transition hover:bg-white hover:text-hit-blue">
                  Розклад →
                </a>
              </div>
            </div>
          </div>
          <div className="group relative aspect-[4/3] overflow-hidden bg-hit-yellow text-black lg:aspect-[5/4]">
            <div className="relative flex h-full flex-col justify-between p-10 lg:p-16">
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-60">HIT Store</div>
              <div>
                <h3 className="font-display text-5xl uppercase italic leading-[0.9] md:text-7xl">
                  Одягни<br/>чемпіонів
                </h3>
                <p className="mt-6 max-w-md text-sm opacity-80">
                  Офіційна форма, шарфи та атрибутика сезону 24/25.
                </p>
                <a href="#" className="mt-10 inline-flex items-center gap-3 rounded-full bg-black px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-hit-yellow transition hover:opacity-90">
                  До магазину →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER — Juventus-like massive wordmark */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-[1800px] px-6 pt-20 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <Logo className="h-20 w-auto" />
              <p className="mt-6 max-w-xs text-sm text-muted-foreground">
                Офіційний сайт футзального клубу ХІТ Київ. Заснований у 2006 році.
              </p>
            </div>
            {[
              { t: "Клуб", l: ["Історія", "Команда", "Тренери", "Стадіон"] },
              { t: "Матчі", l: ["Календар", "Результати", "Турнірна таблиця", "Статистика"] },
              { t: "Медіа", l: ["Новини", "Фото", "Відео", "Прес-центр"] },
            ].map((c) => (
              <div key={c.t}>
                <div className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-hit-yellow">— {c.t}</div>
                <ul className="space-y-3">
                  {c.l.map((x) => (
                    <li key={x}>
                      <a href="#" className="text-sm text-white/70 transition hover:text-foreground">{x}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* massive wordmark */}
          <div className="mt-20 overflow-hidden">
            <div className="font-display text-[26vw] uppercase italic leading-[0.85] tracking-[-0.03em] text-white/[0.06]">
              ХІТ · КИЇВ
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-8 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            <div>© 2026 ФК ХІТ Київ</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground">Instagram</a>
              <a href="#" className="hover:text-foreground">TikTok</a>
              <a href="#" className="hover:text-foreground">Telegram</a>
              <a href="#" className="hover:text-foreground">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

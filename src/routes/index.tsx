import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Freecash — Verdienen Sie bis zu 60 €/Tag mit Spielen, die Sie ohnehin spielen" },
      {
        name: "description",
        content:
          "Bezahlt werden, um Handyspiele zu spielen. 67 Mio.+ $ ausgezahlt seit 2020, 268.000+ verifizierte Bewertungen. Hol dir deine Bonus-Case und lass dir über PayPal, Bitcoin oder Amazon auszahlen.",
      },
      {
        property: "og:title",
        content: "Freecash — Bis zu 60 €/Tag mit Spielen verdienen",
      },
      {
        property: "og:description",
        content: "60 Mio.+ aktive Nutzer. Erste Auszahlung in ca. 17 Minuten. Hol dir jetzt deine Bonus-Case.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Freecash — Bis zu 60 €/Tag mit Spielen verdienen",
      },
      {
        name: "twitter:description",
        content: "60 Mio.+ aktive Nutzer. Erste Auszahlung in ca. 17 Minuten. Hol dir jetzt deine Bonus-Case.",
      },
    ],
  }),
  component: Index,
});

const dms = [
  { src: "/images/marcie.webp", alt: "DM von @marcie0097 — aus 100 $ wurden 1000 $" },
  { src: "/images/kayla.webp", alt: "DM von @kaylaaa.marie — Sephora-Geschenkkarte im Wert von 500 $" },
  { src: "/images/rosa.webp", alt: "DM von @rosatuchini1974 — Amazon-Geschenkkarte im Wert von 250 $" },
  { src: "/images/maddiee.webp", alt: "DM von @maddiee.xo — Target-Geschenkkarte im Wert von 250 $" },
  { src: "/images/shanie.webp", alt: "DM von @shanieshalie — aus 200 $ wurden 2.200 $ in 2 Tagen" },
  { src: "/images/lilly.webp", alt: "DM von @lillyx.o — Visa-Geschenkkarte im Wert von 500 $" },
];

const activity = [
  { name: "Jake", amount: "43 $", method: "PayPal" },
  { name: "Maria", amount: "27 $", method: "Cash App" },
  { name: "Devin", amount: "61 $", method: "Venmo" },
  { name: "Alexis", amount: "35 $", method: "PayPal" },
  { name: "Chris", amount: "88 $", method: "Bitcoin" },
];

const reviews = [
  {
    initials: "JM",
    name: "Jake M.",
    stars: 5,
    when: "vor 2 Wochen",
    text: "Habe mich angemeldet, weil ich dachte, es sei schon wieder so ein Scam — aber innerhalb einer Stunde kam die Cash-App-Benachrichtigung auf meinem Konto an… und ich habe seitdem 11-mal ausgezahlt. Null Probleme. Hilft mir, einen Teil der Miete und wöchentliche Einkäufe zu decken.",
  },
  {
    initials: "AR",
    name: "Ashley R.",
    stars: 5,
    when: "vor 1 Monat",
    text: "Ich habe sowieso jeden Nacht umsonst Spiele gespielt. Zu realisieren, dass ich die ganze Zeit hätte bezahlt werden können, ist ehrlich gesagt irgendwie ärgerlich. Besser spät als nie: Am selben Tag, an dem ich die App geladen hatte, waren 30 $ auf PayPal!!",
  },
  {
    initials: "TB",
    name: "Tyler B.",
    stars: 5,
    when: "vor 3 Wochen",
    text: "mein Kumpel hat mir ständig den Link geschickt und ich habe ihn immer ignoriert. hab's schließlich ausprobiert und an meinem ersten Tag 47 $ gemacht. gar nicht mal schlecht, aber hey, ich nehm's mit",
  },
  {
    initials: "MS",
    name: "Megan S.",
    stars: 4.5,
    when: "vor 5 Tagen",
    text: "ich habe buchstäblich mein Venmo aktualisiert, um zu prüfen, ob die 220 $, die ich in einer Woche gemacht habe, echt sind — und sie waren es 😭 die Zahlung war schon verarbeitet, während ich noch in der App war",
  },
];

function Stars({ count, className = "" }: { count: number; className?: string }) {
  const full = Math.floor(count);
  const half = count % 1 !== 0;
  return (
    <div className={`inline-flex items-center gap-0.5 text-primary ${className}`}>
      {Array.from({ length: full }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
          <path d="M12 2l2.9 6.9 7.5.6-5.7 4.9 1.8 7.3L12 17.9 5.5 21.7l1.8-7.3L1.6 9.5l7.5-.6L12 2z" />
        </svg>
      ))}
      {half && (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="currentColor" stopOpacity="0.25" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half)"
            d="M12 2l2.9 6.9 7.5.6-5.7 4.9 1.8 7.3L12 17.9 5.5 21.7l1.8-7.3L1.6 9.5l7.5-.6L12 2z"
          />
        </svg>
      )}
    </div>
  );
}

function useCountdown(seconds: number) {
  const [left, setLeft] = useState(seconds);
  useEffect(() => {
    const t = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);
  const m = String(Math.floor(left / 60)).padStart(2, "0");
  const s = String(left % 60).padStart(2, "0");
  return `${m}:${s}`;
}

function Index() {
  const time = useCountdown(299);
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % activity.length), 4000);
    return () => clearInterval(t);
  }, []);
  const a = activity[idx]!;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-2xl items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm">
          <span className="text-muted-foreground">⏱ Bonus-Case läuft ab in</span>
          <span className="glow-ring rounded-md bg-primary/15 px-2 py-0.5 font-mono font-bold text-primary tabular-nums">
            {time}
          </span>
        </div>
      </div>

      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(60%_60%_at_50%_0%,color-mix(in_oklab,var(--color-primary)_18%,transparent),transparent_70%)]"
        />
        <div className="mx-auto max-w-3xl px-4 pb-8 pt-10 sm:pt-14">
          <h1 className="text-balance text-4xl font-black leading-[1.05] sm:text-5xl md:text-6xl">
            Der durchschnittliche Freecash-Nutzer verdient <span className="text-primary">60 € pro Tag</span>{" "}
            <span className="block">mit Spielen, die er ohnehin schon spielt.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            268.000+ verifizierte Bewertungen. 67 Millionen $ ausgezahlt seit 2020. Die meisten
            Menschen wissen gar nicht, dass das existiert.
          </p>

          <div className="group -mx-4 mt-7 overflow-hidden">
            <div
              className="flex w-max gap-3 px-4 group-hover:[animation-play-state:paused]"
              style={{ animation: "dm-marquee 40s linear infinite" }}
            >
              {[...dms, ...dms].map((d, i) => (
                <div
                  key={i}
                  className="aspect-[322/700] w-[68vw] max-w-[280px] shrink-0 overflow-hidden rounded-3xl border border-border bg-card shadow-xl"
                >
                  <img
                    src={d.src}
                    alt={d.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "💸 Bis zu 799 $ mit einem einzigen Spiel",
              "🏆 5.000 $ Preisgeld-Pool pro Monat",
              "⚡ Erste Auszahlung in ca. 17 Minuten",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary sm:text-sm"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-bonus/40 bg-bonus/10 p-4 text-sm text-bonus">
            🎁 <span className="font-semibold">Für neue Nutzer:</span> GRATIS Bonus-Case bei der
            Anmeldung — schalte bis zu <b>50 $</b> Startguthaben frei.
          </div>

          <button  onClick={() => window.location.href = 'https://taprkr.com/r/eyJ0IjoiZnJlZWNhc2gtY3BpIiwidGlkIjoiN2YzZDBmNjQ0ZDRkYzkzYjIxYTkiLCJ0cyI6MTc5MDQxMjIwNTUzM30'} type="button" className="btn-cta mt-5 flex w-full items-center justify-center rounded-2xl px-6 py-5 text-center text-lg font-black uppercase tracking-wider sm:text-xl">
            Jetzt spielen →
          </button>

          <div className="mt-5">
            <div className="mx-auto max-w-xl rounded-2xl border border-primary/30 bg-card/60 px-4 py-3 text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
                <div className="flex shrink-0 items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Live-Aktivität
                  </span>
                </div>
                <div
                  key={idx}
                  className="min-w-0 animate-in truncate fade-in slide-in-from-bottom-1 duration-500"
                >
                  💰 <span className="font-semibold">{a.name}</span>{" "}
                  <span className="text-muted-foreground">hat soeben</span>{" "}
                  <span className="font-semibold text-primary">{a.amount}</span>{" "}
                  <span className="text-muted-foreground">über {a.method} ausgezahlt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12">
        <h2 className="text-3xl font-black sm:text-4xl">Warum zahlen Spielefirmen dir fürs Spielen?</h2>
        <p className="mt-4 text-muted-foreground">
          Ganz einfach. Spieleentwickler brauchen echte Spieler, um ihre Spiele vor dem Launch zu
          testen. Sie zahlen Freecash, um sie zu finden. Freecash gibt das Geld an dich weiter. Du
          warst schon immer das Produkt. Jetzt wirst du dafür bezahlt.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            [
              "Spielstudios brauchen Tester.",
              "Vor einem Launch brauchen Entwickler echte Spieler. Sie zahlen viel Geld für diese Daten.",
            ],
            [
              "Freecash ist der Mittelsmann.",
              "Sie sammeln die Werbeeinnahmen und geben den Großteil direkt an dich weiter. Das ist das ganze Modell.",
            ],
            [
              "Du spielst. Du verdienst. Du lässt auszahlen.",
              "Erreiche Meilensteine im Spiel. Dein Guthaben aktualisiert sich automatisch. Lass dir jederzeit über PayPal, dein Bankkonto oder Krypto auszahlen.",
            ],
          ].map(([h, p]) => (
            <div key={h} className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-bold">{h}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p}</p>
            </div>
          ))}
        </div>
        <a
          href="https://taprkr.com/r/eyJ0IjoiZnJlZWNhc2gtY3BpIiwidGlkIjoiN2YzZDBmNjQ0ZDRkYzkzYjIxYTkiLCJ0cyI6MTc5MDQxMTk4NzUzN30"
          className="btn-cta mt-7 flex w-full items-center justify-center rounded-2xl px-6 py-4 text-center text-base font-black uppercase tracking-wider"
        >
          Jetzt spielen →
        </a>
      </section>

      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <h2 className="text-3xl font-black sm:text-4xl">
            67 Millionen $ ausgezahlt. 268.000 Menschen haben es bestätigt.
          </h2>

          <div className="mt-6 rounded-2xl border border-border bg-card p-5">
            <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-[auto_1fr]">
              <svg viewBox="0 0 130 24" aria-label="Trustpilot" className="h-6 text-foreground">
                <path
                  d="M12 2l2.6 6.1 6.6.5-5 4.3 1.6 6.5L12 15.9 6.2 19.4l1.6-6.5-5-4.3 6.6-.5L12 2z"
                  fill="#00B67A"
                />
                <text
                  x="28"
                  y="17"
                  fontFamily="Inter, sans-serif"
                  fontWeight="700"
                  fontSize="14"
                  fill="currentColor"
                >
                  Trustpilot
                </text>
              </svg>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                  <Stars count={4.5} />
                  <span className="font-bold">4,7 von 5</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  Aus 268.000+ unabhängigen Bewertungen
                </span>
              </div>
            </div>

            <div className="mt-5 space-y-2 text-sm">
              {[
                ["5 Sterne", 86],
                ["4 Sterne", 7],
                ["3 Sterne", 3],
                ["2 Sterne", 2],
                ["1 Stern", 2],
              ].map(([label, pct]) => (
                <div
                  key={label as string}
                  className="grid grid-cols-[64px_1fr_40px] items-center gap-3 text-xs"
                >
                  <span className="text-muted-foreground">{label}</span>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="text-right font-mono text-muted-foreground">{pct}%</span>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Was Leute nach ihrer ersten Auszahlung sagen.
          </p>
          <div className="mt-3 space-y-3">
            {[
              "Endlich eine Belohnungs-App, die wirklich funktioniert.",
              "War skeptisch. Meine erste PayPal-Zahlung war in 10 Minuten auf meinem Konto.",
              "14-mal ausgezahlt. Kein einziges Problem.",
            ].map((q) => (
              <blockquote
                key={q}
                className="rounded-xl border border-border bg-background/40 p-4 text-sm"
              >
                <span className="text-primary">„</span>
                {q}
                <span className="text-primary">“</span>
                <div className="mt-1 text-xs text-muted-foreground">
                  — Verifizierte Trustpilot-Bewertung
                </div>
              </blockquote>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/10 p-6 text-center">
            <div className="text-4xl font-black text-primary sm:text-5xl">67.000.000+ $</div>
            <div className="mt-1 text-sm text-muted-foreground">An Nutzer ausgezahlt seit 2020</div>
          </div>

          <div className="mt-6 grid grid-cols-1 items-center gap-3 rounded-2xl border border-border bg-card p-4 sm:grid-cols-[auto_1fr]">
            <span className="text-sm text-muted-foreground">Auszahlung über:</span>
            <div className="flex flex-wrap items-center gap-4">
              <svg viewBox="0 0 80 24" aria-label="PayPal" className="h-6">
                <text
                  x="0"
                  y="18"
                  fontFamily="Inter, sans-serif"
                  fontWeight="800"
                  fontSize="18"
                  fill="#00457C"
                >
                  Pay
                </text>
                <text
                  x="34"
                  y="18"
                  fontFamily="Inter, sans-serif"
                  fontWeight="800"
                  fontSize="18"
                  fill="#0079C1"
                >
                  Pal
                </text>
              </svg>
              <svg viewBox="0 0 24 24" aria-label="Cash App" className="h-6 w-6">
                <rect width="24" height="24" rx="6" fill="#00D64F" />
                <text
                  x="12"
                  y="17"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  fontWeight="900"
                  fontSize="16"
                  fill="#fff"
                >
                  $
                </text>
              </svg>
              <svg viewBox="0 0 70 24" aria-label="Venmo" className="h-6">
                <rect width="70" height="24" rx="4" fill="#3D95CE" />
                <text
                  x="35"
                  y="17"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  fontWeight="800"
                  fontSize="13"
                  fill="#fff"
                >
                  venmo
                </text>
              </svg>
              <svg viewBox="0 0 60 24" aria-label="Zelle" className="h-6">
                <rect width="60" height="24" rx="4" fill="#6D1ED4" />
                <text
                  x="30"
                  y="17"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  fontWeight="900"
                  fontStyle="italic"
                  fontSize="13"
                  fill="#fff"
                >
                  zelle
                </text>
              </svg>
              <svg viewBox="0 0 24 24" aria-label="Bitcoin" className="h-6 w-6">
                <circle cx="12" cy="12" r="12" fill="#F7931A" />
                <text
                  x="12"
                  y="17"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  fontWeight="900"
                  fontSize="14"
                  fill="#fff"
                >
                  ₿
                </text>
              </svg>
              <svg viewBox="0 0 60 24" aria-label="Visa" className="h-6">
                <rect width="60" height="24" rx="4" fill="#1A1F71" />
                <text
                  x="30"
                  y="17"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  fontWeight="900"
                  fontStyle="italic"
                  fontSize="14"
                  fill="#F7B600"
                >
                  VISA
                </text>
              </svg>
              <svg viewBox="0 0 80 24" aria-label="Amazon" className="h-6">
                <text
                  x="0"
                  y="17"
                  fontFamily="Inter, sans-serif"
                  fontWeight="800"
                  fontSize="16"
                  fill="#fff"
                >
                  amazon
                </text>
                <path
                  d="M4 20 Q35 26 60 19"
                  stroke="#FF9900"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <div className="mt-6 grid gap-2 text-sm sm:grid-cols-3">
            {[
              "Durchschnittlicher Nutzer: 60 €+ pro Tag",
              "Top-Verdiener: bis zu 5.000 $/Monat",
              "Erste mit 5.000 $/Monat: extra 500 $ Bonus",
            ].map((t) => (
              <div key={t} className="rounded-xl border border-border bg-card px-4 py-3 font-bold">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-5 text-2xl font-black sm:text-3xl">
          Was Leute nach ihrer ersten Auszahlung sagen.
        </h2>
        <div className="relative">
          <div className="mb-3 flex items-center justify-between gap-2">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">
              Verifizierte Bewertungen
            </div>
            <div className="flex gap-1.5">
              <button
                aria-label="Zurück"
                className="grid h-8 w-8 place-items-center rounded-full border border-border bg-card text-muted-foreground hover:text-foreground"
              >
                ‹
              </button>
              <button
                aria-label="Weiter"
                className="grid h-8 w-8 place-items-center rounded-full border border-border bg-card text-muted-foreground hover:text-foreground"
              >
                ›
              </button>
            </div>
          </div>
          <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2">
            {reviews.map((r) => (
              <article
                key={r.name}
                className="w-[85%] shrink-0 snap-start rounded-2xl border border-border bg-card p-5 sm:w-[45%] lg:w-[30%]"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                    {r.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate font-semibold">{r.name}</div>
                    <div className="flex items-center gap-2">
                      <Stars count={r.stars} />
                      <span className="text-xs text-muted-foreground">Verifiziert</span>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90">{r.text}</p>
                <div className="mt-3 text-xs text-muted-foreground">{r.when}</div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <section id="claim" className="mx-auto max-w-3xl px-4 py-12">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card p-6 text-center sm:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_80%_at_50%_0%,color-mix(in_oklab,var(--color-primary)_20%,transparent),transparent_70%)]"
          />
          <div className="inline-flex items-center gap-2 rounded-md bg-primary/15 px-3 py-1.5 text-sm">
            <span className="text-muted-foreground">⏱ Bonus-Case läuft ab in</span>
            <span className="font-mono font-bold text-primary tabular-nums">{time}</span>
          </div>
          <button type="button" className="btn-cta mt-5 flex w-full items-center justify-center rounded-2xl px-6 py-5 text-center text-base font-black uppercase tracking-wider sm:text-lg">
            Hol dir deine Bonus-Case &amp; starte durch →
          </button>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span>✓ Komplett kostenlos</span>
            <span>✓ Keine Kreditkarte nötig</span>
            <span>✓ Auszahlung ab 5 $</span>
            <span>✓ Über 60 Mio. Nutzer</span>
          </div>
          <div className="mt-5 rounded-xl border border-bonus/40 bg-bonus/10 p-4 text-left text-sm text-bonus">
            💡 <b>PRO-TIPP:</b> Die höchstbezahlten Angebote sind als „Featured" markiert. Ein
            einziges Spiel kann bis zu 799 $ zahlen, wenn du den obersten Meilenstein erreichst.
            Schau dir zuerst die Featured-Angebote an, wenn du die App öffnest.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10 text-center">
        <h3 className="text-2xl font-black">Fragen? Wir sind für dich da.</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Freecash hat ein Support-Team. Wir auch.
        </p>
        <button className="mt-4 inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:border-primary/60">
          Support kontaktieren
        </button>
      </section>

      <footer className="border-t border-border bg-card/30">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 px-4 py-8 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <div>© {new Date().getFullYear()} Freecash-Angebotsaktion.</div>
          <div className="flex gap-4">
            <button className="hover:text-foreground">Datenschutzerklärung</button>
            <button className="hover:text-foreground">Nutzungsbedingungen</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE = "/hero.png";

const CONTENT = {
  title: "تعلّم لغة القرآن وجميع المواد في مكان واحد",
  description:
    "دروس منظّمة مع مدرّسين متخصصين، تساعدك تفهم وتتقدّم خطوة بخطوة في أي مرحلة دراسية.",
  primary: { label: "استكشف الكورسات", href: "/courses" },
  secondary: { label: "تواصل معنا", href: "/contact" },
};

const GOLD_CLIP =
  "[clip-path:polygon(0_0,100%_0,100%_100%,0_90%)] lg:[clip-path:polygon(0_0,82%_0,100%_100%,0_100%)]";
const IMAGE_CLIP =
  "[clip-path:polygon(0_0,100%_0,100%_97%,0_87%)] lg:[clip-path:polygon(0_0,81%_0,99%_100%,0_100%)]";

export default function Hero() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-(--background) text-(--text-primary)"
    >
      {/* Image panel: in flow on mobile, absolute on the left for lg+ */}
      <div className="relative h-72 animate-hero-image motion-reduce:animate-none sm:h-96 lg:absolute lg:inset-y-0 lg:left-0 lg:h-auto lg:w-[56%]">
        <div
          aria-hidden="true"
          className={`absolute inset-0 bg-(--gold) ${GOLD_CLIP}`}
        />
        <div className={`absolute inset-0 ${IMAGE_CLIP}`}>
          <Image
            src={HERO_IMAGE}
            alt="Graduation cap over an open book on a marble stand"
            fill
            priority
            sizes="(min-width: 1024px) 56vw, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Text side: on the physical right for lg+ (flex-start in RTL = right) */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:flex lg:min-h-[max(600px,calc(100dvh-5rem))] lg:items-center lg:justify-start lg:px-8 lg:py-16">
        <div className="lg:w-[42%]">
          <h1 className="animate-hero-rise text-3xl font-bold leading-[1.4] [animation-delay:150ms] motion-reduce:animate-none sm:text-4xl lg:text-5xl lg:leading-[1.35]">
            {CONTENT.title}
          </h1>

          <p className="mt-5 max-w-xl animate-hero-rise text-base leading-8 text-(--text-secondary) [animation-delay:300ms] motion-reduce:animate-none lg:text-lg">
            {CONTENT.description}
          </p>

          <div className="mt-8 flex animate-hero-rise flex-col gap-3 [animation-delay:450ms] motion-reduce:animate-none sm:flex-row">
            <Link
              href={CONTENT.primary.href}
              className="rounded-(--radius) bg-(--gold) px-7 py-3.5 text-center text-base font-bold text-(--navy) transition-colors hover:bg-(--gold-light) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ring)"
            >
              {CONTENT.primary.label}
            </Link>
            <Link
              href={CONTENT.secondary.href}
              className="rounded-(--radius) border border-(--navy)/25 px-7 py-3.5 text-center text-base font-semibold text-(--navy) transition-colors hover:border-(--navy) hover:bg-(--surface-secondary) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ring)"
            >
              {CONTENT.secondary.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

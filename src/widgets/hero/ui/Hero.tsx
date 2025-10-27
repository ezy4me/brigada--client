"use client";

import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/utils";

interface HeroProps {
  className?: string;
}

export const Hero = ({ className }: HeroProps) => {
  const handleBecomeExecutor = () => {
    console.log("Become executor clicked");
  };

  return (
    <section
      className={cn(
        "relative bg-gradient-to-b from-white to-neutral-5 py-20 md:py-32 overflow-hidden",
        className
      )}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              to right,
              rgba(0, 122, 255, 0.05) 0px,
              rgba(0, 122, 255, 0.05) 1px,
              transparent 1px,
              transparent calc(100% / 24)
            )
          `,
          backgroundSize: "100% 100%",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-neutral-5/80 z-[1]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col justify-center items-center gap-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-90 my-20 leading-tight">
            Получайте строительные заказы{" "}
            <span className="text-accent-primary">
              без рекламы и звонков
            </span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-70 my-20 leading-relaxed max-w-2xl mx-auto">
            Подключитесь к платформе и начните получать заявки
            <br className="hidden sm:block" />
            от реальных клиентов уже сегодня.
          </p>

          <p className="text-base text-neutral-60 mb-12 max-w-2xl mx-auto">
            Всё официально: чат, договор, документы
          </p>

          <Button onClick={handleBecomeExecutor} size="lg">
            Стать исполнителем
          </Button>
        </div>
      </div>
    </section>
  );
};

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as styles from './heroCarousel.css';

const slides = [
  {
    image: '/hero-bg-1.jpg',
    badges: ['Новостройки', 'Ремонт'],
  },
  {
    image: '/hero-bg-2.jpg',
    badges: ['Капитальный ремонт', 'Отделка'],
  },
  {
    image: '/hero-bg-3.jpg',
    badges: ['Дизайн-проекты', 'Комплекс'],
  },
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const current = slides[currentSlide];

  return (
    <section className={styles.section}>
      <Image
        src={current.image}
        alt="Слайд фона"
        fill
        className={styles.backgroundImage}
        priority
      />
      <div className={styles.overlay} />
      
      <div className={styles.container}>
        <div className={styles.badges}>
          {current.badges.map((badge, index) => (
            <div key={index} className={styles.badge}>
              {badge}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.controls}>
        <button onClick={goToPrevious} className={styles.navButton}>
          <ChevronLeft size={20} />
        </button>
        <button onClick={goToNext} className={styles.navButton}>
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};
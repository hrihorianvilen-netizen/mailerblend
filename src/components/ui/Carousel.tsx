'use client';

import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CarouselProps {
  children: React.ReactNode[];
  className?: string;
  titles?: string[];
}

export const Carousel: React.FC<CarouselProps> = ({ children, className, titles }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
    duration: 25,
  });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className={cn('relative w-screen left-1/2 right-1/2 -mx-[50vw] py-8 sm:py-12', className)}>
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="absolute left-2 sm:left-4 md:left-8 lg:left-[15%] xl:left-[20%] top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-100 hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" />
        </button>

        {/* Left Gradient Overlay - Hidden on small screens */}
        <div
          className="hidden lg:block absolute left-0 top-0 bottom-0 w-[30%] pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to right, #F3F4F6 0%, #F3F4F6 20%, transparent 100%)'
          }}
        />

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex items-center">
            {children.map((child, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_90%] md:flex-[0_0_80%] lg:flex-[0_0_50%] xl:flex-[0_0_40%] px-2 sm:px-4"
              >
                <div className="mx-auto max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[624px]">
                  {child}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Gradient Overlay - Hidden on small screens */}
        <div
          className="hidden lg:block absolute right-0 top-0 bottom-0 w-[30%] pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to left, #F3F4F6 0%, #F3F4F6 20%, transparent 100%)'
          }}
        />

        {/* Right Arrow */}
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="absolute right-2 sm:right-4 md:right-8 lg:right-[15%] xl:right-[20%] top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-100 hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" />
        </button>
      </div>

      {/* Title Indicators */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mt-8 px-4">
        {titles ? (
          titles.map((title, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                'px-3 sm:px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base',
                index === selectedIndex
                  ? 'bg-primary text-white scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              )}
              aria-label={`Go to ${title}`}
            >
              {title}
            </button>
          ))
        ) : (
          children.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                'h-2 rounded-full transition-all duration-300',
                index === selectedIndex
                  ? 'bg-cyan w-8'
                  : 'bg-gray-400 w-2 hover:bg-gray-500'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))
        )}
      </div>
    </div>
  );
};

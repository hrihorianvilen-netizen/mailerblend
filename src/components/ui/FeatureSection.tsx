import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

interface FeatureSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  background?: 'white' | 'gray';
}

export function FeatureSection({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = 'right',
  background = 'white',
}: FeatureSectionProps) {
  const isImageLeft = imagePosition === 'left';
  const bgClass = background === 'gray' ? 'bg-gray-50' : '';

  return (
    <Section className={bgClass}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div className={isImageLeft ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              {title}
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              {description}
            </p>
          </div>

          {/* Image */}
          <div className={isImageLeft ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

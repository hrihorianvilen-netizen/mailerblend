import React from 'react';
import Image from 'next/image';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className = '', size = 24 }) => {
  return (
    <div className={`inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <Image
        src={name}
        alt={name}
        width={size}
        height={size}
        className="w-full h-full"
      />
    </div>
  );
};

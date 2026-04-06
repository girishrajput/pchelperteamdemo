// components/services/ServiceHeroImage.tsx
import React from 'react';
import Image from 'next/image';

interface ServiceHeroImageProps {
  imageSrc: string;
  altText: string;
}

const ServiceHeroImage = ({ imageSrc, altText }: ServiceHeroImageProps) => {
  return (
    <div className="max-w-7xl mx-auto mt-20 relative h-[300px] md:h-[500px] w-full overflow-hidden bg-zinc-100 border-y border-zinc-200">
      <Image 
        src={imageSrc} 
        alt={altText} 
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
    </div>
  );
};

export default ServiceHeroImage;
import Image from "next/image";

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  isReversed?: boolean;
};

export const ServiceCard = ({
  title,
  description,
  image,
  isReversed,
}: ServiceCardProps) => {
  return (
    <div
      className={`flex flex-col gap-10 py-12 md:items-center ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2">
        <div className="relative aspect-video overflow-hidden rounded-xl shadow-md group">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 space-y-4">
        <h3 className="text-2xl font-bold text-black">{title}</h3>

        <p className="text-gray-dark leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
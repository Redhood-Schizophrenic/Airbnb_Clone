import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/24/outline';

interface PropertyCardProps {
  title: string;
  imageSrc: string;
  location: string;
  price: number;
  rating?: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  imageSrc,
  location,
  price,
  rating
}) => {
  return (
    <div className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            fill
            className="object-cover h-full w-full group-hover:scale-110 transition"
            src={imageSrc}
            alt={title}
          />
          <div className="absolute top-3 right-3">
            <HeartIcon className="h-7 w-7 fill-white stroke-black stroke-2 hover:fill-rose-500 transition" />
          </div>
        </div>
        <div className="font-semibold text-lg">{location}</div>
        <div className="font-light text-neutral-500">{title}</div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">$ {price}</div>
          <div className="font-light">night</div>
        </div>
        {rating && (
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>{rating}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;

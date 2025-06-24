import {type FC, memo } from 'react';
import { ArrowRight } from 'lucide-react';
import type { ServiceCardProps } from '@/lib/types';

const serviceCardStyles = {
  card: 'service-card rounded-[40px] p-12 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1',
  title: 'inline-block px-4 py-3 rounded-lg text-2xl font-bold mb-12 leading-tight shadow-md',
  button: 'flex items-center gap-4 hover:gap-6 transition-all duration-300 group',
  buttonCircle: 'w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300',
  imageContainer: 'transform hover:scale-105 transition-transform duration-300',
};

const ServiceCard: FC<ServiceCardProps> = memo(({
  title,
  bgColor,
  titleBgColor,
  textColor = 'text-black',
  buttonTextColor = 'text-black',
  buttonBgColor = 'bg-black',
  arrowColor = 'text-white',
  imgUrl,
  onLearnMore,
}) => {
  return (
    <div className={`${serviceCardStyles.card} ${bgColor}`}>
      <div className="flex items-center justify-between h-full min-h-[200px]">
        <div className="flex-1 pr-8">
          <div className={`${serviceCardStyles.title} ${titleBgColor} ${textColor}`}>
            {title.split('\n').map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
          <button
            onClick={onLearnMore}
            className={`${serviceCardStyles.button} ${buttonTextColor}`}
            type="button"
          >
            <div className={`${serviceCardStyles.buttonCircle} ${buttonBgColor}`}>
              <ArrowRight className={`w-6 h-6 ${arrowColor} rotate-[-35deg]`} />
            </div>
            <span className="text-xl font-semibold">Learn more</span>
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className={serviceCardStyles.imageContainer}>
            <img src={imgUrl} alt={title.replace('\n', ' ')} loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default ServiceCard;
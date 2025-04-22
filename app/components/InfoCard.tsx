import Link from 'next/link';
import { InfoCard as InfoCardType } from '../utils/types';

interface Props {
  card: InfoCardType;
}

const InfoCard = ({ card }: Props) => {
  const { id, title, description, icon, url, isExternal } = card;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div className="w-12 h-12 flex items-center justify-center bg-orange-100 dark:bg-orange-900 rounded-full">
            <i className={`${icon} text-orange-500 text-xl`}></i>
          </div>
          {isExternal && (
            <div className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
              <i className="fas fa-external-link-alt text-blue-500 text-xs mr-1"></i>
              <span className="text-blue-500 text-xs font-medium">Extern</span>
            </div>
          )}
        </div>
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        {isExternal ? (
          <a 
            href={url} 
            target="_blank" 
            rel="noreferrer" 
            className="text-orange-500 hover:text-orange-600 inline-flex items-center"
          >
            Bekijk document <i className="fas fa-external-link-alt ml-1"></i>
          </a>
        ) : (
          <Link 
            href={url} 
            className="text-orange-500 hover:text-orange-600 inline-flex items-center"
          >
            Meer informatie <i className="fas fa-arrow-right ml-1"></i>
          </Link>
        )}
      </div>
    </div>
  );
};

export default InfoCard; 
import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import articlePlaceholder from '@/assets/article-placeholder.jpg';
import volLogo from '@/assets/VOL_RGB-3.svg';

export type Article = {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
};

interface APIArticle {
  id: number;
  title: { rendered: string };
  link: string;
  featured_image_crops?: Array<{
    aspect: string;
    sizes: Array<{ src: string; w: number; h: number }>;
  }>;
}

interface APIResponse {
  hits: APIArticle[];
}

export interface ArticleListSectionProps {
  onArticleClick?: (article: Article) => void;
  onShowAllClick?: () => void;
}

const ArticleListSection: React.FC<ArticleListSectionProps> = ({
  onArticleClick,
  onShowAllClick
}) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://www.vol.at/wp-json/russmedia-topics/v1/topics/model-me');
        const data: APIResponse = await response.json();
        
        const formattedArticles: Article[] = data.hits.map((hit) => {
          // Get the first available image from featured_image_crops or use placeholder
          let imageUrl = articlePlaceholder;
          if (hit.featured_image_crops && hit.featured_image_crops.length > 0) {
            const crop = hit.featured_image_crops[0];
            if (crop.sizes && crop.sizes.length > 0) {
              imageUrl = 'https://www.vol.at' + crop.sizes[0].src;
            }
          }

          return {
            id: hit.id,
            title: hit.title.rendered,
            imageUrl,
            link: hit.link
          };
        });

        setArticles(formattedArticles.slice(0, 5));
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);
  const handleArticleClick = (article: Article) => {
    if (onArticleClick) {
      onArticleClick(article);
    } else {
      window.open(article.link, '_blank');
    }
  };

  const handleShowAllClick = () => {
    if (onShowAllClick) {
      onShowAllClick();
    }
  };

  if (loading) {
    return (
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center px-4 md:px-6">
        <img src={volLogo} alt="VOL.AT Logo" className="mb-8 md:mb-12 w-24 md:w-32" />
        <p className="text-white">Laden...</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center px-4 md:px-6">
      {/* Logo */}
      <img src={volLogo} alt="VOL.AT Logo" className="mb-8 md:mb-12 w-24 md:w-32" />
      
      {/* Article List */}
      <div className="w-full">
        <div className="w-full flex flex-col gap-6 md:gap-8">
          {articles.map((article) => (
          <div
            key={article.id}
            className="flex items-center justify-between gap-4 md:gap-8 cursor-pointer group"
            onClick={() => handleArticleClick(article)}
          >
            {/* Title */}
            <h3 className="flex-1 text-[#F5ECEC] font-inter text-base md:text-lg lg:text-[28px] font-semibold leading-[130%]">
              {article.title}
            </h3>

            {/* Image with + button */}
            <div className="relative flex-shrink-0">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-24 h-16 md:w-40 md:h-24 lg:w-[200px] lg:h-[130px] object-cover rounded"
              />
              {/* + Button overlay */}
              <button
                className="absolute bottom-2 right-2 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded bg-black/70"
                onClick={(e) => {
                  e.stopPropagation();
                  handleArticleClick(article);
                }}
              >
                <Plus className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </button>
            </div>
          </div>
          ))}
        </div>
      </div>

      {/* Alle Artikel Button */}
      <a
        href="https://www.vol.at/themen/model-me"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-12 md:mt-16 h-12 md:h-[67px] px-4 md:px-5 py-3 rounded border-2 border-white bg-transparent text-white font-inter text-base md:text-lg lg:text-[28px] font-bold leading-[110%] hover:bg-white/10 transition-colors inline-flex items-center justify-center"
      >
        Alle Artikel
      </a>
    </div>
  );
};

export default ArticleListSection;

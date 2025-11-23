import React, { useEffect } from 'react';
import { Recipe } from '../types';
import { ArrowRight, Clock, Users, MapPin, Share2, Leaf, Flame } from 'lucide-react';

interface Props {
  recipe: Recipe;
  onBack: () => void;
}

const RecipeDetail: React.FC<Props> = ({ recipe, onBack }) => {
  
  // Scroll to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShare = () => {
    const url = `${window.location.origin}${window.location.pathname}?id=${recipe.id}`;
    const text = `جرب وصفة ${recipe.name} من تطبيق وجبة! 😋\n${url}`;
    
    // Check if share API is supported
    if (navigator.share) {
      navigator.share({
        title: recipe.name,
        text: text,
        url: url,
      }).catch(console.error);
    } else {
      // Fallback to direct WhatsApp link if native share is not supported
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    }
  };

  return (
    <div className="bg-white min-h-screen pb-24 animate-fade-in">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-md z-20 border-b border-gray-100 px-4 py-4 flex items-center gap-4">
        <button 
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition-colors"
        >
          <ArrowRight size={20} />
        </button>
        <h1 className="text-xl font-bold text-gray-800 font-cairo flex-1 truncate">{recipe.name}</h1>
        <button 
          onClick={handleShare}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-green-50 text-green-600 hover:bg-green-100 active:bg-green-200 transition-colors"
          title="مشاركة الوصفة"
        >
          <Share2 size={20} />
        </button>
      </div>

      {/* Hero Section */}
      <div className="p-6 flex flex-col items-center bg-gradient-to-b from-primary-50 to-white">
        <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center text-6xl mb-4 border-4 border-white">
          {recipe.icon}
        </div>
        <p className="text-center text-gray-600 leading-relaxed font-amiri text-lg max-w-md">
          {recipe.intro}
        </p>
        
        <div className="grid grid-cols-3 gap-3 w-full mt-6">
          <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
            <Clock size={18} className="text-primary-500 mb-1" />
            <span className="text-xs text-gray-400">الوقت</span>
            <span className="font-bold text-gray-700 text-sm">{recipe.time}</span>
          </div>
          <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
            <Users size={18} className="text-primary-500 mb-1" />
            <span className="text-xs text-gray-400">الكمية</span>
            <span className="font-bold text-gray-700 text-sm">{recipe.servings}</span>
          </div>
          <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
            <MapPin size={18} className="text-primary-500 mb-1" />
            <span className="text-xs text-gray-400">المنطقة</span>
            <span className="font-bold text-gray-700 text-sm">{recipe.region}</span>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="px-6 py-2 flex gap-2 flex-wrap justify-center">
        {recipe.isVegetarian && (
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium flex items-center gap-1">
            <Leaf size={14} /> نباتي
          </span>
        )}
        <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${
           recipe.difficulty === 'صعب' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
        }`}>
          <Flame size={14} /> {recipe.difficulty}
        </span>
      </div>

      {/* Content */}
      <div className="px-6 mt-6 space-y-8">
        
        {/* Ingredients */}
        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 font-cairo">
            <div className="w-1 h-6 bg-primary-500 rounded-full"></div>
            المقادير
          </h2>
          <ul className="space-y-3">
            {recipe.ingredients.map((ing, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-700 font-amiri text-lg">
                <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2.5 flex-shrink-0"></span>
                <span>{ing}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Steps */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 font-cairo">
            <div className="w-1 h-6 bg-primary-500 rounded-full"></div>
            طريقة التحضير
          </h2>
          <div className="space-y-6">
            {recipe.steps.map((step, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold font-cairo shadow-sm">
                  {idx + 1}
                </div>
                <p className="text-gray-700 leading-relaxed font-amiri text-lg pt-0.5">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-xl text-center text-blue-800 text-sm font-medium">
          صحتين وعافية! 🥘
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
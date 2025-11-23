import React from 'react';
import { Recipe } from '../types';
import { RefreshCw, ChefHat, ArrowRight } from 'lucide-react';

interface Props {
  recipe: Recipe;
  onRefresh: () => void;
  onClick: () => void;
}

const SuggestedRecipe: React.FC<Props> = ({ recipe, onRefresh, onClick }) => {
  return (
    <div className="mb-6 relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-white p-5 shadow-lg shadow-primary-200">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-2">
          <span className="bg-white/20 backdrop-blur-sm text-xs px-2 py-1 rounded-lg flex items-center gap-1">
            <ChefHat size={12} /> وجبة اليوم المقترحة
          </span>
          <button 
            onClick={(e) => { e.stopPropagation(); onRefresh(); }}
            className="p-1.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <RefreshCw size={16} />
          </button>
        </div>

        <div className="flex items-center gap-4 mt-2">
          <div className="text-5xl bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            {recipe.icon}
          </div>
          <div>
            <h2 className="text-2xl font-bold font-cairo leading-tight mb-1">{recipe.name}</h2>
            <p className="text-primary-100 text-sm opacity-90 truncate max-w-[200px]">{recipe.category} • {recipe.time}</p>
          </div>
        </div>

        <button 
          onClick={onClick}
          className="mt-4 w-full py-2 bg-white text-primary-700 font-bold rounded-xl text-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
        >
          عرض الوصفة <ArrowRight size={16} className="rotate-180" />
        </button>
      </div>
    </div>
  );
};

export default SuggestedRecipe;
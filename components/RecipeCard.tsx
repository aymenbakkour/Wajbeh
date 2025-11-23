import React from 'react';
import { Recipe } from '../types';
import { Clock, Users } from 'lucide-react';

interface Props {
  recipe: Recipe;
  onClick: () => void;
}

const RecipeCard: React.FC<Props> = ({ recipe, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-4 flex items-center gap-4 active:scale-95 transition-transform duration-200 cursor-pointer hover:shadow-md"
    >
      <div className="flex-shrink-0 w-20 h-20 bg-primary-50 rounded-2xl flex items-center justify-center text-4xl shadow-inner">
        {recipe.icon}
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-gray-800 truncate font-cairo">{recipe.name}</h3>
          <span className={`text-xs px-2 py-1 rounded-full ${
            recipe.difficulty === 'سهل' ? 'bg-green-100 text-green-700' :
            recipe.difficulty === 'متوسط' ? 'bg-yellow-100 text-yellow-700' :
            'bg-red-100 text-red-700'
          }`}>
            {recipe.difficulty}
          </span>
        </div>
        
        <p className="text-sm text-gray-500 mb-2 truncate">{recipe.category} • {recipe.region}</p>
        
        <div className="flex items-center gap-4 text-gray-400 text-xs">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{recipe.time}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>{recipe.servings} أشخاص</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
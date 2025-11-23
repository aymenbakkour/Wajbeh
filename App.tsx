import React, { useState, useMemo, useEffect } from 'react';
import { recipesData } from './data';
import { Recipe, FilterState } from './types';
import RecipeCard from './components/RecipeCard';
import RecipeDetail from './components/RecipeDetail';
import FilterPanel from './components/FilterPanel';
import SuggestedRecipe from './components/SuggestedRecipe';
import { Home, Filter as FilterIcon, Search, ChefHat } from 'lucide-react';

type View = 'home' | 'details' | 'filter';

const initialFilters: FilterState = {
  category: '',
  region: '',
  difficulty: '',
  mainIngredient: '',
  isVegetarian: false,
};

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [activeFilters, setActiveFilters] = useState<FilterState>(initialFilters);
  const [suggestedRecipeId, setSuggestedRecipeId] = useState<number>(1);

  // Initialize random suggested recipe
  useEffect(() => {
    handleRefreshSuggestion();
  }, []);

  const handleRefreshSuggestion = () => {
    const randomId = recipesData[Math.floor(Math.random() * recipesData.length)].id;
    setSuggestedRecipeId(randomId);
  };

  const suggestedRecipe = useMemo(() => 
    recipesData.find(r => r.id === suggestedRecipeId) || recipesData[0], 
  [suggestedRecipeId]);

  // Filtering Logic
  const filteredRecipes = useMemo(() => {
    return recipesData.filter(recipe => {
      // 1. Search Query (Live)
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch = 
        recipe.name.includes(query) || 
        recipe.region.includes(query) || 
        recipe.ingredients.some(ing => ing.includes(query));

      if (!matchesSearch) return false;

      // 2. Advanced Filters
      if (activeFilters.category && recipe.category !== activeFilters.category) return false;
      if (activeFilters.region && recipe.region !== activeFilters.region) return false;
      if (activeFilters.difficulty && recipe.difficulty !== activeFilters.difficulty) return false;
      if (activeFilters.mainIngredient && recipe.mainIngredient !== activeFilters.mainIngredient) return false;
      if (activeFilters.isVegetarian && !recipe.isVegetarian) return false;

      return true;
    });
  }, [searchQuery, activeFilters]);

  // Navigation Handlers
  const handleRecipeClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setCurrentView('details');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedRecipe(null);
  };

  const handleApplyFilters = () => {
    setActiveFilters(filters);
    setCurrentView('home');
  };

  const handleClearFilters = () => {
    setFilters(initialFilters);
    setActiveFilters(initialFilters);
  };

  // Main Render Logic
  if (currentView === 'details' && selectedRecipe) {
    return <RecipeDetail recipe={selectedRecipe} onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-cairo pb-20 max-w-md mx-auto shadow-2xl overflow-hidden relative border-x border-gray-200">
      
      {/* Header */}
      <header className="bg-white p-4 sticky top-0 z-10 shadow-sm flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-primary-500 text-white p-2 rounded-lg">
            <ChefHat size={20} />
          </div>
          <h1 className="text-2xl font-bold text-primary-600">وجبة</h1>
        </div>
        <div className="text-sm text-gray-400 font-medium">وصفات سورية أصيلة</div>
      </header>

      {currentView === 'filter' ? (
        <FilterPanel 
          filters={filters} 
          setFilters={setFilters} 
          onApply={handleApplyFilters} 
          onClear={handleClearFilters}
        />
      ) : (
        /* Home View */
        <main className="p-4 animate-fade-in">
          
          <SuggestedRecipe 
            recipe={suggestedRecipe} 
            onRefresh={handleRefreshSuggestion}
            onClick={() => handleRecipeClick(suggestedRecipe)} 
          />

          {/* Search Bar */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="ابحث عن وصفة، مكون، أو منطقة..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-4 pr-12 rounded-xl border-none shadow-sm bg-white focus:ring-2 focus:ring-primary-200 outline-none text-gray-700 placeholder-gray-400"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>

          {/* Results Info */}
          <div className="flex justify-between items-center mb-4 px-1">
            <h2 className="font-bold text-lg text-gray-800">قائمة الوصفات</h2>
            <span className="text-xs bg-gray-200 px-2 py-1 rounded-full text-gray-600">{filteredRecipes.length} وصفة</span>
          </div>

          {/* List */}
          <div className="space-y-4">
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map(recipe => (
                <RecipeCard 
                  key={recipe.id} 
                  recipe={recipe} 
                  onClick={() => handleRecipeClick(recipe)} 
                />
              ))
            ) : (
              <div className="text-center py-10 opacity-60">
                <div className="text-5xl mb-2">🍽️</div>
                <p>لا توجد وصفات تطابق بحثك</p>
                <button 
                  onClick={() => {setSearchQuery(''); setActiveFilters(initialFilters); setFilters(initialFilters);}}
                  className="mt-4 text-primary-600 font-bold text-sm"
                >
                  عرض الكل
                </button>
              </div>
            )}
          </div>
        </main>
      )}

      {/* Sticky Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-100 px-6 py-3 flex justify-around items-center z-30 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <button 
          onClick={() => setCurrentView('home')}
          className={`flex flex-col items-center gap-1 transition-colors ${currentView === 'home' ? 'text-primary-600' : 'text-gray-400 hover:text-gray-600'}`}
        >
          <Home size={24} strokeWidth={currentView === 'home' ? 2.5 : 2} />
          <span className="text-[10px] font-bold">الرئيسية</span>
        </button>

        <div className="w-px h-8 bg-gray-100"></div>

        <button 
          onClick={() => setCurrentView('filter')}
          className={`flex flex-col items-center gap-1 transition-colors ${currentView === 'filter' ? 'text-primary-600' : 'text-gray-400 hover:text-gray-600'}`}
        >
          <div className="relative">
             <FilterIcon size={24} strokeWidth={currentView === 'filter' ? 2.5 : 2} />
             {/* Red dot if filters are active */}
             {(JSON.stringify(activeFilters) !== JSON.stringify(initialFilters)) && (
               <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-primary-500 rounded-full border-2 border-white"></div>
             )}
          </div>
          <span className="text-[10px] font-bold">تصفية</span>
        </button>
      </nav>
    </div>
  );
}

export default App;
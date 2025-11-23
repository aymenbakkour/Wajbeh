import React from 'react';
import { categories, regions, mainIngredients } from '../data';
import { FilterState } from '../types';
import { X, Check, Leaf } from 'lucide-react';

interface Props {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  onApply: () => void;
  onClear: () => void;
}

const FilterPanel: React.FC<Props> = ({ filters, setFilters, onApply, onClear }) => {
  
  const handleChange = (key: keyof FilterState, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="pb-24 px-4 pt-4 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 font-cairo">تصفية النتائج</h2>
        <button onClick={onClear} className="text-sm text-red-500 font-medium">إعادة تعيين</button>
      </div>

      <div className="space-y-6">
        {/* Category */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">التصنيف</label>
          <select 
            value={filters.category} 
            onChange={(e) => handleChange('category', e.target.value)}
            className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none appearance-none"
          >
            <option value="">الكل</option>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        {/* Region */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">المنطقة</label>
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => handleChange('region', '')}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${filters.region === '' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600'}`}
            >
              الكل
            </button>
            {regions.map(r => (
              <button 
                key={r}
                onClick={() => handleChange('region', r)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${filters.region === r ? 'bg-primary-500 text-white shadow-md' : 'bg-gray-100 text-gray-600'}`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">الصعوبة</label>
          <select 
            value={filters.difficulty} 
            onChange={(e) => handleChange('difficulty', e.target.value)}
            className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none"
          >
            <option value="">الكل</option>
            <option value="سهل">سهل</option>
            <option value="متوسط">متوسط</option>
            <option value="صعب">صعب</option>
          </select>
        </div>

        {/* Vegetarian Toggle */}
        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${filters.isVegetarian ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
              <Leaf size={18} />
            </div>
            <span className="font-bold text-gray-700">نباتي فقط</span>
          </div>
          <button 
            onClick={() => handleChange('isVegetarian', !filters.isVegetarian)}
            className={`w-12 h-7 rounded-full transition-colors relative ${filters.isVegetarian ? 'bg-green-500' : 'bg-gray-300'}`}
          >
            <div className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-transform ${filters.isVegetarian ? 'left-1 translate-x-0' : 'right-1 translate-x-0'}`} />
          </button>
        </div>

        {/* Main Ingredient */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">المكون الرئيسي</label>
          <select 
            value={filters.mainIngredient} 
            onChange={(e) => handleChange('mainIngredient', e.target.value)}
            className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none"
          >
            <option value="">الكل</option>
            {mainIngredients.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
      </div>
      
      <button 
        onClick={onApply}
        className="w-full bg-primary-600 text-white font-bold py-4 rounded-xl mt-8 shadow-lg shadow-primary-200 active:scale-95 transition-transform flex justify-center items-center gap-2"
      >
        <Check size={20} />
        تطبيق الفلتر
      </button>
    </div>
  );
};

export default FilterPanel;
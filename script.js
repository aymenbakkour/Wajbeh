// --- Data ---
const recipesData = [
  {
    id: 1,
    name: "الكبة المقلية",
    icon: "🥟",
    servings: 4,
    category: "مقبلات",
    region: "حلب",
    time: "60 دقيقة",
    isVegetarian: false,
    difficulty: "صعب",
    mainIngredient: "لحم وبرغل",
    intro: "أيقونة المطبخ السوري، كرات من البرغل محشوة باللحم المفروم والمكسرات، تشتهر بها مدينة حلب.",
    ingredients: [
      "500 غرام برغل ناعم",
      "500 غرام لحم هبرة (للعجينة)",
      "500 غرام لحم مفروم (للحشوة)",
      "بصلتان مفرومتان",
      "ملعقة صغيرة بهارات مشكلة",
      "صنوبر وجوز للزينة",
      "زيت للقلي"
    ],
    steps: [
      "نقع البرغل بالماء ثم تصفيته جيداً.",
      "طحن البرغل مع اللحم الهبرة والبصل في الماكينة مرتين للحصول على عجينة متماسكة.",
      "قلي اللحم المفروم مع البصل والبهارات والمكسرات لتحضير الحشوة.",
      "تشكيل العجينة إلى كرات وتجويفها، ثم حشوها وإغلاقها بإحكام.",
      "قلي الكبة في زيت غزير ساخن حتى تصبح ذهبية اللون."
    ]
  },
  {
    id: 2,
    name: "اليبرق",
    icon: "🍃",
    servings: 4,
    category: "طبق رئيسي",
    region: "دمشق",
    time: "120 دقيقة",
    isVegetarian: false,
    difficulty: "صعب",
    mainIngredient: "ورق عنب",
    intro: "ورق العنب المحشي بالرز واللحم، يطبخ مع الليمون والثوم لإعطاء نكهة حمضية مميزة.",
    ingredients: [
      "1 كغ ورق عنب",
      "500 غرام رز قصير",
      "500 غرام لحم مفروم",
      "عصير 4 ليمونات",
      "رأس ثوم كامل",
      "ملح وفلفل أسود",
      "عظام خروف (عصاعيص) أسفل القدر"
    ],
    steps: [
      "سلق ورق العنب نصف سلقة.",
      "خلط الرز مع اللحم والبهارات.",
      "لف ورق العنب بالحشوة بشكل أصابع رفيعة.",
      "رصف العظام في قاع القدر ثم صف اليبرق فوقها.",
      "غمر القدر بالماء وعصير الليمون والثوم وطهيه على نار هادئة لساعتين."
    ]
  },
  {
    id: 3,
    name: "المجدرة",
    icon: "🍲",
    servings: 4,
    category: "طبق رئيسي",
    region: "عام",
    time: "45 دقيقة",
    isVegetarian: true,
    difficulty: "سهل",
    mainIngredient: "عدس وبرغل",
    intro: "أكلة شعبية تراثية وصحية، تتكون من العدس والبرغل وتزين بالبصل المقرمش.",
    ingredients: [
      "كوب عدس بني",
      "كوب برغل خشن",
      "3 بصلات كبار (جوانح)",
      "نصف كوب زيت زيتون",
      "ملح وكمون"
    ],
    steps: [
      "سلق العدس في الماء حتى ينضج نصف استواء.",
      "إضافة البرغل إلى العدس والملح والماء الساخن وتركه يتهدى.",
      "قلي جوانح البصل بزيت الزيتون حتى تتحمر وتقرمش.",
      "سكب الزيت فوق المجدرة وتحريكها، ثم التزيين بالبصل المقرمش."
    ]
  },
  {
    id: 4,
    name: "الكنافة النابلسية",
    icon: "🥧",
    servings: 4,
    category: "حلويات",
    region: "دمشق",
    time: "40 دقيقة",
    isVegetarian: true,
    difficulty: "متوسط",
    mainIngredient: "جبنة وعجينة كنافة",
    intro: "من أشهر الحلويات، طبقة من العجينة المقرمشة تغطي جبنة سائحة، تُسقى بالقطر الساخن.",
    ingredients: [
      "500 غرام عجينة كنافة",
      "400 غرام جبنة عكاوي (محلاة)",
      "كوب سمنة مذابة",
      "قطر بارد",
      "فستق حلبي للزينة"
    ],
    steps: [
      "فرك عجينة الكنافة بالسمنة جيداً وفرد نصفها في صينية.",
      "رص الجبنة فوق العجينة.",
      "وضع الصينية على نار هادئة مع التدوير المستمر حتى تتحمر الأطراف.",
      "قلب الصينية في صحن التقديم وسقيها بالقطر الساخن وتزيينها بالفستق."
    ]
  },
  {
    id: 5,
    name: "فتوش",
    icon: "🥗",
    servings: 4,
    category: "مقبلات",
    region: "الساحل",
    time: "20 دقيقة",
    isVegetarian: true,
    difficulty: "سهل",
    mainIngredient: "خضروات وخبز",
    intro: "سلطة غنية بالألوان والنكهات، تتميز بوجود الخبز المقلي ودبس الرمان.",
    ingredients: [
      "خس، طماطم، خيار، فجل",
      "بقدونس، نعناع، بقلة",
      "خبز عربي مقطع ومقلي",
      "زيت زيتون، ليمون، دبس رمان",
      "سماق"
    ],
    steps: [
      "غسل الخضروات جيداً وتقطيعها قطعاً متوسطة.",
      "خلط الخضروات في وعاء كبير.",
      "تحضير الصلصة بخلط الزيت والليمون ودبس الرمان والسماق.",
      "سكب الصلصة قبل التقديم مباشرة وإضافة الخبز المقلي على الوجه."
    ]
  },
  {
    id: 6,
    name: "الشاكرية",
    icon: "🥛",
    servings: 4,
    category: "طبق رئيسي",
    region: "دمشق",
    time: "90 دقيقة",
    isVegetarian: false,
    difficulty: "متوسط",
    mainIngredient: "لبن ولحم",
    intro: "قطع اللحم المطهية بصلصة اللبن المطبوخ بالنشا، تقدم بجانب الرز بالشعيرية.",
    ingredients: [
      "1 كغ لحم موزات",
      "2 كغ لبن زبادي",
      "بيضة وملعقتين نشا (للطبخ)",
      "بصل صغير كامل",
      "ملح وبهارات سلق اللحم"
    ],
    steps: [
      "سلق اللحم مع المطيبات حتى ينضج تماماً.",
      "خفق اللبن مع البيضة والنشا والملح على البارد ثم وضعه على النار.",
      "تحريك اللبن باستمرار باتجاه واحد حتى يغلي.",
      "إضافة مرق اللحم واللحم المسلوق والبصل للبن وتركه يغلي قليلاً."
    ]
  },
  {
    id: 7,
    name: "حراق إصبعه",
    icon: "🍝",
    servings: 4,
    category: "طبق رئيسي",
    region: "دمشق",
    time: "60 دقيقة",
    isVegetarian: true,
    difficulty: "متوسط",
    mainIngredient: "عدس وعجين",
    intro: "مزيج فريد من العدس والعجين والتمر هندي، مزين بالكزبرة والثوم والخبز والرمان.",
    ingredients: [
      "كوب عدس بني",
      "قطع عجين صغيرة",
      "منقوع تمر هندي",
      "بصل مقلي، كزبرة، ثوم",
      "خبز مقلي ورمان للزينة"
    ],
    steps: [
      "سلق العدس حتى ينضج.",
      "إضافة التمر هندي وقطع العجين للعدس وتركها تغلي.",
      "قدح الثوم والكزبرة بزيت الزيتون وإضافتها للقدر.",
      "سكب الخليط في طبق واسع وتزيينه بالخبز والرمان والبصل."
    ]
  },
  {
    id: 8,
    name: "شيش برك",
    icon: "🥟",
    servings: 4,
    category: "طبق رئيسي",
    region: "حماة",
    time: "90 دقيقة",
    isVegetarian: false,
    difficulty: "صعب",
    mainIngredient: "لبن وعجين",
    intro: "قبعات عجين صغيرة محشوة باللحم ومطبوخة بصلصة اللبن بالثوم والكزبرة.",
    ingredients: [
      "عجينة رقيقة",
      "لحم مفروم مقلي للحشوة",
      "2 كغ لبن مطبوخ",
      "كزبرة وثوم للتقلية"
    ],
    steps: [
      "حشو قطع العجين الصغيرة باللحم وإغلاقها كالقبعة.",
      "شوي قطع العجين بالفرن قليلاً (اختياري) أو سلقها باللبن مباشرة.",
      "طبخ اللبن (كما في الشاكرية) وإسقاط حبات الشيش برك فيه.",
      "إضافة تقلية الثوم والكزبرة على الوجه."
    ]
  },
  {
    id: 9,
    name: "الفاصولياء بالزيت",
    icon: "🥘",
    servings: 4,
    category: "مقبلات",
    region: "عام",
    time: "40 دقيقة",
    isVegetarian: true,
    difficulty: "سهل",
    mainIngredient: "فاصولياء خضراء",
    intro: "طبق صيفي بارد، فاصولياء خضراء مطهية بزيت الزيتون والطماطم والثوم.",
    ingredients: [
      "1 كغ فاصولياء خضراء",
      "5 حبات طماطم مقشرة",
      "رأس ثوم كامل",
      "نصف كوب زيت زيتون",
      "ملح وكزبرة يابسة"
    ],
    steps: [
      "تقطيع الفاصولياء وسلقها نصف سلقة.",
      "قلي الثوم بزيت الزيتون ثم إضافة الفاصولياء وتقليبها.",
      "إضافة الطماطم المفرومة والملح وتركها تتسبك على نار هادئة.",
      "تُقدم باردة وتؤكل بالخبز."
    ]
  },
  {
    id: 10,
    name: "محلاية",
    icon: "🍮",
    servings: 4,
    category: "حلويات",
    region: "دمشق",
    time: "30 دقيقة",
    isVegetarian: true,
    difficulty: "متوسط",
    mainIngredient: "حليب ونشا",
    intro: "بودينغ الحليب الغني بالمستكة وماء الزهر، يزين بالفستق والكريمة.",
    ingredients: [
      "1 ليتر حليب كامل الدسم",
      "4 ملاعق كبيرة نشا",
      "كوب سكر",
      "مستكة وماء زهر",
      "كريمة شانتيه ومكسرات للزينة"
    ],
    steps: [
      "تذويب النشا بكوب حليب بارد.",
      "غلي باقي الحليب مع السكر.",
      "إضافة خليط النشا والتحريك المستمر حتى يثخن القوام.",
      "إضافة المستكة وماء الزهر ثم السكب في زبادي صغيرة.",
      "تبريدها وتزيينها بالكريمة والمكسرات."
    ]
  },
  {
    id: 11,
    name: "مسبحة",
    icon: "🥣",
    servings: 4,
    category: "مقبلات",
    region: "دمشق",
    time: "15 دقيقة",
    isVegetarian: true,
    difficulty: "سهل",
    mainIngredient: "حمص وطحينة",
    intro: "طبق فطور أساسي، حمص ناعم مخلوط بالطحينة والحامض.",
    ingredients: [
      "2 كوب حمص مسلوق",
      "نصف كوب طحينة",
      "عصير ليمون",
      "ثوم مهروس",
      "زيت زيتون وكمون"
    ],
    steps: [
      "طحن الحمص الساخن قليلاً (أو تركه حباً حسب الرغبة).",
      "خفق الطحينة مع الليمون والثوم والملح وقليل من الماء.",
      "خلط الحمص مع صلصة الطحينة.",
      "سكبه في صحن وتزيينه بالزيت والكمون والسماق."
    ]
  },
  {
    id: 12,
    name: "شوربة العدس",
    icon: "🍜",
    servings: 4,
    category: "شوربة",
    region: "عام",
    time: "30 دقيقة",
    isVegetarian: true,
    difficulty: "سهل",
    mainIngredient: "عدس مجروش",
    intro: "شوربة دافئة ومغذية، رفيقة الشتاء وموائد رمضان.",
    ingredients: [
      "كوب عدس مجروش (أصفر أو برتقالي)",
      "بصلة مفرومة",
      "كمون وملح",
      "ملعقة سمنة",
      "خبز محمص"
    ],
    steps: [
      "قلي البصل بالسمنة حتى يذبل.",
      "إضافة العدس والماء والكمون.",
      "ترك الخليط يغلي حتى ذوبان العدس تماماً.",
      "خفق الشوربة بالخلاط لتصبح ناعمة وتقديمها مع الليمون."
    ]
  }
];

// --- State Management ---
const state = {
  view: 'home', // 'home' | 'details' | 'filter'
  searchQuery: '',
  filters: {
    category: '',
    region: '',
    difficulty: '',
    mainIngredient: '',
    isVegetarian: false
  },
  suggestedRecipeId: 1
};

// --- DOM Elements ---
const dom = {
  app: document.getElementById('app'),
  header: document.querySelector('header'),
  headerTitle: document.querySelector('header h1'),
  headerSubtitle: document.querySelector('header div.text-sm'),
  backBtn: document.getElementById('back-btn'),
  
  views: {
    home: document.getElementById('home-page'),
    details: document.getElementById('details-page'),
    filter: document.getElementById('filter-page')
  },
  
  home: {
    suggestedContainer: document.getElementById('suggested-recipe-container'),
    searchInput: document.getElementById('search-input'),
    recipesList: document.getElementById('recipes-list'),
    recipesCount: document.getElementById('recipes-count'),
    emptyState: document.getElementById('empty-state'),
    clearSearchBtn: document.getElementById('clear-search-btn')
  },
  
  nav: {
    home: document.getElementById('nav-home'),
    filter: document.getElementById('nav-filter'),
    filterBadge: document.getElementById('filter-badge')
  },
  
  filter: {
    category: document.getElementById('filter-category'),
    regionContainer: document.getElementById('filter-region-container'),
    difficulty: document.getElementById('filter-difficulty'),
    vegetarian: document.getElementById('filter-vegetarian'),
    ingredient: document.getElementById('filter-ingredient'),
    applyBtn: document.getElementById('apply-filters-btn'),
    resetBtn: document.getElementById('reset-filters-btn')
  }
};

// --- Initialization ---
function init() {
  // Populate Filter Options
  const categories = [...new Set(recipesData.map(r => r.category))];
  const regions = [...new Set(recipesData.map(r => r.region))];
  const mainIngredients = [...new Set(recipesData.map(r => r.mainIngredient))];

  categories.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c;
    opt.textContent = c;
    dom.filter.category.appendChild(opt);
  });

  const allRegionBtn = createRegionButton('الكل', '', true);
  dom.filter.regionContainer.appendChild(allRegionBtn);
  
  regions.forEach(r => {
    dom.filter.regionContainer.appendChild(createRegionButton(r, r, false));
  });

  mainIngredients.forEach(i => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = i;
    dom.filter.ingredient.appendChild(opt);
  });

  // Set Random Suggested Recipe
  refreshSuggestedRecipe();

  // Event Listeners
  dom.nav.home.addEventListener('click', () => switchView('home'));
  dom.nav.filter.addEventListener('click', () => switchView('filter'));
  
  dom.home.searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderRecipeList();
  });
  
  dom.home.clearSearchBtn.addEventListener('click', () => {
    state.searchQuery = '';
    dom.home.searchInput.value = '';
    renderRecipeList();
  });

  dom.filter.applyBtn.addEventListener('click', applyFilters);
  dom.filter.resetBtn.addEventListener('click', resetFilters);
  dom.backBtn.addEventListener('click', () => switchView('home'));

  // Initial Render
  renderRecipeList();
  updateNavState();
}

function createRegionButton(label, value, isActive) {
  const btn = document.createElement('button');
  btn.textContent = label;
  btn.dataset.value = value;
  btn.className = `px-4 py-2 rounded-full text-sm transition-colors ${isActive ? 'bg-primary-500 text-white shadow-md' : 'bg-gray-100 text-gray-600'}`;
  
  btn.addEventListener('click', () => {
    // Toggle active visual state locally (state is updated on Apply)
    Array.from(dom.filter.regionContainer.children).forEach(b => {
      b.className = 'px-4 py-2 rounded-full text-sm transition-colors bg-gray-100 text-gray-600';
    });
    btn.className = 'px-4 py-2 rounded-full text-sm transition-colors bg-primary-500 text-white shadow-md';
    
    // Temporarily store selected region in a data attribute on the container for retrieval
    dom.filter.regionContainer.dataset.selected = value;
  });
  
  return btn;
}

// --- Logic & Rendering ---

function refreshSuggestedRecipe() {
  const randomId = recipesData[Math.floor(Math.random() * recipesData.length)].id;
  state.suggestedRecipeId = randomId;
  renderSuggestedRecipe();
}

function renderSuggestedRecipe() {
  const recipe = recipesData.find(r => r.id === state.suggestedRecipeId);
  if (!recipe) return;

  const html = `
    <div class="mb-6 relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-white p-5 shadow-lg shadow-primary-200">
      <div class="absolute top-0 left-0 w-full h-full opacity-10" style="background-image: url('https://www.transparenttextures.com/patterns/arabesque.png');"></div>
      
      <div class="relative z-10">
        <div class="flex justify-between items-start mb-2">
          <span class="bg-white/20 backdrop-blur-sm text-xs px-2 py-1 rounded-lg flex items-center gap-1">
            <i class="fa-solid fa-star text-[10px]"></i> وجبة اليوم المقترحة
          </span>
          <button id="refresh-suggested-btn" class="p-1.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors w-8 h-8 flex items-center justify-center">
            <i class="fa-solid fa-rotate text-sm"></i>
          </button>
        </div>

        <div class="flex items-center gap-4 mt-2">
          <div class="text-5xl bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            ${recipe.icon}
          </div>
          <div>
            <h2 class="text-2xl font-bold font-cairo leading-tight mb-1">${recipe.name}</h2>
            <p class="text-primary-100 text-sm opacity-90 truncate max-w-[200px]">${recipe.category} • ${recipe.time}</p>
          </div>
        </div>

        <button onclick="showRecipeDetails(${recipe.id})" class="mt-4 w-full py-2 bg-white text-primary-700 font-bold rounded-xl text-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
          عرض الوصفة <i class="fa-solid fa-arrow-left"></i>
        </button>
      </div>
    </div>
  `;
  
  dom.home.suggestedContainer.innerHTML = html;
  
  // Re-attach event listener for refresh button since innerHTML wiped it
  document.getElementById('refresh-suggested-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    refreshSuggestedRecipe();
  });
}

function renderRecipeList() {
  const query = state.searchQuery.trim().toLowerCase();
  
  const filtered = recipesData.filter(recipe => {
    // Search
    const matchesSearch = 
      recipe.name.includes(query) || 
      recipe.region.includes(query) || 
      recipe.ingredients.some(ing => ing.includes(query));

    if (!matchesSearch) return false;

    // Filters
    if (state.filters.category && recipe.category !== state.filters.category) return false;
    if (state.filters.region && recipe.region !== state.filters.region) return false;
    if (state.filters.difficulty && recipe.difficulty !== state.filters.difficulty) return false;
    if (state.filters.mainIngredient && recipe.mainIngredient !== state.filters.mainIngredient) return false;
    if (state.filters.isVegetarian && !recipe.isVegetarian) return false;

    return true;
  });

  dom.home.recipesCount.textContent = `${filtered.length} وصفة`;
  dom.home.recipesList.innerHTML = '';

  if (filtered.length === 0) {
    dom.home.emptyState.classList.remove('hidden');
  } else {
    dom.home.emptyState.classList.add('hidden');
    
    filtered.forEach(recipe => {
      const el = document.createElement('div');
      el.onclick = () => showRecipeDetails(recipe.id);
      el.className = "bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex items-center gap-4 active:scale-95 transition-transform duration-200 cursor-pointer hover:shadow-md";
      
      const difficultyColor = 
        recipe.difficulty === 'سهل' ? 'bg-green-100 text-green-700' :
        recipe.difficulty === 'متوسط' ? 'bg-yellow-100 text-yellow-700' :
        'bg-red-100 text-red-700';

      el.innerHTML = `
        <div class="flex-shrink-0 w-20 h-20 bg-primary-50 rounded-2xl flex items-center justify-center text-4xl shadow-inner">
          ${recipe.icon}
        </div>
        
        <div class="flex-1 min-w-0">
          <div class="flex justify-between items-start">
            <h3 class="text-lg font-bold text-gray-800 truncate font-cairo">${recipe.name}</h3>
            <span class="text-xs px-2 py-1 rounded-full ${difficultyColor}">
              ${recipe.difficulty}
            </span>
          </div>
          
          <p class="text-sm text-gray-500 mb-2 truncate">${recipe.category} • ${recipe.region}</p>
          
          <div class="flex items-center gap-4 text-gray-400 text-xs">
            <div class="flex items-center gap-1">
              <i class="fa-regular fa-clock"></i>
              <span>${recipe.time}</span>
            </div>
            <div class="flex items-center gap-1">
              <i class="fa-solid fa-user-group"></i>
              <span>${recipe.servings} أشخاص</span>
            </div>
          </div>
        </div>
      `;
      
      dom.home.recipesList.appendChild(el);
    });
  }
}

// Global scope wrapper for onclick
window.showRecipeDetails = function(id) {
  const recipe = recipesData.find(r => r.id === id);
  if (!recipe) return;
  
  const vegBadge = recipe.isVegetarian 
    ? `<span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium flex items-center gap-1"><i class="fa-solid fa-leaf"></i> نباتي</span>` 
    : '';
    
  const diffColor = recipe.difficulty === 'صعب' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700';

  const html = `
    <!-- Hero Section -->
    <div class="p-6 flex flex-col items-center bg-gradient-to-b from-primary-50 to-white">
      <div class="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center text-6xl mb-4 border-4 border-white">
        ${recipe.icon}
      </div>
      <h1 class="text-2xl font-bold text-gray-800 font-cairo mb-2">${recipe.name}</h1>
      <p class="text-center text-gray-600 leading-relaxed font-amiri text-lg max-w-md">
        ${recipe.intro}
      </p>
      
      <div class="grid grid-cols-3 gap-3 w-full mt-6">
        <div class="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
          <i class="fa-regular fa-clock text-primary-500 mb-1"></i>
          <span class="text-xs text-gray-400">الوقت</span>
          <span class="font-bold text-gray-700 text-sm">${recipe.time}</span>
        </div>
        <div class="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
          <i class="fa-solid fa-user-group text-primary-500 mb-1"></i>
          <span class="text-xs text-gray-400">الكمية</span>
          <span class="font-bold text-gray-700 text-sm">${recipe.servings}</span>
        </div>
        <div class="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
          <i class="fa-solid fa-location-dot text-primary-500 mb-1"></i>
          <span class="text-xs text-gray-400">المنطقة</span>
          <span class="font-bold text-gray-700 text-sm">${recipe.region}</span>
        </div>
      </div>
    </div>

    <!-- Tags -->
    <div class="px-6 py-2 flex gap-2 flex-wrap justify-center">
      ${vegBadge}
      <span class="px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${diffColor}">
        <i class="fa-solid fa-fire"></i> ${recipe.difficulty}
      </span>
    </div>

    <!-- Content -->
    <div class="px-6 mt-6 space-y-8">
      
      <!-- Ingredients -->
      <div class="bg-gray-50 rounded-2xl p-5 border border-gray-100">
        <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 font-cairo">
          <div class="w-1 h-6 bg-primary-500 rounded-full"></div>
          المقادير
        </h2>
        <ul class="space-y-3">
          ${recipe.ingredients.map(ing => `
            <li class="flex items-start gap-3 text-gray-700 font-amiri text-lg">
              <span class="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2.5 flex-shrink-0"></span>
              <span>${ing}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- Steps -->
      <div>
        <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 font-cairo">
          <div class="w-1 h-6 bg-primary-500 rounded-full"></div>
          طريقة التحضير
        </h2>
        <div class="space-y-6">
          ${recipe.steps.map((step, idx) => `
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold font-cairo shadow-sm">
                ${idx + 1}
              </div>
              <p class="text-gray-700 leading-relaxed font-amiri text-lg pt-0.5">
                ${step}
              </p>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="bg-blue-50 p-4 rounded-xl text-center text-blue-800 text-sm font-medium">
        صحتين وعافية! 🥘
      </div>
    </div>
  `;
  
  dom.views.details.innerHTML = html;
  
  // Header Adjustments
  dom.backBtn.classList.remove('hidden');
  dom.headerTitle.classList.add('hidden'); // Hide logo text on detail
  dom.headerSubtitle.classList.add('hidden'); // Hide subtitle
  
  switchView('details');
  window.scrollTo(0, 0);
};

function switchView(viewName) {
  state.view = viewName;
  
  // Hide all
  Object.values(dom.views).forEach(el => el.classList.add('hidden'));
  
  // Show target
  dom.views[viewName].classList.remove('hidden');
  
  updateNavState();
  
  // Specific logic
  if (viewName !== 'details') {
    dom.backBtn.classList.add('hidden');
    dom.headerTitle.classList.remove('hidden');
    dom.headerSubtitle.classList.remove('hidden');
  }
}

function updateNavState() {
  // Simple check based on view
  dom.nav.home.classList.remove('text-primary-600');
  dom.nav.home.classList.add('text-gray-400');
  
  dom.nav.filter.classList.remove('text-primary-600');
  dom.nav.filter.classList.add('text-gray-400');

  if (state.view === 'home' || state.view === 'details') {
    dom.nav.home.classList.add('text-primary-600');
    dom.nav.home.classList.remove('text-gray-400');
  } else if (state.view === 'filter') {
    dom.nav.filter.classList.add('text-primary-600');
    dom.nav.filter.classList.remove('text-gray-400');
  }
  
  // Badge logic
  const isFiltered = Object.values(state.filters).some(v => v !== '' && v !== false);
  if (isFiltered) {
    dom.nav.filterBadge.classList.remove('hidden');
  } else {
    dom.nav.filterBadge.classList.add('hidden');
  }
}

function applyFilters() {
  const selectedRegion = dom.filter.regionContainer.dataset.selected || '';
  
  state.filters = {
    category: dom.filter.category.value,
    region: selectedRegion,
    difficulty: dom.filter.difficulty.value,
    mainIngredient: dom.filter.ingredient.value,
    isVegetarian: dom.filter.vegetarian.checked
  };
  
  switchView('home');
  renderRecipeList();
}

function resetFilters() {
  // Reset DOM
  dom.filter.category.value = '';
  dom.filter.difficulty.value = '';
  dom.filter.ingredient.value = '';
  dom.filter.vegetarian.checked = false;
  
  // Reset Region Buttons
  Array.from(dom.filter.regionContainer.children).forEach(b => {
    b.className = 'px-4 py-2 rounded-full text-sm transition-colors bg-gray-100 text-gray-600';
  });
  dom.filter.regionContainer.dataset.selected = '';
  // Highlight "All" button (first one)
  if(dom.filter.regionContainer.firstChild) {
     dom.filter.regionContainer.firstChild.className = 'px-4 py-2 rounded-full text-sm transition-colors bg-primary-500 text-white shadow-md';
  }

  // Reset State
  state.filters = {
    category: '',
    region: '',
    difficulty: '',
    mainIngredient: '',
    isVegetarian: false
  };
  
  renderRecipeList();
  updateNavState();
}

// Start
init();
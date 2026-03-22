import type { Lang } from '../types';
export type { Lang };
export type Locale = Lang;
import { homeUI } from './home';
import { aboutUI } from './about';
import { dataUI } from './data';

export const languages: Record<Lang, string> = {
  en: 'English',
  'zh-TW': '中文',
  es: 'Español',
};

export const localeNames: Record<Lang, string> = {
  'zh-TW': '中文',
  en: 'English',
  es: 'Español',
};

export const localeFlags: Record<Lang, string> = {
  'zh-TW': '🇹🇼',
  en: '🇬🇧',
  es: '🇪🇸',
};

export const defaultLang: Lang = 'zh-TW';
export const showDefaultLang = false;

export const ui = {
  en: {
    ...homeUI.en,
    ...aboutUI.en,
    ...dataUI.en,
    'nav.aria-home': 'Taiwan.md Home',
    'nav.aria-img-label': 'Taiwan.md logo',
    'nav.aria-toggle-menu': 'Toggle navigation menu',
    'nav.aria-main-navigation': 'Main navigation',
    'nav.aria-mobile-navigation': 'Mobile navigation',
    'nav.aria-search': 'Search',
    'nav.aria-language-selection': 'Language selection',
    'nav.aria-switch-to-zh-tw': 'Switch to Traditional Chinese',
    'nav.aria-switch-to-en': 'Switch to English',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.twitter': 'Twitter',
    'nav.explore': '🕸️ Knowledge Graph',
    'nav.graph': '🕸️ Graph',
    'nav.graph-view': 'Knowledge Graph',
    'nav.map': '📍 Map',
    'nav.contribute': '✋ Contribute',
    'nav.resources': '🔗 Resources',
    'nav.data': '📊 Data Taiwan',
    'nav.soundscape': '🎧 Soundscape',
    'nav.assets': 'SVG Assets',
    'nav.projects': 'Projects',
    'nav.language-switch': 'Language',
    'nav.search-modal.input-placeholder': 'Search articles',
    'nav.search-modal.type-to-search': 'Type to search across all articles',
    'footer.explore': 'Explore',
    'footer.history': 'History',
    'footer.culture': 'Culture',
    'footer.food': 'Food',
    'footer.technology': 'Technology',
    'footer.nature': 'Nature',
    'footer.society': 'Society',
    'footer.project': 'Project',
    'footer.about': 'About',
    'footer.graph': 'Knowledge Graph',
    'footer.contribute': 'Contribute Guide',
    'footer.changelog': 'Update History',
    'footer.contact': 'Connect',
    'footer.report': 'Report Issue',
    'footer.discuss': 'Discussions',
    'footer.desc': 'Open-source, AI-friendly knowledge base about Taiwan',
    'footer.support-us': 'Support us',
    'footer.font-sponsor-prefix': 'Web fonts sponsored by',
    'footer.font-sponsor-suffix': ' ',
    'categoryConfig.history': 'History',
    'categoryConfig.geography': 'Geography',
    'categoryConfig.culture': 'Culture',
    'categoryConfig.food': 'Food',
    'categoryConfig.art': 'Art',
    'categoryConfig.music': 'Music',
    'categoryConfig.technology': 'Technology',
    'categoryConfig.nature': 'Nature',
    'categoryConfig.people': 'People',
    'categoryConfig.society': 'Society',
    'categoryConfig.economy': 'Economy',
    'categoryConfig.lifestyle': 'Lifestyle',
    'categoryConfig.history.description':
      "The complete timeline of Taiwan's history from prehistoric times to the present",
    'categoryConfig.geography.description':
      "Taiwan's natural environment, topographic features, and regional development",
    'categoryConfig.culture.description':
      'The fusion of diverse ethnic cultures and local characteristics',
    'categoryConfig.food.description':
      'Culinary culture from night market snacks to fine dining',
    'categoryConfig.art.description':
      'Creative energy from traditional crafts to contemporary art',
    'categoryConfig.music.description':
      'The soundscape from indigenous music to popular music',
    'categoryConfig.technology.description':
      'Innovation and digital transformation of the tech island',
    'categoryConfig.nature.description':
      'Rich ecosystems and environmental issues',
    'categoryConfig.people.description':
      "Important figures and stories that shaped Taiwan's development",
    'categoryConfig.society.description':
      'In-depth exploration of social changes and contemporary issues',
    'categoryConfig.economy.description':
      'The origins of the economic miracle and transformation challenges',
    'categoryConfig.lifestyle.description':
      'Lifestyle and values of the Taiwanese people',
    'CategoryGrid.article': 'article',
    'CategoryGrid.articles': 'articles',
    'CategoryGrid.explore': 'explore',
    'CategoryGrid.aria-section': 'Taiwan knowledge categories',
    'CategoryGrid.aria-explore': 'Explore',
    'CategoryGrid.aria-explore-suffix': ' ',
    'CategoryGrid.alt-category-image-suffix': 'category image',
    // Nav extras
    'nav.language': 'Language',
    'nav.journey': '🗺️ Journey',
    'nav.random': '🎲 Random',
    'nav.search': 'Search',
    'nav.topics': '📚 Topics',
    'nav.changelog': 'Changelog',
    // Hero
    'hero.title': 'Discover Taiwan',
    'hero.subtitle': 'Stories, culture, and knowledge from the heart of Asia',
    'hero.description': 'An open knowledge base built by the community',
    'hero.cta.journey': 'Start Your Journey',
    'hero.cta.map': 'Explore the Map',
    // Journey section
    'journey.title': 'Begin Your Journey',
    'journey.subtitle': 'Choose your path',
    'journey.begin': 'Start Exploring',
    'journey.nature.title': 'Nature & Landscape',
    'journey.nature.desc':
      "From Taroko Gorge to Yushan, explore Taiwan's stunning natural world",
    'journey.history.title': 'History & Society',
    'journey.history.desc':
      "Trace the arc of Taiwan's story from ancient times to today",
    'journey.culture.title': 'Culture & Arts',
    'journey.culture.desc':
      'Dive into the rich tapestry of Taiwanese traditions and creativity',
    'journey.flavors.title': 'Flavors of Taiwan',
    'journey.flavors.desc':
      "From night market classics to fine dining, taste Taiwan's culinary soul",
    // Article page
    'article.toc': 'Table of Contents',
    'article.sources': 'Sources',
    'article.furtherReading': 'Further Reading',
    'article.moreInCategory': 'More in this category',
    'article.moreAspects': 'More aspects of Taiwan',
    'article.backToCategory': 'Back to category',
    'article.backToHome': 'Back to home',
    'article.home': 'Home',
    'article.share': 'Share',
    'article.shareLabel': 'Share this article',
    'article.copyLink': 'Copy link',
    'article.copied': 'Copied!',
    'article.editPage': 'Edit this page',
    'article.reportIssue': 'Report an issue',
    'article.randomExplore': 'Random article',
    'article.exploreTaiwan': 'Explore Taiwan',
    'article.startExplore': 'Start exploring',
    'article.viewAll': 'View all',
    'article.articles': 'articles',
    'article.langLabel': 'Language',
    'article.disclaimer.title': 'About this article',
    'article.disclaimer.body':
      'This article was collaboratively written with AI assistance and community review.',
    'article.tts.play': 'Listen',
    'article.tts.stop': 'Stop',
    // Categories shorthand
    'cat.history': 'History',
    'cat.geography': 'Geography',
    'cat.culture': 'Culture',
    'cat.food': 'Food',
    'cat.art': 'Art',
    'cat.music': 'Music',
    'cat.technology': 'Technology',
    'cat.nature': 'Nature',
    'cat.people': 'People',
    'cat.society': 'Society',
    'cat.economy': 'Economy',
    'cat.lifestyle': 'Lifestyle',
    'cat.cta': 'Explore all articles',
    // Footer extras
    'footer.built': 'Built with ❤️ for Taiwan',
    'footer.connect': 'Connect',
    'footer.support': 'Support',
    // Search
    'search.placeholder': 'Search articles...',
    'search.hint': 'Press Enter to search',
    // Welcome modal
    'welcome.title': 'Welcome to Taiwan.md',
    'welcome.slide1':
      'An open-source knowledge base about Taiwan, built by the community',
    'welcome.slide2': 'Curated Journeys',
    'welcome.slide3': 'Interactive Map',
    'welcome.slide4': 'Multiple Languages',
    'welcome.next': 'Next',
    'welcome.skip': 'Skip',
    // Side tools
    'tools.currency': 'Currency',
    'tools.tips': 'Travel Tips',
  },
  'zh-TW': {
    ...homeUI['zh-TW'],
    ...aboutUI['zh-TW'],
    ...dataUI['zh-TW'],
    'nav.aria-home': 'Taiwan.md 首頁',
    'nav.aria-img-label': 'Taiwan.md 標誌圖示',
    'nav.aria-toggle-menu': '開啟/關閉導航選單',
    'nav.aria-main-navigation': '主要導航',
    'nav.aria-mobile-navigation': '行動裝置導航',
    'nav.aria-search': '搜尋',
    'nav.aria-language-selection': '語言選擇',
    'nav.aria-switch-to-zh-tw': '切換至繁體中文',
    'nav.aria-switch-to-en': '切換至英文',
    'nav.home': '首頁',
    'nav.about': '關於',
    'nav.twitter': '推特',
    'nav.explore': '🕸️ 知識圖譜',
    'nav.graph': '🕸️ 圖譜',
    'nav.graph-view': '知識圖譜',
    'nav.map': '📍 地理台灣',
    'nav.contribute': '✋ 參與專案',
    'nav.resources': '🔗 延伸資源',
    'nav.data': '📊 數據台灣',
    'nav.soundscape': '🎧 聲景',
    'nav.assets': 'SVG 素材',
    'nav.projects': '專案',
    'nav.language-switch': '語言 / Language',
    'nav.search-modal.input-placeholder': '搜尋文章',
    'nav.search-modal.type-to-search': '輸入關鍵字搜尋所有文章',
    'footer.explore': '探索',
    'footer.history': '歷史',
    'footer.culture': '文化',
    'footer.food': '美食',
    'footer.technology': '科技',
    'footer.nature': '自然',
    'footer.society': '社會',
    'footer.project': '專案',
    'footer.about': '關於',
    'footer.graph': '知識圖譜',
    'footer.contribute': '貢獻指南',
    'footer.changelog': '更新紀錄',
    'footer.contact': '聯繫',
    'footer.report': '回報問題',
    'footer.discuss': '討論區',
    'footer.desc': '開源、AI-friendly 的台灣知識庫',
    'footer.support-us': '支持我們',
    'footer.font-sponsor-prefix': '字體由',
    'footer.font-sponsor-suffix': '提供',
    'categoryConfig.history': '歷史',
    'categoryConfig.geography': '地理',
    'categoryConfig.culture': '文化',
    'categoryConfig.food': '美食',
    'categoryConfig.art': '藝術',
    'categoryConfig.music': '音樂',
    'categoryConfig.technology': '科技',
    'categoryConfig.nature': '自然',
    'categoryConfig.people': '人物',
    'categoryConfig.society': '社會',
    'categoryConfig.economy': '經濟',
    'categoryConfig.lifestyle': '生活',
    'categoryConfig.history.description':
      '從史前時代到現代，台灣歷史的完整脈絡',
    'categoryConfig.geography.description':
      '台灣的自然環境、地形特色與區域發展',
    'categoryConfig.culture.description': '多元族群文化的融合與在地特色',
    'categoryConfig.food.description': '從夜市小吃到精緻料理的美食文化',
    'categoryConfig.art.description': '傳統工藝到當代藝術的創作能量',
    'categoryConfig.music.description': '從原住民音樂到流行音樂的聲音風景',
    'categoryConfig.technology.description': '科技島的創新發展與數位轉型',
    'categoryConfig.nature.description': '豐富的生態環境與環保議題',
    'categoryConfig.people.description': '影響台灣發展的重要人物與故事',
    'categoryConfig.society.description': '社會變遷與當代議題的深度探討',
    'categoryConfig.economy.description': '經濟奇蹟的成因與轉型挑戰',
    'categoryConfig.lifestyle.description': '台灣人的生活方式與價值觀',
    'CategoryGrid.article': '篇',
    'CategoryGrid.articles': '篇',
    'CategoryGrid.explore': '探索',
    'CategoryGrid.aria-section': '台灣知識分類',
    'CategoryGrid.aria-explore': '探索',
    'CategoryGrid.aria-explore-suffix': '主題',
    'CategoryGrid.alt-category-image-suffix': '主題相關圖片',
    // Nav extras
    'nav.language': '語言',
    'nav.journey': '🗺️ 旅途',
    'nav.random': '🎲 隨機探索',
    'nav.search': '搜尋',
    'nav.topics': '📚 主題',
    'nav.changelog': '更新紀錄',
    // Hero
    'hero.title': '探索台灣',
    'hero.subtitle': '來自亞洲心臟的故事、文化與知識',
    'hero.description': '由社群共同建立的開放知識庫',
    'hero.cta.journey': '開始旅途',
    'hero.cta.map': '探索地圖',
    // Journey section
    'journey.title': '開始你的旅途',
    'journey.subtitle': '選擇你的路徑',
    'journey.begin': '開始探索',
    'journey.nature.title': '自然與地景',
    'journey.nature.desc': '從太魯閣到玉山，探索台灣令人驚嘆的自然世界',
    'journey.history.title': '歷史與社會',
    'journey.history.desc': '追溯台灣從古代到今日的歷史軌跡',
    'journey.culture.title': '文化與藝術',
    'journey.culture.desc': '深入台灣傳統與創意的豐富織錦',
    'journey.flavors.title': '台灣味道',
    'journey.flavors.desc': '從夜市經典到精緻料理，品味台灣的飲食靈魂',
    // Article page
    'article.toc': '目錄',
    'article.sources': '參考資料',
    'article.furtherReading': '延伸閱讀',
    'article.moreInCategory': '同分類更多文章',
    'article.moreAspects': '更多台灣面向',
    'article.backToCategory': '回到分類',
    'article.backToHome': '回到首頁',
    'article.home': '首頁',
    'article.share': '分享',
    'article.shareLabel': '分享這篇文章',
    'article.copyLink': '複製連結',
    'article.copied': '已複製！',
    'article.editPage': '編輯此頁',
    'article.reportIssue': '回報問題',
    'article.randomExplore': '隨機文章',
    'article.exploreTaiwan': '探索台灣',
    'article.startExplore': '開始探索',
    'article.viewAll': '查看全部',
    'article.articles': '篇文章',
    'article.langLabel': '語言',
    'article.disclaimer.title': '關於此文章',
    'article.disclaimer.body': '本文章由社群協作，並經 AI 輔助撰寫與審查。',
    'article.tts.play': '朗讀',
    'article.tts.stop': '停止',
    // Categories shorthand
    'cat.history': '歷史',
    'cat.geography': '地理',
    'cat.culture': '文化',
    'cat.food': '美食',
    'cat.art': '藝術',
    'cat.music': '音樂',
    'cat.technology': '科技',
    'cat.nature': '自然',
    'cat.people': '人物',
    'cat.society': '社會',
    'cat.economy': '經濟',
    'cat.lifestyle': '生活',
    'cat.cta': '探索所有文章',
    // Footer extras
    'footer.built': '用 ❤️ 為台灣而建',
    'footer.connect': '聯繫',
    'footer.support': '支持我們',
    // Search
    'search.placeholder': '搜尋文章...',
    'search.hint': '按 Enter 搜尋',
    // Welcome modal
    'welcome.title': '歡迎來到 Taiwan.md',
    'welcome.slide1': '由社群共建的台灣開源知識庫',
    'welcome.slide2': '策展旅途',
    'welcome.slide3': '互動地圖',
    'welcome.slide4': '多語言支援',
    'welcome.next': '下一步',
    'welcome.skip': '跳過',
    // Side tools
    'tools.currency': '匯率換算',
    'tools.tips': '旅遊小貼士',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.map': '📍 Mapa',
    'nav.contribute': '✋ Contribuir',
    'nav.about': 'Acerca de',
    'nav.graph': '🕸️ Grafo',
    'nav.graph-view': 'Grafo de Conocimiento',
    'nav.resources': '🔗 Recursos',
    'nav.data': '📊 Datos',
    'nav.assets': 'Recursos SVG',
    'nav.projects': 'Proyectos',
    'nav.language-switch': 'Idioma',
    'nav.search-modal.input-placeholder': 'Buscar artículos...',
    'nav.search-modal.type-to-search':
      'Escribe para buscar en todos los artículos',
    'footer.explore': 'Explorar',
    'footer.project': 'Proyecto',
    'footer.about': 'Acerca de',
    'footer.graph': 'Grafo de Conocimiento',
    'footer.contribute': 'Guía de Contribución',
    'footer.changelog': 'Historial de Actualizaciones',
    'footer.contact': 'Contacto',
    'footer.report': 'Reportar Problema',
    'footer.discuss': 'Discusiones',
    'footer.desc': 'Base de conocimiento de código abierto sobre Taiwán',
    'footer.support-us': 'Apóyanos',
    'footer.font-sponsor-prefix': 'Fuentes web patrocinadas por',
    'footer.font-sponsor-suffix': ' ',
    'categoryConfig.history': 'Historia',
    'categoryConfig.geography': 'Geografía',
    'categoryConfig.culture': 'Cultura',
    'categoryConfig.food': 'Gastronomía',
    'categoryConfig.art': 'Arte',
    'categoryConfig.music': 'Música',
    'categoryConfig.technology': 'Tecnología',
    'categoryConfig.nature': 'Naturaleza',
    'categoryConfig.people': 'Personas',
    'categoryConfig.society': 'Sociedad',
    'categoryConfig.economy': 'Economía',
    'categoryConfig.lifestyle': 'Estilo de Vida',
    'categoryConfig.history.description':
      'De la prehistoria al presente, el hilo completo de la historia taiwanesa',
    'categoryConfig.geography.description':
      'El entorno natural, relieve y desarrollo regional de Taiwán',
    'categoryConfig.culture.description':
      'La fusión de tradiciones indígenas, chinas y contemporáneas',
    'categoryConfig.food.description':
      'Del bocadillo callejero a la alta cocina, el alma culinaria de Taiwán',
    'categoryConfig.art.description':
      'De la artesanía ancestral al arte contemporáneo, pura energía creativa',
    'categoryConfig.music.description':
      'Del canto indígena al Mandopop, el paisaje sonoro de la isla',
    'categoryConfig.technology.description':
      'Innovación y transformación digital en la isla tecnológica del mundo',
    'categoryConfig.nature.description':
      'Ecosistemas únicos, parques nacionales y biodiversidad insular',
    'categoryConfig.people.description':
      'Figuras extraordinarias que forjaron el destino de Taiwán',
    'categoryConfig.society.description':
      'Cambio social, movimientos ciudadanos y debates contemporáneos',
    'categoryConfig.economy.description':
      'El milagro económico asiático y sus retos actuales',
    'categoryConfig.lifestyle.description':
      'El modo de vida, los valores y el pulso cotidiano del pueblo taiwanés',
    'CategoryGrid.article': 'artículo',
    'CategoryGrid.articles': 'artículos',
    'CategoryGrid.explore': 'explorar',
    'CategoryGrid.aria-section': 'Categorías de conocimiento sobre Taiwán',
    'CategoryGrid.aria-explore': 'Explorar',
    'CategoryGrid.aria-explore-suffix': ' ',
    'CategoryGrid.alt-category-image-suffix': 'imagen de categoría',
    // Nav extras
    'nav.language': 'Idioma',
    'nav.journey': '🗺️ Recorrido',
    'nav.random': '🎲 Aleatorio',
    'nav.search': 'Buscar',
    'nav.topics': '📚 Temas',
    'nav.changelog': 'Historial',
    // Hero
    'hero.title': 'Descubre Taiwán',
    'hero.subtitle':
      'Historias, cultura y conocimiento desde el corazón de Asia',
    'hero.description':
      'Una base de conocimiento abierta construida por la comunidad',
    'hero.cta.journey': 'Comenzar el Recorrido',
    'hero.cta.map': 'Explorar el Mapa',
    // Journey section
    'journey.title': 'Comienza tu Recorrido',
    'journey.subtitle': 'Elige tu camino',
    'journey.begin': 'Explorar',
    'journey.nature.title': 'Naturaleza y Paisaje',
    'journey.nature.desc':
      'De Taroko a Yushan, explora el impresionante mundo natural de Taiwán',
    'journey.history.title': 'Historia y Sociedad',
    'journey.history.desc':
      'Recorre el arco de la historia de Taiwán desde la antigüedad hasta hoy',
    'journey.culture.title': 'Cultura y Artes',
    'journey.culture.desc':
      'Sumérgete en el rico tapiz de las tradiciones y la creatividad taiwanesa',
    'journey.flavors.title': 'Sabores de Taiwán',
    'journey.flavors.desc':
      'De los clásicos del mercado nocturno a la alta cocina, saborea el alma culinaria de Taiwán',
    // Article page
    'article.toc': 'Índice',
    'article.sources': 'Fuentes',
    'article.furtherReading': 'Lectura Adicional',
    'article.moreInCategory': 'Más en esta categoría',
    'article.moreAspects': 'Más aspectos de Taiwán',
    'article.backToCategory': 'Volver a la categoría',
    'article.backToHome': 'Volver al inicio',
    'article.home': 'Inicio',
    'article.share': 'Compartir',
    'article.shareLabel': 'Compartir este artículo',
    'article.copyLink': 'Copiar enlace',
    'article.copied': '¡Copiado!',
    'article.editPage': 'Editar esta página',
    'article.reportIssue': 'Reportar un problema',
    'article.randomExplore': 'Artículo aleatorio',
    'article.exploreTaiwan': 'Explorar Taiwán',
    'article.startExplore': 'Comenzar a explorar',
    'article.viewAll': 'Ver todo',
    'article.articles': 'artículos',
    'article.langLabel': 'Idioma',
    'article.disclaimer.title': 'Sobre este artículo',
    'article.disclaimer.body':
      'Este artículo fue escrito en colaboración con asistencia de IA y revisión comunitaria.',
    'article.tts.play': 'Escuchar',
    'article.tts.stop': 'Detener',
    // Categories shorthand
    'cat.history': 'Historia',
    'cat.geography': 'Geografía',
    'cat.culture': 'Cultura',
    'cat.food': 'Gastronomía',
    'cat.art': 'Arte',
    'cat.music': 'Música',
    'cat.technology': 'Tecnología',
    'cat.nature': 'Naturaleza',
    'cat.people': 'Personas',
    'cat.society': 'Sociedad',
    'cat.economy': 'Economía',
    'cat.lifestyle': 'Estilo de vida',
    'cat.cta': 'Explorar todos los artículos',
    // Footer extras
    'footer.built': 'Construido con ❤️ para Taiwán',
    'footer.connect': 'Conectar',
    'footer.support': 'Apoyar',
    // Search
    'search.placeholder': 'Buscar artículos...',
    'search.hint': 'Pulsa Enter para buscar',
    // Welcome modal
    'welcome.title': 'Bienvenido a Taiwan.md',
    'welcome.slide1':
      'Una base de conocimiento de código abierto sobre Taiwán, construida por la comunidad',
    'welcome.slide2': 'Recorridos Curados',
    'welcome.slide3': 'Mapa Interactivo',
    'welcome.slide4': 'Múltiples Idiomas',
    'welcome.next': 'Siguiente',
    'welcome.skip': 'Saltar',
    // Side tools
    'tools.currency': 'Moneda',
    'tools.tips': 'Consejos de Viaje',
  },
} as const;

// Utility functions for ES locale support
export function getLangPrefix(lang: Lang): string {
  if (lang === 'zh-TW') return '';
  return `/${lang}`;
}

export function getLocaleFromPath(path: string): Lang {
  if (path.startsWith('/en')) return 'en';
  if (path.startsWith('/es')) return 'es';
  return 'zh-TW';
}

export function getActiveLocales(): Lang[] {
  return ['zh-TW', 'en', 'es'];
}

export function t(key: string, lang: Lang = defaultLang): string {
  const localeStrings = ui[lang] as Record<string, string> | undefined;
  if (localeStrings && key in localeStrings) {
    return localeStrings[key];
  }
  if (lang !== 'en' && key in ui.en) {
    return ui.en[key as keyof typeof ui.en];
  }
  if (key in ui['zh-TW']) {
    return ui['zh-TW'][key as keyof (typeof ui)['zh-TW']];
  }
  return key;
}

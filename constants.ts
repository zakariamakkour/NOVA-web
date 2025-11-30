/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product, JournalArticle, Language, Currency } from './types';

// --- Currency Configuration ---
export const EXCHANGE_RATES: Record<Currency, number> = {
  USD: 1,
  EUR: 0.92,
  MAD: 10.0 // Approx rate
};

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  USD: '$',
  EUR: '€',
  MAD: 'DH '
};

export const formatPrice = (priceInUSD: number, currency: Currency): string => {
  const rate = EXCHANGE_RATES[currency];
  const value = priceInUSD * rate;
  return `${CURRENCY_SYMBOLS[currency]}${value.toFixed(2)}`;
};

// --- Global Translations ---
export const TRANSLATIONS = {
  en: {
    hero: {
      tag: 'Future Collection 2025',
      title1: 'Quiet',
      title2: 'Evolution.',
      subtitle: 'Technology designed to amplify your potential. Seamless integration, intelligent response, limitless horizon.',
      cta: 'Explore the Future',
    },
    about: {
      title: 'Born from the earth, built for the mind.',
      p1: 'NOVA was founded on a simple yet powerful belief: technology shouldn’t feel cold or distant. It should feel natural—like a river-smoothed stone, or the familiar touch of a page turning beneath your hand.',
      p2: 'In a world overflowing with noise and distraction, we create objects that protect your quiet. Our materials—sandstone, raw aluminum, organic cotton—age with time, carrying the marks of your life. Every NOVA product is designed to be a bridge between the digital and the physical, blending innovation with calm, and technology with human presence.',
      location: 'The Nova Studio, CasaBlanca',
      materiality: 'Materiality',
      materialTitle: 'Materials that age with grace.',
      materialDesc: 'At NOVA, we reject the culture of the disposable. Every object we create is built to endure—physically, emotionally, and aesthetically. Our materials are chosen not just for strength, but for the story they tell as they live with you: sandstone that softens, unpolished aluminum that deepens in tone, and organic fabrics that form a natural patina over time.',
      ecosystem: 'The Ecosystem',
      ecosystemTitle: 'Silence by default.',
      ecosystemDesc: 'Every NOVA device is designed with a single principle in mind: your attention is sacred. No blinking LEDs. No idle noises. No alerts fighting for your focus. Instead, our products stay quiet—present but unobtrusive. They awaken only when called upon, offering calm, deliberate utility. And when they\'re not in use, they remain what they were always meant to be: beautifully crafted objects that bring harmony to your space, not noise.',
    },
    products: {
      title: 'The Collection',
      filterAll: 'All',
      viewDetails: 'View Details',
      backToShop: 'Back to Shop',
      addToCart: 'Add to Cart',
      selectSize: 'Select Size',
      features: 'Features',
    },
    journal: {
      editorial: 'Editorial',
      title: 'NOVA Journal',
      back: 'Back to Journal',
    },
    cart: {
      title: 'Your Cart',
      empty: 'Your cart is empty.',
      subtotal: 'Subtotal',
      checkout: 'Checkout',
      shippingCalc: 'Shipping and taxes calculated at checkout.',
      remove: 'Remove',
    },
    checkout: {
      title: 'Checkout',
      disabled: 'This is a sample site. Purchasing is disabled.',
      contact: 'Contact Information',
      shipping: 'Shipping Address',
      payment: 'Payment',
      payNow: 'Pay Now',
      orderSummary: 'Order Summary',
      total: 'Total',
      free: 'Free',
      subtotal: 'Subtotal',
    },
    footer: {
      tagline: 'Designing technology that feels as natural as the world around it. Born from the earth, built for the mind.',
      shop: 'Shop',
      allProducts: 'All Products',
      newArrivals: 'New Arrivals',
      audio: 'Audio',
      home: 'Home',
      company: 'Company',
      story: 'Our Story',
      sustainability: 'Sustainability',
      journal: 'Journal',
      newsletter: 'Newsletter',
      subscribe: 'Subscribe',
      subscribing: 'Subscribing...',
      subscribed: 'Subscribed',
      created: 'Created by @zakaria-makkour',
    }
  },
  fr: {
    hero: {
      tag: 'Collection Future 2025',
      title1: 'Évolution',
      title2: 'Tranquille.',
      subtitle: 'Technologie conçue pour amplifier votre potentiel. Intégration transparente, réponse intelligente, horizon illimité.',
      cta: 'Explorer le Futur',
    },
    about: {
      title: 'Né de la terre, construit pour l\'esprit.',
      p1: 'Nova a été fondé sur une prémisse simple mais radicale : la technologie ne doit pas ressembler à de la technologie. Elle doit ressembler à une pierre lissée par une rivière ou à une page tournée dans un livre.',
      p2: 'À une époque de distraction infinie, nous concevons des objets qui respectent votre silence. Nous utilisons des matériaux qui vieillissent avec grâce — grès, aluminium brut et coton biologique — créant un pont tactile entre le monde numérique et votre foyer physique.',
      location: 'Le Studio Nova, CasaBlanca',
      materiality: 'Matérialité',
      materialTitle: 'Des matériaux qui vieillissent avec grâce.',
      materialDesc: 'Nous rejetons le jetable. Chaque produit Nova est fabriqué à partir de grès, d\'aluminium non poli et de tissus organiques qui développent une patine unique au fil du temps.',
      ecosystem: 'L\'Écosystème',
      ecosystemTitle: 'Le silence par défaut.',
      ecosystemDesc: 'Nos appareils respectent votre attention. Pas de lumières clignotantes, pas de notifications intrusives. Juste une utilité calme quand vous en avez besoin, et un bel objet quand vous ne l\'utilisez pas.',
    },
    products: {
      title: 'La Collection',
      filterAll: 'Tous',
      viewDetails: 'Voir Détails',
      backToShop: 'Retour à la Boutique',
      addToCart: 'Ajouter au Panier',
      selectSize: 'Choisir la Taille',
      features: 'Caractéristiques',
    },
    journal: {
      editorial: 'Éditorial',
      title: 'Le Journal',
      back: 'Retour au Journal',
    },
    cart: {
      title: 'Votre Panier',
      empty: 'Votre panier est vide.',
      subtotal: 'Sous-total',
      checkout: 'Payer',
      shippingCalc: 'Frais de port et taxes calculés à la caisse.',
      remove: 'Retirer',
    },
    checkout: {
      title: 'Caisse',
      disabled: 'Ceci est un site de démonstration. L\'achat est désactivé.',
      contact: 'Coordonnées',
      shipping: 'Adresse de livraison',
      payment: 'Paiement',
      payNow: 'Payer Maintenant',
      orderSummary: 'Récapitulatif',
      total: 'Total',
      free: 'Gratuit',
      subtotal: 'Sous-total',
    },
    footer: {
      tagline: 'Concevoir une technologie aussi naturelle que le monde qui l\'entoure. Né de la terre, construit pour l\'esprit.',
      shop: 'Boutique',
      allProducts: 'Tous les Produits',
      newArrivals: 'Nouveautés',
      audio: 'Audio',
      home: 'Maison',
      company: 'Entreprise',
      story: 'Notre Histoire',
      sustainability: 'Durabilité',
      journal: 'Journal',
      newsletter: 'Newsletter',
      subscribe: 'S\'inscrire',
      subscribing: 'Inscription...',
      subscribed: 'Inscrit',
      created: 'Créé par @zakaria-makkour',
    }
  },
  ar: {
    hero: {
      tag: 'مجموعة المستقبل ٢٠٢٥',
      title1: 'تطور',
      title2: 'هادئ.',
      subtitle: 'تكنولوجيا مصممة لتضخيم إمكاناتك. تكامل سلس، استجابة ذكية، أفق لا حدود له.',
      cta: 'اكتشف المستقبل',
    },
    about: {
      title: 'ولد من الأرض، صُنع للعقل.',
      p1: 'تأسست نوفا على فرضية بسيطة ولكنها جذرية: التكنولوجيا لا ينبغي أن تبدو كتكنولوجيا. يجب أن تبدو مثل حجر صقله النهر، أو صفحة قلبت في كتاب.',
      p2: 'في عصر التشتت اللامتناهي، نصمم أشياء تحترم صمتك. نستخدم مواد تتقدم في العمر برشاقة - الحجر الرملي، والألمنيوم غير المعالج، والقطن العضوي - مما يخلق جسراً ملموساً بين العالم الرقمي ومنزلك المادي.',
      location: 'استوديو نوفا، الدار البيضاء',
      materiality: 'المادية',
      materialTitle: 'مواد تتقدم في العمر برشاقة.',
      materialDesc: 'نحن نرفض المنتجات التي يمكن التخلص منها. كل منتج من منتجات نوفا مصنوع من الحجر الرملي، والألمنيوم غير المصقول، والأقمشة العضوية التي تطور طابعاً فريداً بمرور الوقت.',
      ecosystem: 'النظام البيئي',
      ecosystemTitle: 'الصمت هو الأصل.',
      ecosystemDesc: 'أجهزتنا تحترم انتباهك. لا أضواء ساطعة، لا إشعارات تطفلية. فقط فائدة هادئة عند الحاجة، وقطعة فنية جميلة عندما لا تحتاجها.',
    },
    products: {
      title: 'المجموعة',
      filterAll: 'الكل',
      viewDetails: 'عرض التفاصيل',
      backToShop: 'العودة للمتجر',
      addToCart: 'إضافة للسلة',
      selectSize: 'اختر المقاس',
      features: 'المميزات',
    },
    journal: {
      editorial: 'افتتاحية',
      title: 'المجلة',
      back: 'العودة للمجلة',
    },
    cart: {
      title: 'سلتك',
      empty: 'سلتك فارغة.',
      subtotal: 'المجموع الفرعي',
      checkout: 'الدفع',
      shippingCalc: 'يتم احتساب الشحن والضرائب عند الدفع.',
      remove: 'إزالة',
    },
    checkout: {
      title: 'الدفع',
      disabled: 'هذا موقع تجريبي. الشراء معطل.',
      contact: 'معلومات الاتصال',
      shipping: 'عنوان الشحن',
      payment: 'الدفع',
      payNow: 'ادفع الآن',
      orderSummary: 'ملخص الطلب',
      total: 'المجموع',
      free: 'مجاني',
      subtotal: 'المجموع الفرعي',
    },
    footer: {
      tagline: 'تصميم تكنولوجيا تبدو طبيعية مثل العالم من حولها. ولدت من الأرض، وبنيت للعقل.',
      shop: 'تسوق',
      allProducts: 'جميع المنتجات',
      newArrivals: 'وصل حديثاً',
      audio: 'صوتيات',
      home: 'المنزل',
      company: 'الشركة',
      story: 'قصتنا',
      sustainability: 'الاستدامة',
      journal: 'المجلة',
      newsletter: 'النشرة البريدية',
      subscribe: 'اشتراك',
      subscribing: 'جار الاشتراك...',
      subscribed: 'تم الاشتراك',
      created: 'صمم بواسطة @zakaria-makkour',
    }
  }
};

// --- Data ---

const RAW_PRODUCTS = {
  en: [
    {
      id: 'p1',
      name: 'SmartBottle',
      tagline: 'Stay hydrated effortlessly!',
      description: 'The NOVA SmartBottle tracks your daily water intake and syncs with your smartphone.',
      longDescription: 'Stay hydrated effortlessly! The NOVA SmartBottle tracks your daily water intake and syncs with your smartphone, reminding you to drink on time. Perfect for busy lifestyles, workouts, or office use. Features a double-walled stainless steel construction that keeps beverages cold for 24 hours or hot for 12.',
      price: 49.99,
      category: 'Hydration',
      imageUrl: '/images/NOVA-SmartBottle.jpg',
      features: ['Hydration Tracking', 'App Sync', 'Temp Control']
    },
    {
      id: 'p2',
      name: 'SmartCup',
      tagline: 'Perfect temperature every time.',
      description: 'Enjoy your drinks at the perfect temperature every time. Measures temp and tracks consumption.',
      longDescription: 'Enjoy your drinks at the perfect temperature every time. The SmartCup measures your beverage’s temperature, tracks your daily consumption, and keeps you hydrated smarter, healthier, and stress-free. The ceramic coating preserves taste while the base keeps your drink warm all day.',
      price: 29.99,
      category: 'Hydration',
      imageUrl: '/images/NOVA-SmartCup.jpg',
      features: ['Temp Maintenance', 'Consumption Stats', 'Ceramic Finish']
    },
    {
      id: 'p3',
      name: 'SmartSnack',
      tagline: 'Snack smart, stay healthy!',
      description: 'The SmartSnack container monitors calories and nutrition, helping you manage your diet.',
      longDescription: 'Snack smart, stay healthy! The SmartSnack container monitors calories and nutrition, helping you manage your diet with ease. Perfect for office snacks, gym fuel, or daily meals. Its vacuum-seal technology keeps food fresh 5x longer than standard containers.',
      price: 39.99,
      category: 'Nutrition',
      imageUrl: '/images/NOVA-SmartSnack.jpg',
      features: ['Calorie Tracking', 'Freshness Seal', 'Portion Control']
    },
    {
      id: 'p4',
      name: 'SmartScale',
      tagline: 'Know your body better!',
      description: 'Tracks your weight, hydration, and muscle mass, syncing all your data to the NOVA app.',
      longDescription: 'Know your body better! The SmartScale tracks your weight, hydration, and muscle mass, syncing all your data to the NOVA app. Ideal for fitness enthusiasts and health-conscious users. The sleek tempered glass design disappears into your bathroom floor.',
      price: 59.99,
      category: 'Well-Being',
      imageUrl: '/images/NOVA-SmartScale.jpg',
      features: ['Body Composition', 'Wi-Fi Sync', 'Multi-User']
    },
    {
      id: 'p5',
      name: 'SmartFilter',
      tagline: 'Drink clean water effortlessly!',
      description: 'Monitors water purity and filter life, sending notifications when it’s time to replace.',
      longDescription: 'Drink clean water effortlessly! The NOVA SmartFilter monitors water purity and filter life, sending notifications when it’s time to replace. Safe, smart, and eco-friendly. It attaches to any standard faucet and removes 99% of contaminants while retaining healthy minerals.',
      price: 34.99,
      category: 'Well-Being',
      imageUrl: '/images/NOVA-SmartFilter.jpg',
      features: ['Purity Sensor', 'Filter Alerts', 'Eco-Flow']
    },
    {
      id: 'p6',
      name: 'SmartWallet',
      tagline: 'Secure and smart.',
      description: 'Combines NFC payment, GPS tracking, and anti-theft alerts in a sleek design.',
      longDescription: 'Secure and smart! The NOVA SmartWallet combines NFC payment, GPS tracking, and anti-theft alerts in a sleek, stylish design. Keep your money safe and always accessible. Crafted from premium vegan leather with RFID blocking technology.',
      price: 79.99,
      category: 'Everyday Carry',
      imageUrl: '/images/NOVA-SmartWallet.jpg',
      features: ['GPS Tracking', 'RFID Block', 'NFC Ready']
    },
    {
      id: 'p7',
      name: 'SmartDesk Organizer',
      tagline: 'Transform your workspace!',
      description: 'Keeps gadgets tidy, charges devices wirelessly, and shows workspace stats.',
      longDescription: 'Transform your workspace! The SmartDesk Organizer keeps gadgets and accessories tidy, charges your devices wirelessly, and shows workspace stats like time, temperature, and humidity. Perfect for a modern, productive desk setup.',
      price: 89.99,
      category: 'Workspace',
      imageUrl: '/images/NOVA-SmartDesk-Organizer.jpg',
      features: ['Wireless Charging', 'Environment Sensor', 'Modular Design']
    }
    ,
    {
      id: 'p8',
      name: 'Smart Air Purifier',
      tagline: 'Breathe better, live clearer.',
      description: 'Silent purification with smart air quality sensing. Removes dust, pollen, and VOCs.',
      longDescription: 'Breathe better, live clearer. Lucid Origin purifies your air quietly while smart sensors monitor and display real-time air quality. It captures ultra-fine particles and odors with a dual HEPA + carbon system for a calmer, healthier home.',
      price: 129.99,
      category: 'Well-Being',
      imageUrl: '/images/Lucid_Origin_A_futuristic_smart_air_purifier_with_smooth_matte_0.jpg',
      features: ['HEPA + Carbon', 'Silent Mode', 'Air Quality Sensor']
    },
    {
      id: 'p9',
      name: 'SmartThermo',
      tagline: 'Precision temperature, anywhere.',
      description: 'Tracks ambient temperature and humidity with instant read and app sync.',
      longDescription: 'Precision temperature, anywhere. NOVA SmartThermo tracks ambient temperature and humidity with instant readings and seamless app sync. Keep your spaces comfortable and your routine optimized with quiet, reliable measurements.',
      price: 59.99,
      category: 'Well-Being',
      imageUrl: '/images/NOVA SmartThermo.jpg',
      features: ['Instant Read', 'Bluetooth Sync', 'Multi-Mode']
    }
  ],
  fr: [
     {
      id: 'p1',
      name: 'Bouteille Intelligente',
      tagline: 'Restez hydraté sans effort !',
      description: 'La SmartBottle NOVA suit votre consommation d\'eau et se synchronise avec votre smartphone.',
      longDescription: 'Restez hydraté sans effort ! La SmartBottle NOVA suit votre consommation d\'eau quotidienne et se synchronise avec votre smartphone pour vous rappeler de boire à temps. Parfait pour les modes de vie actifs, le sport ou le bureau.',
      price: 49.99,
      category: 'Hydration',
      imageUrl: '/images/NOVA-SmartBottle.jpg',
      features: ['Suivi Hydratation', 'Synchro App', 'Contrôle Temp']
    },
    {
      id: 'p2',
      name: 'Tasse Intelligente',
      tagline: 'Température parfaite à chaque fois.',
      description: 'Profitez de vos boissons à la température idéale. Mesure la température et suit la consommation.',
      longDescription: 'Profitez de vos boissons à la température parfaite à chaque fois. La SmartCup mesure la température de votre boisson, suit votre consommation quotidienne et vous garde hydraté plus intelligemment.',
      price: 29.99,
      category: 'Hydration',
      imageUrl: '/images/NOVA-SmartCup.jpg',
      features: ['Maintien Temp', 'Stats Conso', 'Finition Céramique']
    },
    {
      id: 'p3',
      name: 'SmartSnack',
      tagline: 'Grignotez malin, restez sain !',
      description: 'Le conteneur SmartSnack surveille les calories et la nutrition pour gérer votre alimentation.',
      longDescription: 'Grignotez malin, restez sain ! Le conteneur SmartSnack surveille les calories et la nutrition, vous aidant à gérer votre alimentation facilement. Parfait pour les collations au bureau ou le carburant pour la gym.',
      price: 39.99,
      category: 'Nutrition',
      imageUrl: '/images/NOVA-SmartSnack.jpg',
      features: ['Suivi Calories', 'Sceau Fraîcheur', 'Contrôle Portion']
    },
    {
      id: 'p4',
      name: 'Balance Intelligente',
      tagline: 'Connaissez mieux votre corps !',
      description: 'Suit votre poids, l\'hydratation et la masse musculaire, synchronisant tout avec l\'appli NOVA.',
      longDescription: 'Connaissez mieux votre corps ! La SmartScale suit votre poids, votre hydratation et votre masse musculaire, synchronisant toutes vos données avec l\'application NOVA. Idéal pour les passionnés de fitness.',
      price: 59.99,
      category: 'Well-Being',
      imageUrl: '/images/NOVA-SmartScale.jpg',
      features: ['Composition Corporelle', 'Synchro Wi-Fi', 'Multi-Utilisateur']
    },
    {
      id: 'p5',
      name: 'Filtre Intelligent',
      tagline: 'Buvez de l\'eau propre sans effort !',
      description: 'Surveille la pureté de l\'eau et la durée de vie du filtre, envoyant des notifications.',
      longDescription: 'Buvez de l\'eau propre sans effort ! Le SmartFilter NOVA surveille la pureté de l\'eau et la vie du filtre, envoyant des notifications lorsqu\'il est temps de le remplacer. Sûr, intelligent et écologique.',
      price: 34.99,
      category: 'Well-Being',
      imageUrl: '/images/NOVA-SmartFilter.jpg',
      features: ['Capteur Pureté', 'Alertes Filtre', 'Éco-Flux']
    },
    {
      id: 'p6',
      name: 'Portefeuille Intelligent',
      tagline: 'Sécurisé et intelligent.',
      description: 'Combine paiement NFC, suivi GPS et alertes antivol dans un design élégant.',
      longDescription: 'Sécurisé et intelligent ! Le SmartWallet NOVA combine paiement NFC, suivi GPS et alertes antivol dans un design élégant. Gardez votre argent en sécurité et toujours accessible.',
      price: 79.99,
      category: 'Everyday Carry',
      imageUrl: '/images/NOVA-SmartWallet.jpg',
      features: ['Suivi GPS', 'Blocage RFID', 'Prêt pour NFC']
    },
    {
      id: 'p7',
      name: 'Organisateur de Bureau',
      tagline: 'Transformez votre espace de travail !',
      description: 'Garde les gadgets rangés, charge sans fil et affiche les statistiques de l\'espace de travail.',
      longDescription: 'Transformez votre espace de travail ! Le SmartDesk Organizer garde les gadgets rangés, charge vos appareils sans fil et affiche des statistiques comme l\'heure, la température et l\'humidité.',
      price: 89.99,
      category: 'Workspace',
      imageUrl: '/images/NOVA-SmartDesk-Organizer.jpg',
      features: ['Charge Sans Fil', 'Capteur Environnement', 'Design Modulaire']
    }
    ,
    {
      id: 'p8',
      name: 'Purificateur d’Air Lucid Origin',
      tagline: 'Respirez mieux, vivez plus clair.',
      description: 'Purification silencieuse avec capteur de qualité d’air. Élimine poussière, pollen et COV.',
      longDescription: 'Respirez mieux, vivez plus clair. Lucid Origin purifie l’air en silence tandis que des capteurs intelligents surveillent la qualité en temps réel. Le système double HEPA + carbone capture les particules fines et les odeurs pour un intérieur plus sain.',
      price: 129.99,
      category: 'Well-Being',
      imageUrl: '/images/Lucid_Origin_A_futuristic_smart_air_purifier_with_smooth_matte_0.jpg',
      features: ['HEPA + Carbone', 'Mode Silencieux', 'Capteur Qualité Air']
    },
    {
      id: 'p9',
      name: 'Thermo Intelligente NOVA',
      tagline: 'Température précise, partout.',
      description: 'Suit la température et l’humidité ambiantes avec lecture instantanée et synchro app.',
      longDescription: 'Température précise, partout. NOVA SmartThermo suit la température et l’humidité ambiantes avec des lectures instantanées et une synchronisation fluide avec l’application. Gardez vos espaces confortables et votre routine optimisée.',
      price: 59.99,
      category: 'Well-Being',
      imageUrl: '/images/NOVA SmartThermo.jpg',
      features: ['Lecture Instantanée', 'Synchro Bluetooth', 'Multi-Mode']
    }
  ],
  ar: [
    {
      id: 'p1',
      name: 'زجاجة ذكية',
      tagline: 'ابق رطباً دون عناء!',
      description: 'تتتبع زجاجة نوفا الذكية استهلاكك اليومي من الماء وتتزامن مع هاتفك الذكي.',
      longDescription: 'ابق رطباً دون عناء! تتتبع زجاجة نوفا الذكية استهلاكك اليومي من الماء وتتزامن مع هاتفك الذكي لتذكيرك بالشرب في الوقت المحدد. مثالية لأنماط الحياة المزدحمة أو التدريبات.',
      price: 49.99,
      category: 'Home',
      imageUrl: '/images/NOVA-SmartBottle.jpg',
      features: ['تتبع الترطيب', 'تزامن التطبيق', 'تحكم بالحرارة']
    },
    {
      id: 'p2',
      name: 'كوب ذكي',
      tagline: 'درجة حرارة مثالية في كل مرة.',
      description: 'استمتع بمشروباتك في درجة الحرارة المثالية. يقيس الحرارة ويتتبع الاستهلاك.',
      longDescription: 'استمتع بمشروباتك في درجة الحرارة المثالية في كل مرة. يقيس الكوب الذكي درجة حرارة مشروبك، ويتتبع استهلاكك اليومي، ويبقيك رطباً بذكاء وصحة.',
      price: 29.99,
      category: 'Home',
      imageUrl: '/images/NOVA-SmartCup.jpg',
      features: ['حفاظ على الحرارة', 'إحصائيات الاستهلاك', 'طلاء سيراميك']
    },
    {
      id: 'p3',
      name: 'وجبة ذكية',
      tagline: 'تناول بذكاء، ابق بصحة!',
      description: 'تراقب حاوية الوجبات الذكية السعرات الحرارية والتغذية لمساعدتك في إدارة نظامك الغذائي.',
      longDescription: 'تناول بذكاء، ابق بصحة! تراقب حاوية الوجبات الذكية السعرات الحرارية والتغذية، مما يساعدك على إدارة نظامك الغذائي بسهولة. مثالية لوجبات المكتب الخفيفة.',
      price: 39.99,
      category: 'Home',
      imageUrl: '/images/NOVA-SmartSnack.jpg',
      features: ['تتبع السعرات', 'ختم النضارة', 'تحكم بالححص']
    },
    {
      id: 'p4',
      name: 'ميزان ذكي',
      tagline: 'اعرف جسمك بشكل أفضل!',
      description: 'يتتبع وزنك وترطيبك وكتلة عضلاتك، ويزامن جميع بياناتك مع تطبيق نوفا.',
      longDescription: 'اعرف جسمك بشكل أفضل! يتتبع الميزان الذكي وزنك، وترطيبك، وكتلة عضلاتك، ويزامن جميع بياناتك مع تطبيق نوفا. مثالي لعشاق اللياقة البدنية.',
      price: 59.99,
      category: 'Home',
      imageUrl: '/images/NOVA-SmartScale.jpg',
      features: ['تكوين الجسم', 'تزامن واي فاي', 'متعدد المستخدمين']
    },
    {
      id: 'p5',
      name: 'فلتر ذكي',
      tagline: 'اشرب مياه نظيفة دون عناء!',
      description: 'يراقب نقاء الماء وعمر الفلتر، ويرسل إشعارات عندما يحين وقت الاستبدال.',
      longDescription: 'اشرب مياه نظيفة دون عناء! يراقب فلتر نوفا الذكي نقاء الماء وعمر الفلتر، ويرسل إشعارات عندما يحين وقت الاستبدال. آمن وذكي وصديق للبيئة.',
      price: 34.99,
      category: 'Home',
      imageUrl: '/images/NOVA-SmartFilter.jpg',
      features: ['مستشعر النقاء', 'تنبيهات الفلتر', 'تدفق بيئي']
    },
    {
      id: 'p6',
      name: 'محفظة ذكية',
      tagline: 'آمنة وذكية.',
      description: 'تجمع بين الدفع NFC وتتبع GPS وتنبيهات السرقة في تصميم أنيق.',
      longDescription: 'آمنة وذكية! تجمع محفظة نوفا الذكية بين الدفع NFC وتتبع GPS وتنبيهات السرقة في تصميم أنيق وعصري. حافظ على أموالك آمنة ويمكن الوصول إليها دائماً.',
      price: 79.99,
      category: 'Mobile',
      imageUrl: '/images/NOVA-SmartWallet.jpg',
      features: ['تتبع GPS', 'حجب RFID', 'جاهز لـ NFC']
    },
    {
      id: 'p7',
      name: 'منظم مكتب ذكي',
      tagline: 'حول مساحة عملك!',
      description: 'يبقي الأدوات مرتبة، يشحن الأجهزة لاسلكياً، ويعرض إحصائيات مساحة العمل.',
      longDescription: 'حول مساحة عملك! يحافظ منظم المكتب الذكي على ترتيب الأدوات والملحقات، ويشحن أجهزتك لاسلكياً، ويعرض إحصائيات مساحة العمل مثل الوقت ودرجة الحرارة.',
      price: 89.99,
      category: 'Home',
      imageUrl: '/images/NOVA-SmartDesk-Organizer.jpg',
      features: ['شحن لاسلكي', 'مستشعر البيئة', 'تصميم معياري']
    }
    ,
    {
      id: 'p8',
      name: 'منقّي هواء لوسيد أورجن',
      tagline: 'تنفس أفضل، عيش أنقى.',
      description: 'تنقية صامتة مع مستشعر جودة الهواء. يزيل الغبار واللقاح والمواد العضوية المتطايرة.',
      longDescription: 'تنفس أفضل، عيش أنقى. يقوم منقّي الهواء لوسيد أورجن بتنقية الهواء بهدوء بينما تراقب المستشعرات الذكية جودة الهواء لحظياً. يلتقط الجسيمات الدقيقة والروائح عبر نظام مزدوج HEPA + كربون لبيت أكثر صحة.',
      price: 129.99,
      category: 'Well-Being',
      imageUrl: '/images/Lucid_Origin_A_futuristic_smart_air_purifier_with_smooth_matte_0.jpg',
      features: ['HEPA + كربون', 'وضع صامت', 'مستشعر جودة الهواء']
    },
    {
      id: 'p9',
      name: 'نوفا سمارت ثيرمو',
      tagline: 'قياس دقيق للحرارة، في أي مكان.',
      description: 'يتتبع الحرارة والرطوبة المحيطة بقراءة فورية ومزامنة عبر التطبيق.',
      longDescription: 'قياس دقيق للحرارة، في أي مكان. يتتبع جهاز نوفا سمارت ثيرمو الحرارة والرطوبة المحيطة بقراءة فورية ومزامنة سلسة مع التطبيق، ليحافظ على راحة مساحتك وروتينك اليومي.',
      price: 59.99,
      category: 'Well-Being',
      imageUrl: '/images/NOVA SmartThermo.jpg',
      features: ['قراءة فورية', 'مزامنة بلوتوث', 'أوضاع متعددة']
    }
  ]
} as const;

const RAW_JOURNAL = {
  en: [
    {
        id: 1,
        title: "The Essence of Craft",
        date: "May 4, 2025",
        excerpt: "Inside NOVA’s workshop: where hand-finished edges meet precision engineering.",
        image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&q=80&w=1000",
        content: "We live in a frictionless world. Our phones are smooth glass, our laptops polished aluminum. There is no resistance. And yet, our biology craves it. To touch is to know. Inside NOVA’s workshop, hand-finished edges meet precision engineering."
    },
    {
        id: 2,
        title: "Form Meets Silence",
        date: "April 18, 2025",
        excerpt: "Exploring how quiet objects shape calm spaces in a world filled with digital noise.",
        image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1000",
        content: "In a world filled with constant digital noise, silence becomes a design principle. At NOVA, quiet objects shape calm spaces, where every form, edge, and surface invites mindfulness and presence."
    },
    {
        id: 3,
        title: "Urban Shadows",
        date: "April 1, 2025",
        excerpt: "Studying how late-evening light, raw concrete, and subtle motion inspire NOVA’s product lines.",
        image: "https://images.unsplash.com/photo-1516834474-48c0abc2a902?auto=format&fit=crop&q=80&w=1000",
        content: "As daylight fades, the city transforms. Late-evening light, raw concrete, and subtle motion shape the spaces we inhabit. At NOVA, these urban shadows inspire every curve, every surface, every design choice."
    }
  ],
  fr: [
    {
        id: 1,
        title: "La Psychologie de la Texture",
        date: "12 Avril 2025",
        excerpt: "Pourquoi nos doigts ont soif de surfaces naturelles dans un monde de verre et de plastique.",
        image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&q=80&w=1000",
        content: "Nous vivons dans un monde sans friction. Nos téléphones sont en verre lisse, nos ordinateurs en aluminium poli. Il n'y a aucune résistance. Et pourtant, notre biologie le réclame. Toucher, c'est savoir."
    },
    {
        id: 2,
        title: "Vivre avec Moins",
        date: "28 Mars 2025",
        excerpt: "Une conversation avec l'architecte Hiroshi Nakamura sur l'art de l'espace vide.",
        image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1000",
        content: "Le vide n'est pas rien. Dans l'architecture japonaise, le concept de Ma fait référence à l'espace entre les choses. Nous avons tendance à remplir nos vies de bruit, mais le vrai luxe est l'absence d'intrusion."
    },
    {
        id: 3,
        title: "Inspirations de Printemps",
        date: "15 Mars 2025",
        excerpt: "Notes du studio de design : brume matinale, pierre humide et lin pâle.",
        image: "https://images.unsplash.com/photo-1516834474-48c0abc2a902?auto=format&fit=crop&q=80&w=1000",
        content: "Le printemps au studio est un moment d'éveil. La lumière passe des angles durs et bas de l'hiver à une lueur plus douce et diffuse. Nous sommes attirés par des tons plus pâles."
    }
  ],
  ar: [
    {
        id: 1,
        title: "علم نفس الملمس",
        date: "١٢ أبريل ٢٠٢٥",
        excerpt: "لماذا تتوق أطراف أصابعنا إلى الأسطح الطبيعية في عالم من الزجاج والبلاستيك.",
        image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&q=80&w=1000",
        content: "نحن نعيش في عالم خالٍ من الاحتكاك. هواتفنا من الزجاج الأملس، وأجهزة الكمبيوتر المحمولة من الألمنيوم المصقول. لا توجد مقاومة. ومع ذلك، فإن بيولوجيتنا تتوق إليها. اللمس هو المعرفة."
    },
    {
        id: 2,
        title: "العيش مع القليل",
        date: "٢٨ مارس ٢٠٢٥",
        excerpt: "حوار مع المعماري هيروشي ناكامورا حول فن الفضاء الفارغ.",
        image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1000",
        content: "الفراغ ليس لا شيء. في الهندسة المعمارية اليابانية، يشير مفهوم (ما) إلى المسافة بين الأشياء. نميل إلى ملء حياتنا بالضوضاء، لكن الرفاهية الحقيقية هي غياب التطفل."
    },
    {
        id: 3,
        title: "إلهام الربيع",
        date: "١٥ مارس ٢٠٢٥",
        excerpt: "ملاحظات من استوديو التصميم: ضباب الصباح، الحجر الرطب، والكتان الشاحب.",
        image: "https://images.unsplash.com/photo-1516834474-48c0abc2a902?auto=format&fit=crop&q=80&w=1000",
        content: "الربيع في الاستوديو هو وقت الصحوة. يتحول الضوء من الزوايا القاسية والمنخفضة للشتاء إلى وهج أكثر نعومة وانتشارًا. نجد أنفسنا منجذبين إلى النغمات الشاحبة."
    }
  ]
} as const;

export const getProducts = (lang: Language): Product[] => {
    return RAW_PRODUCTS[lang] as unknown as Product[];
};

export const getJournal = (lang: Language): JournalArticle[] => {
    return RAW_JOURNAL[lang] as unknown as JournalArticle[];
};

export const BRAND_NAME = 'NOVA';
export const PRIMARY_COLOR = 'stone-900'; 
export const ACCENT_COLOR = 'stone-500';

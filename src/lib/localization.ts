
// This file contains translations for the application
// Currently supporting English and Arabic

export type Language = 'en' | 'ar';

export const translations = {
  en: {
    // Common
    appName: 'Ride With Me',
    tagline: 'Share rides, save money, make connections',

    // Navigation
    home: 'Home',
    search: 'Find a Ride',
    createTrip: 'Offer a Ride',
    profile: 'Profile',
    login: 'Login',
    register: 'Register',
    
    // Buttons
    submit: 'Submit',
    cancel: 'Cancel',
    search: 'Search',
    requestRide: 'Request to Join',
    publishRide: 'Publish Ride',
    
    // Homepage sections
    heroTitle: 'Free Ride Sharing For Everyone',
    heroSubtitle: 'Connect with drivers going your way and share the journey',
    howItWorks: 'How It Works',
    benefits: 'Why Choose Ride With Me',
    testimonials: 'What Our Users Say',
    readyToShare: 'Ready to Share the Road?',
    
    // Benefits
    freeToUse: 'Free to Use',
    freeToUseDesc: 'No commission fees - we\'re supported by partnerships and advertising',
    safetyFirst: 'Safety First',
    safetyFirstDesc: 'Verified users, location tracking, and safety check-ins',
    instantNotifications: 'Instant Notifications',
    instantNotificationsDesc: 'Real-time alerts when your driver is approaching',
    tripScheduling: 'Trip Scheduling',
    tripSchedulingDesc: 'Book rides in advance to better plan your journeys',
    locationTracking: 'Location Tracking',
    locationTrackingDesc: 'See your driver\'s location in real-time during the trip',
    accessibilityOptions: 'Accessibility Options',
    accessibilityOptionsDesc: 'Filter for rides with accommodations for disabilities',
    
    // Search
    findAvailableRides: 'Find Available Rides',
    from: 'From',
    to: 'To',
    date: 'Date',
    availableRides: 'Available Rides',
    departure: 'Departure',
    seatsAvailable: 'seats available',
    features: 'Features:',
    
    // Create trip
    offerRide: 'Offer a Ride',
    offerRideSubtitle: 'Share your journey with others and help reduce carbon emissions',
    tripDetails: 'Trip Details',
    availableSeats: 'Available Seats',
    vehicleType: 'Vehicle Type',
    rideFeatures: 'Ride Features',
    wheelchairAccessible: 'Wheelchair accessible',
    petsAllowed: 'Pets allowed',
    extraLuggage: 'Extra luggage space',
    childSeat: 'Child seat available',
    
    // Profile
    accountDetails: 'Account Details',
    tripHistory: 'Trip History',
    preferences: 'Preferences',
    
    // Auth
    joinCommunity: 'Join Our Community',
    createProfile: 'Create Your Profile',
    verifiedCommunity: 'Verified Community',
    quickSignup: 'Quick Signup Process'
  },
  
  ar: {
    // Common
    appName: 'اركب معي',
    tagline: 'شارك الرحلات، وفر المال، كون علاقات',

    // Navigation
    home: 'الرئيسية',
    search: 'ابحث عن رحلة',
    createTrip: 'اعرض رحلة',
    profile: 'الملف الشخصي',
    login: 'تسجيل الدخول',
    register: 'التسجيل',
    
    // Buttons
    submit: 'إرسال',
    cancel: 'إلغاء',
    search: 'بحث',
    requestRide: 'طلب الانضمام',
    publishRide: 'نشر الرحلة',
    
    // Homepage sections
    heroTitle: 'مشاركة الرحلات مجانًا للجميع',
    heroSubtitle: 'تواصل مع السائقين المتجهين إلى وجهتك وشارك الرحلة',
    howItWorks: 'كيف يعمل',
    benefits: 'لماذا تختار اركب معي',
    testimonials: 'ماذا يقول مستخدمونا',
    readyToShare: 'هل أنت مستعد لمشاركة الطريق؟',
    
    // Benefits
    freeToUse: 'مجاني للاستخدام',
    freeToUseDesc: 'لا توجد رسوم عمولة - نحن مدعومون بالشراكات والإعلانات',
    safetyFirst: 'السلامة أولاً',
    safetyFirstDesc: 'مستخدمون موثوقون، تتبع الموقع، وتسجيل الوصول الآمن',
    instantNotifications: 'إشعارات فورية',
    instantNotificationsDesc: 'تنبيهات في الوقت الفعلي عند اقتراب السائق',
    tripScheduling: 'جدولة الرحلات',
    tripSchedulingDesc: 'احجز رحلات مسبقًا لتخطيط رحلاتك بشكل أفضل',
    locationTracking: 'تتبع الموقع',
    locationTrackingDesc: 'شاهد موقع السائق في الوقت الفعلي أثناء الرحلة',
    accessibilityOptions: 'خيارات الوصول',
    accessibilityOptionsDesc: 'تصفية الرحلات المناسبة لذوي الإعاقة',
    
    // Search
    findAvailableRides: 'ابحث عن الرحلات المتاحة',
    from: 'من',
    to: 'إلى',
    date: 'التاريخ',
    availableRides: 'الرحلات المتاحة',
    departure: 'المغادرة',
    seatsAvailable: 'مقاعد متاحة',
    features: 'الميزات:',
    
    // Create trip
    offerRide: 'اعرض رحلة',
    offerRideSubtitle: 'شارك رحلتك مع الآخرين وساعد في تقليل انبعاثات الكربون',
    tripDetails: 'تفاصيل الرحلة',
    availableSeats: 'المقاعد المتاحة',
    vehicleType: 'نوع المركبة',
    rideFeatures: 'ميزات الرحلة',
    wheelchairAccessible: 'مناسب للكراسي المتحركة',
    petsAllowed: 'يُسمح بالحيوانات الأليفة',
    extraLuggage: 'مساحة إضافية للأمتعة',
    childSeat: 'مقعد للأطفال متاح',
    
    // Profile
    accountDetails: 'تفاصيل الحساب',
    tripHistory: 'سجل الرحلات',
    preferences: 'التفضيلات',
    
    // Auth
    joinCommunity: 'انضم إلى مجتمعنا',
    createProfile: 'أنشئ ملفك الشخصي',
    verifiedCommunity: 'مجتمع موثوق',
    quickSignup: 'عملية تسجيل سريعة'
  }
};

// Default language
let currentLanguage: Language = 'en';

// Get the current language
export const getCurrentLanguage = (): Language => currentLanguage;

// Set the current language
export const setLanguage = (lang: Language): void => {
  currentLanguage = lang;
  // You could add code here to persist the language choice
  // localStorage.setItem('language', lang);
  
  // If the app supports RTL for Arabic, you might add logic here to update the document direction
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
};

// Translation helper function
export const t = (key: keyof typeof translations.en): string => {
  const translationSet = translations[currentLanguage];
  return (translationSet[key] as string) || translations.en[key] as string;
};

// Initialize from saved preference if available
export const initializeLanguage = (): void => {
  // Uncomment to use browser language detection
  /*
  const browserLang = navigator.language.substring(0, 2);
  if (browserLang === 'ar') {
    setLanguage('ar');
  }
  */
  
  // Or initialize from localStorage if previously saved
  /*
  const savedLang = localStorage.getItem('language') as Language;
  if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
    setLanguage(savedLang);
  }
  */
};

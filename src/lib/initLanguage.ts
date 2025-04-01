
import { initializeLanguage } from "@/lib/localization";

/**
 * Initialize language settings for the application
 * This loads user preferences from localStorage or browser settings
 * and sets up the appropriate language and direction (LTR/RTL)
 */
export const initLanguage = () => {
  try {
    initializeLanguage();
    console.log("Language settings initialized successfully");
  } catch (error) {
    console.error("Failed to initialize language settings:", error);
    // Fallback to English if there's an error
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = 'en';
  }
};

export default initLanguage;

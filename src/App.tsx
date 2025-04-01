
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, createContext } from "react";
import { Language, getCurrentLanguage, setLanguage } from "@/lib/localization";
import Index from "./pages/Index";
import SearchPage from "./pages/SearchPage";
import CreateTripPage from "./pages/CreateTripPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";

// Create a language context for components that need language information
export const LanguageContext = createContext<{
  language: Language;
  setAppLanguage: (lang: Language) => void;
}>({
  language: 'en',
  setAppLanguage: () => {},
});

const queryClient = new QueryClient();

const App = () => {
  // Get the current language on component mount
  const [language, setAppLanguage] = useState<Language>(getCurrentLanguage());
  
  // Update the language context when the language changes
  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setAppLanguage(lang);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageContext.Provider value={{ language, setAppLanguage: handleLanguageChange }}>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/create-trip" element={<CreateTripPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/register" element={<RegisterPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </LanguageContext.Provider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

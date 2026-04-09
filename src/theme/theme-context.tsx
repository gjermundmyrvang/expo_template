import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  Appearance,
  useColorScheme as useDeviceColorScheme,
} from "react-native";
import { AppColors, darkColors, lightColors } from "./colors";

export type ThemePreference = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

interface ThemeContextValue {
  preference: ThemePreference;
  theme: ResolvedTheme;
  colors: AppColors;
  setPreference: (pref: ThemePreference) => void;
  isDark: boolean;
}

const STORAGE_KEY = "@app_theme_preference";

const ThemeContext = createContext<ThemeContextValue>({
  preference: "system",
  theme: "light",
  colors: lightColors,
  setPreference: () => {},
  isDark: false,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const deviceScheme = useDeviceColorScheme(); // 'light' | 'dark' | null
  const [preference, setPreferenceState] = useState<ThemePreference>("system");
  const [isHydrated, setIsHydrated] = useState(false);

  // Load persisted preference on mount
  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((stored) => {
        if (stored === "light" || stored === "dark" || stored === "system") {
          setPreferenceState(stored);
        }
      })
      .finally(() => setIsHydrated(true));
  }, []);

  const setPreference = useCallback((pref: ThemePreference) => {
    setPreferenceState(pref);
    AsyncStorage.setItem(STORAGE_KEY, pref);
    Appearance.setColorScheme(pref === "system" ? null : pref);
  }, []);

  // Resolve the actual theme
  const theme: ResolvedTheme =
    preference === "system"
      ? deviceScheme === "dark"
        ? "dark"
        : "light"
      : preference;

  const colors = theme === "dark" ? darkColors : lightColors;
  const isDark = theme === "dark";

  // (prevents flash)
  if (!isHydrated) return null;

  return (
    <ThemeContext.Provider
      value={{ preference, theme, colors, setPreference, isDark }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}

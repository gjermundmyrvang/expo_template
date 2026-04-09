import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { ThemePreference, useTheme } from "../theme";

const OPTIONS: { value: ThemePreference; label: string; icon: string }[] = [
  { value: "light", label: "Light", icon: "sunny-outline" },
  { value: "dark", label: "Dark", icon: "moon-outline" },
  { value: "system", label: "System", icon: "phone-portrait-outline" },
];

export function ThemeSelector() {
  const { preference, setPreference, colors } = useTheme();

  return (
    <View className="bg-card rounded-2xl overflow-hidden border border-border">
      {OPTIONS.map((opt, index) => {
        const isSelected = preference === opt.value;
        const isLast = index === OPTIONS.length - 1;

        return (
          <TouchableOpacity
            key={opt.value}
            onPress={() => setPreference(opt.value)}
            activeOpacity={0.7}
            className={`flex-row items-center justify-between px-4 py-3.5 ${
              !isLast ? "border-b border-border" : ""
            }`}
          >
            <View className="flex-row items-center gap-3">
              <Ionicons
                name={opt.icon as any}
                size={18}
                color={colors.foreground}
              />
              <Text className="text-foreground text-sm font-medium">
                {opt.label}
              </Text>
            </View>

            {isSelected && (
              <Ionicons name="checkmark" size={18} color={colors.foreground} />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

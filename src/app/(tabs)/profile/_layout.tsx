import { useTheme } from "@/src/theme";
import { Ionicons } from "@expo/vector-icons";
import { isLiquidGlassAvailable } from "expo-glass-effect";
import { Link, Stack } from "expo-router";
import React from "react";

export default function ProfileLayout() {
  const { colors } = useTheme();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          title: "Profile",
          headerLargeTitleEnabled: true,
          headerTransparent: isLiquidGlassAvailable() ? true : false,
          headerRight: () => <HeaderRightItem />,
          headerStyle: {
            backgroundColor: isLiquidGlassAvailable()
              ? "transparent"
              : colors.background,
          },
        }}
      />
      <Stack.Screen
        name="edit-profile"
        options={{
          presentation: "formSheet",
          headerShown: false,
          sheetAllowedDetents: "fitToContents",
          sheetGrabberVisible: true,
          sheetCornerRadius: 24,
          contentStyle: {
            backgroundColor: isLiquidGlassAvailable()
              ? "transparent"
              : colors.background,
          },
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          headerShown: true,
          title: "Settings",
          headerLargeTitleEnabled: true,
          headerTransparent: true,
          headerBackVisible: true,
          headerStyle: {
            backgroundColor: isLiquidGlassAvailable()
              ? "transparent"
              : colors.background,
          },
        }}
      />
    </Stack>
  );
}

const HeaderRightItem = () => {
  const { colors } = useTheme();
  return (
    <Link href={"/profile/settings"}>
      <Ionicons name="cog" size={28} color={colors.foreground} />
    </Link>
  );
};

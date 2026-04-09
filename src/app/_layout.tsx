import { Stack } from "expo-router";
import React from "react";
import "../../globals.css";
import { ThemeProvider } from "../theme";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}

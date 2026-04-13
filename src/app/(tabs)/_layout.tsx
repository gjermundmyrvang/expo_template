import { useTheme } from "@/src/theme";
import {
  Badge,
  Icon,
  Label,
  NativeTabs,
} from "expo-router/unstable-native-tabs";

export default function TabLayout() {
  const { colors } = useTheme();
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        <Icon
          sf="house.fill"
          drawable="ic_menu_today"
          selectedColor={colors.primary}
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="profile">
        <Icon sf="person" drawable="ic_menu" selectedColor={colors.primary} />
        <Label>Profile</Label>
        <Badge />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

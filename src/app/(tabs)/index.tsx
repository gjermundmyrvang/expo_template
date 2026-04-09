import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Home() {
  const { top } = useSafeAreaInsets();

  return (
    <ScrollView
      className="flex-1 bg-background"
      contentContainerStyle={{
        paddingTop: top + 16,
        paddingHorizontal: 16,
        paddingBottom: 32,
      }}
    >
      {/* Header */}
      <Text className="text-foreground text-3xl font-bold mb-1">
        Good morning
      </Text>
      <Text className="text-foreground text-sm mb-6">
        Heres whats going on today.
      </Text>

      {/* Cards */}
      {[1, 2, 3].map((i) => (
        <View
          key={i}
          className="bg-card border border-border rounded-2xl p-4 mb-3"
        >
          <Text className="text-foreground font-semibold mb-1">
            Card title {i}
          </Text>
          <Text className="text-foreground text-sm">
            Some description goes here.
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

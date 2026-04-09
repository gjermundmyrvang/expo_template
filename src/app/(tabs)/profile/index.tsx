import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const ITEMS = [
  { id: 1, label: "Full name", value: "Ola Nordmann" },
  { id: 2, label: "Email", value: "ola@example.com" },
  { id: 3, label: "Phone", value: "+47 123 45 678" },
  { id: 4, label: "Member since", value: "January 2024" },
];

export default function Profile() {
  const router = useRouter();

  return (
    <ScrollView
      className="flex-1 bg-background"
      contentContainerClassName="px-4 pt-12 pb-8"
    >
      {/* Avatar + name */}
      <View className="items-center mb-8">
        <View className="w-20 h-20 rounded-full bg-primary items-center justify-center mb-3">
          <Text className="text-white text-3xl font-bold">O</Text>
        </View>
        <Text className="text-foreground text-xl font-bold">Ola Nordmann</Text>
        <Text className="text-foreground text-xs mt-0.5">ola@example.com</Text>
      </View>

      {/* Info rows */}
      <View className="bg-card rounded-2xl overflow-hidden border border-border">
        {ITEMS.map((item, index) => (
          <View
            key={item.id}
            className={`px-4 py-3.5 flex-row justify-between items-center ${
              index < ITEMS.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <Text className="text-foreground text-sm">{item.label}</Text>
            <Text className="text-foreground text-sm font-medium">
              {item.value}
            </Text>
          </View>
        ))}
      </View>

      {/* CTA */}
      <TouchableOpacity
        className="bg-primary mt-6 py-3.5 rounded-full items-center"
        onPress={() => router.navigate("/profile/edit-profile")}
        activeOpacity={0.8}
      >
        <Text className="text-white font-semibold text-base">Endre profil</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

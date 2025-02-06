import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Bienvenue sur l'application !</Text>
      
      <Link href="/profile">
        <Text style={{ color: "blue", marginTop: 10 }}>Aller au profil</Text>
      </Link>

      <Link href="/settings">
        <Text style={{ color: "blue", marginTop: 10 }}>Aller aux paramètres</Text>
      </Link>
    </View>
  );
}

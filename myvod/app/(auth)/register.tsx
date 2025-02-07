import { useRouter } from "expo-router";
import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";

export default function RegisterScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    console.log("Inscription réussie avec :", email, password);
    router.push("/(auth)/login");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Inscription</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} />
      <TextInput placeholder="Mot de passe" secureTextEntry value={password} onChangeText={setPassword} style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} />
      <Button title="S'inscrire" onPress={handleRegister} />
    </View>
  );
}

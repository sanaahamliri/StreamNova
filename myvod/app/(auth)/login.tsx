import { useRouter } from "expo-router";
import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Connexion réussie avec :", email, password);
    router.replace("/home");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Connexion</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} />
      <TextInput placeholder="Mot de passe" secureTextEntry value={password} onChangeText={setPassword} style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} />
      <Button title="Se connecter" onPress={handleLogin} />
    </View>
  );
}

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Favorites() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Ionicons
          name="heart"
          size={82}
          color="#ef4444"
          style={styles.icon}
        />

        <Text style={styles.title}>Your Favorites</Text>
        <Text style={styles.subtitle}>
          Movies you love will appear here
        </Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.75}
          onPress={() => router.push("/")}
        >
          <Ionicons name="home-outline" size={18} color="#fff" />
          <Text style={styles.buttonText}>Go Back Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  /* Center card */
  card: {
    width: "100%",
    maxWidth: 340,
    backgroundColor: "#1e293b",
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 25,
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#334155",

    elevation: 12,
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
  },

  icon: {
    marginBottom: 22,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 10,
    letterSpacing: 0.4,
  },

  subtitle: {
    fontSize: 15,
    color: "#94a3b8",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 22,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#334155",
    paddingVertical: 12,
    paddingHorizontal: 26,
    borderRadius: 14,
  },

  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
    letterSpacing: 0.3,
  },
});
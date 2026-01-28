import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=12" }}
          style={styles.avatar}
        />

        <Text style={styles.name}>Anushka Sahan</Text>
        <Text style={styles.email}>SahanAnush@example.com</Text>

        <View style={styles.stats}>
          <View style={styles.infoBox}>
            <Ionicons name="film" size={20} color="#38bdf8" />
            <Text style={styles.infoText}>Total Watched</Text>
            <Text style={styles.infoValue}>42</Text>
          </View>

          <View style={styles.infoBox}>
            <Ionicons name="heart" size={20} color="#ef4444" />
            <Text style={styles.infoText}>Favorites</Text>
            <Text style={styles.infoValue}>10</Text>
          </View>
        </View>

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

  card: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#1e293b",
    borderRadius: 22,
    paddingVertical: 36,
    paddingHorizontal: 24,
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#334155",

    elevation: 12,
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 18,
    borderWidth: 3,
    borderColor: "#334155",
  },

  name: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    letterSpacing: 0.4,
  },

  email: {
    color: "#94a3b8",
    marginBottom: 28,
    fontSize: 14,
  },

  stats: {
    width: "100%",
    gap: 12,
    marginBottom: 30,
  },

  infoBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0f172a",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#334155",
  },

  infoText: {
    color: "#cbd5f5",
    fontSize: 15,
    marginLeft: 10,
    flex: 1,
  },

  infoValue: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#334155",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 14,
  },

  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
    letterSpacing: 0.3,
  },
});
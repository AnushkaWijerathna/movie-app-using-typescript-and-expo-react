import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Layout() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* App Screens */}
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />

      {/* Footer Navigation */}
      <View style={styles.footerWrapper}>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => router.push("/")} activeOpacity={0.7}>
            <View style={styles.footerItem}>
              <Ionicons name="home" size={22} color="#fff" />
              <Text style={styles.footerText}>Home</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/favourites")} activeOpacity={0.7}>
            <View style={styles.footerItem}>
              <Ionicons name="heart" size={22} color="#fff" />
              <Text style={styles.footerText}>Favorites</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/profile")} activeOpacity={0.7}>
            <View style={styles.footerItem}>
              <Ionicons name="person" size={22} color="#fff" />
              <Text style={styles.footerText}>Profile</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.creditText}>
        Made by Anushka Wijerathna
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
  },

  /* Footer outer spacing (floating effect) */
  footerWrapper: {
    position: "absolute",
    bottom: 18,
    left: 16,
    right: 16,
  },

  footer: {
    backgroundColor: "rgba(30, 41, 59, 0.95)", // same color, modern opacity
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 18,

    borderWidth: 1,
    borderColor: "#334155",

    elevation: 10, // Android depth
    shadowColor: "#000", // iOS depth
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },

  footerItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  footerText: {
    color: "#fff",
    fontSize: 12,
    marginTop: 4,
    fontWeight: "500",
    letterSpacing: 0.3,
  },

  creditText: {
    color: "#94a3b8",
    textAlign: "center",
    marginBottom: 8,
    fontSize: 11,
    letterSpacing: 0.4,
  },
});
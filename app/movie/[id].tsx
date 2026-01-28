import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { movies } from "../../assets/data/movies";

const { height } = Dimensions.get("window");

export default function MovieDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const movie = movies.find((m) => m.id.toString() === id);
  const [rating, setRating] = useState(0);

  /* Load saved rating */
  useEffect(() => {
    const loadRating = async () => {
      const saved = await AsyncStorage.getItem(`rating-${movie?.id}`);
      if (saved) setRating(Number(saved));
    };
    if (movie) loadRating();
  }, [movie]);

  /* Save rating */
  const handleRating = async (value: number) => {
    setRating(value);
    await AsyncStorage.setItem(`rating-${movie.id}`, value.toString());
  };

  /* Recently viewed */
  useEffect(() => {
    const addToRecentlyViewed = async () => {
      if (!movie) return;

      const stored = await AsyncStorage.getItem("recentlyViewed");
      let recent: number[] = stored ? JSON.parse(stored) : [];

      recent = recent.filter((m) => m !== movie.id);
      recent.unshift(movie.id);
      if (recent.length > 10) recent = recent.slice(0, 10);

      await AsyncStorage.setItem("recentlyViewed", JSON.stringify(recent));
    };

    addToRecentlyViewed();
  }, [movie]);

  if (!movie) {
    return (
      <View style={styles.notFound}>
        <Text style={{ color: "#fff", fontSize: 18 }}>Movie not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 120 }}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={22} color="#fff" />
      </TouchableOpacity>

      {/* Hero Image */}
      <Image source={movie.image} style={styles.image} />

      {/* Content Card */}
      <View style={styles.card}>
        <Text style={styles.title}>{movie.name}</Text>
        <Text style={styles.description}>{movie.description}</Text>

        {/* Info */}
        <View style={styles.infoBox}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Cast</Text>
            <Text style={styles.value}>{movie.cast}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Genre</Text>
            <Text style={styles.value}>{movie.genre}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Release</Text>
            <Text style={styles.value}>{movie.releaseDate}</Text>
          </View>
        </View>

        {/* Rating */}
        <View style={styles.ratingSection}>
          <Text style={styles.ratingTitle}>Rate this movie</Text>

          <View style={styles.stars}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity key={star} onPress={() => handleRating(star)}>
                <Ionicons
                  name={star <= rating ? "star" : "star-outline"}
                  size={34}
                  color="#fbbf24"
                  style={{ marginHorizontal: 6 }}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
  },

  backButton: {
    position: "absolute",
    top: 55,
    left: 20,
    zIndex: 10,
    backgroundColor: "rgba(15,23,42,0.7)",
    padding: 8,
    borderRadius: 20,
  },

  image: {
    width: "100%",
    height: height * 0.52,
  },

  card: {
    marginTop: -30,
    backgroundColor: "#1e293b",
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    padding: 22,
    borderWidth: 1,
    borderColor: "#334155",
  },

  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 10,
  },

  description: {
    color: "#cbd5e1",
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 22,
  },

  infoBox: {
    backgroundColor: "#0f172a",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#334155",
  },

  infoRow: {
    marginBottom: 12,
  },

  label: {
    color: "#94a3b8",
    fontSize: 13,
    marginBottom: 2,
  },

  value: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },

  ratingSection: {
    marginTop: 30,
    alignItems: "center",
  },

  ratingTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },

  stars: {
    flexDirection: "row",
    alignItems: "center",
  },

  notFound: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f172a",
  },
});
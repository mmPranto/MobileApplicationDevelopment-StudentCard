import ProfileCard from "@/components/profile-card";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <StatusBar style="dark" />
      <ProfileCard
        name="Habib Wahid"
        studentId="23-50176-1"
        department="Computer Science -AIUB"
        bio="Passionate about mobile application development and building tools that make everyday life easier."
      />
      <ProfileCard
        name="Rakib Hasan"
        studentId="22-46785-1"
        department="Computer Science -AIUB"
        bio="Passionate about writing movie script."
      />
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F0F4F8",
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 40,
  },
});

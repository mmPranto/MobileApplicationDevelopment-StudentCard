import { StatusBar } from "expo-status-bar";
import { StyleSheet,ScrollView,View,Text } from "react-native";


export default function App(){
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <StatusBar style="dark" />
      <View style={styles.card}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>MUMP </Text>
        </View>
        <Text style={styles.name}>Minhaz Ul Mostofa Pranto</Text>
        <Text style={styles.role}>Computer Science - AIUB</Text>
        <View style={styles.divider} />
        <Text style={styles.bio}>Passionate about mobile development and building tools that make everyday life easier.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F0F4F8",
    alignItems: "center",
    paddingTop: 60,
    paddingBottom:40,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 28,
    width: "88%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation:4,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: "#0D9488",
    alignItems: "center",
    justifyContent: "center",
    marginBottom:16,
  },
  avatarText: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight:"bold",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0D1F4E",
    marginBottom:4,
  },
  role: {
    fontSize: 14,
    color: "#64748B",
    marginBottom:16,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#E2E8F0",
    marginBottom:16,
  },
  bio: {
    fontSize: 14,
    color: "#64748B",
    textAlign: "center",
    lineHeight:22,
  }
});
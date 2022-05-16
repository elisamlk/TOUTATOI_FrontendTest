import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function DashboardScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      <Text>Personnaliser les infos</Text>
      <Text>Stat perso</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

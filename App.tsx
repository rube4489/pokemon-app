import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <View>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
    </View>
  );
};

export default App;

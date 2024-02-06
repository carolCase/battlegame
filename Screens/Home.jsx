import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const [age, setAge] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate("Game");
  }

  const byxMyndig = () => {
    if (age < 16) {
      return (
        <Text style={styles.textButton}>
          Welcome back when you are Byxmyndig
        </Text>
      );
    } else {
      return (
        <View>
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.button}
              title="welcome warrior"
              onPress={handlePress}
            >
              <Text style={styles.textButton}>welcome warrior!!</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };
  const handleChangeText = (value) => {
    let test = value;
    setAge(parseInt(test));
    setShowMessage(true);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/Images/homescreen.png")}
        resizeMode="cover"
        style={styles.image}
        alignItems="center"
      >
        <TextInput
          placeholder="       Enter your age"
          style={styles.input}
          onChangeText={handleChangeText}
          keyboardType="numeric"
        />
        {showMessage && byxMyndig()}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "navy",
  },
  input: {
    borderWidth: 3,
    borderColor: "navy",
    fontSize: 18,
    fontWeight: "bold",
    padding: 8,
    margin: 10,
    width: 200,
    alignItems: "center",
  },

  button: {
    opacity: 0.8,
    borderRadius: 25,

    backgroundColor: "navy",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "white",
    fontSize: 26,
    textAlign: "center",
    fontWeight: "600",
    fontStyle: "italic",
  },
  footer: {
    marginTop: 20,
    alignItems: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: 350,
  },
  middleText: {
    color: "white",
    textShadowColor: "grey",
    fontSize: 23,
    alignSelf: "center",
    fontStyle: "italic",
    fontWeight: "bold",
  },
});

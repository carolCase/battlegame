import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

const options = [
  { id: 0, name: "Sten", emoji: "🪨", beats: [2] },
  { id: 1, name: "sax", emoji: "✂️", beats: [0] },
  { id: 2, name: "pase", emoji: " 🧻", beats: [1] },
];

const getResult = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Its A Tie";
  }
  if (options[userChoice].beats.includes(computerChoice)) {
    return "You win!";
  }
  return "Scotland wins!";
};

const Game = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [showMessage, setShowMessage] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (userChoice !== null) {
      setShowMessage(
        <Text style={styles.displayText}>
          Your choice {options[userChoice]?.emoji} wallace choice
          {options[computerChoice]?.emoji}
        </Text>
      );
    }
  }, [userChoice, computerChoice, options]);

  const handlePlay = (choice) => {
    setUserChoice(choice);

    const randomChoice = Math.floor(Math.random() * 3);

    setTimeout(() => {
      setComputerChoice(randomChoice);
    }, 1500);

    setTimeout(() => {
      setResult(getResult(choice, randomChoice));
    }, 2000);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require("../assets/Images/wallace.jpg")}
          style={{ height: 300, width: 300 }}
        />
        <Text style={styles.title}>Choose your weapon!</Text>
        {options.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={styles.buttonStyle}
            onPress={() => handlePlay(option.id)}
          >
            <Text style={styles.buttonText}>
              {option.name.charAt(0).toUpperCase() + option.name.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
        {result !== null && <Text>{showMessage}</Text>}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "navy",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
    marginBottom: 20,
    fontFamily: "sans-serif",
    color: "white",
  },
  buttonStyle: {
    backgroundColor: "black",
    padding: 40,
    margin: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontStyle: "italic",
  },
  displayText: {
    fontSize: 25,
    color: "white",
  },
});

export default Game;

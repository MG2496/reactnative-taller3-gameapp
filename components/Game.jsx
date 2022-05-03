import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import Number from "./Number";

export default Game = ({ randomNumbersCount, initialSeconds }) => {
  const [ randomNumbers, setRandomNumbers ] = useState([]);
  const [ target, setTarget ] = useState();
  const [ selectedNumbers, setSelectedNumbers ] = useState([]);
  const [ remainingSeconds, setRemainingSeconds ] = useState(initialSeconds);
  const [ gameStatus, setGameStatus ] = useState('PLAYING');

  const intervalId = useRef();

  useEffect(() => console.log(selectedNumbers), [selectedNumbers]);

  useEffect(() => {
    const numbers = Array.from({ length: randomNumbersCount}).map(() => 1 + Math.floor(10 * Math.random()));
    const target = numbers.slice(0, randomNumbersCount -2).reduce( (acc, cur) => acc + cur, 0 );

    setRandomNumbers(numbers);
    setTarget(target);

    intervalId.current = setInterval(() => setRemainingSeconds(seconds => seconds -1), 1000);
    return () => clearInterval(intervalId.current);
  }, []);

  useEffect(() => {
    setGameStatus(() =>  getGameStatus());
    if (remainingSeconds  === 0 || gameStatus !== 'PLAYING') {
      clearInterval(intervalId.current);
    }
  }, [remainingSeconds, selectedNumbers]);

  const isNumberSelected = numberIndex => selectedNumbers.some(number => number === numberIndex);
  const selectNumber = number => {
    setSelectedNumbers([...selectedNumbers, number]);
  };
  const getGameStatus = () => {
    const sumSelected = selectedNumbers.reduce((acc, cur) => acc + randomNumbers[cur], 0);
    if (remainingSeconds === 0 || sumSelected > target) {
      return 'LOST';
    } else if (sumSelected === target) {
      return 'WON';
    } else {
      return 'PLAYING';
    }
  };

  return (
    <View>
      <Text style={styles.target}>{target}</Text>
      <Text style={[ styles.target, styles[gameStatus] ]}>{gameStatus}</Text>
      <Text>{remainingSeconds}</Text>
      <View style={styles.randomContainer}>
        {randomNumbers.map((number, index) => (
          <Number
            key={index}
            id={index}
            number={number}
            isSelected={isNumberSelected(index) || gameStatus !== 'PLAYING'}
            onSelected={selectNumber}
          />
        ))}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  target: {
    fontSize: 40,
    backgroundColor: '#ecdfcf',
    textAlign: 'center',
    color: '#df5c40',
  },
  randomContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  PLAYING: {
    backgroundColor: '#df5c40',
    color: 'white'
  },
  LOST: {
    backgroundColor: '#ff5252',
    color: 'white'
  },
  WON: {
    backgroundColor: '#77dd77',
    color: 'white',
    borderRadius: 20,
  },


});

    // random: {
    //     backgroundColor: 'green',
    //     color: 'white',
    //     width: 100,
    //     marginHorizontal: 15,
    //     marginVertical: 25,
    //     fontSize: 35,
    //     textAlign: 'center',
    // }



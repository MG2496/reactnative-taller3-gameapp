import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default Number = ({ id, number, isSelected, onSelected }) => {
  const handlePress = () => {
    if (!isSelected) {
      onSelected(id);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={[styles.random, isSelected && styles.selected]}>{number}</Text>
    </TouchableOpacity>
    )
};

// export function Button() {
//     return(
//         <TouchableOpacity
//             style = {{
//                 ...styles.button,
//                 backgroundColor: '#5859d6',
//             }}
//         >
//             <Text
//                 style = {{
//                     ...styles.buttonText,
//                     color: 'white',
//                  }}
//             >
//             Button
//         </Text>
//         </TouchableOpacity>
//     )
// };



const styles = StyleSheet.create({
  random: {
    backgroundColor: 'white',
    width: 100,
    marginHorizontal: 15,
    marginVertical: 25,
    fontSize: 35,
    textAlign: 'center',
    minHeight: 45,
    color: 'grey',
    borderWidth: 3,
    borderRadius: 20,
    borderColor:'#df5c40',

  },
  selected: {
    opacity: 0.6,
  },

//   button: {
//     paddingVertical: 15,
//     alignSelf: 'center',
//     borderRadius: 10,
//     width: '90%',

//   },

//   buttonText: {
//     textAlign: 'center',

//   },

});
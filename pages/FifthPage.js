import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const MyScreen = () => {
  const imageUrl = 'https://www.google.com/maps/d/thumbnail?mid=12uNmvE0xo0IPRkjlcF_e-h6kytg&hl=en';
  const [reason, setReason] = useState('Select a reason');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionSelect = (option) => {
    setReason(option);
    setIsDropdownOpen(false);
  };

  return (
    <View style={styles.container}>

      
      {/* Title Text */}
      <Text style={styles.title}>Current Location</Text>
      
      {/* Map Photo */}
      <Image source={{ uri: imageUrl }} style={styles.map} />
      
      {/* Reason for Request */}
      <Text style={styles.text}>Reason for request</Text>
      <TouchableOpacity style={styles.dropdown} onPress={() => setIsDropdownOpen(!isDropdownOpen)}>
        <Text style={styles.dropdownText}>{reason}</Text>
        <AntDesign name={isDropdownOpen ? 'caretup' : 'caretdown'} size={16} color="black" />
      </TouchableOpacity>
      {isDropdownOpen && (
        <View style={styles.dropdownOptions}>
          <TouchableOpacity style={styles.option} onPress={() => handleOptionSelect('Critical')}>
            <Text style={styles.optionText}>Crtical</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => handleOptionSelect('First Alarm')}>
            <Text style={styles.optionText}>First Alarm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => handleOptionSelect('Dangerous')}>
            <Text style={styles.optionText}>Dangerous</Text>
          </TouchableOpacity>
        </View>
      )}
      
      {/* Long Button */}
      <View style={styles.buttonContainer}>
        <Button title="Call an emergency" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 16,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'red',
  },
  map: {
    width: 300,
    height: 200,
    marginBottom: 16,
  },
  dropdown: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  dropdownText: {
    fontSize: 16,
  },
  dropdownOptions: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginTop: 5,
  },
  option: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  optionText: {
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 70,
    width: '80%',
    backgroundColor: '#6BCEF5',
    borderRadius: 10,
  },
});

export default MyScreen;
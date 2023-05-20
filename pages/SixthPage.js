import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';

const CallScreen = () => {
  const contacts = [
    { name: 'National Emergency Hotline', number: '911' },
    { name: 'Philippine Red Cross', number: '143' },
    { name: 'Philippine National Police', number: '117' },
    { name: 'Bureau of Fire Protection(BFP)', number: '160' },
    { name: 'Department of Health(DOH)', number: '1555' },
    { name: 'Bantay Bata', number: '163' },
  ];

  const [calling, setCalling] = useState(false); // State for tracking if a call is in progress



  const handleCall = (number) => {
    setCalling(true); // Set calling state to true
    setTimeout(() => {
      setCalling(false); // Reset calling state to false after a delay (simulating the call duration)
      Alert.alert('Call Ended', 'Call with ${number} has ended.');
    }, 2000); // Change the delay as per your requirement (in milliseconds)
  };

  const renderContacts = () => {
    return (
      <>
        <View style={styles.row}>
          <View style={styles.leftContainer}>
            <Text style={styles.columnHeader}>Agency</Text>
          </View>
          <View style={styles.rightContainer}>
            <View style={styles.column}>
              <Text style={styles.columnHeader}>Phone Number</Text>
            </View>
            <View style={styles.column} />
          </View>
        </View>
        {contacts.map((contact, index) => (
          <View style={styles.row} key={index}>
            <View style={styles.leftContainer}>

                <Text style={styles.name}>{contact.name}</Text>
            </View>
            <View style={styles.rightContainer}>
              <View style={styles.column}>
                  <Text style={styles.number}>{contact.number}</Text>
              </View>
              <View style={styles.column}>
                <TouchableOpacity
                  style={[styles.button, calling && styles.callingButton]}
                  onPress={() => handleCall(contact.number)}
                  disabled={calling} // Disable the button while a call is in progress
                >
                    <Text style={styles.buttonText}>{calling ? 'Calling...' : 'Call'}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </>
    );
  };

  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={('/assets/Logo.png')} style={styles.image} />
        <Text style={styles.title}>Emergency Hotlines</Text>
        <View style={styles.container}>
          {renderContacts()}
        </View>
        <TouchableOpacity style={styles.previousButton}>
          <Text style={styles.previousButtonText}>Previous</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    color: '#000',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  leftContainer: {
    flex: 1,
  },
  name: {
    fontSize: 17,
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
    color: '#000',
  },
  numberContainer: {
    marginLeft: 10,
  },
  number: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#000',
  },
  button: {
    backgroundColor: '#345DA7',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  },
  columnHeader: {
    fontSize: 23,
    fontFamily: 'Poppins-Bold',
    color: '#000',
  },
  previousButton: {
    backgroundColor: '#345DA7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  previousButtonText: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
  },
});

export default CallScreen;
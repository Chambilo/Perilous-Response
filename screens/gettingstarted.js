import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function gettingstarted({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        <Image
          source={require('../assets/Logo.png')}
          style={styles.logo}
        />
        <Text style={styles.heading}>Keep Calm and Trust Us</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Get Started!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 35,
  },
  logo: {
    width: 250,
    height: 250,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#20315f',
    paddingTop: 75,
  },
  button: {
    backgroundColor: '#135975',
    padding: 20,
    width: '90%',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
});

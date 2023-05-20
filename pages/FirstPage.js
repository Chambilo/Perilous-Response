


import React from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const MyScreen = () => {
  const videos = [
    { id: 'video1', url: 'https://youtu.be/ea1RJUOiNfQ' },
    { id: 'video2', url: 'https://youtu.be/BQNNOh8c8ks' },
    { id: 'video3', url: 'https://youtu.be/GmqXqwSV3bo' },
    { id: 'video4', url: 'https://youtu.be/PhH9a0kIwmk' },
  ];

  const imageSource = { uri: 'https://www.canaan.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBam9DIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2fcf466b30bcebd8f0219adee02d2ab0d323960b/2.png' };

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} resizeMode="cover" />

       <Text style={styles.description}>
           FIRST AID TIPS FOR YOU.
        </Text>
    

      <ScrollView horizontal>
        {videos.map((video) => (
          <View key={video.id} style={styles.videoContainer}>
            <WebView source={{ uri: video.url }} style={styles.video} />
          </View>
        ))}
      </ScrollView>
       <Text style={styles.description}>
          EXPERIENCING ANYTHING BELOW?
        </Text>
     <View style={styles.rowContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Allergies</Text>
          <Text style={styles.text}>Asthama Attack</Text>
          <Text style={styles.text}>Bleeding</Text>
          <Text style={styles.text}>Heart Ache</Text>
        </View>
        
        <View style={styles.textContainer}>
          <Text style={styles.text}>Chest Pain</Text>
          <Text style={styles.text}>Choking</Text>
          <Text style={styles.text}>Fainting</Text>
          <Text style={styles.text}>Seizure</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Emergency hotline</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },

    description: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32,
    marginTop: 20,
  },
  videoContainer: {
    width: 300,
    height: 200,
    marginLeft: 10,
  },
  video: {
    flex: 1,
    marginTop: 10,
  },

rowContainer: {
    flexDirection: 'row',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight:'bold',
    marginVertical: 5,
  },



  button: {
    backgroundColor: '#6BCEF5',
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default MyScreen;
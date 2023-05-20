import React from 'react';
import { StyleSheet, View, Text, Button, TextInput, ScrollView } from 'react-native';

const LearnVideo = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Learn</Text>
      {/* Search bar */}
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
      </View>

      {/* First Section */}
      <View style={styles.section}>
        {/* Title Text */}
        <Text style={styles.title}>Basic First Aid Skills</Text>
      
        {/* Description */}
        <Text style={styles.description}>
          First aid is as easy as ABC – airway, breathing and CPR (cardiopulmonary resuscitation). In any situation, apply the DRSABCD Action Plan. DRSABCD stands for: Danger – always check the danger to you, any bystanders and then the injured or ill person.
        </Text>
        
        {/* Button */}
        <Button title="Read Article" />
      </View>
      
      {/* Second Section */}
      <View style={styles.section}>
        {/* Title Text */}
        <Text style={styles.title}>First Aid - What You Need To Know</Text>
        
        {/* Description */}
        <Text style={styles.description}>
          First aid is as easy as ABC – airway, breathing and CPR (cardiopulmonary resuscitation). In any situation, apply the DRSABCD Action Plan. DRSABCD stands for: Danger – always check the danger to you, any bystanders and then the injured or ill person.
        </Text>
        
        {/* Button */}
        <Button title="Read Article" />
      </View>

      {/* 3rd section */}
      <View style={styles.section}>
        {/* Title Text */}
        <Text style={styles.title}>How to do the Primary Survey</Text>
      
        {/* Description */}
        <Text style={styles.description}>
          First aid is as easy as ABC – airway, breathing and CPR (cardiopulmonary resuscitation). In any situation, apply the DRSABCD Action Plan. DRSABCD stands for: Danger – always check the danger to you, any bystanders and then the injured or ill person.
        </Text>
        
        {/* Button */}
        <Button title="Read Article" />
      </View>

      {/* 4th section */}
      <View style={styles.section}>
        {/* Title Text */}
        <Text style={styles.title}>Basic First Aid Training UK (Updated 2022)</Text>
      
        {/* Description */}
        <Text style={styles.description}>
          First aid is as easy as ABC – airway, breathing and CPR (cardiopulmonary resuscitation). In any situation, apply the DRSABCD Action Plan. DRSABCD stands for: Danger – always check the danger to you, any bystanders and then the injured or ill person.
        </Text>
        
        {/* Button */}
        <Button title="Read Article" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 30,
  },
  section: {
    marginVertical: 20,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'left',
  },
  description: {
    fontSize: 14,
    textAlign: 'left',
    marginBottom: 32,
  },
  searchContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    marginRight: 16,
  },
  searchInput: {
    height: 40,
    width: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#6BCEF5',
    padding: 8,
  },
});

export default LearnVideo;

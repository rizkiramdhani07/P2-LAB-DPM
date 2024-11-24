import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexBoxLayout = () => {
  return (
    <View style={styles.container}>
    
      <Text style={styles.text}>TUGAS PERTEMUAN 2 DPM</Text>

      <View style={styles.boxContainer}>
        <View style={styles.box1}>
          <Text style={styles.boxText}>box 1</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.boxText}>box 2</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#d3d3d3', 
  },
  text: {
    fontSize: 24, 
    color: 'blue', 
    fontWeight: 'bold', 
    marginBottom: 60, 
  },
  boxContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center', 
    width: '80%', 
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'grey', 
    borderRadius: 10, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'black', 
    borderRadius: 10, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  boxText: {
    fontSize: 16, 
    color: 'white', 
    fontWeight: 'bold', 
  },
});

export default FlexBoxLayout;
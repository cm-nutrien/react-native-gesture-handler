import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';

import React from 'react';

export default function FabricCallbacksExample() {
  const gesture = Gesture.Pan()
    .onBegan(() => {
      console.log(_WORKLET, 'onBegan');
    })
    .onUpdate(() => {
      console.log(_WORKLET, 'onUpdate');
    })
    .onEnd(() => {
      console.log(_WORKLET, 'onEnd');
    });

  return (
    <View style={styles.container}>
      <GestureDetector gesture={gesture}>
        <View style={styles.outerBox}>
          <View style={styles.innerBox} />
        </View>
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerBox: {
    width: 200,
    height: 200,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerBox: {
    width: 80,
    height: 80,
    backgroundColor: 'black',
  },
});
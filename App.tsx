import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Modal,Pressable } from 'react-native';
import React, {useState} from 'react';


export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text>Hello World!</Text>
              <Pressable
                onPress={() => setModalVisible(!modalVisible)}>
                <Text>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          onPress={() => setModalVisible(true)}>
          <Text>Show Modal</Text>
        </Pressable>
      </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
    modalContent: {
    width: 250,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
});

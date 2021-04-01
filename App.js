import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Map, Modal, Panel, Input } from './components/index';

export default function App() {
  const [points, setPoints] = useState([]);
  const [name, setName] = useState('');
  const [visibility, setVisibility] = useState(false);
  const [pointTemp, setPointTemp] = useState({})

  const handleLongPress = ({ nativeEvent }) => {
    setPointTemp(nativeEvent.coordinate);
    setVisibility(true);
  };
  const handleChangeText = (text) => {
    setName(text);
  };
  const handleSubmit = () => {
    const newPoint = { name: name, coordinate: pointTemp };
    setPoints(points.concat(newPoint));
    setVisibility(false);
    setName('');
  };
  const handleCancel = () => {
    setName('');
    setPointTemp({});
    setVisibility(false);
  };

  return (
    <View style={styles.container}>
      <Map longPress={handleLongPress} />
      <Modal visibility={visibility}>
        <Input title="Nombre" placeholder="Nombre del punto" onChangeText={handleChangeText} />
        <View style={styles.footer}>
          <Button title="Aceptar" onPress={handleSubmit} />
          <Button title="Cancelar" onPress={handleCancel} />
        </View>
      </Modal>
      <Panel />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

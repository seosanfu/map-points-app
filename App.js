import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Map, Modal, Panel, Input, List } from './components/index';

export default function App() {
  const [points, setPoints] = useState([]);
  const [name, setName] = useState('');
  const [visibility, setVisibility] = useState(false);
  const [pointTemp, setPointTemp] = useState({});
  const [filter, setFilter] = useState('new_point');
  const [pointsFilter, setPointsFilter] = useState(true);

  const handleLongPress = ({ nativeEvent }) => {
    setFilter('new_point');
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
  const handleList = () => {
    setFilter('list');
    setVisibility(true);
  };
  const togglePointsFilter = () => {
    setPointsFilter(!pointsFilter);
  }

  return (
    <View style={styles.container}>
      <Map longPress={handleLongPress} dataPoints={points} pointsFilter={pointsFilter} />
      <Modal visibility={visibility}>
          {
            filter === 'new_point'
            ? <View style={styles.form}>
                <Input title="Nombre" placeholder="Nombre del punto" onChangeText={handleChangeText} />
                <View style={styles.footer}>
                  <Button title="Aceptar" onPress={handleSubmit} />
                  <Button title="Cancelar" onPress={handleCancel} />
                </View>
              </View>
            : <List dataPoints={points} closeModal={() => setVisibility(false)} />
          }
      </Modal>
      <Panel onPressLeft={handleList} textLeft="Lista" togglePointsFilter={togglePointsFilter} />
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
  form: {
    padding: 15,
  },
});

import React from 'react';
import { FlatList, Text, View, Button, StyleSheet, Dimensions } from 'react-native';

export default ({ dataPoints, closeModal }) => {
    return (
        <>
            <View style={styles.list}>
                <FlatList 
                    data={dataPoints.map(d => d.name)}
                    renderItem={({ item }) => <View style={styles.item}><Text>{item}</Text></View>}
                    keyExtractor={item => item}
                />
            </View>
            <View style={styles.button}>
                <Button title="Cerrar" onPress={closeModal} />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    list: {
        height: Dimensions.get('screen').height - 250,
    },
    item: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        minHeight: 40,
        justifyContent: 'center',
        padding: 15,
    },
    button: {
        paddingBottom: 15,
    },
});

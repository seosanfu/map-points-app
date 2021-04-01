import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

export default () => {
    return (
        <View style={styles.panel}>
            <Button title="Lista" />
            <Button title="Mostrat/Ocultar" />

        </View>
    )
};

const styles = StyleSheet.create({
    panel: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

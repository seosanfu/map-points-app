import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

export default ({ onPressLeft, textLeft, togglePointsFilter }) => {
    return (
        <View style={styles.panel}>
            <Button title={textLeft} onPress={onPressLeft} />
            <Button title="Mostrat/Ocultar" onPress={togglePointsFilter} />
        </View>
    );
};

const styles = StyleSheet.create({
    panel: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

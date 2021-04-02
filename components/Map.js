import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default ({ longPress, dataPoints, pointsFilter }) => {
    return (
        <MapView 
            style={styles.map}
            onLongPress={longPress} 
        >
            {
                pointsFilter && dataPoints.map(p => 
                    <Marker
                        key={p.name} 
                        coordinate={p.coordinate}
                        title={p.name}
                    />    
                )
            }
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 50,
    },
});

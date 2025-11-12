// Exercise3A
import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'row',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
        flex: 1,
        maxHeight: 80
    },
    child: {
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24,
        flex: 1
    }
});

const Exercise3D = () => {
    return (
        <View style={styles.parent}>
            <Text style={[styles.child, {backgroundColor: 'powderblue', maxWidth: 90, flex: 1}]}>Child One</Text>
            <Text style={[styles.child, {backgroundColor: 'skyblue', flex: 2}]}>Child Two</Text>
            <Text style={[styles.child, {backgroundColor: 'steelblue', flex: 3}]}>Child Three</Text>
        </View>
    );
};

export default Exercise3D;


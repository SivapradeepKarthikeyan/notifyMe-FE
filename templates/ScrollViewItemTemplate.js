import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text } from "react-native-magnus";



export default function ScrollViewItemTemplate(props) {
    return (
        <View style={styles.container}>
            <View style={styles.leftChild}>
                <Image source={{ uri: props.image }} style={styles.image} />
            </View>
            <View style={styles.rightChild}>
                <Text fontSize="xl" fontWeight="semibold" color='white' >{props.title}</Text>
                <Text fontSize="lg" fontWeight="normal" color='white'>{props.description}</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 80,
        width: "100%",
        margin: 6,
        // borderBottomWidth: 0.3,
        // borderBottomColor: 'grey',
        // borderBottomStartRadius: 1
        // backgroundColor: 'green'
    },
    leftChild: {
        width: "30%"
    },
    rightChild: {
        width: "70%"

    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 5,
        marginLeft: 10
    },
});

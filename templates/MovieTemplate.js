import React from 'react';
import { Text } from "react-native-magnus";
import { View, Image, StyleSheet } from 'react-native';



// import { Container } from './styles';

export default function MovieTemplate(props) {
    return (
        <View style={styles.box}>
            <View style={styles.leftChild}>
                <Image
                    source={{ uri: props.moviePosterUrl }}
                    style={styles.image} />
            </View>
            <View style={styles.rightChild}>
                <Text fontSize="xl" fontWeight="semiBold" color='white' >{props.movie_name}</Text>
                <Text fontSize="lg" fontWeight="light" color='white' mt="md" >{props.language}</Text>
                <Text fontSize="lg" fontWeight="light" color='white' mt="md" >{props.releaseDate}</Text>
            </View>

        </View>
    );
}



const styles = StyleSheet.create({

    box: {
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 120,
        width: "80%",
        margin: 8,
        // borderBottomWidth: 0.3,
        // borderBottomColor: 'grey',
        // borderBottomStartRadius: 1
        // backgroundColor: 'green'
    },
    leftChild: {
        width: "40%",
        // backgroundColor: 'green'
    },
    rightChild: {
        width: "60%",
        marginLeft: 40,
        // backgroundColor: 'blue',
    },
    image: {
        height: "100%",
        width: "90%",
        borderRadius: 5,
        marginLeft: 5,
        filter: 'grayscale(100%)',
    },
});


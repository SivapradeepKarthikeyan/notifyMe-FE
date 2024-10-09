import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { View, Image, StyleSheet, ScrollView } from 'react-native'
import Axios from 'axios';
import { Text, Checkbox } from 'react-native-magnus';
import { MOVIE_DETAIL_URL, BACKEND_URL, USER_MOVIE_URL } from '../constants/Constants';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Icon, Button } from 'react-native-magnus';
import Toast from 'react-native-toast-message';




export default function MovieDetail({ navigation }) {

    //Route Params to send and receive data via routes
    const route = useRoute();
    const { contentId } = route.params;

    const [movieDetailJSON, setMovieDetailJSON] = useState({});

    useEffect(() => {
        Axios.get(MOVIE_DETAIL_URL + contentId)
            .then((response) => {
                setMovieDetailJSON(response.data);
                console.log(`Movie Detail -> ` + response.data.name + `::` + contentId)
            })
            .catch((error) => {
                console.error(`Error fetching movie data :: `, error);
            });
    }, [0]);


    const trimMovieName = (movieName) => {
        return movieName?.trim()
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9\-]/g, '') || '';
    }

    const registerMovie = () => {
        Axios.post(BACKEND_URL, {
            //YET TO GET ALL THE USER DETAILS FROM IDP (FIREBASE) USING REDUX(FOR STATE MANAGEMENT).
            "userId": "xxxxxxxx1",
            "userName": "Alpha01",
            "userNotificationTypes": {
                "email": "Alpha01@example.com",
                "whatsapp": "+916383795377"
            },
            "userMovieId": contentId,
            "userMovieName": movieDetailJSON?.name,
            "userMovieUrl": USER_MOVIE_URL + trimMovieName(movieDetailJSON?.name) + `-` + contentId
        })
            .then((response) => {
                Toast.show({
                    type: `success`,
                    text1: `🔊 You will be notified when ${movieDetailJSON.name} is released !`,
                });
            })
            .catch((error) => {
                console.log(`Movie Register Error :: ` + error)
            })
    }



    return (
        <SafeAreaProvider>
            <View style={styles.container}>

                <Text fontSize="5xl" fontWeight="bold" color="black">{movieDetailJSON.name}</Text>

                <View style={styles.movieBanner}>
                    <Image source={{ uri: movieDetailJSON.upcomingMoviePosterURL }} style={styles.movieBannerImage} resizeMode="contain" />
                </View>

                <View style={styles.movieDescription}>
                    <Text fontSize="sm" fontWeight="light" color="white">{movieDetailJSON?.summary?.summary}</Text>
                </View>

                <View style={styles.scroolViewContainer}>
                    <ScrollView horizontal={true} style={{ width: "100%" }}>
                        {movieDetailJSON?.casts?.castData.map(i => {
                            return (
                                <View style={styles.actorCard}>
                                    <Image source={{ uri: i?.imageUrl }} style={styles.actorsImage} />
                                    <Text fontSize="sm" fontWeight="light" color="white">{i.name}</Text>
                                </View>
                            )
                        })}
                    </ScrollView>
                </View>

                <View style={styles.releaseDate}>
                    <Text fontSize="sm" fontWeight="light" color="white">Release date : {movieDetailJSON?.releaseDate}</Text>
                </View>

                <View style={styles.notifiactionContainer}>
                    <View style={styles.notifiactionType}>
                        <Icon
                            name="whatsapp"
                            color="white"
                            fontSize="6xl"
                            fontFamily="FontAwesome"
                        />
                        <View style={{ marginLeft: 15 }}>
                            <Checkbox value={1} prefix={<Text color="white">whatsapp </Text>} />
                        </View>
                    </View>
                    <View style={styles.notifiactionType}>
                        <Icon
                            name="whatsapp"
                            color="white"
                            fontSize="6xl"
                            fontFamily="FontAwesome"
                        />
                        <View style={{ marginLeft: 15 }}>
                            <Checkbox value={1} prefix={<Text color="white">whatsapp </Text>} />
                        </View>
                    </View>
                </View>

                <View style={styles.notifiactionContainer}>
                    <View style={styles.notifiactionType}>
                        <Icon
                            name="whatsapp"
                            color="white"
                            fontSize="6xl"
                            fontFamily="FontAwesome"
                        />
                        <View style={{ marginLeft: 15 }}>
                            <Checkbox value={1} prefix={<Text color="white">whatsapp </Text>} />
                        </View>
                    </View>
                    <View style={styles.notifiactionType}>
                        <Icon
                            name="whatsapp"
                            color="white"
                            fontSize="6xl"
                            fontFamily="FontAwesome"
                        />
                        <View style={{ marginLeft: 15 }}>
                            <Checkbox value={1} prefix={<Text color="white">whatsapp </Text>} />
                        </View>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <Button bg="blue500" color="white" w="80%" onPress={() => { registerMovie() }}
                        suffix={<Icon name="notification" ml="md" color="white" />}>
                        Notify Me
                    </Button>
                </View>
            </View>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        display: 'flex',
        //alignItems: 'center',
        backgroundColor: 'black',
    },
    movieBanner: {
        display: 'flex',
        alignItems: 'center',
        height: 340,
        width: "100%",
        marginTop: 20,
        backgroundColor: 'black',
    },
    movieBannerImage: {
        height: "100%",
        width: "90%",
        borderRadius: 5,
        borderColor: 'white',
        borderWidth: 0.1
        // objectFit: 'contain', -->In web dev we use this to make a image to get fit inside a continer
    },
    movieDescription: {
        width: "90%",
        alignItems: 'center',
        padding: 5,
        margin: 15
    },
    scroolViewContainer: {
        height: "10%",
        margin: 10,
        //backgroundColor: 'pink'
    },
    releaseDate: {
        display: 'flex',
        alignItems: 'flex-start',
        width: '100%',
        marginLeft: 20
    },
    actorCard: {
        height: 60,
        width: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        padding: 5
    },
    actorsImage: {
        height: 50,
        width: 50,
        borderRadius: 25,
        objectFit: 'contain',
        margin: 5,
        padding: 5
    },

    notifiactionContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: '90%'
    },
    notifiactionType: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: -5
    },
    notifiactionIcon: {
        height: 60,
        width: 50
    },
    buttonContainer: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green',
        margin: 40,
        marginLeft: 80
    }
})

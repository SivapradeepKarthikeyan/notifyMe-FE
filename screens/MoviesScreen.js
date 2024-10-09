import React, { useEffect, useState } from 'react'
import { View, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Text, Input } from 'react-native-magnus';
import { useNavigation } from '@react-navigation/native';
import Axios from 'axios';
import { MOVIES_URL, LOADER_URL } from "../constants/Constants";
import MovieTemplate from '../templates/MovieTemplate';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function MoviesScreen() {

    const MOVIES_STORAGE_KEY = 'upcomingMoviesData';

    const navigation = useNavigation();
    const [upCommingMoviesArray, setUpCommingMoviesArray] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Function to fetch movies data
        const fetchMoviesData = async () => {
            try {
                const storedMovies = await AsyncStorage.getItem(MOVIES_STORAGE_KEY);

                if (storedMovies !== null) {
                    setUpCommingMoviesArray(JSON.parse(storedMovies));
                    console.log("Data from Async storage...")
                    setIsLoading(false);
                } else {
                    const response = await Axios.get(MOVIES_URL);
                    const movieData = response.data.upcomingMovieData;
                    setUpCommingMoviesArray(movieData);
                    await AsyncStorage.setItem(MOVIES_STORAGE_KEY, JSON.stringify(movieData));
                    setIsLoading(false);
                }
            } catch (error) {
                console.error('Error fetching movie data:', error);
            }
        };

        // Call the function on initial render
        fetchMoviesData();
    }, []);



    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <View style={styles.titleBar}>
                    <Text fontSize="lg" fontWeight="light" color='blue'>Back</Text>
                    <Text fontSize="5xl" fontWeight="bold" color='white' style={{ marginLeft: 140 }}>Movies</Text>
                </View>
                <Input placeholder='🏷️ Filter'
                    bg="gray60"
                    borderWidth={1}
                    style={{ width: '90%', maxWidth: 500 }}
                />
                <View style={styles.content}>
                    {isLoading ?
                        (
                            <View style={styles.loader}>
                                <Image source={{ uri: LOADER_URL }} style={styles.loaderImage} />
                            </View>
                        ) :
                        (
                            <ScrollView style={styles.scrollView}>
                                {upCommingMoviesArray.map(i => (
                                    <TouchableOpacity
                                        key={i.contentId}
                                        onPress={() => navigation.navigate("MovieDetail", { contentId: i.contentId })}
                                    //Sending a route param not a normal prop.
                                    //So use route object to receive and send data.
                                    >
                                        <MovieTemplate
                                            key={i.contentId}
                                            moviePosterUrl={i.moviePosterUrl}
                                            movie_name={i.movie_name}
                                            language={i.language}
                                            releaseDate={i.releaseDate}
                                            rank={i.rank}
                                        />
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        )}
                </View>
            </View>
        </SafeAreaProvider>
    )
}



const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleBar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 480,
        marginTop: 60,
        marginBottom: 20
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        width: 400,
        height: 800,
        marginTop: 8,
        backgroundColor: "black",
    },
    scrollView: {
        marginTop: 15
    },
    loader: {
        marginTop: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 480,
        height: 400,
        marginTop: 80,
        marginBottom: 20
    },
    loaderImage: {
        height: 100,
        width: 100
    }
});
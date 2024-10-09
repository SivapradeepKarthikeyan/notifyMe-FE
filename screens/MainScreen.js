import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ListView, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, Input } from "react-native-magnus";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ScrollViewItemTemplate from '../templates/ScrollViewItemTemplate';


export default function MainScreen() {

    const navigation = useNavigation();

    const scrollViewContent = [
        { "image": "https://png.pngtree.com/png-vector/20220625/ourmid/pngtree-film-reel-icon-cinema-movie-png-image_5414358.png", "title": "Movies", "description": "Get the latest movies notifications !" },
        { "image": "https://png.pngtree.com/png-vector/20220625/ourmid/pngtree-film-reel-icon-cinema-movie-png-image_5414358.png", "title": "Movies_2", "description": "Get the latest movies notifications !" },
        { "image": "https://png.pngtree.com/png-vector/20220625/ourmid/pngtree-film-reel-icon-cinema-movie-png-image_5414358.png", "title": "Movies_3", "description": "Get the latest movies notifications !" },
        { "image": "https://png.pngtree.com/png-vector/20220625/ourmid/pngtree-film-reel-icon-cinema-movie-png-image_5414358.png", "title": "Movies_4", "description": "Get the latest movies notifications !" },
        { "image": "https://png.pngtree.com/png-vector/20220625/ourmid/pngtree-film-reel-icon-cinema-movie-png-image_5414358.png", "title": "Movies_5", "description": "Get the latest movies notifications !" },
        { "image": "https://png.pngtree.com/png-vector/20220625/ourmid/pngtree-film-reel-icon-cinema-movie-png-image_5414358.png", "title": "Movies_6", "description": "Get the latest movies notifications !" },
        { "image": "https://png.pngtree.com/png-vector/20220625/ourmid/pngtree-film-reel-icon-cinema-movie-png-image_5414358.png", "title": "Movies_7", "description": "Get the latest movies notifications !" },
        { "image": "https://png.pngtree.com/png-vector/20220625/ourmid/pngtree-film-reel-icon-cinema-movie-png-image_5414358.png", "title": "Movies_8", "description": "Get the latest movies notifications !" },
        { "image": "https://png.pngtree.com/png-vector/20220625/ourmid/pngtree-film-reel-icon-cinema-movie-png-image_5414358.png", "title": "Movies_9", "description": "Get the latest movies notifications !" },
        { "image": "https://png.pngtree.com/png-vector/20220625/ourmid/pngtree-film-reel-icon-cinema-movie-png-image_5414358.png", "title": "Movies_10", "description": "Get the latest movies notifications !" },
        { "image": "https://png.pngtree.com/png-vector/20220625/ourmid/pngtree-film-reel-icon-cinema-movie-png-image_5414358.png", "title": "Movies_11", "description": "Get the latest movies notifications !" },
        { "image": "https://png.pngtree.com/png-vector/20220625/ourmid/pngtree-film-reel-icon-cinema-movie-png-image_5414358.png", "title": "Movies_12", "description": "Get the latest movies notifications !" },
    ];


    return (
        <SafeAreaProvider>
            <View style={styles.container}>

                <View style={styles.titleBar}>
                    <Text fontSize="lg" fontWeight="light" color='blue'>Back</Text>
                    <Text fontSize="6xl" fontWeight="bold" color='white' style={{ marginLeft: 40 }}>Feed</Text>
                    {/* <Text fontSize="lg" fontWeight="light" color='green'> Filter</Text> */}
                </View>

                <Input placeholder='🔦 search'
                    bg="gray100"
                    borderWidth={1}
                    style={{ width: '90%', maxWidth: 400 }}
                />

                <View style={styles.content}>
                    <ScrollView>
                        {scrollViewContent.map(i => {
                            return (
                                <TouchableOpacity
                                    key={i.title}
                                    onPress={() => navigation.navigate(i.title)}
                                >
                                    <ScrollViewItemTemplate
                                        key={i.title}
                                        image={i.image}
                                        title={i.title}
                                        description={i.description}
                                    />
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                </View>

            </View>
        </SafeAreaProvider>
    )
}


const styles = StyleSheet.create({
    container: {
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
        marginTop: 100,
        marginBottom: 20
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        width: 400,
        height: 800,
        marginTop: 8,
        backgroundColor: "black",
    }
});


import { Button, Text } from '@react-navigation/elements';
import {SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {useEffect, useState} from "react";
import axios from "axios";
import {useGetMovies} from "../../assets/api/apiFunc";

export function Home() {
    const navigation = useNavigation();

    const {data : movies, isError} = useGetMovies();
    // const [isLoading, setIsLoading] = useState(false);
    // const [movies, setMovies] = useState([]);
    //
    // const fetchMovies = async () => {
    //     try {
    //         setIsLoading(!isLoading);
    //         const url =
    //             "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
    //         const options = {
    //             method: "GET",
    //             headers: {
    //                 accept: "application/json",
    //                 Authorization: 'bearer token'
    //             },
    //         };
    //         const {data} = await axios(url, options);
    //         setMovies(data.results);
    //         setIsLoading(!isLoading);
    //     } catch (err) {
    //         console.log(err);
    //         setIsLoading(!isLoading);
    //     }
    // };
    // console.log(movies);
    // useEffect(()=>{
    //     fetchMovies();
    // }, []);

    const goToDetails = (movie) => {
        navigation.navigate("MovieDetail", {id : movie.id, title:movie.title});
    }

    return (
        <SafeAreaView
            style={{
                flex : 1,
                justifyContent : "center",
                alignItems : "center",
                backgroundColor : "black",
            }}
        >
            <ScrollView style={{ width:"100%" }}>
                {movies && movies.map((movie) => (
                    <TouchableOpacity onPress={()=> goToDetails(movie)} key={movie.id}>
                        <View key={movie.id} style={{padding : 10}}>
                            <Text style={{color:"white", fontFamily:"NotoSansKR", fontSize: 18 }}>{movie.title}</Text>
                            <Text style={{ color: "white" }}>{movie.overview}</Text>
                            <Text style={{ color: "white" }}>{movie.release_date}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const movieStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tinyLogo :{
        width : 150,
        height : 150,
    },
    logo : {
        width : 66,
        height : 58,
    },
});
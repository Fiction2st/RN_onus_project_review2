// import axios from "axios";
// import {useQuery} from "@tanstack/react-query";
//
// const MOVIE_URL : string = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
// const AXIOS_OPTIONS = {
//     method: "GET",
//     headers: {
//         accept: "application/json",
//         Authorization:
//             'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODcwYjcyMGNmNmFmNTViZjI2ZTk5YjA0NjBkMjljMyIsIm5iZiI6MTc0NzM1OTAxMS44NDUsInN1YiI6IjY4MjY5NTIzZThhYjJlYzM4YjRiNThlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X5z6bQ_4d9d9MASFzAregzMaYJQWtmf2nnXlgZvz9NU'
//     },
// };
//
// export async function fetchMovies() {
//     const {data} = await axios.get(MOVIE_URL, AXIOS_OPTIONS)
//     return data.results;
// }
//
// export function useGetMovies(){
//     return useQuery({
//         queryFn : fetchMovies, // 별도 함수 인자가 없을 때 함수를 그대로 넣는다.
//         queryKey : ["movies"],
//     })
// }
//
// export async function getMovieById(id : string){
//     const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, AXIOS_OPTIONS)
//     return data;
// }
//
// export function useGetMovieById(id:string){
//     return useQuery({
//         queryFn : () => getMovieById(id), // 인자를 전달받는 함수를 사용할 때는 람다 함수를 사용해야 한다.
//         queryKey : ["movie", id],
//         enabled: !!id, // 아이디가 존재할 때만 해당 함수가 실행도되도록 함, enabled 옵션이 없는 경우 무조건 실행됨
//     })
// }

import axiosInstance from "./axiosInstance";

export const fetchMovies = async (page : number = 1){
    const {data} = await axiosInstance.get('/now_playing');
    return data.results;
};

export const getMovieById = async (movieId : string) => {
    const {data} = await axiosInstance.get(`/${movieId}`);
    return data;
}
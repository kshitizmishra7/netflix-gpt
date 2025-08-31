import axios from "axios";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () =>  {
    const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
    console.log(response.data.results);
    dispatch(addNowPlayingMovies(response.data.results));
    

  };
  useEffect(()=>{

    getNowPlayingMovies();

  },[]);


}
export default useNowPlayingMovies;
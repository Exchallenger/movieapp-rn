import axios from "axios";


const getData = async(path,kind,query='') => {
    const TMDB_KEY = "4f98d431d636a7962fcef6b6f5a35256";
    const datas = await axios.get(`https://api.themoviedb.org/3/${path}/${kind}?api_key=${TMDB_KEY}${query ? "&query=" : '' }${query? query:''}`);
    return datas.data.results;
};

//api.themoviedb.org/3/search/movie?api_key=1231231&query=kimchi/

    //backdrop_path title
    //poster_path vote_average
    //overview id
    //adult
    //
    //

    // backdrop_path overview name(title) 
    // poster_path



export const mymovie = {
    nowPlaying: () => getData('movie','now_playing'),
    popular: () => getData('movie','popular'),
    upcoming: () => getData('movie','upcoming'),
    search: query => getData('search','movie',query),
    movie: id => getData('movie',id),
    discover: () => getData('movie','discover')
};

export const myTv = {
    today: () => getData("tv",'airing_today'),
    topRated: () => getData("tv",'top_rated'),
    popular : () => getData("tv",'popular'),
    search : query => getData("search",'tv',query),
    show: (id) => getData(`tv`,''),
};



export const apiImage = (path) => `https://image.tmdb.org/t/p/w500${path}`;
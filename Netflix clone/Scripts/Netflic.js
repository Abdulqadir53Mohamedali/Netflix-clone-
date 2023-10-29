
import { options } from "./apiKeys.js";

document.getElementById("playPauseButton").addEventListener("click", function() {
    var video = document.getElementById("video-fluid");

    if (video.paused) {  // If video is paused, play it
        video.play();
        this.innerText = "Pause";
    } else {  // If video is playing, pause it
        video.pause();
        this.innerText = "Play";
    }
});


function MovieOutput(movieData){
	fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
	.then((movieData) => movieData.json())
	.then((movieData) => {
    console.log(movieData)
    const movieBox = document.querySelector(`#movie`)
    for(let movie = 0 ; movie < 21;movie++){
        movieBox.innerHTML += `<span class="movie-div"><img src = "https://image.tmdb.org/t/p/original${movieData.results[movie].poster_path}"><span>${movieData.results[movie].title}</span></span>`
    }
    })

}

function TrendingNow(TrendingMoviedata){
    fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
    .then(TrendingMoviedata => TrendingMoviedata.json())
    .then(TrendingMoviedata => {
    console.log(TrendingMoviedata)
    const trendingBox = document.querySelector(`#trending`)
    for(let trendingMovie = 0 ; trendingMovie < 21;trendingMovie++ ){
        trendingBox.innerHTML += `<span class="movie-div"><img src = "https://image.tmdb.org/t/p/original${TrendingMoviedata.results[trendingMovie].poster_path}"><span>${TrendingMoviedata.results[trendingMovie].title}</span></span>`
    }
    })


}


function PopularNow(PopularMovieData){

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(PopularMovieData => PopularMovieData.json())
    .then(PopularMovieData=>{
        console.log(PopularMovieData);
        const PopularBox = document.querySelector(`#popular`)
        for(let PopularMovie = 0 ; PopularMovie < 21;PopularMovie++ ){
            PopularBox.innerHTML += `<span class="movie-div"><img src = "https://image.tmdb.org/t/p/original${PopularMovieData.results[PopularMovie].poster_path}"><span>${PopularMovieData.results[PopularMovie].title}</span></span>`
        }
    })
    

}

function TopRatedTv(TvMovieData){

    fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
    .then(TvMovieData => TvMovieData.json())
    .then(TvMovieData=>{
        console.log(TvMovieData);
        const TvSeriesBox = document.querySelector(`#tv`)
        for(let TvSeries = 0 ; TvSeries < 21;TvSeries++ ){
            TvSeriesBox.innerHTML += `<span class="movie-div"><img src = "https://image.tmdb.org/t/p/original${TvMovieData.results[TvSeries].poster_path}"><span>${TvMovieData.results[TvSeries].name}</span></span>`
        }
    })
    

}


MovieOutput()
TrendingNow()
PopularNow()
TopRatedTv()
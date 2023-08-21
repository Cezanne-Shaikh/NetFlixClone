const key='ade72d2e4a514652a8fcf99d0bf5795c'
const requests={
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    requestMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${key}`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
    requestLatest:`https://api.themoviedb.org/3/discover/movie?api_key=${key}`

};
export default requests


// requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key} `,//working 
// requestRecommendation:`https://api.themoviedb.org/3/movie/{movie_id}/recommendations?api_key=${key}`,//not working 
// requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,//working 
// requestMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${key}`,//working 
// requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,//working 
// requestLatest:`https://api.themoviedb.org/3/tv/latest?api_key=${key}`//giving error
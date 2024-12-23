import API_ENDPOINT from '../globals/api-endpoint';
 
class TheMovieDbSource {
  static async nowPlayingMovies() {
    const response = await fetch(API_ENDPOINT.DRINK);
    const responseJson = await response.json();
    console.log(responseJson)
    return responseJson.data;
  }
 
  static async upcomingMovies() {
    const response = await fetch(API_ENDPOINT.MENU);
    const responseJson = await response.json();
    return responseJson.data;
  }
}
 
export default TheMovieDbSource;
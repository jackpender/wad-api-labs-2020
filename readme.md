# Assignment 2 - Web API.

Name: Jack Pender

## Features.

...... A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** ......,
 
 + Upcoming Movies - Displays a list of upcoming movies
 + Top Rated Movies - Displays a list of Top Rated Movies
 + Favourite Movies - Displays a list of a users favourite movies
 + Watchlist Movies - Displays a users watchlist of movies
 + AllMovies List - List of all movies to use for movie details
 + Adding Favourites and Watchlist to a user - Adds the favourites and watchlist list to the specific user logged in
 + Movie Details Page - Added a page to display details and reviews of a selected movie

## Installation Requirements

Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 

Describe getting/installing the software, perhaps:

### Clone the Repository: 
git clone https://github.com/jackpender/wad-api-labs-2020

### Installation: 
npm install

### Open a terminal in the local git repository:
To start the api:
cd movie-api/
npm start

### Open another terminal in the local git repository:
To start the React App:
cd reactApp\ -\ Copy/
npm start


## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

```bat
NODE_ENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
```

### Setup of .env:

Set up a .env file as follows: 

NODE_ENV=development
PORT=8080
HOST=localhost
TMDB_KEY=*Your TMDB API key*
mongoDB=mongodb://localhost:27017/movies_db
SEED_DB=true
SECRET=*Your JWT Secret*




## API Design
Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/allMovies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/allMovies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A  
| /api/topRated | Gets a list of top rated movies | N/A | N/A | N/A 
| /api/upcoming | Gets a list of upcoming movies | N/A | N/A | N/A 
| /api/genres | Gets a list of movie genres | N/A | N/A | N/A
| /api/users | Gets a list of users | Register and authenticate a user | N/A | N/A
| /api/users?action=register | N/A | Registers a user if not already in database | N/A | N/A
| api/users/${username}/favourites | N/A | Posts a list of user favourites | N/A | N/A
| /api/users/${username}/favourites | Gets a list of user favourites | N/A | N/A | N/A
| /api/users/${username}/watchlist | N/A | Posts a list of users watchlist | N/A | N/A
| /api/users/${username}/watchlist | Gets a list of users watchlist | N/A | N/A | N/A 
| -- | -- | -- | -- | -- 
| -- | -- | -- | -- | -- 
| -- | -- | -- | -- | -- 


If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).


## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.

### Routes:
/login
/signup
/movies
/movies/top_rated
/movies/:id

### Protected Routes:
/upcoming
/movies/favorites
/movies/upcoming

### Authentication/Security: 
In order to access protected routes, you needed a bearer token. Each user has a bearer token registered to them for use of the React App. These can also be implemented in the authorization field of Postman.
Favourites and Watchlist also used the authentication of users in order to register them with the correct user.



## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 

~~~Javascript
export const getUserFavourites = (username) => {
    return fetch(
       `/api/users/${username}/favourites`,{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
};
~~~

This is an example of a request made by the React App to the movie-api. This requests the list of favourites corresponding to the currently logged in user. 

## Extra features

. . Briefly explain any non-standard features, functional or non-functional, developed for the app.  
I included post methods in my movie-api to post favourite and watchlist movies to the user the is currently logged in. I was able to incorporate this into the React App and display these favourites in the users Favourites page everytime they log in. This feature also worked for watchlist in the backend, unfortunately however I was unable to get it displaying in the React App.


## Independent learning.

. . State the non-standard aspects of React/Express/Node (or other related technologies) that you researched and applied in this assignment . .  

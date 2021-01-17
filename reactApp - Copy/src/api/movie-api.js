export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const favorites = (username, id) => {
    return fetch(`api/users/${username}/favourites`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({id: id})
    }).then(res => res.json())
};

export const watchlist = (username, id) => {
  return fetch(`/api/users/${username}/watchlist`, {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({id: id})
  }).then(res => res.json())
};

export const getUserFavourites = (username) => {
    return fetch(
       `/api/users/${username}/favourites`,{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
};

export const getUserWatchlist = (username) => {
    return fetch(
       `/api/users/${username}/watchlist`,{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
};

export const getMovies = () => {
    return fetch(
       '/api/movies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
};

export const getUpcoming = () => {
    return fetch(
       '/api/upcoming',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
};

export const getGenres = () => {
    return fetch(
       '/api/genres',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
};

export const getMovie = id => {
    return fetch(
       `/api/allMovies/${id}`,{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
};

export const getTopRated = () => {
    return fetch(
       '/api/topRated',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
};

export const getCredits = id => {
    return fetch(
       `/api/allMovies/${id}/credits`,{headers: {
        'Authorization': window.localStorage.getItem('token')
     }
   }
    ).then(res => res.json());
};

  export const getSimilarMovies = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
    .then(res => res.json())
    .then(json => json.results)
  }

  export const getMovieReviews = id => {
    return fetch(
       `/api/allMovies/${id}/reviews`,{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
};

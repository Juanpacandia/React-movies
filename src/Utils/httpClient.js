const API = "https://api.themoviedb.org/3";

export function get(path) {
    return fetch(API + path, {
            headers: {
                Authorization: 
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTMwNmM3YTg5MTE5NzNmYTViMmQwY2QwMzM2NzMzYSIsInN1YiI6IjYyMDA5ZTBkNDdjOWZiMDA4ZWI1NmRlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._ImLDS97E68ImgMB5PDICDqPRCdsxPTJrMLpz34Vo5M",
                "Content-Type": "application/json;charset=utf-8",
            },
        }).then(result => result.json())
}
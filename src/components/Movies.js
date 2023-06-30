import React, { Component } from 'react';
import axios from 'axios';

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "images/poster/1.jpg",
                "images/poster/2.jpg",
                "images/poster/3.jpg",
                "images/poster/4.jpg",
                "images/poster/5.jpg",
                "images/poster/6.jpg",
                "images/poster/7.jpg",
                "images/poster/8.jpg",
                "images/poster/9.jpg",
            ],
            movies: [],
            search: '',
            selectedGenre: '',
            title: props.title,
            genre: props.genre
        };
    }

    componentDidMount() {
        axios.get('/Movies.json')
            .then(response => {
                this.setState({ movies: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleSearchChange = (event) => {
        this.setState({ search: event.target.value });
    }

    handleGenreClick = (genre) => {
        this.setState({ selectedGenre: genre });
    }

    render() {
        const { movies, search, selectedGenre } = this.state;

        const filteredMovies = movies.filter(movie =>
            movie.Title.includes(search)
        ).filter(movie =>
            movie.Genre.includes(selectedGenre)
        );

        const genres = [];
        movies.forEach(movie => {
            movie.genre.forEach(genre => {
                if (!genres.includes(genre)) {
                    genres.push(genre);
                }
            });
        });

        return (
            <div>
                <input type="text" value={search} onChange={this.handleSearchChange} />
                <ul>
                    {genres.map(genre =>
                        <li key={genre} onClick={() => this.handleGenreClick(genre)}>
                            {genre}
                        </li>
                    )}
                </ul>
                <div>
                    {filteredMovies.map(movie =>
                        <MovieCard key={movie.id} movie={movie} />
                    )}
                </div>
            </div>
        );
    }
}

const MovieCard = ({ movie }) => {
    return (
        <div>
            <img src={movie.Poster} alt={movie.Title} />
            <h2>{movie.Title}</h2>
            <p>Director: {movie.Director}</p>
            <p>Year: {movie.Year}</p>
            <p>Genre: {movie.Genre.join(', ')}</p>
        </div>
    );
}

export default Movies;
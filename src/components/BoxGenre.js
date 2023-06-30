import React, { Component } from "react";

class BoxGenre extends Component {
    render() {
        const { movie } = this.props;
        return (
            <>
                <div className="box">
                    <div className="picture">
                        <img src={movie.Poster} alt={movie.Title} />
                    </div>
                    <div className="box-title">
                        <h2 className="title">{movie.Title}</h2>
                        <p className="info">
                            <span>{movie.Director}</span>
                            <span>{movie.Year}</span>
                        </p>
                        <p className="genre">{movie.Genre}</p>
                    </div>
                </div>
            </>
        );
    }
}
export default BoxGenre;

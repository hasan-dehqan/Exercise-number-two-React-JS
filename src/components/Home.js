import React, { Component } from "react";
import '../styles/home.css';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [
                "./images/sliders/s1.jpg",
                "./images/sliders/s2.jpg",
                "./images/sliders/s3.jpg",
                "./images/sliders/s4.jpg",
                "./images/sliders/s5.jpg",
            ],
            currentImageIndex: 0,
        };

    }
    componentDidMount = () => {
        setInterval(() => {
            this.nextImage();
        }, 2000);
    };

    nextImage = () => {
        const { images, currentImageIndex } = this.state;
        const nextIndex = (currentImageIndex + 1 === images.length) ? 0 : currentImageIndex + 1;
        this.setState({ currentImageIndex: nextIndex });
    };


    previosImage = () => {
        const { images, currentImageIndex } = this.state;
        const nextIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
        this.setState({ currentImageIndex: nextIndex});
    };



    render() {
        const { images, currentImageIndex } = this.state;
        const currentImage = images[currentImageIndex];
        return (
            <div className="slider">
                <button classNameon="prev" Click={this.previosImage}>
                    Previos
                </button>
                <img src={currentImage} alt="slide" />
                <button className="next" onClick={this.nextImage}>
                    Next
                </button>
            </div>
        );
    }
}

export default Home;
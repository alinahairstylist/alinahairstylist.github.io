import React, {Component} from 'react';
import './Components.css';
import './Grid.css';

export class Gallery extends Component {
  state = {
    images: [],
  }

  componentDidMount() {
    this.loadImages().then((images) => {
      this.setState({images: images})
    });
  }

  async loadImages() {
    const BASE_URL = "https://raw.githubusercontent.com/alinahairstylist/alinahairstylist.github.io/main/src/assets/services/";
    const images = [];
    for (let i = 1; i < 19; i++) {
      const url = BASE_URL + `${i}.jpeg`;
      const response = await fetch(url);
      if (response.ok) {
        images.push(url);
      }
    }
    return images;
  }

  render() {
    const images = [];
    for (let i = 0; i < this.state.images.length; i++) {
      images.push(<div className={"gallery-card"} style={{"--src": `url(${this.state.images[i]})`}}/>);
    }

    return (
      <section className={"gallery-grid"}>
        {images}
        {images.length === 0 &&
        <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" x="0px" width="100%" height="100%"
             y="0px" viewBox="-100 -100 300 300" enableBackground="new 0 0 0 0">
          <path fill="#85a777"
            d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
            <animateTransform
              attributeName="transform" attributeType="XML"
              type="rotate" dur="1s"
              from="0 50 50" to="360 50 50"
              repeatCount="indefinite"/>
          </path>
        </svg>}
      </section>
    );
  }
}
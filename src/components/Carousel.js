import React from 'react';
import Arrow from "./Arrow";
import ImageSlide from "./ImageSlide";
import couple from "../styles/images/couple_image.jpg";
import snowyCouple from "../styles/images/snowy_couple.jpg";
import beach from "../styles/images/beach_group.jpg";


export default class Carousel extends React.Component {
    constructor (props) {
        super(props);
        this.imgUrls=[
        couple, snowyCouple, beach
        ];
        this.state = {
          currentImageIndex: 0
        };
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
      };
     
      previousSlide () {
        const lastIndex = this.imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
    
        this.setState({
          currentImageIndex: index
        });
      }
      nextSlide () {
        const lastIndex = 
        this.imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
    
        this.setState({
          currentImageIndex: index
        });
      }

    render () {
        
      return (
        <div className="carousel">
            <Arrow
          direction="left"
          clickFunction={ this.previousSlide }
          glyph="&#9664;" />

        <ImageSlide url={ this.imgUrls[this.state.currentImageIndex] } />

        <Arrow
          direction="right"
          clickFunction={ this.nextSlide }
          glyph="&#9654;" />
        </div>
      );
    }
  }
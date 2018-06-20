import React from 'react';

const ImageSlide = ({ url }) => {
    const styles = {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };
    return (
         <img className="image-slide" src={url} height="75vh" width="100%" />
    );
  }

  export default ImageSlide;
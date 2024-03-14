import React from 'react';

const ImageWrapper = ({ src, alt }) => {
    return (
        <div className="image-wrapper">
            <img src={src} alt={alt} />
        </div>
    );
};

export default ImageWrapper;
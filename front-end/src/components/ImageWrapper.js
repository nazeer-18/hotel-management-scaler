import React from 'react';

const ImageWrapper = ({ src, alt,clsname }) => {
    return (
        <div className="image-wrapper">
            <img src={src} alt={alt} className={clsname} />
        </div>
    );
};

export default ImageWrapper;
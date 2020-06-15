import React, { useEffect, useState, FC } from 'react';
import './AsyncImage.css';


export interface AsyncImageProps {
  splashUrl: string;
  fullUrl: string;
  imageAlt: string;
  containerClassName?: string;
  containerStyles?: React.CSSProperties;
  imageClassName?: string;
  imageStyles?: React.CSSProperties;
}


const AsyncImage: FC<AsyncImageProps> = (props) => {
  const [loaded, setLoaded] = useState(false);
  const {
    splashUrl,
    fullUrl,
    imageAlt,
    containerClassName = '',
    containerStyles = {},
    imageClassName = '',
    imageStyles = {},
  } = props;


  /**
   * Start loading image on first render
   */
  useEffect(() => {
    const image = new Image();

    image.onload = () => {
      setLoaded(true);
    };

    image.src = fullUrl;
  }, []);


  return (
    <div
      className={`asyncImage__container ${containerClassName}`}
      style={{
        backgroundImage: `url(${splashUrl})`,
        ...containerStyles,
      }}
    >
      <img
        src={fullUrl}
        alt={imageAlt}
        className={`asyncImage__image ${loaded ? 'asyncImage__imageLoaded' : ''} ${imageClassName}`}
        style={imageStyles}
      />
    </div>
  );
};

export default AsyncImage;

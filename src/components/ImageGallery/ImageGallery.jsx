import React from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={css.Gallery}>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          smallImage={webformatURL}
          bigImage={largeImageURL}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

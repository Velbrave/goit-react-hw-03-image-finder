import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ smallImage, bigImage, openModal }) => {
  return (
    <li className={css.ImageGalleryItem} onClick={openModal}>
      <img
        className={css.Image}
        src={smallImage}
        alt=""
        data-image={bigImage}
      />
    </li>
  );
};

export default ImageGalleryItem;

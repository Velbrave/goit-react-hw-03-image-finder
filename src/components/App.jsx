import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';

export const App = () => {
  return (
    <div>
      <Searchbar />
      <ImageGallery />
      <ImageGalleryItem />
      <Modal />
    </div>
  );
};

import React from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import { getPost } from 'service/Post';

export class App extends React.Component {
  state = {
    images: null,
    showModal: false,
    searchName: '',
    page: 1,
    isLoading: false,
    isError: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const images = await getPost();
      this.setState({ images });
    } catch (error) {
      this.setState({ isError: true });
      console.log(error.message);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  async componentDidUpdate(_, prevState) {
    const { page, searchName } = this.state;

    if (prevState.searchName !== searchName || prevState.page !== page) {
      this.setState({ isLoading: true });
      try {
        const images = await getPost(page, searchName);
        this.setState(prev => ({
          images: page > 1 ? [...prev.images, ...images] : images,
          page,
        }));
      } catch (error) {
        this.setState({ isError: true });
        console.log(error.message);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSubmitForm = searchName => {
    this.setState({ searchName });
  };

  handleChangePage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  openModal = event => {
    const bigImage = event.target.dataset.image;
    if (event.target.nodeName === 'IMG') {
      this.setState(state => ({
        showModal: !state.showModal,
        bigImage: bigImage,
      }));
    }
  };

  render() {
    const { showModal, images, bigImage, isLoading, isError, page } =
      this.state;

    if (isError) {
      return <p>Something went wrong...</p>;
    }

    return (
      <div>
        <Searchbar onSubmit={this.handleSubmitForm} />

        {images && <ImageGallery images={images} openModal={this.openModal} />}

        {isLoading && <Loader />}

        {showModal && (
          <Modal onClose={this.toggleModal} bigImage={bigImage}></Modal>
        )}
        {page >= 1 && <Button onClick={this.handleChangePage} />}
      </div>
    );
  }
}

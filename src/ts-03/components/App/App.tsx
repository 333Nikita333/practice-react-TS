import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IAppState } from '../../types/interfaces';
import ImageGallery from '../ImageGallery/ImageGallery';
import Modal from '../Modal/Modal';
import SearchBar from '../Searchbar/Searchbar';
import { Wrapper } from './App.styled';

class App extends Component<object, IAppState> {
  state: IAppState = {
    searchQuery: '',
    imgUrl: '',
    tags: '',
    showModal: false,
    buttonDisabled: true,
  };

  handleSubmit = (searchQuery: string): void => {
    this.setState({
      searchQuery,
    });
  };

  toggleModal = (): void => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  onCardClick = (largeImageUrl: string, imageTags: string): void => {
    this.setState({
      imgUrl: largeImageUrl,
      tags: imageTags,
    });
  };

  render() {
    const { searchQuery, imgUrl, tags, showModal } = this.state;

    return (
      <Wrapper>
        <SearchBar onSubmit={this.handleSubmit} searchQuery={searchQuery} />
        <ImageGallery
          onCardClick={this.onCardClick}
          searchQuery={searchQuery}
          onOpenModal={this.toggleModal}
        />
        {showModal && (
          <Modal onCloseModal={this.toggleModal}>
            {<img src={imgUrl} alt={tags} />}
          </Modal>
        )}
        <ToastContainer autoClose={3000} theme="dark" />
      </Wrapper>
    );
  }
}

export default App;

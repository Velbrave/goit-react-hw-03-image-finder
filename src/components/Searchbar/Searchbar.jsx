import React from 'react';
import css from './Searchbar.module.css';

class Searchbar extends React.Component {
  state = {
    searchName: '',
  };

  handleNameChange = event => {
    this.setState({ searchName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchName.trim() === '') {
      alert('error');
      return;
    }

    this.props.onSubmit(this.state.searchName);
    this.setState({ searchName: '' });
  };
  render() {
    return (
      <header className={css.Searchbar}>
        <form onSubmit={this.handleSubmit} className={css.SearchForm}>
          <button type="submit" className={css.SearchFormBtn}>
            <span className={css.Label}>Search</span>
          </button>

          <input
            className={css.Input}
            type="text"
            name="searchName"
            placeholder="Search images and photos"
            value={this.state.searchName}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;

import React, { Component } from 'react';
import './App.css';
import Book from './components/Book';
import FavesList from './components/FavesList';

export default class App extends Component {
  state = {
    posts: [],
    faves: [],
  };

  toggleFave = post => {
    const alreadyFaved = this.state.faves.includes(post);
    const faves = this.state.faves;

    if (!alreadyFaved) {
      this.setState({ faves: [...faves, post] });
    } else {
      const filteredfaves = faves.filter(item => item !== post);
      this.setState({ faves: filteredfaves });
    }
  };

  clearFaves = () => {
    this.setState({ faves: [] });
  };

  componentDidMount() {
    fetch('http://api-biblio.officebureau.ca/wp-json/wp/v2/posts?_embed')
      .then(response => {
        return response.json();
      })
      .then(posts => {
        this.setState({ posts });
      });
  }

  render() {
    const { posts, faves } = this.state;
    return (
      <div className="app">
        <header className="header">Biblio</header>

        <FavesList faves={faves} clearFaves={this.clearFaves} />

        <div className="books">
          {posts.map(post => (
            <Book
              post={post}
              toggleFave={this.toggleFave}
              faves={faves}
              key={post.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

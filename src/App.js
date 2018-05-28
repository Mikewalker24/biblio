import React, { Component } from 'react';
import './App.css';
import Book from './components/Book';
import FaveList from './components/FaveList';

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

  componentWillMount() {
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

        <FaveList faves={faves} clearFaves={this.clearFaves} />

        <div className="books">
          {posts.map(post => {
            return (
              <Book
                post={post}
                key={post.id}
                toggleFave={this.toggleFave}
                faves={faves}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

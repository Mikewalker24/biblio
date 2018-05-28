import React, { Component } from 'react';
import './App.css';
import Book from './components/Book'

export default class App extends Component {
  state = {
    posts: [],
    faves: []
  }

  toggleFave = (id) => {
    const alreadyFaved = this.state.faves.includes(id);
    const faves = this.state.faves;
    if (!alreadyFaved) {      
      this.setState({ faves: [...faves, id]});
    } else {
      const filteredfaves = faves.filter(item => item !== id )
      this.setState({ faves: filteredfaves });
    }
  }

  componentWillMount() {
    fetch('http://api-biblio.officebureau.ca/wp-json/wp/v2/posts?_embed')
      .then(response => {
        return response.json();
      })
      .then(posts => { 
        this.setState({ posts });       
    })
  }
  

  render() {
    const { posts } = this.state;
    return (
      <div className="app">
        <header className="header">Biblio</header>
        <div className="books">

          {posts.map(post => <Book {...post} key={post.id} toggleFave={(this.toggleFave)}/> )}

        </div>
      </div>
    );
  }
}

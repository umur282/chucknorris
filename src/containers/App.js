import React, { Component } from 'react';
import RandomJoke from '../components/RandomJoke';
import Category from '../components/Category';

export class App extends Component {

  constructor() {
    super();
    this.state = {
      randomJoke: {
        iconUrl: '',
        id: '',
        url: '',
        value: ''
      },
      categories: [],
      categoryJoke: {
        category: '',
        iconUrl: '',
        id: '',
        url: '',
        value: ''
      }
    };
  }

  onRandomJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(resp => resp.json())
      .then(resp =>  {
        const randomJoke = {
          iconUrl: resp.icon_url,
          id: resp.id,
          url: resp.url,
          value: resp.value
        }
        this.setState({ randomJoke: randomJoke });
      });
  }

  onCategoryJoke = (event) => {
    const category = event.target.value;

    fetch('https://api.chucknorris.io/jokes/random?category=' + category)
      .then(resp => resp.json())
      .then(resp => {
        const categoryJoke = {
          category: resp.categories[0],
          iconUrl: resp.icon_url,
          id: resp.id,
          url: resp.url,
          value: resp.value
        }
        this.setState({ categoryJoke: categoryJoke});
      });
  }

  render() {
    const { randomJoke, categories, categoryJoke } = this.state;

    return (  
      <div className="App tc">
        <h1 className="f1">Chuck Norris Jokes</h1>
        <h1 className="f3">Random Joke</h1>
        <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-orange"
                onClick={this.onRandomJoke}>
          Get Joke!
        </button>
        <RandomJoke randomJoke={randomJoke}></RandomJoke>
        <Category categories={categories}
                  selectedCategory={this.onCategoryJoke}
                  categoryJoke={categoryJoke}>
        </Category>
      </div>
    );
  }

  componentDidMount() {
    this.onRandomJoke();
    fetch('https://api.chucknorris.io/jokes/categories')
      .then(resp => resp.json())
      .then(categories => this.setState({categories: categories}));
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Word from "./Word";

class App extends Component {
  state = {
    words: [],
    isLoaded: false
  };

  componentDidMount() {
    setTimeout(this.fetchData, 2000);
  }

  fetchData = () => {
    fetch("data/words.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          words: data.words,
          isLoaded: true
        });
      });
  };

  render() {
    const words = this.state.words.map(word => (
      <Word key={word.id} english={word.en} polish={word.pl} />
    ));
    return (
      <div className="App">
        <header className="App-header">
          <ul>{this.state.isLoaded ? words : "wczytuje dane"}</ul>
        </header>
      </div>
    );
  }
}

export default App;

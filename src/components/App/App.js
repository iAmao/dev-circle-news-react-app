import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../logo.svg';
import './App.css';

// Components
import Button from '../Button/Button';

// Actions
import * as newsAction from '../../store/actions/news.action';


class App extends Component {
  addNews = () => {
    // dispatch(action())
    this
      .props
      .dispatch(newsAction.addNews({
        id: this.props.news.data.length + 1,
        title: this.inputRef.value
      }));
    return this.inputRef.value = '';
  }
  deleteNews = (news) => {
    return this.props.dispatch(newsAction.deleteNews(news))
  }

  render() {
    const news = this.props.news;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {news.data.map((news) => {
          return (
            <div key={news.id} className="news">
              <h4>{news.title}</h4>
              <Button
                style={{ backgroundColor: 'red' }}
                onClick={() => this.deleteNews(news)}
              >
                delete
              </Button>
            </div>
          );
        })}
        <input type="text" ref={(i) => this.inputRef = i } />
        <Button onClick={this.addNews}>
          Add Headline
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    news: state.news,
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ reducer },dispatch)
// }


export default connect(mapStateToProps)(App);

// Higher Order function?
/**
  const store = {...}
  function connect(mp, md) {
    return function (component) {
      return <component store={store} />
    }
   }

*/

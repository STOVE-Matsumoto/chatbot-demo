import React from 'react';
import defaultDataset from "./dataset";
import './assets/styles/style.css';
import {AnswersList, Chats} from './components/index';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: 'init',
      dataset: defaultDataset,
      open: false
    }
  }

  //初期のanswerを実装するための仮のメソッド
  initAnser = () => {
    const initDataset = this.state.dataset[this.state.currentId];
    const initAnswers = initDataset.answers;

    this.setState({
      answers: initAnswers
    })
  }

  //初期のchatsを実装するための仮のメソッド
  initChats = () => {
    const initDataset = this.state.dataset[this.state.currentId];
    const chat = {
      text: initDataset.question,
      type: 'question'
    };

    const chats = this.state.chats;
    chats.puch(chat);

    this.setState({
      chats: chats
    })
  }

  componentDidMount() {
    this.initChats();
    this.initAnser();
  }

  render() {
    return (
      <div>
        <section clasName="c-section">
          <div className="c-box">
            <Chats chats={this.state.chats}/>
            <AnswersList answers={this.state.answers}/>
          </div>
        </section>
      </div>
    );
  }
}


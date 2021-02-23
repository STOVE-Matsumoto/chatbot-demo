import React from 'react';
import defaultDataset from "./dataset";
import './assets/styles/style.css';
import {AnswersList, Chats} from './components/index';
import { Breadcrumbs } from '@material-ui/core';

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

  //質問の答えを拾う関数
  selectAnser = (selectedAnswer, nextQuestionId) => {
    switch(true) {
      case (nextQuestionId === 'init'):
        break;
      default:
        const chat = {
          text: selectedAnswer,
          type: 'Answer'
        };
        const chats = this.state.chats;
        chats.push(chat);

        this.setState({
          chats: chats
        })
        break;
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
    chats.push(chat);

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


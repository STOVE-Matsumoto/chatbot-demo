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
    this.selectAnswer = this.selectAnswer.bind(this);
  }

  //次の質問を表示する関数
  displayNextQuestion = (nextQuestionId) => {
    const chats = this.state.chats;
    chats.push({
      text:this.state.dataset[nextQuestionId].question,
      type:'question'
    });

    this.setState({
      answers: this.state.dataset[nextQuestionId].answers,
      chats: chats,
      currentId: nextQuestionId
    })
  }


  //質問の答えを拾う関数
  selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch(true) {
      case (nextQuestionId === 'init'):
        this.displayNextQuestion(nextQuestionId);
        break;
      default:
        const chats = this.state.chats;
        chats.push({
            text: selectedAnswer,
            type: 'answer'
        });

        this.setState({
          chats: chats
        })

        this.displayNextQuestion(nextQuestionId);
        break;
    }
  }

  //初期のanswerを実装するための仮のメソッド
  // initAnser = () => {
  //   const initDataset = this.state.dataset[this.state.currentId];
  //   const initAnswers = initDataset.answers;

  //   this.setState({
  //     answers: initAnswers
  //   })
  // }

  //初期のchatsを実装するための仮のメソッド
  // initChats = () => {
  //   const initDataset = this.state.dataset[this.state.currentId];
  //   const chat = {
  //     text: initDataset.question,
  //     type: 'question'
  //   };

  //   const chats = this.state.chats;
  //   chats.push(chat);

  //   this.setState({
  //     chats: chats
  //   })
  // }

  componentDidMount() {
    const initAnswer ="";
    this.selectAnswer(initAnswer, this.state.currentId)

  }

  render() {
    return (
      <div>
        <section clasName="c-section">
          <div className="c-box">
            <Chats chats={this.state.chats}/>
            <AnswersList answers={this.state.answers} select={this.selectAnswer} />
          </div>
        </section>
      </div>
    );
  }
}


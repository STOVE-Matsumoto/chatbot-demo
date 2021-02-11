import defaultDataset from "./dataset";
import './assets/styles/styles.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentID: 'init',
      dataset: defaultDataset,
      open: false
    }
  }

  render() {
    return (
      <div>
        <section clasName="c-section">
          <div className="c-box">

          </div>
        </section>
      </div>
    );
  }
}


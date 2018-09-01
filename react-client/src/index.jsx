import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SummonCircle from './components/SummonCircle.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      ocs: []
    }
  }

  componentDidMount() {
    // $.get('/summon', summoned => {
    //   this.setState({
    //     ocs: summoned
    //   });
    // });
    $.ajax({
      url: '/summon', 
      success: (summoned) => {
        this.setState({
          ocs: summoned
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>Sonic OC - Battle Royale</h1>
      <SummonCircle ocs={this.state.ocs}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
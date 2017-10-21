import React from 'react';

import { withRouter } from 'react-router-dom';

class President extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      id: this.props.id,
      new_id: {}
    };

      fetch('https://mysafeinfo.com/api/data?list=presidents&format=json')
      .then(response => response.json())
      .then(id => this.setState({id}))
      .then(nm => this.setState({nm}))
      .then(pp => this.setState({pp}))
      .then(tm => this.setState({tm}))
  }

  componentDidMount() {
    let new_id = this.state.id;
    console.log('new_id',new_id);
    this.setState(
      {
        new_id:Object.assign({}, new_id)
      }
    )
  }


  render(){

    return (
      <div>
        this.state.id = {JSON.stringify(this.state.id)}
        <div>
        {this.state.new_id.id}
        </div>
      </div>
    );
  }
}
export default President ;

import React  from "react";

class Redirect extends React.Component {
  constructor( props ){
    super();
    this.state = { ...props };
  }
  componentWillMount(){
    window.location = this.state.route.loc;
  }
  render(){
    return (<section>Redirecting...</section>);
  }
}

export default Redirect;

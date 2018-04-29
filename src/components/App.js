import React, { Component } from "react";
// import "./App.css";
import htmlContent from '../../static/content.html'
class App extends Component {
  render() {
    return (
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
  }
}

export default App;
import React, { Component } from "react";

class LiveClockUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-[#fff] text-[25px] relative top-[-20px] left-[-20px]">
          {this.state.date.toLocaleTimeString()}.
        </h2>
      </div>
    );
  }
}

export default LiveClockUpdate;

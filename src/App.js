import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Hussein Limem",
        bio: "A passionate developer with experience in React and JavaScript.",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtc2inHfyW3baJHV3LSXcvPNoeYdcZvZh6jg&s", // Placeholder image URL
        profession: "Software Engineer"
      },
      shows: false,
      mountedTime: 0,
    };
    this.intervalId = null;
  }

  componentDidMount() {
    // Start counting the time since the component was mounted
    this.intervalId = setInterval(() => {
      this.setState({ mountedTime: this.state.mountedTime + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the interval when the component is about to unmount
    clearInterval(this.intervalId);
  }

  toggleProfile = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { person, shows, mountedTime } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleProfile}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>
        {shows && (
          <div className="profile">
            <img src={person.imgSrc} alt={person.fullName} />
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <h2>{person.profession}</h2>
          </div>
        )}
        <div>
          <h3>Time since last mount: {mountedTime} seconds</h3>
        </div>
      </div>
    );
  }
}

export default App;

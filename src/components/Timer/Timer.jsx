// TODO: set active to false after timeout
import React, { Component } from 'react';
import styled from 'styled-components';
import TimeField from 'react-simple-timefield';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Time = styled(TimeField)`
  // visibility: ${({ indicator }) => indicator ? 'visible' : 'hidden' }; 
  width: 600px !important;
  margin: 0 auto;
  text-align: center;
  font-size: 10em;
  background: transparent;
  color: ${({ theme}) => theme.white };
  border: none;
  &:focus {
    outline: none;
  }
  `;

class Timer extends Component {
  componentWillUnmount() {
  }

  onTimeChange = time => this.props.onSetTimer(time);

  handleSubmit = (event) => {
    event.preventDefault();
    const seconds = this.secondsLeft(this.props.time);
    this.startTimer(seconds);
  };

  // Convert to seconds for countdown interval
  secondsLeft(time) {
    time = time.split(':').map(Number);
    const [ hours, minutes, seconds ] = time;
    return (hours * 60 * 60) + (minutes * 60) + seconds;
  }

  // Convert back to time string to display
  timeLeft(totalSeconds) {
    if (!totalSeconds || totalSeconds === 0) {
      clearInterval(this.timer);
      // onComplete()
      // this.setState({
      //   active: !this.state.active
      // })
      return '00:00:00';
    }

    let hours = Math.floor(totalSeconds / 60 / 60); 
    let minutes = Math.floor(totalSeconds / 60 % 60);
    let seconds = totalSeconds % 60;

    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    return `${hours}:${minutes}:${seconds}`;
  }

  startTimer(seconds) {
    this.timer = setInterval(() => {
      this.props.onUpdateTimer(
        this.timeLeft(seconds),
        seconds--
      );
    }, 1000);
  }

  render() {
    const { time, active } = this.props;
    
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <Time 
            value={time} 
            showSeconds 
            onChange={this.onTimeChange}
            disabled={active} />
        </form>
      </Container>
    );
  }
}

export default Timer;
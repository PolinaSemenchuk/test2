import React from "react";

class OutPut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '',
      windSpeed: '',
      windDirection: ''
    };
  }

  componentDidMount() {
    // Получение данных с сервера при монтировании компонента
    this.fetchData();
  }

  fetchData() {
    fetch('http://localhost:8080/data2')
      .then(response => response.json())
      .then(data => {
        this.setState({
          time: data.time,
          windSpeed: data.windSpeed,
          windDirection: data.windDirection
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  render() {
    return (
      <div className="output-container">
        <h2>Вывод данных</h2>
        
        <div className="output-row">
          <label htmlFor="time">Время:</label>
          <textarea
            id="time"
            className="output-textarea"
            readOnly
            value={this.state.time}
          ></textarea>
        </div>

        <div className="output-row">
          <label htmlFor="wind-speed">Скорость ветра:</label>
          <textarea
            id="wind-speed"
            className="output-textarea"
            readOnly
            value={this.state.windSpeed}
          ></textarea>
        </div>

        <div className="output-row">
          <label htmlFor="wind-direction">Направление ветра:</label>
          <textarea
            id="wind-direction"
            className="output-textarea"
            readOnly
            value={this.state.windDirection}
          ></textarea>
        </div>
      </div>
    );
  }
}

export default OutPut;

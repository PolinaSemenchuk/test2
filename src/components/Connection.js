import React from "react";

class Connection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      port: "",
      speed: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    
    const { port, speed } = this.state;

    // Отправка данных на сервер
    try {
      const response = await fetch("http://localhost:8080/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ port, speed }),
      });

      if (response.ok) {
        console.log("Data submitted successfully!");
      } else {
        console.error("Failed to submit data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  render() {
    return (
      <div className="connection">
        <h2>Соединение</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="port">Имя порта:</label>
            <input
              type="text"
              id="port"
              name="port"
              placeholder="Введите имя порта"
              value={this.state.port}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="speed">Скорость передачи данных:</label>
            <input
              type="text"
              id="speed"
              name="speed"
              placeholder="Введите скорость передачи"
              value={this.state.speed}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit">Отправить</button> {/* Кнопка отправки */}
        </form>
      </div>
    );
  }
}

export default Connection;

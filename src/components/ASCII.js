import React, { Component } from 'react';

class ASCII extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }

  componentDidMount() {
    // Запрос данных с сервера после монтирования компонента
    fetch('http://localhost:8080/data')
      .then(response => response.text()) // Получаем ответ как текст
      .then(data => {
        this.setState({ data }); // Обновляем состояние с полученными данными
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  render() {
    return (
      <div className="ascii-container">
        <h2>Полученные данные</h2>
        <textarea
          className="ascii-output"
          readOnly
          value={this.state.data}
          rows={10} // Увеличьте количество строк, если нужно больше места для текста
          cols={50} // Увеличьте количество колонок, если нужно больше места для текста
        ></textarea>
      </div>
    );
  }
}

export default ASCII;

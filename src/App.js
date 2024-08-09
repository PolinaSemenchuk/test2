import React from "react"
import Header from "./components/Header"
import Connection from "./components/Connection"
import ASCII from "./components/ASCII"
import OutPut from "./components/Output"
class App extends React.Component { //создание компонента(кусок страницы)
    
  componentDidMount() {
    // Выполняем запрос к серверу, когда компонент монтируется
    fetch('http://localhost:8080/')
      .then(response => response.text())
      .then(data => this.setState({ data }))  // Сохраняем полученные данные в state
      .catch(error => this.setState({ error }));  // Сохраняем ошибку, если она есть
  }

  render(){  //function
    return (<div>
      <Header title="Датчик погоды"/>
      <Connection/>
      <ASCII/>
      <OutPut/>
  </div>)
  }

  
}
export default App //экспортируем этот component в другой айл
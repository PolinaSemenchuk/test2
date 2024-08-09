import React from "react"


class Header extends React.Component { //создание компонента(кусок страницы)
  
  render(){
    return (
      <header className="header ">{this.props.title}
      </header>
    )
  }

  
}
export default Header
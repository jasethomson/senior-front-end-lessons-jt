import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleHamburgerClick() {
    this.popOut();
  }
  handleMenuClick() {
    this.popBack();
  }
  popOut() {
    // document.querySelector('body').style['background-color'] = 'grey';
    this.setState({
      clicked: true
    });
  }
  popBack() {
    // document.querySelector('body').style['background-color'] = 'white';
    this.setState({
      clicked: false
    });
  }
  menuSymbol() {
    if (!this.state.clicked) {
      return <i onClick={this.handleHamburgerClick} className="fas fa-bars"></i>;
    } else {
      return (
        <div className="container">
          < div className="sideMenu" >
            <div className="menu">Menu</div>
            <div onClick={this.handleMenuClick} className="about">About</div>
            <div onClick={this.handleMenuClick} className="getStarted">Get Started</div>
            <div onClick={this.handleMenuClick} className="signIn">Sign In</div>
          </div >
          <div className="restOfScreen"></div>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        {this.menuSymbol()}
      </div>
    );
  }
}

export default AppDrawer;

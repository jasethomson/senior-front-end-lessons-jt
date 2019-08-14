import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    if (this.state.clicked) {
      this.popBack();
      // this.popOutMenu =
      //   < div className = "sideMenu" >
      //     <div className="menu">Menu</div>
      //     <div className="about">About</div>
      //     <div className="getStarted">Get Started</div>
      //     <div className="signIn">Sign In</div>
      //   </div >;

    } else {
      this.popOut();
    }
  }
  popOut() {
    document.querySelector('.sideMenu').style.width = '250px';
    this.setState({
      clicked: true
    });

  }
  popBack() {
    document.querySelector('.sideMenu').style.width = '0px';
    this.setState({
      clicked: false

    });
  }
  menuSymbol() {
    if (this.state.clicked) {
      return '';
    } else {
      return <i onClick={this.handleClick} className="fas fa-bars"></i>;
    }
  }
  // menu() {
  //   if(this.state.clicked){

  //     }
  //   } else {
  //     return "";
  //   }
  // }
  render() {

    return (
      <div>
        {this.menuSymbol()}
        <div className="sideMenu">
          <div className="menu">Menu</div>
          <div className="about">About</div>
          <div className="getStarted">Get Started</div>
          <div className="signIn">Sign In</div>
        </div >
      </div>
    );
  }
}

export default AppDrawer;

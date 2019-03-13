import React, { Component } from 'react';

import './App.css';

class samplePng extends Component {
  render() {
    return (
      <div className="page">
        <h1>Vikas</h1>
      </div>
    );
  }
}
class header extends Component{
  render()
  {
    return(
    <div className="header">
    <div className="fluid-container">
    <div className="row">
    <notification/>
    <headerCom/>
    </div>
    </div>
    </div>
    );
  }
}
class notfication extends Component{
  render()
  {
    return(
      <div className="">
      </div>
    );
  }
}
class headerCom extends Component{
  render()
  {
    return (
      <div calssName="col-md-4 col-md-offset-3">
       <div className="headerCom">
        <img src="" className="img-responsive">
        </img>
        <h2> Cameron Sevensson</h2>
       </div>
      </div>
    );  }
}
class leftSideBar extends Component{
  render()
  {
    return(
      <div className="LeftSideBar">
        </div>
    );
  }
}
class rightSideBar extends Component{
render()
{
  return(
    <div className="rightSideBar">
            </div>
  );
}
}
class mainContent extends Component
{
  render()
  {
    return(
      
        <div className="main">
        </div>
      
    );
  }
}
class mainHeader extends Component{
  render()
  {
    return(
        <div> </div>
    );
  }
}
class mainTable extends Component{
render()
{
  return(
    <div>
      </div>
  );

}
}
export default samplePng;

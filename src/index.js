import React  from 'react';
import ReactDom from 'react-dom';
class Names extends React.Component{
    constructor()
    {
        super();
        this.state={
           name:["vikas","vikram","ankur","vikky"]
        }
    }
    render()
    {
    
        return(
            <ul>
                   {this.state.name.map(function(name)
                       {
                   return <Last name={name}/>
                       }
                   )}
                </ul>
        );
    }
}
class Last extends React.Component
{
   render()
   {
       return(
         <h1>{this.props.name}</h1>
       );
       
       
   }
}

ReactDom.render(<Names/>,document.getElementById("root"));

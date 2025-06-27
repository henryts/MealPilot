import React from 'react';

class UserClass extends React.Component {
 
  constructor(props)
  {
    super(props);
    console.log("props in class");

    this.state ={
        count:0,
        counnt2:1
    }
    
  } 
  render()
  {
      const {name,location} = this.props;
      const {count} =this.state;
       
    return(

      <div>
        <h1>{name}</h1>
        <h2>{location}</h2>
        <h3>{count}</h3>

        <button onClick={()=>{this.setState({count:this.state.count+1})}}>Count Increase</button>

      </div>)
  }

  }

  export default UserClass;


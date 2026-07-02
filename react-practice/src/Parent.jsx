import React from 'react';

class Child extends React.Component 
{
  componentDidMount() 
  {
    console.log('Child: componentDidMount - Child has mounted');
  }

  componentWillUnmount() 
  {
    console.log('Child: componentWillUnmount - Child is about to unmount');
  }

  render() 
  {
    return (
      <div style={{ border: '2px solid green', padding: '10px', margin: '10px 0' }}>
        <h3>I am the Child Component</h3>
        <p>I will unmount when you click the button in the parent.</p>
      </div>
    );
  }
}

class Parent extends React.Component 
{
  constructor(props) 
  {
    super(props);
    this.state = 
    {
      showChild: true
    };
  }

  toggleChild = () => 
  {
    this.setState((prevState) => ({
      showChild: !prevState.showChild
    }));
  };

  render() 
  {
    return (
      <div style={{ border: '2px solid blue', padding: '10px' }}>
        <h2>I am the Parent Component</h2>
        <button onClick={this.toggleChild}>
          {this.state.showChild ? 'Unmount Child' : 'Mount Child'}
        </button>
        {this.state.showChild ? <Child /> : "Child is unmounted"}
      </div>
    );
  }
}

export default Parent;
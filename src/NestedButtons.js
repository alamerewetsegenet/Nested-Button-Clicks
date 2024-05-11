import React from 'react';

class NestedButtons extends React.Component {
  handleInnerClick = (event) => {
    event.stopPropagation();
    console.log("Inner button clicked");
  };

  handleOuterClick = () => {
    console.log("Outer button clicked");
  };

  render() {
    return (
      <div>
        <button onClick={this.handleOuterClick}>Outer Button</button>
        <div onClick={(e) => e.stopPropagation()}>
          <button onClick={this.handleInnerClick}>Inner Button</button>
        </div>
      </div>
    );
  }
}

export default NestedButtons;

import React, { Component } from 'react';

class MODEL extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            name: "testing",
            type:0
        };
      }
    
      set_name = (new_name) => {
        this.setState(state => ({ name:new_name }));
    };

    render() {
    
        return (
            <div>
                <p>
           Project name: {this.state.name}
                </p>
          </div>
        );
      }
    }


export default MODEL;
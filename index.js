import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Chevy",
            model: "Equinox",
            color: "Black-Grayish",
            year: 2014
        };
    }
    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color} {this.state.model} from the year {this.state.year}.
        </p>
            </div>
        );
    }
}

ReactDOM.render(<Car />, document.getElementById('root'));
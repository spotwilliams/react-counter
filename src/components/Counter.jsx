import React, {Component} from 'react';

class Counter extends Component {
    state = {
        value: this.props.counter.value
    };

    handleIncrement = () => {
        this.setState({value: this.state.value + 1})
    };

    render() {
        return (
            <div>
                {this.props.children}
                <span className={this.getBadgeClasses()}>
                    {this.formantCount()}
                </span>
                <button
                    // onClick={() => {this.handleIncrement(product)}}
                    onClick={this.handleIncrement}
                    className="btn btn-secondary btn-sm m-2"
                >
                    Increment
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </div>
        );
    }

    formantCount() {
        return (this.state.value === 0 ? 'Zero' : this.state.value);
    }

    getBadgeClasses() {
        let classes = "m-2 badge badge-";
        return classes + (this.state.value === 0 ? 'warning' : 'info');
    }
}

export default Counter;
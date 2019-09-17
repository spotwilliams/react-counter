import React, {Component} from 'react';

class Counter extends Component {
    render() {
        return (
            <div>
                {this.props.children}
                <span className={this.getBadgeClasses()}>
                    {this.formantCount()}
                </span>
                <button
                    onClick={() =>this.props.onIncrement(this.props.counter)}
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
        const { value } = this.props.counter;
        return (value === 0 ? 'Zero' : value);
    }

    getBadgeClasses() {
        let classes = "m-2 badge badge-";
        return classes + (this.props.counter.value === 0 ? 'warning' : 'info');
    }
}

export default Counter;
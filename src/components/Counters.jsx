import React, {Component} from 'react'
import Counter from "./Counter";

class Counters extends Component {
    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 4},
            {id: 4, value: 0},
        ]
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters});
    };

    handleDelete = (id) => {
        // const counters = this.state.counters.filter(counter => {
        //     return counter.id !== id;
        // });

        // A better expression could be
        const counters = this.state.counters.filter(c => c.id !== id);
        this.setState({counters})
    };

    handleIncrement = counter => {
        console.log(counter);
        // Clone the counters array of the state
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        // clone the counter prop received into the counters cloned object
        // to avoid change the state of the object directly
        counters[index] = {...counter};
        // mutate the object
        counters[index].value++;
        // make the object react
        this.setState({counters});
    };

    render() {
        return (
            <div>
                <button
                    onClick={this.handleReset}
                    className="btn btn-primary btn-sm m-2">Reset
                </button>
                {this.state.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                    >
                    </Counter>
                )}
            </div>
        );
    }
}

export default Counters;
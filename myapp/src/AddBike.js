import React, { Component } from 'react';


class AddBike extends Component {
    state = {
        brand: null,
        model: null,
        type: null
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="brand">Brand</label>
                    <input type="text" id="brand" onChange={this.handleChange} />
                    <label htmlFor="brand">Model</label>
                    <input type="text" id="model" onChange={this.handleChange} />
                    <label htmlFor="brand">Type</label>
                    <input type="text" id="type" onChange={this.handleChange} />
                    <button onClick={this.handleSubmit}>Submit</button>                 
                </form>
            </div>
        )
    }
}

export default AddBike;
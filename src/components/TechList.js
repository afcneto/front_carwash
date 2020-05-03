import React, { Component } from 'react';

class TechList extends Component {
    state = {
        newTech: '',
        techs: [
            'Node.js',
            'React.js'
        ]
    }

    handleInputChange = e => {
        this.setState({ newTech: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({
            techs: [
                ... this.state.techs, 
                this.state.newTech
            ],
            newTech: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <ul>
                    {this.state.techs.map(tech => (
                        <li key={tech}>
                            {tech}
                            <button onClick={} type="button">Remover</button>
                        </li>
                    ))}
                </ul>
                <input 
                    type="text" 
                    onChange={this.handleInputChange}
                    value={this.state.newTech6}></input>
                <button type="submit">Enviar</button>
            </form>
        )
    }
}

export default TechList;
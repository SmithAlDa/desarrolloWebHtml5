import React, {Component} from 'react';
import '../App.css'

export default class TaskForm extends Component { 

    state = {
        title: '',
        description:''
    }

    onSubmit = e => {
        this.props.addTask(this.state.title, this.state.description);
        e.preventDefault();
    }

    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <div className="Formulario">
            <br></br>
            <h2>Escribe Una Materia</h2> 
            <form onSubmit={this.onSubmit}>
                <input
                className="InputMateria" 
                type="text"
                name="title" 
                placeholder="Escribe Una Materia" 
                onChange={this.onChange}
                value={this.state.title}/>
                <br/>
                <h2>Describe La Tarea</h2>
                <textarea 
                name="description" 
                placeholder="Describe la Tarea" 
                onChange={this.onChange}
                value={this.state.description}>
                </textarea>
                <br/>
                <br/>
                <input type="submit" value="Añadir Tarea"/>
            </form>
            </div>
        )
    }
}
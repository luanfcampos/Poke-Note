import React from 'react';
import { Redirect } from 'react-router';

const divStyle = {
    display: 'none'
};

class NewNotes extends React.Component {
    
        constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };
        this.saveNote = this.saveNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    }
    
    saveNote(event) {
        event.preventDefault();
        if (this.title.value === "") {
            alert("Adicione Um Título");
        } else {
            const note = {
                id: Number(this.id.value),
                title: this.title.value,
                description: this.description.value
            }
            this.props.persistNote(note);
            this.setState({
                redirect: true
            });
        }
    }

    deleteNote(event) {
        console.log('deleteNote'); //remover depois dos testes
        event.preventDefault();
        this.props.deleteNote(this.props.note.id);
    }

    renderFormTitleAction() {
        return (this.props.note.id !== undefined) ? "Editar" : "Adicionar";
    }

    renderFormButtons() {
        if (this.props.note.id !== undefined) {
            return (<div>
                <button type="submit" className="btn btn-success float-right">Salvar</button>
                <button onClick={this.deleteNote} className="btn btn-danger">Deletar</button>
            </div>);
        }
        return (
            <button type="submit" className="btn btn-success float-right">Adicionar</button>
        );
    }

    render() {
        
        if (this.state.redirect) {
            if (!this.props.note) {
                return <Redirect push to="/"/>;
            }
            return <Redirect push to={`/note/${this.props.note.id}`}/>;
        }
     
        return (
            <div className="card">
                <div className="card-header">
                    {this.renderFormTitleAction()}
                </div>
                <div className="card-body">
                    <form ref="NewNotes" onSubmit={this.saveNote}>
                        <div className="form-group">
                            <p className="note_id">
                                <input className="form-control" style={divStyle} disabled ref={id => this.id = id} defaultValue={this.props.note.id}/>
                            </p>
                            <p className="note_title">
                                <label className="noteTitle">Título</label>
                                <input className="form-control" ref={title => this.title = title} defaultValue={this.props.note.title} placeholder="Comprar Vegetais"/>
                            </p>
                            <p className="note_desc">
                                <label className="noteDescTitle">Descrição</label>
                                <textarea className="form-control" rows="10" ref={description => this.description = description} defaultValue={this.props.note.description} placeholder="Pizza não é um Vegetal"/>
                            </p>
                        </div>
                        {this.renderFormButtons()}
                    </form>
                </div>
            </div>
        )
    }
}

export default NewNotes;
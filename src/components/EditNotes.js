import React from 'react';
import { Redirect } from 'react-router';
import moment from 'moment';
import newline from 'react-newline-to-break';

class EditNotes extends React.Component {
    //o constructor define o estado inicial do objeto
        constructor(props) {
        super(props);
        this.state = { 
            redirect : false
        };
        this.deleteNote = this.deleteNote.bind(this);
        this.editNote = this.editNote.bind(this);
    }

    //deleteNote deleta uma nota existente
    deleteNote(event){
        //preventDefault() impede a pagina de recarregar 
        event.preventDefault();
        //removemos a nota ao deletar o seu id
        this.props.deleteNote(this.props.note.id);
    }

    //editNote atualiza uma nota existente
    editNote(event){
        event.preventDefault();
        this.props.editNote(this.props.note.id);
    }

    //vai ser renderizado quando uma nota for editada
    renderFormattedDate(){
        return 'Editado em:' + moment(this.props.note.date).format("DD MMM YYYY [at] HH:mm");
    }

    render() {
        //se não existir volta para "/"
        if (this.state.redirect || !this.props.note) {
            return <Redirect push to="/"/>;
        }

        //se existir renderiza um card com detalhes
        return (
            <div className="card">
                {/*renderiza o titulo*/}
                <div className="card-header">
                    <h4>{this.props.note.title}</h4>
                </div>
                <div className="card-body">
                    <p className="text-center font-weight-light small text-muted">{this.renderFormattedDate()}</p>
                    <p className="card-text-main">Title: {newline(this.props.note.title)}</p>
                    <p className="card-text">{newline(this.props.note.description)}</p>
                    <button onClick={this.deleteNote} className="btn btn-danger">Delete</button>
                    <button onClick={this.editNote} className="btn btn-success float-right">Edit</button>
                </div>
            </div>
        )
    }
}

export default EditNotes;
//ListNotes.js 
import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import moment from 'moment';
//moment é uma biblioteca javascript para manipulação de datas

class ListNotes extends Component {
    //irá renderizar a data em que a no que foi adicionada ou editada pela última vez
    renderFormattedDate(date){
        return moment(date).format('DD MMM YYYY');
    }
    render() {
        //Se não existir nenhuma nota na lista, será exibida uma div com uma mensagem
        if (!this.props.notes || this.props.notes.length === 0) {
            return (<div className="no-notes">Eita! Parece que você não tem nehuma anotação. Que tal adicionar uma? 😊</div>)
        }
        //se existirem notas, elas serão exibidas em uma div
        const listItems = this.props.notes.map((note) =>
                //nav link to the div of respective note without displaying the id
                <NavLink activeClassName='active' to={`/note/${note.id}`}
                      className="list-group-item"
                      key={note.id.toString()}
                      onClick={this.props.viewNote.bind(this, note.id)}>
                    {/*Show note title*/}
                    <div className="text-truncate primary">{note.title}</div>
                    {/*Show note date*/}
                    <div className="font-weight-light font-italic small">{this.renderFormattedDate(note.date)}</div>
                </NavLink >
        );
        //mostra as notas como uma lista
        return (<ul className="list-group">{listItems}</ul>);
    }
}

export default ListNotes;
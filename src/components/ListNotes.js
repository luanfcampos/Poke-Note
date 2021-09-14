import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import moment from 'moment';

class ListNotes extends Component {
    renderFormattedDate(date){
        return moment(date).format('DD MMM YYYY');
    }
    render() {
        if (!this.props.notes || this.props.notes.length === 0) {
            return (<div className="no-notes">Parece que você ainda não tem nenhuma anotação, que tal adicionar uma? 😊</div>)
        }
        const listItems = this.props.notes.map((note) =>
                <NavLink activeClassName='active' to={`/note/${note.id}`}
                      className="list-group-item"
                      key={note.id.toString()}
                      onClick={this.props.viewNote.bind(this, note.id)}>
                    <div className="text-truncate primary">{note.title}</div>
                    <div className="font-weight-light font-italic small">{this.renderFormattedDate(note.date)}</div>
                </NavLink >
        );
        return (<ul className="list-group">{listItems}</ul>);
    }
}

export default ListNotes;
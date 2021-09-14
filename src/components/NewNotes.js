
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

    //saveNote vai salvar novas anotações
    saveNote(event) {
        //preventDefault() previne que a pagia recarregue ao ser adicionada uma nova anotação
        event.preventDefault();
        //se o titulo estiver vazio, será exibido um alerta
        if (this.title.value === "") {
            alert("Adicione um título");
        } else {
             //cada anotação é associada com um id, titulo, descrição e imagem
            const note = {
                id: Number(this.id.value),
                title: this.title.value,
                description: this.description.value
            }
             //vai redirecionar para a noa quando for clicado (espero)
            this.props.persistNote(note);
            this.setState({
                redirect: true
            });
        }
    }

    //deleteNote cancela (deleta) a adição de uma nova anotação
    deleteNote(event) {
        //apenas para teste
        console.log('deleteNote');
        event.preventDefault();
        this.props.deleteNote(this.props.note.id);
    }

    renderFormTitleAction() {
        return (this.props.note.id !== undefined) ? "Editar Anotação" : "Nova Anotação";
    }

    //Renderiza botões de adicionar e deletar
    renderFormButtons() {
        //se note.id existe, podemos editar o deletar
        if (this.props.note.id !== undefined) {
            return (<div>
                { /* mostra o botão de salvar */}
                <button type="submit" className="btn btn-success float-right">Adicionar</button>
                { /* mostra o botão de deletar */}
                <button onClick={this.deleteNote} className="btn btn-danger">Deletar</button>
            </div>);
        }
        return (
            /* mostra o botão de adicionar */
            <button type="submit" className="btn btn-success float-right">Adicionar</button>
        );
    }

    render() {

        //redireciona para uma anotação existente
        if (this.state.redirect) {
            //se não existir retorna para main "/"
            if (!this.props.note) {
                return <Redirect push to="/"/>;
            }
            return <Redirect push to={`/note/${this.props.note.id}`}/>;
        }

        return (
            <div className="card">
                <div className="card-header">
                    {/* renderiza os titulos*/}
                    {this.renderFormTitleAction()}
                </div>
                <div className="card-body">
                    {/* formulario que permite adicionar nots*/}
                    <form ref="NewNotes" onSubmit={this.saveNote}>
                        <div className="form-group">
                            <p className="note_id">
                                <input className="form-control" style={divStyle} disabled ref={id => this.id = id} defaultValue={this.props.note.id}/>
                            </p>
                            {/* Renderiz o titulo de uma nova nota */}
                            <p className="note_title">
                                <label className="noteTitle">Title</label>
                                <input className="form-control" ref={title => this.title = title} defaultValue={this.props.note.title} placeholder="Save Princess Peach"/>
                            </p>
                            {/* Renderiza a descrição*/}
                            <p className="note_desc">
                                <label className="noteDescTitle">Description</label>
                                <textarea className="form-control" rows="10" ref={description => this.description = description} defaultValue={this.props.note.description} placeholder="When Mario reaches the end of the course, remember to save Princess Peach or Luigi will! "/>
                            </p>
                        </div>
                        {/* renderiza os botões*/}
                        {this.renderFormButtons()}
                    </form>
                </div>
            </div>
        )
    }
}

export default NewNotes;
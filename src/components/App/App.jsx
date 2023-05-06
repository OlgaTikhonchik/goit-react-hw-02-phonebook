import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { Container } from './App.styled';
import contacts from 'components/contacts.json';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => {
      return { contacts: [contact, ...prevState.contacts] };
    });
  };

  handlerChangeFilter = e => this.setState({ filter: e.target.value });

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handlerChangeFilter} />
        <ContactList contacts={contacts} onDelete={this.deleteContact} />
      </Container>
    );
  }
}

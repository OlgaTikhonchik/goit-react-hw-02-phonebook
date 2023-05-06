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

  addContact = contacts => {
    // const checkedContacts = contacts.find(
    //   contact => contact.name === this.name
    // );
    // if (checkedContacts) {
    //   alert(`${this.name} is already in contacts`);
    //   return;
    // }

    const contact = {
      id: nanoid(),
      // name,
      // number,
      contacts,
    };
    this.setState(prevState => {
      return { contacts: [contact, ...prevState.contacts] };
    });

    console.log(this.state.contacts);
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));

    console.log(contactId);
  };

  handlerChangeFilter = e => {
    this.setState({ filter: e.target.value });
    console.log(this.state.filter);
  };

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

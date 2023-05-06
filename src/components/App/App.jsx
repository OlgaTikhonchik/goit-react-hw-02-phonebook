import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { Container } from './App.styled';
// import contacts from 'components/contacts.json';
import initialContacts from 'components/contacts.json';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  addContact = (name, number) => {
    // const repeatName = this.state.contacts.some(
    //   el => el.name.toLowerCase() === name.toLowerCase()
    // );
    // if (
    //   this.state.contacts.filter(contact => contact.name === name).length > 0
    // ) {
    //   return alert(`${name} is already in contacts`);
    // }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    // this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
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
    this.setState({ filter: e.currenTarget.value });
    console.log(this.state.filter);
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handlerChangeFilter} />
        <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />
      </Container>
    );
  }
}

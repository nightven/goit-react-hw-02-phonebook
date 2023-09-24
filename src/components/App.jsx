import { Component } from 'react';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import { Container, Label } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  //add a new contact to state
  onAddContact = data => {
    if (this.state.contacts.some(({ name }) => data.name === name)) {
      return alert(`${data.name} is already in contacts list`);
    }
    const mewContact = { ...data, id: nanoid() };
    this.setState({ contacts: [...this.state.contacts, mewContact] });
  };

  // delete a contact from state
  onDeleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  // filter contacts by name
  onInputChange = e => {
    this.setState({ filter: e.target.value.trim() });
  };

  render() {

    const { contacts, filter } = this.state;
    //filtered contacts by name
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    
    return (
      <Container>
        <Phonebook onAddContact={this.onAddContact} />
        <h2>Contacts</h2>
        {/* show search input if contacts isn't empty */}
        {this.state.contacts.length === 0? (<p>Empty</p>):(
        <div>
          <Label>
          <p>Search by contact</p>
          <input
            type="text"
            placeholder="Enter search contact"
            value={this.state.filter}
            onChange={this.onInputChange}
          />
        </Label>
        <Contacts
          contacts={filteredContacts}
          onDeleteContact={this.onDeleteContact}
        />
        </div>)}
        </Container>
      
    );
  }
}

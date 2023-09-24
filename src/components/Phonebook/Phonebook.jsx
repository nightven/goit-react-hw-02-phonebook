import { Component } from 'react';
import { Form } from './Phonebook.styled';

export default class Phonebook extends Component {
  state = { name: '', number: '' };

  //set state on input change
  onChangeInput = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

//submit form
  handleSubmit = evt => {
    evt.preventDefault();
    const newContact = { name: this.state.name, number: this.state.number };
    this.setState({ name: '', number: '' });

    this.props.onAddContact(newContact);
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={this.handleSubmit}>
          <p>Name</p>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter name"
            value={this.state.name}
            onChange={this.onChangeInput}
          />
          <p>Number</p>
          <input
            type="tel"
            name="number"
            required
            placeholder="Enter number 123-45-67"
            value={this.state.number}
            onChange={this.onChangeInput}
          />
          <button type="submit">Add contact</button>
        </Form>
      </>
    );
  }
}

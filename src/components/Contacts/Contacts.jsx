import Contact from 'components/Contact/Contact';
import { List } from './Contacts.styled';

const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Contact
        key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </List>
  );
};

export default Contacts;

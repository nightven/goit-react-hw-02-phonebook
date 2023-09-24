import { Item } from "./Contact.styled";

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <Item>
      <span>{name}</span>
      <span>{number}</span>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </Item>
  );
};
export default Contact;

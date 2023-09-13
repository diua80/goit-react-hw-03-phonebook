export const ContactItem = ({ filteredContacts, handleDeleteContact }) => {
  return (
    <div>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={()=>handleDeleteContact(contact.id)}> delete</button>
        </li>
      ))}
    </div>
  );
};

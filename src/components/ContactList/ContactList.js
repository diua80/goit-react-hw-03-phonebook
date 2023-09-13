import { ContactItem } from 'components/ContactItem/ContactItem';


export const ContactList = ({ contacts,handleDeleteContact}) => {
  
  return (
    <div>          
      <ul>
        <ContactItem filteredContacts={contacts} handleDeleteContact={handleDeleteContact} />
      </ul>
    </div>
  );
};

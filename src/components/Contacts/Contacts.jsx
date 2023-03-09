
import { ListContacts, ButtonDel } from './ContactsStyled';
import { getContacts, getVisibleContact } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operation';

const Contacts = () => {

    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    // const contactFiltering = () => {
    //     const normalizedFilter = filters.toLowerCase();
    //     return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    // }

    const visibleContacts = useSelector(getVisibleContact);

    return (
        <ListContacts>
            {visibleContacts.map(({ id, name, number }) =>
                <li key={id}>
                    {name}: {number}
                    <ButtonDel type='button' onClick={() => dispatch(deleteContact(contacts.id))}>Delete</ButtonDel>
                </li>)
            }

        </ListContacts>
    )
}


export default Contacts;
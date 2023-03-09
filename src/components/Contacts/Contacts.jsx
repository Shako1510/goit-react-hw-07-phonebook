
import { ListContacts, ButtonDel } from './ContactsStyled';
import { getContacts, getVisibleContact } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operation';
import { useEffect } from "react";

const Contacts = () => {

    const items = useSelector(getContacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);


    const visibleContacts = useSelector(getVisibleContact);

    return (
        <ListContacts>
            {visibleContacts.map(({ id, name, phone }) =>
                <li key={id}>
                    {name}: {phone}
                    <ButtonDel type='button' onClick={() => dispatch(deleteContact(items.id))}>Delete</ButtonDel>
                </li>)
            }

        </ListContacts>
    )
}


export default Contacts;
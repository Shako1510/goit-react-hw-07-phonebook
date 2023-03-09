
import { ListContacts, ButtonDel } from './ContactsStyled';
import { getVisibleContact } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operation';
import { useEffect } from "react";

const Contacts = () => {

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
                    <ButtonDel type='button' onClick={() => dispatch(deleteContact(id))}>Delete</ButtonDel>
                </li>)
            }

        </ListContacts>
    )
}


export default Contacts;
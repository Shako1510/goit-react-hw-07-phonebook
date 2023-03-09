import Form from "../Form/ContactForm";
import Contacts from "../Contacts/Contacts";
import Filter from "../Filter/Filter";
import { DivBox, TitleBox, SecondaryTitleBox } from "./AppStyled";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/operation";


export function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <DivBox>

      <TitleBox>Phonebook</TitleBox>

      <Form />

      <SecondaryTitleBox>Contacts</SecondaryTitleBox>

      <Filter />

      <Contacts />

    </DivBox>
  );
}

export default App;

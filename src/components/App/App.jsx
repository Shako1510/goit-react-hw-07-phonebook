import Form from "../Form/ContactForm";
import Contacts from "../Contacts/Contacts";
import Filter from "../Filter/Filter";
import { DivBox, TitleBox, SecondaryTitleBox } from "./AppStyled";





export function App() {



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

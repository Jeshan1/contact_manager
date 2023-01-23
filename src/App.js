import React, { useState } from "react";
import Contact from "./components/Contact";
import ContactAdder from "./components/ContactAdder";
import Navbar from "./components/Navbar";
import "./styles/index.css";
const App = () => {
  const getItems = JSON.parse(localStorage.getItem("contacts"));
  const [contacts,setContacts] = useState(getItems?getItems:[]);
  const addContactData = (contactData) =>{
    const allData = [contactData,...contacts]
    setContacts(allData);
    localStorage.setItem("contacts",JSON.stringify(allData));
  };

  const clearData = () => {
    localStorage.clear();
    setContacts([]);
  };
 
  return(
    <>
      <Navbar/>
      <ContactAdder onContactAdder={addContactData}/>
      <div className="bg-blue-600 text-white font-bold px-24 py-10 font-['Poppins'] mx-2 rounded-xl">
        <button onClick={clearData} className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 text-xl font-bold font-['poppins'] rounded-xl">Clear Data</button>
        <div className="grid grid-cols-3 text-justify gap-5 m-2 px-10 py-5 rounded-xl">
         {contacts.map(data=>(<Contact key={data.id} data={data}></Contact>))} 
        </div>
      </div>
    </>
    
  );
}

export default App;

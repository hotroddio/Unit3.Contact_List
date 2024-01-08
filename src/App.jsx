import './App.css'
import ContactList from './components/contactlist';
import { useState } from 'react';
// import SelectedContact from './components/SelectedContact'


export default function App() {
    // const [selectedContactId, setSelectedContactId] = useState(null);
    // console.log("selectedContactId:", selectedContactId);
    return (
        <>
            {/* {selectedContactId ? ( */}
            {/* // <div>Selected Contact View</div> */}
            {/* // ) : ( */}
            <ContactList />
            {/* // )} */}
        </>
    );
}
import "../App.css";
import { useState, useEffect } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [selectedContact, setSelectedContact] = useState(null);
  console.log("selectedContactId", selectedContactId);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setSelectedContact(result);
        console.log("---", result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, [selectedContactId]);
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Selected Contact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Username</td>
              <td>Website</td>
        </tr>
      </tbody>
      <tbody>
        {selectedContact && (
          <tr>
              <td>{selectedContact.name}</td>
              <td>{selectedContact.email}</td>
              <td>{selectedContact.phone}</td>
              <td>{selectedContact.username}</td>
              <td>{selectedContact.website}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

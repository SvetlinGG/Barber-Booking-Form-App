import { useEffect, useState } from "react";

const baseURL = 'https://pntezrlzpnvbmxjltaqr.supabase.co/rest/v1/users';
const apiKey = 'sb_publishable_1YnOAlXkaINLpwxGrT8QNg_-ssIpzlT';

// function loadBookings(){
//   try {
//     return JSON.parse(localStorage.getItem("bookings") || "[]");
//   } catch{
//     return []
//   }

// }
export default function UserData({
  userId,
  clients
}) {

  const [bookings, setBookings] = useState({});
  const [user, setUser] = useState({})

  const save = (updated) => {
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated))
  };

  const handleDelete = (id) => {
    save(bookings.filter((b) => b.id !== id))
  }



  useEffect(() => {
    fetch(`${baseURL}?id=eq.${userId}`, {
      //method: 'GET',
      //body: JSON.stringify(clients),
      headers: {
        'apikey': apiKey,
        //'Content-Type': 'application/json',
        //'Authorization': `Bearer ${apiKey}`
      },
    })
    .then((response) => response.json())
    .then((data) => setUser(data[0]))
    .catch(error => {console.error('Error fetchin using data:', error)}
  )},[userId])

  if (!user) return null;

    



    return (
        <main className="userdata">
      <div className="userdata__header">
        <h1>Client Data</h1>
        
          <button className="userdata__clear" >
            Clear all
          </button>
        
      </div>

      
        <p className="userdata__empty">No bookings yet.</p>
      
        <div className="userdata__tablewrap">
          <table className="userdata__table">
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Date</th>
                <th>Phone</th>
                <th>Email</th>
                <th aria-label="Actions" />
              </tr>
            </thead>
            <tbody>
              
                <tr >
                  <td data-label="First name">{clients.firstName}</td>
                  <td data-label="Last name">{clients.lastName}</td>
                  <td data-label="Date">{clients.date}</td>
                  <td data-label="Phone">{clients.phoneNumber}</td>
                  <td data-label="Email">{clients.email}</td>
                  <td>
                    <button
                      className="userdata__delete"
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              
            </tbody>
          </table>
        </div>
      
    </main>
    );
}
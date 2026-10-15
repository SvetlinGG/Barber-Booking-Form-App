import { useEffect, useState } from "react";
import { fromIsoDate } from "../utils/timeDateUtils";

const baseURL = import.meta.env.VITE_SUPABASE_URL;
const apiKey = import.meta.env.VITE_SUPABASE_KEY;

export default function UserData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(baseURL, {
      method: 'GET',
      headers: {
        'apikey': apiKey,
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

  const handleDelete = (id) => {
    fetch(`${baseURL}?id=eq.${id}`, {
      method: 'DELETE',
      headers: {
        'apikey': apiKey,
        'Authorization': `Bearer ${apiKey}`
      },
    })
      .then(() => setUsers((prev) => prev.filter((u) => u.id !== id)))
      .catch((error) => console.error('Error deleting user:', error));
  };

  const handleClearAll = () => {
    fetch(baseURL, {
      method: 'DELETE',
      headers: {
        'apikey': apiKey,
        'Authorization': `Bearer ${apiKey}`
      },
    })
      .then(() => setUsers([]))
      .catch((error) => console.error('Error clearing users:', error));
  };

  return (
    <main className="userdata">
      <div className="userdata__header">
        <h1>Client Data</h1>
        <button className="userdata__clear" onClick={handleClearAll}>
          Clear all
        </button>
      </div>

      {users.length === 0 ? (
        <p className="userdata__empty">No bookings yet.</p>
      ) : (
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
              {users.map((user) => (
                <tr key={user.id}>
                  <td data-label="First name">{user.firstName}</td>
                  <td data-label="Last name">{user.lastName}</td>
                  <td data-label="Date">{fromIsoDate(user.date)}</td>
                  <td data-label="Phone">{user.phoneNumber}</td>
                  <td data-label="Email">{user.email}</td>
                  <td>
                    <button
                      className="userdata__delete"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}

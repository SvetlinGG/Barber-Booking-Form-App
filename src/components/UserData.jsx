export default function UserData() {
    return (
        <main className="userdata">
      <div className="userdata__header">
        <h1>User Data</h1>
        
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
                  <td data-label="First name"></td>
                  <td data-label="Last name"></td>
                  <td data-label="Date"></td>
                  <td data-label="Phone"></td>
                  <td data-label="Email"></td>
                  <td>
                    <button
                      className="userdata__delete"
                      
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
const baseURL = 'https://pntezrlzpnvbmxjltaqr.supabase.co/rest/v1/users';
const apiKey = 'sb_publishable_1YnOAlXkaINLpwxGrT8QNg_-ssIpzlT';


export default function Booking() {

  const saveClickHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const clients = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email')
    }
  }


    return (
         <main className="booking">
      <h1>Booking</h1>

      <form className="booking__form"  noValidate>
        <div className="booking__row">
          <div className="booking__field">
            <label htmlFor="firstName">First name</label>
            <input
              id="firstName"
              name="firstName"
              
              type="text"
              autoComplete="given-name"
              
            />
             
          </div>

          <div className="booking__field">
            <label htmlFor="lastName">Last name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              
            />
            
          </div>
        </div>

        <div className="booking__field">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            name="date"
            type="date"
            
          />
          
        </div>

        <div className="booking__field">
          <label htmlFor="phoneNumber">Phone number</label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            autoComplete="tel"
            placeholder="+355 69 123 4567"
            
          />
          
        </div>

        <div className="booking__field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            
          />
          
        </div>

        <button type="submit" className="booking__submit">
          Book now
        </button>

        
          <p className="booking__success" role="status">
            Your booking has been submitted!
          </p>
        
      </form>
    </main>
    );
}
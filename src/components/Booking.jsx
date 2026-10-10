export default function Booking() {
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
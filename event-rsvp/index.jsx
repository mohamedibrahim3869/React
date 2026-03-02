const { useState } = React;

export function EventRSVPForm() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [attendee, setAttendee] = useState(1);
  const [anyGuest, setGuests] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [dietary, setDietary] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedData({ firstName, email, attendee, anyGuest, dietary });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="name">
          <input
            type="text"
            placeholder="Enter Your First Name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Your Dietary"
            value={dietary}
            onChange={(e) => setDietary(e.target.value)}
          />
        </label>
        <label className="email">
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="attendee">
          <input
            type="number"
            min="1"
            value={attendee}
            placeholder="Number of Attendee"
            onChange={(e) => setAttendee(e.target.value)}
            required
          />
        </label>
        <label className="guests">
          Bringing additional guests?
          <input
            type="checkbox"
            checked={anyGuest}
            onChange={(e) => setGuests(e.target.checked)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div className="result">
          <h2>RSVP Submitted!</h2>
          <p>Name: {submittedData.firstName}</p>
          <p>Email: {submittedData.email}</p>
          <p>
            Dietary Preferences:{" "}
            {submittedData.dietary ? submittedData.dietary : "none"}
          </p>
          <p>Number of Attendees: {submittedData.attendee}</p>
          <p>
            Bringing additional guests: {submittedData.anyGuest ? "Yes" : "No"}
          </p>
        </div>
      )}
    </div>
  );
}

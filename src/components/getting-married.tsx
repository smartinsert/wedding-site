import React from "react";

const GettingMarried: React.FC = () => {
  const events = [
    {
      title: "Arrive at the venue",
      time: "6:00 PM",
      image: "/images/arrive.png",
    },
    { title: "Ceremony", time: "6:15 PM", image: "/images/ceremony.png" },
    { title: "Cocktail Hour", time: "6:35 PM", image: "/images/cocktail.png" },
    { title: "Wedding", time: "7:00 PM", image: "/images/wedding.png" },
    { title: "Dinner", time: "7:15 PM", image: "/images/dinner.png" },
    { title: "Dancing", time: "8:00 PM", image: "/images/dancing.png" },
    { title: "Party Over", time: "10:00 PM", image: "/images/partyover.png" },
    { title: "After Party", time: "11:00 PM", image: "/images/afterparty.png" },
  ];

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <div style={{ backgroundColor: "pink", marginBottom: "2rem" }}>
          <div className="Homepage-root-div">
            <img
              alt="Wedding Logo"
              src="/images/wedding_logo.png"
              className="Homepage-root-img"
            />
          </div>
          <div
            style={{
              fontFamily: "Protest Revolution, serif",
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              marginTop: "1rem",
            }}
          >
            We're Getting Married
          </div>
        </div>
        <p
          style={{
            fontSize: "1.5rem",
            color: "#555",
            marginBottom: "2rem",
            fontFamily: "Protest Revolution, serif",
          }}
        >
          Save the Date
        </p>
        <p
          style={{
            textAlign: "center",
            fontFamily: "Protest Riot, serif",
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "#555",
          }}
        >
          We're super excited to have you all with us on our big day
        </p>
        <hr style={{ margin: "2rem auto", width: "50%" }} />
      </div>
      <div style={{ display: "flex" }}>
        {/* Left Side */}
        <div
          style={{ flex: 1, padding: "20px", borderRight: "1px solid #ccc" }}
        >
          {/* Venue Picture */}
          <img
            src="/images/venue.jpg" // Replace with the actual path to your venue picture
            alt="Venue"
            style={{ width: "100%", marginBottom: "1rem" }}
          />
          {/* Venue Address */}
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              fontFamily: "Protest Riot, serif",
              marginBottom: "0.5rem",
            }}
          >
            Venue Address:
          </p>
          <p
            style={{
              fontSize: "1rem",
              fontFamily: "Protest Revolution, serif",
              color: "#555",
            }}
          >
            Aguada - Siolim Rd, Gauravaddo, Calangute, Goa 403516
          </p>
        </div>
        {/* Right Side */}
        <div style={{ flex: 1, padding: "20px" }}>
          <div style={{ marginTop: "2rem" }}>
            <h2
              style={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              Agenda for the day
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {events.map((event, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "1rem",
                    flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                  }}
                >
                  {/* Dot for each event */}
                  <img
                    src={event.image}
                    alt={event.title}
                    style={{
                      width: "30px",
                      height: "30px",
                      marginRight: index % 2 === 0 ? "1rem" : 0,
                      marginLeft: index % 2 !== 0 ? "1rem" : 0,
                    }}
                  />
                  {/* Event details */}
                  <div>
                    <p
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {event.title}
                    </p>
                    <p>{event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GettingMarried;

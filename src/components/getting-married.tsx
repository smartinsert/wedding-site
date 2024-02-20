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
        <div
          style={{
            background: 'url("images/wedding_banner.jpg") center/cover',
            minHeight: "1000px",
          }}
        >
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
              marginTop: "45rem",
              color: "tan",
            }}
          >
            Are Getting Married
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
            Hotel Le Meridien, Aguada - Siolim Rd, Gauravaddo, Calangute, Goa
            403516
          </p>
        </div>
        {/* Right Side */}
        <div style={{ flex: 1, padding: "20px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "-1.75rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                fontFamily: "Protest Riot, serif",
                color: "#555",
              }}
            >
              Agenda for the day
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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
                      fontFamily: "Protest Revolution, serif",
                      color: "#555",
                    }}
                  >
                    {event.title}
                  </p>
                  <p
                    style={{
                      fontSize: "1rem",
                      fontWeight: "lighter",
                      marginBottom: "0.5rem",
                      fontFamily: "Protest Revolution, serif",
                      color: "#555",
                    }}
                  >
                    {event.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr
        style={{ margin: "2rem auto", width: "50%", border: "1px solid #ccc" }}
      />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {/* Card 1 */}
        <div
          style={{
            width: "300px",
            position: "relative",
            minHeight: "300px",
            borderRadius: "8px",
            overflow: "hidden",
            marginBottom: "2rem",
          }}
        >
          <img
            src="images/goa.jpg"
            alt="Card 1"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              padding: "20px",
              boxSizing: "border-box",
              color: "#fff",
              textAlign: "center",
            }}
          >
            <button
              style={{
                padding: "10px",
                bottom: 0,
                background: "rgba(52, 152, 219, 0.7)",
                color: "#fff",
                border: "none",
                marginTop: "1rem",
                transition: "background-color 0.3s",
                cursor: "pointer",
                fontSize: "1.2rem",
                fontFamily: "Protest Riot, serif",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(41, 128, 185, 0.9)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(52, 152, 219, 0.7)")
              }
            >
              Places To Go
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div
          style={{
            width: "300px",
            position: "relative",
            minHeight: "300px",
            borderRadius: "8px",
            overflow: "hidden",
            marginBottom: "2rem",
          }}
        >
          <img
            src="/images/couple-picture.jpg"
            alt="Card 2"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              padding: "20px",
              boxSizing: "border-box",
              color: "#fff",
              textAlign: "center",
            }}
          >
            <button
              style={{
                padding: "10px",
                background: "rgba(0, 0, 0, 0.7)",
                color: "#fff",
                border: "none",
                marginTop: "1rem",
                transition: "background-color 0.3s",
                cursor: "pointer",
                fontSize: "1.2rem",
                fontFamily: "Protest Riot, serif",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.9)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.6)")
              }
            >
              Origin Story
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div
          style={{
            width: "300px",
            position: "relative",
            minHeight: "300px",
            borderRadius: "8px",
            overflow: "hidden",
            marginBottom: "2rem",
          }}
        >
          <img
            src="/images/dog.jpg"
            alt="Card 3"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              padding: "20px",
              boxSizing: "border-box",
              color: "#fff",
              textAlign: "center",
            }}
          >
            <button
              style={{
                padding: "10px",
                background: "rgba(200, 145, 20, 0.7)",
                color: "#fff",
                border: "none",
                marginTop: "1rem",
                transition: "background-color 0.3s",
                cursor: "pointer",
                fontSize: "1.2rem",
                fontFamily: "Protest Riot, serif",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(200, 145, 20, 0.8)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(200, 145, 20, 0.7)")
              }
            >
              Find Out Here
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GettingMarried;

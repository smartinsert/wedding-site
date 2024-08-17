import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  withStyles,
} from "@material-ui/core";

const useStyles = withStyles((theme: { spacing: (arg0: number) => any }) => ({
  table: {
    minWidth: 650,
    marginTop: theme.spacing(4),
  },
  tableHeadCell: {
    fontWeight: "bold",
  },
}));

const GuestList: React.FC = () => {
  const classes = useStyles();

  const [guests, setGuests] = useState([]);

  useEffect(() => {
    // Fetch guest list data from server
    axios
      .get("/api/guests")
      .then((response) => {
        setGuests(response.data);
      })
      .catch((error) => {
        console.error("Error fetching guest list:", error);
      });
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            background: 'url("images/wedding_banner.jpg") center/cover',
            minHeight: "500px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {/* Banner content */}
          <div style={{ marginBottom: "2rem" }}>
            <img src="/images/wedding_logo.png" alt="Wedding Logo" />
          </div>
          <h1
            style={{
              color: "#fff",
              fontFamily: "Protest Riot, serif",
              fontSize: "3rem",
            }}
          >
            Guest List
          </h1>
          <p
            style={{
              color: "#fff",
              fontFamily: "Protest Revolution, serif",
              fontSize: "1.5rem",
            }}
          >
            We can't wait to celebrate with you!
          </p>
        </div>
      </div>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeadCell}>Name</TableCell>
            <TableCell className={classes.tableHeadCell}>Email</TableCell>
            <TableCell className={classes.tableHeadCell}>Attending</TableCell>
            {/* Add more table headers as needed */}
          </TableRow>
        </TableHead>
        <TableBody>
          {guests.map((guest) => (
            <TableRow key={guest._id}>
              <TableCell>{guest.name}</TableCell>
              <TableCell>{guest.email}</TableCell>
              <TableCell>{guest.attending ? "Yes" : "No"}</TableCell>
              {/* Add more table cells for additional guest details */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

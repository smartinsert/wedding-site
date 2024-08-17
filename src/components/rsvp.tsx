import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
  Grid,
  FormControlLabel,
  FormGroup,
  ButtonGroup,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import Visibility from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import axios from "axios";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  attending: boolean | null;
  numberOfAttendees: number;
  notes: string;
}

const RSVP: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    attending: false,
    numberOfAttendees: 1,
    notes: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState("");

  const handleChange = (
    event:
      | React.ChangeEvent<
          | HTMLInputElement
          | HTMLTextAreaElement
          | { value: number; name: string }
        >
      | SelectChangeEvent<number>
  ) => {
    const { name, value } = event.target as
      | HTMLInputElement
      | HTMLTextAreaElement
      | { value: number; name: string };

    // Type guard for checkboxes
    if (name === "attending") {
      setFormData((prevData) => ({
        ...prevData,
        attending: prevData.attending === null ? true : !prevData.attending,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const axiosInstance = axios.create({
    baseURL: "http://localhost:5000", // Adjust the URL as needed
  });

  const addGuest = async (guest: FormData) => {
    try {
      const response = await axiosInstance.post("/api/guests", guest);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateGuest = async (id: any, guest: FormData) => {
    try {
      const response = await axiosInstance.put(`/api/guests/${id}`, guest);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axiosInstance.get("/api/guests", {
        params: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
        },
      });

      console.log(`Response is ${JSON.stringify(response)}`);

      if (response.data.length > 0) {
        // Update an existing guest
        const id = response.data[0]._id;
        await handleUpdate(id);
      } else {
        // Add a new guest
        await addGuest(formData);
      }

      // Reset form data
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        attending: false,
        numberOfAttendees: 1,
        notes: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (id: any) => {
    try {
      // Call updateGuest function to update an existing guest
      await updateGuest(id, formData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleViewGuests = async () => {
    setIsModalOpen(true);
  };

  async function handlePasswordSubmit(): Promise<void> {
    if (password === "password") {
      try {
        const response = await axiosInstance.get("/api/allGuests");
        const guests = response.data;
        const guestDetails = guests
          .map(
            (guest: {
              id: any;
              firstName: string;
              lastName: string;
              email: string;
              attending: boolean;
              numberOfAttendees: number;
              notes: string;
            }) =>
              `<tr key=${guest.id}>
            <td>${guest.firstName}</td>
            <td>${guest.lastName}</td>
            <td>${guest.email}</td>
            <td>${guest.attending ? "Yes" : "No"}</td>
            <td>${guest.numberOfAttendees}</td>
            <td>${guest.notes}</td>
          </tr>`
          )
          .join("");

        const newTab = window.open("", "_blank");
        if (newTab) {
          newTab.document.body.innerHTML = `
            <table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Visiting</th>
                  <th>Members</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                ${guestDetails}
              </tbody>
            </table>
          `;
        }
      } catch (error) {
        console.error("Error fetching guest details:", error);
      }
      setIsModalOpen(false);
    } else {
      alert("Incorrect password. Please try again.");
    }
  }

  return (
    <>
      <div
        style={{
          marginTop: "-10rem",
          textAlign: "center",
          position: "relative",
          marginBottom: "2rem",
        }}
      >
        <div
          style={{
            background: 'url("images/wedding_banner.jpg") center/cover',
            minHeight: "500px",
            position: "relative",
          }}
        >
          <div
            style={{
              fontFamily: "Protest Revolution, serif",
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              marginTop: "10rem",
              color: "tan",
            }}
          >
            RSVP for Our Big Day
          </div>
        </div>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={8} md={6}>
            <h3
              style={{
                textAlign: "center",
                fontSize: "1rem",
                fontWeight: "lighter",
                marginBottom: "0.5rem",
                fontFamily: "Protest Revolution, serif",
                color: "#555",
              }}
            >
              We're so excited to see you at our big day! Let us know if you can
              make it by <strong>December 29th</strong> (or else{" "}
              <strong>Divyang</strong> will hound you)
            </h3>
            <form
              onSubmit={handleSubmit}
              style={{ maxWidth: "800px", width: "100%", margin: "auto" }}
            >
              <Grid container spacing={2} style={{ marginTop: "1rem" }}>
                <Grid item xs={12} md={6}>
                  <InputLabel
                    style={{ fontFamily: "Protest Revolution, serif" }}
                  >
                    Name (required)
                  </InputLabel>
                  <TextField
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <InputLabel>&nbsp;</InputLabel>
                  <TextField
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                  />
                </Grid>
              </Grid>
              <InputLabel style={{ fontFamily: "Protest Revolution, serif" }}>
                Email Address (required)
              </InputLabel>
              <TextField
                label="We'll be giving you regular updates before the big day."
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                required
              />
              <Grid container spacing={2} alignItems={"center"}>
                <Grid item xs={12} md={6}>
                  <InputLabel
                    style={{ fontFamily: "Protest Revolution, serif" }}
                  >
                    Will you be attending?
                  </InputLabel>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl component="fieldset">
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="attending"
                            checked={formData.attending === true}
                            onChange={handleChange}
                            color="primary"
                          />
                        }
                        label="Yes"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="attending"
                            checked={formData.attending === false}
                            onChange={handleChange}
                            color="primary"
                          />
                        }
                        label="No"
                      />
                    </FormGroup>
                  </FormControl>
                </Grid>
              </Grid>
              {formData.attending && (
                <FormControl fullWidth margin="normal">
                  <InputLabel>How many of you will be attending?</InputLabel>
                  <Select
                    name="numberOfAttendees"
                    value={formData.numberOfAttendees}
                    onChange={handleChange}
                    label="How many of you will be attending?"
                    style={{ marginTop: "8px" }}
                  >
                    {[1, 2, 3, 4, 5].map((number) => (
                      <MenuItem key={number} value={number}>
                        {number}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
              <Grid item xs={12} md={6}>
                <TextareaAutosize
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Notes"
                  minRows={4}
                  style={{
                    width: "100%",
                    margin: "10px 0",
                    padding: "8px",
                    borderRadius: "4px",
                    borderColor: "#ccc",
                  }}
                />
              </Grid>
              <ButtonGroup>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{
                    fontFamily: "Protest Revolution, serif",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  Submit
                </Button>
                <Tooltip title="View Guests" arrow>
                  <IconButton onClick={handleViewGuests}>
                    <Visibility />
                  </IconButton>
                </Tooltip>
              </ButtonGroup>
            </form>
          </Grid>
        </Grid>
        <Modal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: 300,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
            }}
          >
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{
                fontFamily: "Protest Revolution, serif",
                fontSize: "1rem",
                fontWeight: "bold",
                marginTop: "2rem",
              }}
              onClick={handlePasswordSubmit}
            >
              Submit
            </Button>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default RSVP;

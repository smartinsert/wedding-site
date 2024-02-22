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
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Handle the submission logic (e.g., send data to the server)

    // For now, log the form data to the console
    console.log("Form Data:", formData);
  };

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
                SUBMIT
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default RSVP;

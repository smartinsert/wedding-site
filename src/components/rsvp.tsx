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
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  attending: boolean;
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
    const { name } = event.target as
      | HTMLInputElement
      | HTMLTextAreaElement
      | { value: number; name: string };

    // Type guard for checkboxes
    if (
      event.target instanceof HTMLInputElement &&
      event.target.type === "checkbox"
    ) {
      const checkboxEvent = event as React.ChangeEvent<HTMLInputElement>;
      setFormData((prevData) => ({
        ...prevData,
        [name]: checkboxEvent.target.checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: (
          event.target as
            | HTMLInputElement
            | HTMLTextAreaElement
            | { value: number; name: string }
        ).value,
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
    <div>
      <h2>RSVP</h2>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "400px", margin: "auto" }}
      >
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
        <TextField
          label="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Will you be attending?</InputLabel>
          <Checkbox
            name="attending"
            checked={formData.attending}
            onChange={handleChange}
            color="primary"
          />
        </FormControl>
        {formData.attending && (
          <FormControl fullWidth margin="normal">
            <InputLabel>How many of you will be attending?</InputLabel>
            <Select
              name="numberOfAttendees"
              value={formData.numberOfAttendees}
              onChange={handleChange}
              label="How many of you will be attending?"
            >
              {[1, 2, 3, 4, 5].map((number) => (
                <MenuItem key={number} value={number}>
                  {number}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
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
        <Button type="submit" variant="contained" color="primary" fullWidth>
          SUBMIT
        </Button>
      </form>
    </div>
  );
};

export default RSVP;

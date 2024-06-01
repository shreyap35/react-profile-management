import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid'

const InterestOptions = [
  "hiking",
  "reading",
  "photography",
  "painting",
  "cooking",
  "gardening",
  "traveling",
  "yoga",
  "dancing",
  "music",
  "biking",
  "skiing",
  "swimming",
];

export const AddOrEditProfile: React.FC<{
  data?: Profile;
  onSubmit: (profile: Profile) => void;
  onClose: () => void;
}> = ({ data, onClose, onSubmit }) => {
  const [currentProfile, setCurrentProfile] = useState<
    Partial<Profile> | undefined
  >(data);
  return (
    <Dialog open={true} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{`${
        data ? "Edit" : "Add"
      } Profile`}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="firstName"
          label="First Name"
          type="text"
          fullWidth
          value={currentProfile?.firstName}
          onChange={(e) =>
            setCurrentProfile({ ...currentProfile, firstName: e.target.value })
          }
        />
        <TextField
          margin="dense"
          id="lastName"
          label="Last Name"
          type="text"
          fullWidth
          value={currentProfile?.lastName}
          onChange={(e) =>
            setCurrentProfile({ ...currentProfile, lastName: e.target.value })
          }
        />
        <TextField
          margin="dense"
          id="email"
          label="Email"
          type="email"
          fullWidth
          value={currentProfile?.email}
          onChange={(e) =>
            setCurrentProfile({ ...currentProfile, email: e.target.value })
          }
        />
        <TextField
          margin="dense"
          id="phone"
          label="Phone"
          type="string"
          fullWidth
          value={currentProfile?.phone}
          onChange={(e) =>
            setCurrentProfile({ ...currentProfile, phone: e.target.value })
          }
        />
        <TextField
          margin="dense"
          id="photo"
          label="Photo"
          placeholder="Enter photo url"
          type="url"
          fullWidth
          value={currentProfile?.photo}
          onChange={(e) =>
            setCurrentProfile({ ...currentProfile, photo: e.target.value })
          }
        />
        <TextField
          margin="dense"
          id="age"
          label="Age"
          type="number"
          fullWidth
          value={currentProfile?.age}
          InputProps={{ inputProps: { min: 0, max: 100 } }}
          onChange={(e) =>
            setCurrentProfile({
              ...currentProfile,
              age: parseInt(e.target.value),
            })
          }
        />
        <TextField
          margin="dense"
          id="address"
          label="Address"
          type="text"
          multiline={true}
          fullWidth
          value={currentProfile?.address}
          onChange={(e) =>
            setCurrentProfile({
              ...currentProfile,
              address: e.target.value,
            })
          }
        />
        <Autocomplete
          multiple
          id="interests"
          options={InterestOptions}
          filterSelectedOptions
          value={currentProfile?.interests}
          onChange={(e, newValue) => {
            console.log(newValue);
            setCurrentProfile({
              ...currentProfile,
              interests: newValue,
            });
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              margin="dense"
              label="Interests"
              placeholder="Select Interests"
            />
          )}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button
          disabled={
            !currentProfile?.firstName ||
            !currentProfile.lastName ||
            !currentProfile.email ||
            !currentProfile.phone ||
            !currentProfile.photo
          }
          onClick={() => {
            onSubmit({
              ...currentProfile,
              _id: currentProfile?._id || uuidv4(),
            } as Profile);
            onClose();
          }}
          color="primary"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

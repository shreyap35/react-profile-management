import { Box, Button, Chip, Grid, IconButton, TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import profiles from "../assets/profiles.json";
import { RiAddLine, RiDeleteBin2Line, RiEdit2Line } from "react-icons/ri";
import { AddOrEditProfile } from "./AddOrEditProfile";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const OldProfileTable: React.FC = () => {
  const [users, setUsers] = useState(profiles);
  return (
    <TableContainer component={Paper} className="pl-4 pt-20">
      <Table
        sx={{ minWidth: 700 }}
        aria-label="customized table"
        title="Manage sUser Profile"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>User Id</StyledTableCell>
            <StyledTableCell align="left">First Name</StyledTableCell>
            <StyledTableCell align="left">Last Name</StyledTableCell>
            <StyledTableCell align="left">Address</StyledTableCell>
            <StyledTableCell align="left">Location</StyledTableCell>
            <StyledTableCell align="left">Interests</StyledTableCell>
            <StyledTableCell align="left">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <StyledTableRow key={user._id}>
              <StyledTableCell component="th" scope="row">
                {user._id}
              </StyledTableCell>
              <StyledTableCell align="left">{user.firstName}</StyledTableCell>
              <StyledTableCell align="left">{user.lastName}</StyledTableCell>
              <StyledTableCell align="left">{user.address}</StyledTableCell>
              <StyledTableCell align="left">
                {user.location.join(", ")}
              </StyledTableCell>
              <StyledTableCell align="left">
                <Box className="flex gap-2">
                  {user.interests.map((interest) => (
                    <Chip label={interest} />
                  ))}
                </Box>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Button onClick={() => console.log("sfsf")}>Edit</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export const ProfileTable: React.FC = () => {
  const [userProfiles, setUserProfiles] = useState<Profile[]>(profiles);
  const [currentProfile, setCurrentProfile] = useState<Profile>();
  const [openModal, setOpenModal] = useState(false);
  const [filter, setFilter] = useState("");

  const handleDelete = (id: string) => {
    setUserProfiles(userProfiles.filter((profile) => profile._id !== id));
  };

  const filteredProfiles = userProfiles.filter((profile) => {
    return (
      profile.firstName.toLowerCase().includes(filter.toLowerCase()) ||
      profile.lastName.toLowerCase().includes(filter.toLowerCase()) ||
      profile.email.toLowerCase().includes(filter.toLowerCase()) ||
      profile.phone.includes(filter) ||
      profile.address?.toLowerCase().includes(filter.toLowerCase()) ||
      profile.interests?.join(",").toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <>
      <Box sx={{ width: "100%" }} className="pl-4 pt-20">
        <Paper sx={{ width: "100%", mb: 2, p: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                label="Search profiles"
                fullWidth
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6} sx={{ textAlign: "right" }}>
              <Button
                variant="contained"
                startIcon={<RiAddLine />}
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                Add
              </Button>
            </Grid>
          </Grid>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Interests</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredProfiles.map((profile) => (
                  <TableRow key={profile._id}>
                    <TableCell>{profile.firstName}</TableCell>
                    <TableCell>{profile.lastName}</TableCell>
                    <TableCell>{profile.email}</TableCell>
                    <TableCell>{profile.phone}</TableCell>
                    <TableCell>{profile.address}</TableCell>
                    <TableCell>
                      <Box className="flex gap-2">
                        {profile.interests?.map((interest) => (
                          <Chip label={interest} />
                        ))}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() => {
                          setCurrentProfile(profile);
                          setOpenModal(true);
                        }}
                      >
                        <RiEdit2Line />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(profile._id)}>
                        <RiDeleteBin2Line />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
      {openModal && (
        <AddOrEditProfile
          data={currentProfile}
          onSubmit={(profile: Profile) => {
            setUserProfiles((prev) => [profile, ...prev]);
          }}
          onClose={() => {
            setCurrentProfile(undefined);
            setOpenModal(false);
          }}
        />
      )}
    </>
  );
};

import { Avatar, Box, Divider, Grid, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import profiles from "../assets/profiles.json";

export const Profile: React.FC = () => {
  const { _id = "" } = useParams();

  const profile = profiles.find((profile) => profile._id === _id);
  return (
    <Box className="pt-20">
      {!profile ? (
        <h1>No profile found</h1>
      ) : (
        <Box className="flex items-center justify-center py-4 px-6">
          <Avatar
            className="mx-auto "
            alt={`${profile.firstName} ${profile.lastName}`}
            src={profile.photo}
            sx={{ width: 200, height: 200 }}
          />
          <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
            <Paper
              sx={{ maxWidth: 936, margin: "auto", overflow: "hidden", p: 2 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h6" component="h2">
                    Profile Information
                  </Typography>
                  <Divider sx={{ my: 1 }} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" gutterBottom component="div">
                    Full Name
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {[profile.firstName, profile.lastName].join(" ")}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" gutterBottom component="div">
                    Email
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {profile.email}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" gutterBottom component="div">
                    Address
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {profile.address}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" gutterBottom component="div">
                    Phone Number
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {profile.phone}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle2" gutterBottom component="div">
                    Age
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {profile.age}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" gutterBottom component="div">
                    Interests
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {profile.interests.join(", ")}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Box>
      )}
    </Box>
  );
};

// import React from 'react';
// import { Grid, Paper, Typography, Box, Divider } from '@mui/material';

// function ProfileDisplay({ profile }) {
//     return (
//         <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
//             <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden', p: 2 }}>
//                 <Grid container spacing={2}>
//                     <Grid item xs={12}>
//                         <Typography variant="h6" component="h2">
//                             Profile Information
//                         </Typography>
//                         <Divider sx={{ my: 1 }} />
//                     </Grid>
//                     <Grid item xs={12} md={6}>
//                         <Typography variant="subtitle1" gutterBottom component="div">
//                             Full Name
//                         </Typography>
//                         <Typography variant="body1" gutterBottom>
//                             {profile.fullName}
//                         </Typography>
//                     </Grid>
//                     <Grid item xs={12} md={6}>
//                         <Typography variant="subtitle1" gutterBottom component="div">
//                             Email
//                         </Typography>
//                         <Typography variant="body1" gutterBottom>
//                             {profile.email}
//                         </Typography>
//                     </Grid>
//                     <Grid item xs={12} md={6}>
//                         <Typography variant="subtitle1" gutterBottom component="div">
//                             Address
//                         </Typography>
//                         <Typography variant="body1" gutterBottom>
//                             {profile.address}
//                         </Typography>
//                     </Grid>
//                     <Grid item xs={12} md={6}>
//                         <Typography variant="subtitle1" gutterBottom component="div">
//                             Phone Number
//                         </Typography>
//                         <Typography variant="body1" gutterBottom>
//                             {profile.phone}
//                         </Typography>
//                     </Grid>
//                 </Grid>
//             </Paper>
//         </Box>
//     );
// }

// export default ProfileDisplay;

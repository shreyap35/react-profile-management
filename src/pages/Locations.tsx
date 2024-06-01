import { Avatar, Box, Paper, Typography } from "@mui/material";
import "leaflet/dist/leaflet.css";
import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useLocation } from "react-router-dom";
import profiles from "../assets/profiles.json";

export const Locations: React.FC = () => {
  const { state } = useLocation();

  return (
    <Box className="flex w-full h-full bg-red pt-20">
      <MapContainer
        center={state?.center || [51.505, -0.09]}
        zoom={5}
        style={{ height: "600px", width: "100%" }}
      >
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {profiles.map((profile, index) => (
          <Marker key={`profile-${index}`} position={profile.location as any}>
            <Popup closeButton={false}>
              <ProfilePopup {...profile} />
            </Popup>
          </Marker>
        ))}
        <ZoomUserLocation position={state?.center} />
      </MapContainer>
    </Box>
  );
};

const ProfilePopup: React.FC<Profile> = ({
  firstName,
  lastName,
  photo,
  address,
  interests,
}) => {
  return (
    <Paper
      elevation={3}
      sx={{ p: 2, display: "flex", alignItems: "center", gap: 2 }}
    >
      <Avatar
        alt={`${firstName} ${lastName}`}
        src={photo}
        sx={{ width: 84, height: 84 }}
      />
      <Box>
        <Typography variant="h6" component="div">
          {firstName} {lastName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Interests: {interests.join(", ")}
        </Typography>
      </Box>
    </Paper>
  );
};

const ZoomUserLocation: React.FC<{ position?: [number, number] }> = ({
  position,
}) => {
  const map = useMap();

  useEffect(() => {
    if (map && position) {
      map.flyTo(position, 12, {
        animate: true,
        duration: 3,
      });
    }
  }, [map, position]);

  return null;
};

import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { RiHeart3Line, RiMapPin2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import profiles from "../assets/profiles.json";

export const Profiles: React.FC = () => {
  return (
    <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 m-20">
      {profiles.map((profile) => (
        <ProfileCard key={`profile-${profile._id}`} {...profile} />
      ))}
    </Box>
  );
};

const ProfileCard: React.FC<Profile> = ({
  _id,
  firstName,
  lastName,
  address,
  interests,
  photo,
  location,
}) => {
  const navigate = useNavigate();
  return (
    <Card className="max-w-sm rounded overflow-hidden shadow-lg">
      <CardMedia
        className="cursor-pointer"
        onClick={() => navigate(`/profile/${_id}`)}
        component="img"
        height="180"
        image={photo}
        alt={firstName + " " + lastName}
        sx={{
          transition: "transform 0.5s ease",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      />
      <CardContent>
        <Box className="flex flex-col gap-2">
          <Typography gutterBottom variant="h5" component="div">
            {firstName} {lastName}
          </Typography>
          <Box
            className="flex item-center justify-start gap-4 text-[14px] cursor-pointer"
            onClick={() =>
              navigate("/locations", {
                state: { center: location, profileId: _id },
              })
            }
          >
            <RiMapPin2Line className="text-[16px]" />
            <Typography variant="body2" color="text.secondary">
              {address}
            </Typography>
          </Box>
          <Box className="flex item-center justify-start gap-4 text-[14px]">
            <RiHeart3Line className="text-[16px]" />
            <Typography variant="body2" color="text.secondary">
              {interests?.join(", ")}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

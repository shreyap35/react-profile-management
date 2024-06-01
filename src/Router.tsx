import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Locations, Profile, ProfileTable, Profiles } from "./pages";

export const Router: React.FC = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ProfileTable />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/profile/:_id" element={<Profile />} />
          <Route path="/locations" element={<Locations />} />
        </Route>
      </Routes>
    </>
  );
};

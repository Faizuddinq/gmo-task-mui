import Table from "../components/Table";
// import Departments from "../components/Departments";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DepartmentList from "../components/DepartmentList";

const Home = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <Table />
      <Box sx={{ height: 250 }} />      
      {/* <Departments /> */}
      <DepartmentList/>
      <Button
        sx={{ m: 5, padding: 2, borderRadius: 2, background:"#508D4E", "&:hover":{background: "#1A5319"} }}
        variant="contained"
        onClick={logoutHandler}
      >
        Logout
      </Button>
    </>
  );
};

export default Home;

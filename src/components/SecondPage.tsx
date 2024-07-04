
import { Box } from "@mui/material";
import { Divider } from "@mui/material";
import DepartmentList from "./DepartmentList";
import Table from "./Table";

const SecondPage = () => {
  return (
    <>
      <Table />
      <Box sx={{ height: 200 }} />
      <Divider />
      <Box sx={{ height: 100 }} />
      <DepartmentList />
    </>
  );
};

export default SecondPage;

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import TableData from "../types/TableData";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";

const cols: GridColDef[] = [
  { field: "id",
    headerName: "ID",
    width: 90 },
  {
    field: "title",
    headerName: "Title",
    width: 400,
    editable: true,
  },
  {
    field: "userId",
    headerName: "User ID",
    width: 150,
    editable: true,
  },
  {
    field: "body",
    headerName: "Body",
    width: 400,
    editable: true,
  },
];

const url = "https://jsonplaceholder.typicode.com/posts";

export default function Table() {
  const [rows, setRows] = useState<TableData[] | []>([]);

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      const newData = json.map((item: TableData) => {
        let data: TableData = {
          id: item.id,
          userId: item.userId,
          title: item.title,
          body: item.body,
        };
        return data;
      });
  
      setRows((prev) => [...prev, ...newData]);
    } catch (e) {
      console.log(e);
    }
  };
  

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        height: 500,
        width: "100%",
        mt: 12,
        background: "#91DDCF",
        borderRadius: 10,
      }}
    >
      <Typography variant="h3" color="#343a40" sx={{ padding: 2 }}>
        User Table
      </Typography>
      <DataGrid
        sx={{ padding: 2, background: "#91DDCF", }}
        rows={rows}
        columns={cols}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 6,
            },
          },
        }}
        pageSizeOptions={[6]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}

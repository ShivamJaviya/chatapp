import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Paper, Typography, Container } from "@mui/material";
import { Black } from "../../Constants/Color";

const Table = ({ rows, columns, heading, rowHeight = 75 }) => {
  return (
    <Container
      sx={{
        height: "100vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: "1rem 4rem",
          borderRadius: "1rem",
          margin: "auto",
          width: "100%",
          overflow: "hidden",
          height: "100%",
          boxShadow: "none",
        }}
      >
        <Typography
          textAlign={"center"}
          variant="h4"
          sx={{
            margin: "2rem",
            textTransform: "uppercase",
          }}
        >
          {heading}
        </Typography>
        <DataGrid
          rows={rows}
          columns={columns}
          rowHeight={rowHeight}
          style={{
            height: "80%",
            fontSize: "1rem",
          }}
          sx={{
            border: "none",
            ".table-header": {
              bgcolor: Black,
              color: "white",
            },
          }}
          slots={{ toolbar: GridToolbar }}
        />
      </Paper>
    </Container>
  );
};

export default Table;

import { Box, Grid } from "@mui/material";
import React from "react";
import ToggleTable from "./BasicTables/ToggleTable";
import DataTable from "./BasicTables/DataTable";

const InsightsTable = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={5} padding={3}  >
        <Grid item lg={6} xs={12} sx={{ display: 'flex', justifyContent:'center' }}>
          <DataTable />
        </Grid>
        <Grid item lg={6} xs={12} sx={{ display: 'flex', justifyContent:'center' }}>
          <ToggleTable />
        </Grid>
      </Grid>
    </Box>
  );
};

export default InsightsTable;

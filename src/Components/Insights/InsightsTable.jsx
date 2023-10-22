import { Box, Grid } from "@mui/material";
import React from "react";
import BasicTable from "./BasicTables/BasicTable";

const InsightsTable = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={5} padding={3}  >
        <Grid item lg={6} xs={12} sx={{ display: 'flex', justifyContent:'center' }}>
          <BasicTable dataTable={true} />
        </Grid>
        <Grid item lg={6} xs={12} sx={{ display: 'flex', justifyContent:'center' }}>
          <BasicTable />
        </Grid>
      </Grid>
    </Box>
  );
};

export default InsightsTable;

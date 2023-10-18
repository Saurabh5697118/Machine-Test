import { useState } from "react";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const createData = (a, b, c, d, e, f) => ({
  campaigns: a,
  clicks: b,
  cost: c,
  conversions: d,
  revenue: e,
  id: f,
});

const data = [
  createData("Cosmetics", 712, 4272, 24, 4650, 1),
  createData("Serums", 3961, 27331, 37, 45643, 2),
  createData("Facewash", 9462, 76831, 24, 6544, 3),
  createData("shampoos", 439, 2151, 67, 4455, 4),
  createData("Conditioners", 1680, 3864, 49, 175245, 5),
  createData("Facewash 2", 4978, 29370, 189, 623106, 6),
  createData("Total", 26510, 143819, 498, 1573563, 7),
];

const columns = [
  { id: "campaigns", label: "Campaigns" },
  { id: "clicks", label: "Clicks" },
  { id: "cost", label: "Cost" },
  { id: "conversions", label: "Conversions" },
  { id: "revenue", label: "Revenue" },
];

export default function DataTable() {
  const [orderBy, setOrderBy] = useState("campaigns");
  const [order, setOrder] = useState("desc");

  const handleSortRequest = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedData = data.sort((a, b) => {
    if (order === "asc") {
      return a[orderBy] < b[orderBy] ? -1 : 1;
    } else {
      return b[orderBy] < a[orderBy] ? -1 : 1;
    }
  });

  return (
    <>
      <TableContainer
        sx={{ maxWidth: { xs: 700, lg: "100%" } }}
        component={Paper}
      >
        <Table size={"medium"}>
          <TableHead>
            <TableRow height={63}>
              <TableCell
                sx={{
                  fontFamily: "Montserrat-Medium",
                  lineHeight: 0.5,
                }}
              >
                <Typography fontFamily={"Montserrat-Bold"}>
                  Ad Insights
                </Typography>
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>

              <TableCell align="right">
                <IconButton sx={{ opacity: 0.3, p: "0 8px" }}>
                  <HelpOutlineIcon />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  sx={{
                    fontFamily: "Montserrat-Medium",
                    lineHeight: 0.5,
                    paddingRight: 0,
                  }}
                  align={column.id === "campaigns" ? "left" : "right"}
                >
                  {column.label}
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : "asc"}
                    onClick={() => handleSortRequest(column.id)}
                  ></TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.map((row) => (
              <TableRow key={row.id}>
                {columns.map((column) => (
                  <TableCell
                    align={column.id === "campaigns" ? "left" : "right"}
                    key={column.id}
                    sx={{
                      fontFamily: "Montserrat-Light",
                      lineHeight: 0.5,
                      paddingRight: 3,
                    }}
                  >
                    {column.id === 'cost' || column.id === 'revenue' ? `USD ${row[column.id]}` : row[column.id]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

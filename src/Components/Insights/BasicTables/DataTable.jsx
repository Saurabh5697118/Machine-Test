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

let totalSumRow = {
  campaigns: "Total",
  clicks: 0,
  cost: 0,
  conversions: 0,
  revenue: 0,
};

const createData = (
  campaignName,
  clicksNumber,
  costNumber,
  conversionNumber,
  revenueAmt,
  userId
) => {
  totalSumRow.clicks += clicksNumber;
  totalSumRow.cost += costNumber;
  totalSumRow.conversions += conversionNumber;
  totalSumRow.revenue += revenueAmt;
  return {
    campaigns: campaignName,
    clicks: clicksNumber,
    cost: `USD ${costNumber}`,
    conversions: conversionNumber,
    revenue: `USD ${revenueAmt}`,
    id: userId,
  };
};

const data = [
  createData("Cosmetics", 712, 4272, 24, 4650, 1),
  createData("Serums", 3961, 27331, 37, 45643, 2),
  createData("Facewash", 9462, 76831, 24, 6544, 3),
  createData("shampoos", 439, 2151, 67, 4455, 4),
  createData("Conditioners", 1680, 3864, 49, 175245, 5),
  createData("Facewash 2", 4978, 29370, 189, 623106, 6),
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
        <Table size={"medium"} sx={{ minWidth: "max-content" }}>
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
                    {row[column.id]}
                  </TableCell>
                ))}
              </TableRow>
            ))}

            <TableRow sx={{ backgroundColor: "#f2f2f2" }}>
              <TableCell
                align={"left"}
                sx={{
                  fontFamily: "Montserrat-Light",
                  lineHeight: 0.5,
                  paddingRight: 3,
                }}
              >
                {totalSumRow.campaigns}
              </TableCell>
              <TableCell
                align={"right"}
                sx={{
                  fontFamily: "Montserrat-Light",
                  lineHeight: 0.5,
                  paddingRight: 3,
                }}
              >
                {totalSumRow.clicks}
              </TableCell>
              <TableCell
                align={"right"}
                sx={{
                  fontFamily: "Montserrat-Light",
                  lineHeight: 0.5,
                  paddingRight: 3,
                }}
              >
                {`USD ${totalSumRow.cost}`}
              </TableCell>
              <TableCell
                align={"right"}
                sx={{
                  fontFamily: "Montserrat-Light",
                  lineHeight: 0.5,
                  paddingRight: 3,
                }}
              >
                {totalSumRow.conversions}
              </TableCell>
              <TableCell
                align={"right"}
                sx={{
                  fontFamily: "Montserrat-Light",
                  lineHeight: 0.5,
                  paddingRight: 3,
                }}
              >
                {`USD ${totalSumRow.revenue}`}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

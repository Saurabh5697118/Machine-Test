import {
  IconButton,
  MenuItem,
  Paper,
  Select,
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
import donut from "../../../assets/Images/donutIcon.png";
import table from "../../../assets/Images/tableImageBlack.png";
import { PieChart } from "@mui/x-charts";
import "./basicTable.css";
import { useState } from "react";

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
    cost: costNumber,
    conversions: conversionNumber,
    revenue: revenueAmt,
    id: userId,
  };
};

const data1 = [
  createData("Male", 348, 12528, 42, 62118, 1),
  createData("Female", 692, 24912, 35, 5175, 2),
  createData("Unknown", 105, 3943, 3, 4489, 3),
];
const data2 = [
  createData("Male", 3481, 1258, 142, 618, 1),
  createData("Female", 1692, 4912, 315, 515, 2),
  createData("Unknown", 1105, 393, 311, 489, 3),
];

const columns = [
  { id: "campaigns", label: "Campaigns" },
  { id: "clicks", label: "Clicks" },
  { id: "cost", label: "Cost" },
  { id: "conversions", label: "Conversions" },
  { id: "revenue", label: "Revenue" },
];

export default function ToggleTable() {
  const [showTable, setShowTable] = useState(false);
  const [orderBy, setOrderBy] = useState("campaigns");
  const [order, setOrder] = useState("desc");
  const [ changeTable, setChangeTable ] = useState(data1)

  const handleSortRequest = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedData = changeTable.sort((a, b) => {
    if (order === "asc") {
      return a[orderBy] < b[orderBy] ? -1 : 1;
    } else {
      return b[orderBy] < a[orderBy] ? -1 : 1;
    }
  });

  const data = changeTable.map((d) => ({
    value: d.clicks,
    label: d.campaigns,
    color: "#" + Math.floor(Math.random() * 16712215).toString(16),
  }));

  const size = {
    width: 500,
    height: 300,
  };
  return (
    <>
      <TableContainer
        sx={{ maxWidth: { xs: 700, lg: "100%" }, position: "relative" }}
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
                <Select
                  value={changeTable}
                  size="small"
                  sx={{
                    width: 110,
                    height: 30,
                    fontSize: 13,
                    textAlign: "left",
                  }}
                  onChange={(e) => setChangeTable(e.target.value)}
                >
                  <MenuItem value={data1}>Clicks</MenuItem>
                  <MenuItem value={data2}>Clicks1</MenuItem>
                </Select>
                <IconButton sx={{ opacity: 0.3, p: "0 8px" }}>
                  <HelpOutlineIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
        {showTable ? (
          <Table size={"medium"}>
            <TableHead>
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
                      {column.id === "cost" || column.id === "revenue"
                        ? `USD ${row[column.id]}`
                        : row[column.id]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
              <TableRow sx={{ backgroundColor: '#f2f2f2' }}>
                  <TableCell
                    align={"left"}
                    sx={{
                      fontFamily: "Montserrat-Light",
                      lineHeight: 0.5,
                      paddingRight: 3,
                    }}
                  >{totalSumRow.campaigns}
                  </TableCell>
                  <TableCell
                    align={"right"}
                    sx={{
                      fontFamily: "Montserrat-Light",
                      lineHeight: 0.5,
                      paddingRight: 3,
                    }}
                  >{totalSumRow.clicks}
                  </TableCell>
                  <TableCell
                    align={"right"}
                    sx={{
                      fontFamily: "Montserrat-Light",
                      lineHeight: 0.5,
                      paddingRight: 3,
                    }}
                  >{`USD ${totalSumRow.cost}`}
                  </TableCell>
                  <TableCell
                    align={"right"}
                    sx={{
                      fontFamily: "Montserrat-Light",
                      lineHeight: 0.5,
                      paddingRight: 3,
                    }}
                  >{totalSumRow.conversions}
                  </TableCell>
                  <TableCell
                    align={"right"}
                    sx={{
                      fontFamily: "Montserrat-Light",
                      lineHeight: 0.5,
                      paddingRight: 3,
                    }}
                  >{`USD ${totalSumRow.revenue}`}
                  </TableCell>
              </TableRow>

          
            </TableBody>
          </Table>
        ) : (
          " "
        )}
        {!showTable ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              padding: "15px 20px",
            }}
          >
            <PieChart
              series={[
                {
                  data,
                  innerRadius: 70,
                  outerRadius: 120,
                  paddingAngle: 2,
                },
              ]}
              slotProps={{
                legend: { itemMarkWidth: 40 },
              }}
              {...size}
            />
          </div>
        ) : (
          " "
        )}
        <label className="switch">
          <input type="checkbox" onClick={() => setShowTable(!showTable)} />
          <span className="slider round">
            <img
              alt="donutImg"
              src={donut}
              style={{ width: "30px", padding: "5px" }}
            />
            <img
              alt="tableImg"
              src={table}
              style={{ width: "30px", padding: "5px" }}
            />
          </span>
        </label>
      </TableContainer>
    </>
  );
}

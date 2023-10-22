import {
  IconButton,
  MenuItem,
  Select,
  TableCell,
  TableRow,
  TableSortLabel,
  Typography,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import donut from "../../../assets/Images/donutIcon.png";
import table from "../../../assets/Images/tableImageBlack.png";
import { PieChart } from "@mui/x-charts";
import "./basicTable.css";
import { fontFamilies } from "../../../Constants/FontConstants";
import { TableColumns, TableData1, TableData2 } from "./BasicTableData";

const size = {
  width: 500,
  height: 300,
};

export const TableSecondHeader = ({ orderBy, setOrderBy, order, setOrder }) => {
  const handleSortRequest = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <TableRow>
      {TableColumns.map((column) => (
        <TableCell
          key={column.id}
          sx={{
            fontFamily: fontFamilies.medium,
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
  );
};

export const FirstHeader = ({ dataTable, setChangeTable, changeTable }) => {
  return (
    <TableRow height={63}>
      <TableCell
        sx={{
          fontFamily: fontFamilies.medium,
          lineHeight: 0.5,
        }}
      >
        <Typography fontFamily={fontFamilies.bold}>Ad Insights</Typography>
      </TableCell>

      <TableCell align="right">
        {!dataTable && (
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
            <MenuItem value={TableData1}>Clicks</MenuItem>
            <MenuItem value={TableData2}>Clicks1</MenuItem>
          </Select>
        )}
        <IconButton sx={{ opacity: 0.3, p: "0 8px" }}>
          <HelpOutlineIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export const TableRowData = ({ row, showSum = false }) => {
  return (
    <TableRow sx={{ backgroundColor: showSum ? "#f2f2f2" : "" }}>
      {TableColumns.map((column) => (
        <TableCell
          align={column.id === "campaigns" ? "left" : "right"}
          key={column.id}
          sx={{
            fontFamily: fontFamilies.light,
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
  );
};

export const DonutChart = ({ data }) => {
  return (
    <div
      className="pieChart"
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
  );
};

export const DonutChartToggle = ({ setShowTable, showTable }) => {
  return (
    <div
      style={{
        height: showTable ? 65 : 0,
        paddingTop: showTable ? 15 : 0,
      }}
    >
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
    </div>
  );
};

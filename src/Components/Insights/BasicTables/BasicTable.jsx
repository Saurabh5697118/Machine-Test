import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
} from "@mui/material";
import "./basicTable.css";
import { useState } from "react";
import {
  TableData1,
  TableData3,
  tableSum1,
  tableSum2,
  tableSum3,
  totalSumRow,
} from "./BasicTableData";
import {
  DonutChart,
  DonutChartToggle,
  FirstHeader,
  TableRowData,
  TableSecondHeader,
} from "./BasicTableFunctions";

export default function BasicTable({ dataTable = false }) {
  const [showTable, setShowTable] = useState(false);
  const [orderBy, setOrderBy] = useState("campaigns");
  const [order, setOrder] = useState("desc");
  const [changeTable, setChangeTable] = useState(
    dataTable ? TableData3 : TableData1
  );

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

  return (
    <>
      <TableContainer
        sx={{
          maxWidth: { xs: 700, lg: "100%" },
          position: dataTable ? "" : "relative",
        }}
        component={Paper}
      >
        <Table size={"medium"} sx={{ minWidth: "max-content" }}>
          <TableHead>
            <FirstHeader
              dataTable={dataTable}
              setChangeTable={setChangeTable}
              changeTable={changeTable}
            />
          </TableHead>
        </Table>

        {(showTable || dataTable) && (
          <Table size={"medium"} sx={{ minWidth: "max-content" }}>
            <TableHead>
              <TableSecondHeader
                orderBy={orderBy}
                setOrderBy={setOrderBy}
                order={order}
                setOrder={setOrder}
              />
            </TableHead>

            <TableBody>
              {sortedData.map((row) => (
                <TableRowData key={row.id} row={row} />
              ))}

              <TableRowData
                row={
                  dataTable
                    ? tableSum3
                    : changeTable === TableData1
                    ? tableSum1
                    : tableSum2
                }
                showSumBg={true}
              />
            </TableBody>
          </Table>
        )}

        {!dataTable && !showTable && <DonutChart data={data} />}
        {!dataTable && (
          <DonutChartToggle setShowTable={setShowTable} showTable={showTable} />
        )}
      </TableContainer>
    </>
  );
}

let totalSumRow = {
  campaigns: "Total",
  clicks: 0,
  cost: 0,
  conversions: 0,
  revenue: 0,
};

export const tableSum1 = { ...totalSumRow };
export const tableSum2 = { ...totalSumRow };
export const tableSum3 = { ...totalSumRow };

const createData = (
  campaignName,
  clicksNumber,
  costNumber,
  conversionNumber,
  revenueAmt,
  userId,
  sum
) => {
  sum.clicks += clicksNumber;
  sum.cost += costNumber;
  sum.conversions += conversionNumber;
  sum.revenue += revenueAmt;
  return {
    campaigns: campaignName,
    clicks: clicksNumber,
    cost: costNumber,
    conversions: conversionNumber,
    revenue: revenueAmt,
    id: userId,
  };
};

export const TableData1 = [
  createData("Male", 348, 12528, 42, 62118, 1, tableSum1),
  createData("Female", 692, 24912, 35, 5175, 2, tableSum1),
  createData("Unknown", 105, 3943, 3, 4489, 3, tableSum1),
];

export const TableData2 = [
  createData("Male", 3481, 1258, 142, 618, 1, tableSum2),
  createData("Female", 1692, 4912, 315, 515, 2, tableSum2),
  createData("Unknown", 1105, 393, 311, 489, 3, tableSum2),
];

export const TableData3 = [
  createData("Cosmetics", 712, 4272, 24, 4650, 1, tableSum3),
  createData("Serums", 3961, 27331, 37, 45643, 2, tableSum3),
  createData("Facewash", 9462, 76831, 24, 6544, 3, tableSum3),
  createData("shampoos", 439, 2151, 67, 4455, 4, tableSum3),
  createData("Conditioners", 1680, 3864, 49, 175245, 5, tableSum3),
  createData("Facewash 2", 4978, 29370, 189, 623106, 6, tableSum3),
];

export const TableColumns = [
  { id: "campaigns", label: "Campaigns" },
  { id: "clicks", label: "Clicks" },
  { id: "cost", label: "Cost" },
  { id: "conversions", label: "Conversions" },
  { id: "revenue", label: "Revenue" },
];

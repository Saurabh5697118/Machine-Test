export const totalSumRow = {
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

export const TableData1 = [
  createData("Male", 348, 12528, 42, 62118, 1),
  createData("Female", 692, 24912, 35, 5175, 2),
  createData("Unknown", 105, 3943, 3, 4489, 3),
];

export const TableData2 = [
  createData("Male", 3481, 1258, 142, 618, 1),
  createData("Female", 1692, 4912, 315, 515, 2),
  createData("Unknown", 1105, 393, 311, 489, 3),
];

export const TableData3 = [
  createData("Cosmetics", 712, 4272, 24, 4650, 1),
  createData("Serums", 3961, 27331, 37, 45643, 2),
  createData("Facewash", 9462, 76831, 24, 6544, 3),
  createData("shampoos", 439, 2151, 67, 4455, 4),
  createData("Conditioners", 1680, 3864, 49, 175245, 5),
  createData("Facewash 2", 4978, 29370, 189, 623106, 6),
];

export const TableColumns = [
  { id: "campaigns", label: "Campaigns" },
  { id: "clicks", label: "Clicks" },
  { id: "cost", label: "Cost" },
  { id: "conversions", label: "Conversions" },
  { id: "revenue", label: "Revenue" },
];

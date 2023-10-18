import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import InsightsTable from "./Components/Insights/InsightsTable";
import CreateCard from "./Components/CreateAdCards/CreateCards";
import CreateUser from "./Components/CreateUser/CreateUser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/createUser" element={<CreateUser />} />
          <Route path="/" element={<InsightsTable />} />
          <Route path="/createAds" element={<CreateCard />} />
        </Route>
        
      </Routes>
    </>
  );
}

export default App;

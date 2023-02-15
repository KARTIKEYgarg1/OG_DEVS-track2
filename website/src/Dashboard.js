import DashboardCard from "./components/DashboardCard";
import DashboardCardRight from "./components/DashboardCardRight";
import { DashboardItem } from "./components/DashboardItem";
import { useState } from "react";
import data from "./components/assets/data.json";
function Dashboard() {
  const [domain, setdomain] = useState(data);
  const handleDomainChange = (e) => {
    let x = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].part.localeCompare(e.target.value) == 0) {
        console.log(data[i]);
        x.push(data[i]);
      }
    }
    setdomain(x);
  };
  return (
    <div className="container-fluid p-3">
      <div className="row g-5">
        <div className="col-lg-6 col-md-12">
          <DashboardCard />
          <div className="container-fluid mt-5">
            <div
              className="container-fluid"
              style={{
                background: "#e3cfcf",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <select
                class="input-elevated m-4  form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
                defaultValue="Piston"
                onChange={handleDomainChange}
              >
                <option value="Piston">Piston</option>
                <option value="Stdu">Stud</option>
                <option value="AirCompressor">AirCompressor</option>
                <option value="CylinderHead">CylinderHead</option>
              </select>
            </div>
          </div>
          <DashboardItem arr={domain} />
        </div>
        <div className="col-lg-6 col-md-12">
          <DashboardCardRight />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

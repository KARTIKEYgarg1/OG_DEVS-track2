import DashboardCard from "./components/DashboardCard";
import DashboardCardRight from "./components/DashboardCardRight";
import { DashboardItem } from "./components/DashboardItem";

function Dashboard() {
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
                defaultValue={1}
                // onChange={handleDomainChange}
              >
                <option selected>Search</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <DashboardItem />
        </div>
        <div className="col-lg-6 col-md-12">
          <DashboardCardRight />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

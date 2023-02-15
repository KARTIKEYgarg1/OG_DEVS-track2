import React from "react";

const DashboardCardRight = () => {
  return (
    <div className="container-fluid">
      <div
        className="container-fluid mt-3 p-4 row rounded-3"
        style={{ background: "#7dd481" }}
      >
        <div className="col">
          <div class="ripple">
            <span>👋</span>
          </div>
          <p className="ps-4 pt-2">2</p>
          <p className="ps-2">In transit</p>
        </div>
        <div className="col">
          <div class="ripple">
            <span>👋</span>
          </div>
          <p className="ps-4 pt-2">2</p>
          <p className="ps-2">Successfull</p>
        </div>
        <div className="col">
          <div class="ripple">
            <span>👋</span>
          </div>
          <p className="ps-4 pt-2">2</p>
          <p className="ps-2">Alert</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCardRight;

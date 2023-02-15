import React from "react";

export const DashboardItem = (props) => {
  return (
    <div className="container-fluid p-3 mt-2">
      <div class="accordion accordion-flush" id="accordionFlushExample">
        {props.arr.map((item) => {
          return (
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  {item.startDate}- {item.status} - {item.endDate}---
                  {item.trackingId}
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  {item.handler}
                  {item.start}
                  {item.end}
                  {item.breakpoint.length !== 0 ? (
                    <code>{item.breakpoint}</code>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "../TestCasesTable.css"; // Add styles here

const testData = [
  { id: "TC-11", title: "Verify that users cannot set we...", priority: "Medium", result: "Not Executed", status: "Ready", owner: "Kavya", automation: "Not Yet Automated", tags: ["Design", "Product", "Marketing"] },
  { id: "TC-12", title: "Verify login functionality", priority: "High", result: "Not Executed", status: "Ready", owner: "Ravi", automation: "Automated", tags: ["Security", "Authentication"] },
  { id: "TC-13", title: "Verify password reset", priority: "Low", result: "Executed", status: "Completed", owner: "Kavya", automation: "Automated", tags: ["UX", "Product"] },
  { id: "TC-14", title: "Check payment processing", priority: "Medium", result: "Not Executed", status: "Pending", owner: "Amit", automation: "Not Yet Automated", tags: ["Payments", "Finance"] },
  { id: "TC-15", title: "Validate form inputs", priority: "High", result: "Executed", status: "Completed", owner: "John", automation: "Automated", tags: ["Forms", "Validation"] },
  { id: "TC-16", title: "Test mobile responsiveness", priority: "Medium", result: "Executed", status: "Ready", owner: "Nina", automation: "Not Yet Automated", tags: ["Design", "Mobile"] }
];

const TestCasesTable = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4; // Entries per page

  const pageCount = Math.ceil(testData.length / itemsPerPage);
  const displayedItems = testData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="table-container">
      <table className="test-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Priority</th>
            <th>Result</th>
            <th>Status</th>
            <th>Owner</th>
            <th>Automation Status</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          {displayedItems.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td><span className="priority">{item.priority}</span></td>
              <td>{item.result}</td>
              <td><span className="status">{item.status}</span></td>
              <td>{item.owner}</td>
              <td><span className="automation">{item.automation}</span></td>
              <td>
                {item.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"prevBtn"}
        nextLinkClassName={"nextBtn"}
        activeClassName={"activePage"}
      />
    </div>
  );
};

export default TestCasesTable;

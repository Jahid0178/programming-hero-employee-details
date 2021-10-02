import React from "react";
import "./Employees.css";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch("/employeeData.json")
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);
  return (
    <div>
      <Container>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr>
                <td>{employee?.id}</td>
                <td>
                  <img
                    className="img-fluid employee-img"
                    src={employee?.image}
                    alt=""
                  />
                </td>
                <td>{employee?.name}</td>
                <td>{employee?.designation}</td>
                <td>
                  <NavLink
                    className="details-btn"
                    to={`/employees/${employee.id}`}
                  >
                    See Details
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Employees;

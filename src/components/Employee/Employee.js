import React from "react";
import "./Employee.css";
import { useEffect } from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const Employee = () => {
  const [employeeDetail, setEmployeeDetail] = useState([]);
  const [singleEmployee, setSingleEmployee] = useState({});
  let { id } = useParams();

  useEffect(() => {
    fetch("/employeeDetails.json")
      .then((response) => response.json())
      .then((data) => setEmployeeDetail(data.employee));
  }, []);

  useEffect(() => {
    const foundEmployee = employeeDetail.find(
      (employee) => employee.login.id === id
    );
    setSingleEmployee(foundEmployee);
  }, [employeeDetail]);

  return (
    <div className="employee-container">
      <Card style={{ width: "18rem" }} className="mx-auto mt-4 card-container">
        <Card.Img variant="top" src={singleEmployee?.picture?.thumbnail} />
        <Card.Body>
          <Card.Title>Name: {singleEmployee?.name}</Card.Title>
          <Card.Text>Gender: {singleEmployee?.gender}</Card.Text>
          <Card.Text>
            Location: {singleEmployee?.location?.street}
            {" , "}
            {singleEmployee?.location?.city}
          </Card.Text>
          <Card.Text>Email: {singleEmployee?.email}</Card.Text>
          <Card.Text>Phone: {singleEmployee?.phone}</Card.Text>
          <Link to="/employees" className="details-btn">
            Back To Page
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Employee;

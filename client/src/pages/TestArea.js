import React, { useState, useRef } from "react";
import { Container } from "../components/Grid";
import API from "../utils/API"
import "./TestArea.css";
import * as ReactBootstrap from "react-bootstrap";
import TestTable from "../components/TestTable";
// const express = require("express");
// const app = express();

const TestArea = () => {

  const [shapeType, setShapeType] = useState("");
  const [userId, setUserId] = useState("");
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [depth, setDepth] = useState(0);
  const [radius, setRadius] = useState(0);
  const [area, setArea] = useState(0);
  const [parameter, setParameter] = useState(0);
  const [qryAllRecords, setQryAllRecords] = useState([]);

  const calculateSurfaceArea = () => {

  }

  const handleFormSubmit = event => {
    event.preventDefault();

    const newPost = {
      shape: shapeType,
      width: width,
      height: height,
      depth: depth,
      radius: radius,
      area: area,
      parameter: parameter
      // id: userId
    }

    // console.log(newPost);

    // createPost(newPost);

    // API.createPost(newPost).then(function(res){
    //   console.log(res);

    // })

    // console.log(newPost);


    API.testQryAll()
      .then(function(res) {
        setQryAllRecords(res.data);
      });

  }
  console.log(qryAllRecords);
  // function createPost(data) {
  //   app.post("/api/projects", data, function () {

  //   })
  // }

const addNewRecord = event => {
  API.testAddRecord({
    shape: shapeType,
    width: width,
    height: height,
    depth: depth,
    radius: radius,
    area: area,
    parameter: parameter
  })
}

const viewRecordsByType = event => {
  console.log(shapeType, event);
  API.testViewRecordsByType({
    shape: shapeType
  }).then(function(res){
    setQryAllRecords(res.data);
  })
}


  return (
    <Container fluid>
      <div className="row">
        <div className="col-md-12">
          <form className="form d-flex flex-nowrap">
            <div className="form-group">
              <label for="chooseYourShape">Choose your shape</label>
              <select multiple className="form-control" id="chooseYourShape"
                onChange={e => setShapeType(e.target.value)}
              >
                <option value="square">Square</option>
                <option value="circle">Circle</option>
              </select>
            </div>
            <div className="form-group">
              <label for="width">width</label>
              <input type="number" className="form-control" id="width"
                onChange={e => setWidth(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="height">height</label>
              <input type="number" className="form-control" id="height"
                onChange={e => setHeight(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="depth">depth</label>
              <input type="number" className="form-control" id="depth"
                onChange={e => setDepth(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="radius">radius</label>
              <input type="number" className="form-control" id="radius"
                onChange={e => setRadius(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="area">area</label>
              <input type="number" className="form-control" id="area"
                onChange={e => setArea(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="parameter">parameter</label>
              <input type="number" className="form-control" id="parameter"
                onChange={e => setParameter(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="userId">User Id</label>
              <input type="text" className="form-control" id="userId"
                onChange={e => setUserId(e.target.value)}
              />
            </div>


            <button className="btn"
              onClick={handleFormSubmit}></button>

            {/* <div className="form-group">
              <label for="output">results
            </label>
              <textarea className="form-control" id="output" rows="3"
              ></textarea>
            </div> */}
          </form>
        </div>
      </div>
      <div className="row">
        <button className="mr-3 btn" onClick={addNewRecord} >Add New Record</button>
        <button className="btn"
          onClick={handleFormSubmit}
          >View All Records
        </button>

        <button className="btn"
          onClick={viewRecordsByType}
          >View Records by Type
        </button>

      </div>
      <div className="row">
      {/* <ReactBootstrap.Table striped bordered hover>
            <thead>
                <tr>
                    <th>id</th>
                    <th>shape</th>
                    <th>height</th>
                    <th>depth</th>
                    <th>radius</th>
                    <th>area</th>
                    <th>parameter</th>
                    <th>created</th>
                    <th>updated</th>                    
                </tr>
            </thead>
            <tbody> */}
                {/* {props.results.map(renderTableBody)} */}
                {/* {qryAllRecords.map((record, index) => {
                  <tr key={index}>
                    <td>{record.id}</td>
                    <td>{record.shape}</td>
                    <td>{record.width}</td>
                    <td>{record.height}</td>
                    <td>{record.depth}</td>
                    <td>{record.radius}</td>
                    <td>{record.area}</td>
                    <td>{record.parameter}</td>
                    <td>{record.createdAt}</td>
                    <td>{record.updatedAt}</td>
                  </tr>
                })}
            </tbody>
        </ReactBootstrap.Table> */}
        <TestTable 
          results={qryAllRecords}
        />

      </div>
    </Container>
  );
}

export default TestArea;
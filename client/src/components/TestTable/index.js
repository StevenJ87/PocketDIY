import React from "react";
import * as ReactBootstrap from "react-bootstrap";


function TestTable(props) {

    const renderTableBody = (record, index) => {

        return(
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
        )
    }

    return (
        <ReactBootstrap.Table striped bordered hover variant="dark">
            <thead>
            <tr>
                    <th>id</th>
                    <th>shape</th>
                    <th>width</th>
                    <th>height</th>
                    <th>depth</th>
                    <th>radius</th>
                    <th>area</th>
                    <th>parameter</th>
                    <th>createdAt</th>
                    <th>updatedAt</th>  
                </tr>
            </thead>
            <tbody>
                {props.results.map(renderTableBody)}
            </tbody>
        </ReactBootstrap.Table>
    );
}

export default TestTable;
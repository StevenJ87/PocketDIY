import React, { Component, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { SavedProject } from "../components/ProjectSection/savedProject";
import API from "../utils/PROJECT_API"
import { ListItem } from "../components/List";
// class Projects extends Component 
function Projects() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    loadProjects()
  }, [])

  function loadProjects() {
    API.getProjects()
      .then(res =>
        setProjects(res.data)
      )
      .catch(err => console.log(err));
  };

  return (
    <Container fluid>
      <h1>Projects</h1>

      {projects.map(project => {
        return (
          <ListItem key={project._id}>
            <a href={"/projects/" + project._id}>
            </a>
            <h2>Created by: {project.UserId}
            </h2>
            <p>
              Shape: {project.shape}
            </p>
            <p>
              Width: {project.width}
            </p>
            <p>
              Height: {project.height}
            </p>
            <p>
              Depth: {project.depth}
            </p>
            <p>
              Radius: {project.radius}
            </p>
            <p>
              Area: {project.area}
            </p>
            <p>
              Perimeter: {project.perimeter}
            </p>
          </ListItem>
        );
      })}

    </Container>
  );

}


export default Projects;

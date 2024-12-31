import React from 'react'

import './portfolio.css'
import { Component } from 'react'
import { Toolbar } from './Toolbar'
import { ProjectList } from './ProjectList'

export class Portfolio extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedFilter: 'All',
    }
  }

  handleFilterSelect = (filter) => {
    this.setState({selectedFilter:filter});
  }

  render() {
    const {projects} = this.props;
    const {selectedFilter} = this.state;

    const filteredProjects = 
    selectedFilter === "All"
    ? projects 
    : projects.filter((project) => project.category === selectedFilter)
  
       return (
      <div>
        <Toolbar
          filters = {["All", "Websites", "Flayers", "Business Cards"]}
          selected={selectedFilter}
          onSelectFilter={this.handleFilterSelect}
        />

        <ProjectList projects = {filteredProjects} />
      </div>
    )
    }
  }

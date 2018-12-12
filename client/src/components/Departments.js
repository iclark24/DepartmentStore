import React from "react"
import {Segment, Header, Button, Icon, Grid} from "semantic-ui-react"
import axios from "axios"
import { Link, } from "react-router-dom";
import DepartmentForm from "./DepartmentForm";
import {StyledSegment, StyledGrid} from "./styles/main"


class Departments extends React.Component {

  state = { 
    departments: [],
    editing: false,
  
  }

  toggleEdit = () => this.setState({ editing: !this.state.editing, })

  handleDelete = (id) => {
    axios.delete(`/api/departments/${id}`)
      .then( res => {
        const {departments} = this.state;
        this.setState({ departments: departments.filter(m => m.id !== id )})
      })
  }

  handleEdit = () => {
    axios.get("/api/departments")
    .then( res => {
      this.setState({ departments: res.data, });
    })
    .catch( err => {
      console.log(err);
    })
}


  componentDidMount() {
    axios.get("/api/departments")
      .then( res => {
        this.setState({ departments: res.data, });
      })
      .catch( err => {
        console.log(err);
      })
  }

  renderDepartments = () => {
    return this.state.departments.map( d => (
      <StyledGrid>
        <StyledSegment textAlign="center">
          <Segment basic style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Button icon size="mini" color="orange" onClick={() => this.toggleEdit()}>
              <Icon name="pencil"/>
            </Button>
            <Button icon size="mini" color="red" onClick={() => this.handleDelete(d.id)}>
              <Icon name="trash"/>
            </Button>
          </Segment>

          {this.state.editing?
              <DepartmentForm {...d} toggleEdit={this.toggleEdit} handleEdit={this.handleEdit}/>
            :
            <Link to={`/departments/${d.id}`}>
              <Header style={{ paddingBottom:"70px"}}>{d.name}</Header>
            </Link>
          }
        </StyledSegment>
      </StyledGrid>
    )
    )
  }

  render() {
    return(
      <div>
        <Link to="/departments/new">
          <Button style={{ marginBottom: "30px"}} color="blue">
            <Icon name="plus"/>New Department
          </Button>
        </Link>
        <Grid columns={3} centered>
            {this.renderDepartments()}
        </Grid>
      </div>


    )
  }

}

export default Departments
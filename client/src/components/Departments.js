import React from "react"
import { Button, Icon, Grid} from "semantic-ui-react"
import axios from "axios"
import { Link, } from "react-router-dom";
import Department from "./Department"

class Departments extends React.Component {

  state = { 
    departments: [],  
  }

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
      <Department {...d} handleedit={this.handleEdit} handledelete={this.handleDelete}/>
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
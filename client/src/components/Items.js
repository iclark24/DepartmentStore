import React from "react"
import {Header, Button, Icon, Grid} from "semantic-ui-react"
import axios from "axios"
import { Link, } from "react-router-dom";
import Item from "./Item"


class Items extends React.Component {

  state = { 
    items: [],
    department: [],  
  }

  handleDelete = (id) => {
    axios.delete(`/api/items/${id}`)
      .then( res => {
        const {items} = this.state;
        this.setState({ items: items.filter(m => m.id !== id )})
      })
  }

  handleEdit = (department_id) => {
    axios.get(`/api/departments/${department_id}`)
    .then( res => {
      this.setState({ items: res.data[0], });
    })
    .catch( err => {
      console.log(err);
    })
}

  componentDidMount() {
    const { id, } = this.props.match.params
    axios.get(`/api/departments/${id}`)
      .then( res => {
        this.setState({ items: res.data[0], department: res.data[1] });
      })
      .catch( err => {
        console.log(err);
      })
  }

  renderItems = () => {
    return this.state.items.map( i => (
      <Item {...i} handleedit={this.handleEdit} handledelete={this.handleDelete}/>
    )
    )
  }

  render() {
    const { id, } = this.props.match.params
    return(
      <div>
        <Link to={`/departments/${id}/items/new`}>
          <Button style={{ marginBottom: "30px"}} color="blue">
            <Icon name="plus"/>New Item
          </Button>
        </Link>
        <Header as="h1" textAlign="center">{this.state.department.name}</Header>
        <Grid columns={5} centered>
            {this.renderItems()}
        </Grid>
      </div>


    )
  }

}

export default Items
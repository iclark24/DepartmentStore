import React from "react"
import {Segment, Header, Button, Icon, Grid, Item} from "semantic-ui-react"
import axios from "axios"
import { Link, } from "react-router-dom";
import ItemForm from "./ItemForm"


class Department extends React.Component {

  state = { 
    items: [],
    editing: false,
  
  }

  toggleEdit = () => this.setState({ editing: !this.state.editing, })

  handleDelete = (id) => {
    axios.delete(`/api/items/${id}`)
      .then( res => {
        const {items} = this.state;
        this.setState({ items: items.filter(m => m.id !== id )})
      })
  }

  handleEdit = (id) => {
    axios.get(`/api/departments/${id}`)
    .then( res => {
      this.setState({ departments: res.data, });
    })
    .catch( err => {
      console.log(err);
    })
}

  componentDidMount() {
    const { id, } = this.props.match.params
    axios.get(`/api/departments/${id}`)
      .then( res => {
        this.setState({ items: res.data, });
      })
      .catch( err => {
        console.log(err);
      })
  }

  renderItems = () => {
    return this.state.items.map( i => (
      <Grid.Column>
        <Segment textAlign="center">
          <Segment basic style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Button icon size="mini" color="orange" onClick={() => this.toggleEdit()}>
              <Icon name="pencil"/>
            </Button>
            <Button icon size="mini" color="red" onClick={() => this.handleDelete(i.id)}>
              <Icon name="trash"/>
            </Button>
          </Segment>
            {this.state.editing?
              <ItemForm {...i} toggleEdit={this.toggleEdit} handleEdit={this.handleEdit}/>
            :
            <Segment basic>
            <Header>{i.name}</Header>
            <Segment basic>
              ${i.price}
              <br/>
              <br/>
              {i.description}
            </Segment>
            </Segment>
            }
        </Segment>
      </Grid.Column>
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
        <Grid columns={5} centered>
            {this.renderItems()}
        </Grid>
      </div>


    )
  }

}

export default Department
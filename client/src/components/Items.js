import React from "react"
import {Segment, Header, Button, Icon, Grid} from "semantic-ui-react"
import axios from "axios"
import { Link, } from "react-router-dom";
import ItemForm from "./ItemForm"
import {StyledSegment, StyledGrid} from "./styles/main"


class Items extends React.Component {

  state = { 
    items: [],
    department: [],
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
      <StyledGrid>
        <StyledSegment textAlign="center">
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
        </StyledSegment>
      </StyledGrid>
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
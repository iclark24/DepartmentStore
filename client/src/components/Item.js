import React from "react"
import {Segment, Header, Button, Icon, Grid} from "semantic-ui-react"
import {StyledSegment, StyledGrid} from "./styles/main"
import ItemForm from "./ItemForm"

class Item extends React.Component {

  state = {
    editing: false,
    }

  toggleEdit = () => this.setState({ editing: !this.state.editing, })

  render() {
    const {id, name, price, description, handleedit, handledelete, } = this.props
    return (
      <StyledGrid>
        <StyledSegment textAlign="center">
          <Segment basic style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Button icon size="mini" color="orange" onClick={() => this.toggleEdit()}>
              <Icon name="pencil"/>
            </Button>
            <Button icon size="mini" color="red" onClick={() => handledelete(id)}>
              <Icon name="trash"/>
            </Button>
          </Segment>
            {this.state.editing?
              <ItemForm {...this.props} toggleEdit={this.toggleEdit} handleEdit={handleedit}/>
            :
            <Segment basic>
            <Header>{name}</Header>
            <Segment basic>
              ${price}
              <br/>
              <br/>
              {description}
            </Segment>
            </Segment>
            }
        </StyledSegment>
      </StyledGrid>
    )
  }

}

export default Item
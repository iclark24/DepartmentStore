import React from "react"
import {Segment, Header,Icon,} from "semantic-ui-react"
import { Link, } from "react-router-dom";
import { StyledGrid, Segment2, SDiv, Button, Options,} from "./styles/main"
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
        <SDiv talign="center">
          <Options>
            <Button side="topleft" color="orange" onClick={() => this.toggleEdit()}>
              <Icon size="large" color="blue" name="pencil"/>
            </Button>
            <Button side="topright" color="red" onClick={() => handledelete(id)}>
              <Icon size="large" name="trash"/>
            </Button>
          </Options>
            {this.state.editing?
              <ItemForm {...this.props} toggleEdit={this.toggleEdit} handleEdit={handleedit}/>
            :
            <Link to={`/items/${id}`}>
              <Segment2 basic>
                <Header>{name}</Header>
                <Segment basic>
                  ${price}  
                  <br/>
                  <br/>
                  {description}
                </Segment>
              </Segment2>
            </Link>
            }
        </SDiv>
      </StyledGrid>
    )
  }

}

export default Item
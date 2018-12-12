import React from "react"
import {Segment, Header, Button, Icon,} from "semantic-ui-react"
import {StyledSegment, StyledGrid} from "./styles/main"
import CommentForm from "./CommentForm"

class Comment extends React.Component {

  state = {
    editing: false,
    }

  toggleEdit = () => this.setState({ editing: !this.state.editing, })

  render() {
    const {id, title, body, rating, handleedit, handledelete, } = this.props
    return (
      <StyledGrid>
        <StyledSegment textAlign="center">
          <Segment basic style={{ display: "flex", alignComments: "center", justifyContent: "space-between" }}>
            <Button icon size="mini" color="orange" onClick={() => this.toggleEdit()}>
              <Icon name="pencil"/>
            </Button>
            <Button icon size="mini" color="red" onClick={() => handledelete(id)}>
              <Icon name="trash"/>
            </Button>
          </Segment>
            {this.state.editing?
              <CommentForm {...this.props} toggleEdit={this.toggleEdit} handleEdit={handleedit}/>
            :
            <Segment basic>
            <Header>{title}</Header>
            <Segment basic>
              {body}
              <br/>
              <br/>
              Rating: {rating} Stars
            </Segment>
            </Segment>
            }
        </StyledSegment>
      </StyledGrid>
    )
  }

}

export default Comment
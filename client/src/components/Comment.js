import React from "react"
import {Rating, Header, Icon,} from "semantic-ui-react"
import { SItem, Button, Options, Content} from "./styles/main"
import CommentForm from "./CommentForm"

class Comment extends React.Component {

  state = {
    editing: false,
    }

  toggleEdit = () => this.setState({ editing: !this.state.editing, })

  render() {
    const {id, title, body, rating, handleedit, handledelete, } = this.props
    return (
        <SItem>
          <Options>
            <Button side="topleft" color="orange" onClick={() => this.toggleEdit()}>
              <Icon size="large" color="blue" name="pencil"/>
            </Button>
            <Header as="h2">{title}</Header>
            <Button side="topright" color="red" onClick={() => handledelete(id)}>
              <Icon size="large" name="trash"/>
            </Button>
          </Options>
            {this.state.editing?
              <CommentForm {...this.props} toggleEdit={this.toggleEdit} handleEdit={handleedit}/>
            :
            <div>

            <Content>
              {body}

            </Content>            
            <Content>
              <Rating rating={rating} icon="star" size="huge" disabled maxRating={5} />
            </Content>
            </div>
          }

        </SItem>
    )
  }

}

export default Comment
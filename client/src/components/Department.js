import React from "react"
import {Segment, Header, Button, Icon,} from "semantic-ui-react"
import { Link, } from "react-router-dom";
import DepartmentForm from "./DepartmentForm";
import {StyledSegment, StyledGrid, Segment2} from "./styles/main"


class Department extends React.Component {

  state = {
    editing: false,
    }

  toggleEdit = () => this.setState({ editing: !this.state.editing, })

  render() {
    const {id, name, handleedit, handledelete, } = this.props
    return (
      <StyledGrid>
        <StyledSegment textAlign="center">
          <Segment basic style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Button inverted icon size="mini" color="orange" onClick={() => this.toggleEdit()}>
              <Icon name="pencil"/>
            </Button>
            <Button inverted icon size="mini" color="red" onClick={() => handledelete(id)}>
              <Icon name="trash"/>
            </Button>
          </Segment>
            {this.state.editing?
              <DepartmentForm {...this.props} toggleEdit={this.toggleEdit} handleEdit={handleedit}/>
            :
            <Link to={`/departments/${id}`}>
              <Segment2 basic>
                <Header>{name}</Header>
              </Segment2>
            </Link>
            }
        </StyledSegment>
      </StyledGrid>
    )
  }

}

export default Department
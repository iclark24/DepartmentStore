import React from "react"
import {Segment, Header,  Icon,} from "semantic-ui-react"
import { Link, } from "react-router-dom";
import DepartmentForm from "./DepartmentForm";
import { StyledGrid, Segment2, SDiv, Button, Options,} from "./styles/main"


class Department extends React.Component {

  state = {
    editing: false,
    }

  toggleEdit = () => this.setState({ editing: !this.state.editing, })

  render() {
    const {id, name, handleedit, handledelete, } = this.props
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
              <DepartmentForm {...this.props} toggleEdit={this.toggleEdit} handleEdit={handleedit}/>
            :
            
              <Link to={`/departments/${id}`}>
                <Segment2 basic>
                  <Header>{name}</Header>

                </Segment2>
              </Link>
            }
        </SDiv>
      </StyledGrid>
    )
  }

}

export default Department
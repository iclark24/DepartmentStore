import React from "react";
import axios from "axios";
import {Button, Form, Segment, Header} from "semantic-ui-react"

class DepartmentForm extends React.Component {
  state = { name: ""};

  componentDidMount() {
    const { id, name } = this.props;
    if (id){
      this.setState({ name: name });
    }
  }

  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState({ [name]: value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const department = { ...this.state };
    const { id } = this.props;
    if (id) {
      axios.put(`/api/departments/${id}`, department )
        .then( res => {
          this.setState({ name: "" });
          this.props.toggleEdit()
          this.props.handleEdit()
        })
    } else {
      axios.post("/api/departments", department)
        .then( res => {
          this.props.history.push("/departments")
        })
    }
  }

  render() {
    const { name } = this.state;
    return (
      <Segment basic padded>
        {this.props.id?
              <Header>Edit Department</Header>
            :
        <Header>New Department</Header>
        }
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.handleChange}
            required
            />
          <Button color="green">Submit</Button>
        </Form>
      </Segment>
    )
  }
}

export default DepartmentForm;

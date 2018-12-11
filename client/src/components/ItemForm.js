import React from "react";
import axios from "axios";
import {Button, Form, Segment, Header, } from "semantic-ui-react"

class ItemForm extends React.Component {
  state = { name: "", price: "", description: ""};

  componentDidMount() {
    const { id, name, price, description} = this.props;
    if (id){
      this.setState({ name: name, price: price, description: description });
    }
  }

  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState({ [name]: value, });
  }

    handleSubmit = (e) => {
      e.preventDefault();
      const item = { ...this.state };
      const { id, department_id } = this.props;
      if (id) {
        axios.put(`/api/items/${id}`, item )
          .then( res => {
            this.setState({ name: "", price: "", description: "", });
            this.props.toggleEdit()
            this.props.handleEdit(department_id)
          })
      } else {
        axios.post(`/api/departments/${this.props.match.params.id}/items`, this.state)
        .then( res => {
          this.props.history.push(`/departments/${this.props.match.params.id}`)
          })
      }
    }

  render() {
    const { name, price, description } = this.state;
    return (
      <Segment padded>
        {this.props.id?
          <Header>Edit Item</Header>
          :
          <Header>New Item</Header>
        }     
         <Form onSubmit={this.handleSubmit}>
          <Form.Input
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.handleChange}
            required
            />
            <Form.Input
            name="price"
            placeholder="0"
            type="number"
            value={price}
            onChange={this.handleChange}
            required
            />
            <Form.TextArea
            name="description"
            placeholder="Description"
            value={description}
            onChange={this.handleChange}
            required
            />
          <Button color="green">Submit</Button>
        </Form>
      </Segment>
    )
  }
}

export default ItemForm;

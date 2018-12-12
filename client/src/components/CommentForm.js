import React from "react";
import axios from "axios";
import {Button, Form, Segment, Header} from "semantic-ui-react"

class CommentForm extends React.Component {
  state = { title: "", body: "", rating: ""};

  componentDidMount() {
    const { id, title, body, rating } = this.props;
    if (id){
      this.setState({ title: title, body: body, rating: rating });
    }
  }

  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState({ [name]: value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const Comment = { ...this.state };
    const { id, item_id } = this.props;
    if (id) {
      axios.put(`/api/comments/${id}`, Comment )
        .then( res => {
          this.setState({ title: "", body: "", rating: "" });
          this.props.toggleEdit()
          this.props.handleEdit(item_id)
        })
    } else {
      axios.post(`/api/items/${this.props.match.params.id}/comments`, this.state)
      .then( res => {
          this.props.history.push(`/items/${this.props.match.params.id}`)
        })
    }
  }

  render() {
    const { title, body, rating } = this.state;
    return (
      <Segment padded>
        {this.props.id?
              <Header>Edit Comment</Header>
            :
        <Header>New Comment</Header>
        }
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            name="title"
            placeholder="Comment Title"
            value={title}
            onChange={this.handleChange}
            required
            />
          <Form.TextArea
            name="body"
            placeholder="Comment Body"
            value={body}
            onChange={this.handleChange}
            required
            />
          <Form.Input
            name="rating"
            placeholder="Rating"
            value={rating}
            type="number"
            onChange={this.handleChange}
            required
            />
          <Button color="green">Submit</Button>
        </Form>
      </Segment>
    )
  }
}

export default CommentForm;

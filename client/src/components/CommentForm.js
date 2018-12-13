import React from "react";
import axios from "axios";
import {Button, Form, TextArea, Header, Rating} from "semantic-ui-react"
import {SDiv, Content} from "./styles/main"


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

  handleRate = (e, { rating }) => this.setState({ rating })


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
      <div>
        {this.props.id?
          <div>
            <Header>Edit Comment</Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Title</label>
                <input
                  name="title"
                  placeholder="Comment Title"
                  value={title}
                  onChange={this.handleChange}
                  required
                />
              </Form.Field>
              <Form.Field>
                <label>Comment</label>
                <TextArea
                  name="body"
                  placeholder="Comment Body"
                  value={body}
                  onChange={this.handleChange}
                  required
                  autoHeight
                />
              </Form.Field>
              <Form.Field>
                <label>Rating:</label>
                <Rating 
                  maxRating={5} 
                  name="rating" 
                  icon="star" 
                  size="huge" 
                  value={rating} 
                  onRate={this.handleRate} 
                />
              </Form.Field>
              <Button color="green">Submit</Button>
            </Form>
          </div>
        :
          <SDiv>
          <Header>New Comment</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Title</label>
            <input
            name="title"
            placeholder="Comment Title"
            value={title}
            onChange={this.handleChange}
            required/>
          </Form.Field>
          <Form.Field>
            <label>Comment</label>
            <TextArea
              name="body"
              placeholder="Comment Body"
              value={body}
              onChange={this.handleChange}
              required
              autoHeight
              />
          </Form.Field>
          <Form.Field>
            <label>Rating:</label>
            <Rating 
              maxRating={5} 
              name="rating" 
              icon="star" 
              size="huge" 
              value={rating} 
              onRate={this.handleRate} 
            />
          </Form.Field>
          <Button color="green">Submit</Button>
        </Form>
      </SDiv>
            }
      </div>
    )
  }
}

export default CommentForm;

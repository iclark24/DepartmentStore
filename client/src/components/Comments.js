import React from "react"
import { Button, Icon, Grid, Header} from "semantic-ui-react"
import axios from "axios"
import { Link, } from "react-router-dom";
import Comment from "./Comment"
import {SDiv, Content} from "./styles/main"

class Comments extends React.Component {

  state = { 
    comments: [],
    item: [],
  }

  handleDelete = (id) => {
    axios.delete(`/api/comments/${id}`)
      .then( res => {
        const {comments} = this.state;
        this.setState({ comments: comments.filter(m => m.id !== id )})
      })
  }

  handleEdit = (item_id) => {
    axios.get(`/api/items/${item_id}`)
    .then( res => {
      this.setState({ comments: res.data[0], });
    })
    .catch( err => {
      console.log(err);
    })
}


componentDidMount() {
  const { id, } = this.props.match.params
  axios.get(`/api/items/${id}`)
    .then( res => {
      this.setState({ comments: res.data[0], item: res.data[1] });
    })
    .catch( err => {
      console.log(err);
    })
}

  renderComments = () => {
    return this.state.comments.map( c => (
      <Comment key={c.id} {...c} handleedit={this.handleEdit} handledelete={this.handleDelete}/>
    )
    )
  }

  render() {
    const {id} = this.props.match.params
    const {name, price, description} = this.state.item
    return(
      <div>
        <Link to={`/items/${id}/comments/new`}>
          <Button style={{ marginBottom: "30px"}} color="green">
            <Icon name="plus"/>New Comment
          </Button>
        </Link>
        <SDiv>
          <Header as="h1" textAlign="center">{name}</Header>
          <Header as="h2" textAlign="center">${price}</Header>
          <Header as="h3" textAlign="center">{description}</Header>
        </SDiv>
            {this.renderComments()}
        </div>


    )
  }

}

export default Comments
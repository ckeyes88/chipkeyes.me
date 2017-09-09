import React, { Component } from 'react'
import Card from './Card';

class Thoughts extends Component {
  constructor (props) {
    super(props)
    this.renderArticles = this.renderArticles.bind(this);
  }
  
  componentWillMount () {
    this.props.getArticles();
  }

  renderArticles() {
    return this.props.articles.map(this.renderArticle);
  }

  renderArticle(article, i) {
    
    return (
      <Card key={`article-${i}`} {...article}/>
    );
  }
  
  render () {
    
    return (
      <div id="articles">
        <h1>Hello</h1>
        {this.renderArticles()}
      </div>
    )
  }
}

export default Thoughts
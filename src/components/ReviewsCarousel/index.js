import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewIndex: 0}

  onLeftArrowClicked = () => {
    this.setState(prevState => {
      let result = this.state
      if (prevState.activeReviewIndex > 0) {
        result = {activeReviewIndex: prevState.activeReviewIndex - 1}
      }
      return result
    })
  }

  onRightArrowClicked = () => {
    this.setState(prevState => {
      let result = this.state
      if (prevState.activeReviewIndex < 3) {
        result = {activeReviewIndex: prevState.activeReviewIndex + 1}
      }
      return result
    })
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      activeReviewIndex
    ]

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} />
        <div className="review-container">
          <button
            type="button"
            data-testid="leftArrow"
            className="button"
            onClick={this.onLeftArrowClicked}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>

          <p className="username">{username}</p>
          <button
            type="button"
            data-testid="rightArrow"
            className="button"
            onClick={this.onRightArrowClicked}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
        <p className="company-name">{companyName}</p>
        <p className="company-name">{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel

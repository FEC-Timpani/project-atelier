import React from 'react';



const ProgressBar = (props) => {
  return (
    <div className="review-row">
      <div className='review-rating-text'>
        <a className="card-link review-hand" onClick={props.onClick}>{props.text}</a></div>
      <div className='review-rating-progress'>
        <div className="progress">
          <div className="progress-bar" style={{ width: props.percentage + '%' }}></div>
        </div>
      </div>
      <div className='review-rating-text'>{props.percentage + '%'}</div>
    </div>
  );
};

export default ProgressBar;
import React from 'react'
import noResult from '../../Images/noResult.png'

const NoResult = (props) => {
    const {type, totalResults} = props;

  return (
    <div className='centreDiv'>
        <img src={noResult} alt={'No Result Logo'} />
        <h4>Sorry, No result found.<br />
            <span className='subtitle'>We've searched more than {totalResults}.<br />
            We were not able to find any {type} for your search. </span>
        </h4>
    </div>
  )
}

export default NoResult
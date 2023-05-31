import React, { useState } from 'react';



function StarCounter() {

  const [count, setCount] = useState(0);

  const AddStarsUponThars= () => {

    setCount(prevCount => prevCount + 1);
  };

  const SubtractStarsUponThars = () => {

    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  const renderStarsUponThars = () => {

    const stars = [];

    for (let i = 0; i < count; i++) {

      stars.push(<span key={i} className="star">*</span>);
    }
    return stars;
  };

  return (
    <div>
      <div className="counter">

        <button onClick={SubtractStarsUponThars}>Remove 1 Star</button>

        <span>{count}</span>

        <button onClick={AddStarsUponThars}>Add 1 Star</button>

      </div>

      <div className="starsContainer">{renderStarsUponThars()}</div>
      
    </div>
  );
}

export default StarCounter;

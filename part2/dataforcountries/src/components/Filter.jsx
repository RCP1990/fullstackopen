import React from 'react';

const Filter = ({ onChange, filtered }) => {
    return (
      <div>
        find countries <input id="filter" onChange={onChange} value={filtered} />
      </div>
    );
  };

  export default Filter;
import React from 'react';

const Filter = ({ titleFilter, rateFilter, setTitleFilter, setRateFilter }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={titleFilter}
        onChange={e => setTitleFilter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={rateFilter}
        onChange={e => setRateFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;

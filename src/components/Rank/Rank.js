import React from 'react';

const Rank = ({name, entries}) => {
  return (
  //Rank
  <div>
    <div className='dark-gray f3 ttu tracked'>
      {`${name}, your current entry count is:`}
    </div>
    <div className='light-red f1'>
      {entries}
    </div>
  </div>);
}

export default Rank;

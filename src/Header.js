import React, { useState, useEffect } from 'react';
// import SearchDropList from './searchDroplist';

export default function Header (props) {


  const [targetSearch, setTargetSearch] = useState(props.targetSearch);


  useEffect(() => {
    setTargetSearch(props.targetSearch);
  }, [props.targetSearch]);


  const handleChange = (e) => {
    const value = e.target.value;
    setTargetSearch(value);
    props.setTargetSearch(value);
    props.handleSearch(value);
  };

  return (
    <div id="Header">
      <div id="headerdiv">
        <div id="logodiv">
          <h1 className='RocketshipTypeface'> Rocketship </h1>
          <span className="material-icons" id="rocket">
            rocket_launch
          </span>
        </div>

        <div className="searchbtns">
          <div id="searchbar">
            <input
              type="text"
              id="searchinput"
              value={targetSearch}
              onChange={handleChange}
            />
            <span id="searchicon" className="material-icons">
              search
            </span>
          </div>
        </div>

        <div id="walletdiv">
          <span className="material-icons" id="menuicon">
            menu
          </span>
        </div>
      </div>
    </div>
  );
}

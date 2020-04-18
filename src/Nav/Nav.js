import React from 'react';
import './Nav.scss';

function renderSortByItems(props) {

  return props.propsNav.items.map((item, i) => {
    let navClass = 'navigation-'+i;
    return <div className={navClass} key={i}>{item}</div>;
  });
}

export function Nav(props) {
  console.log(props);
  return (
    <div className="header">
      <img src={props.propsNav.imgSrc} alt="" />
      <div className="navigation">
        {renderSortByItems(props)}
      </div>
    </div>
  );

}

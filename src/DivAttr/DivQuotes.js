import React from 'react';
import './DivQuotes.css';
import {DivAttrSingle} from '../DivAttrSingle/DivAttrSingle';

export function DivQuotes(props) {
  console.log('DivQuotes: ',props);
  return (
    <div className={props.propsDiv.name}>
      <img src={props.propsDiv.imgSrc} alt="" />
      <div className={props.propsDiv.name2}>
        <DivAttrSingle propsDivSingle={props.propsDivSingle[0]} />
        <DivAttrSingle propsDivSingle={props.propsDivSingle[1]} />
        <DivAttrSingle propsDivSingle={props.propsDivSingle[2]} />
      </div>
    </div>
  );

}

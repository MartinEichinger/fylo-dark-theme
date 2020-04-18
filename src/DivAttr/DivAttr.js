import React from 'react';
import './DivAttr.css';
import {DivAttrSingle} from '../DivAttrSingle/DivAttrSingle';

export function DivAttr(props) {
  console.log('DivAttr: ',props);
  return (
    <div className="divAttr">
      <img src={props.propsDiv.imgSrc} alt="" />
      <div className="divAttrSingleBody">
        <DivAttrSingle propsDivSingle={props.propsDivSingle[0]} />
        <DivAttrSingle propsDivSingle={props.propsDivSingle[1]} />
        <DivAttrSingle propsDivSingle={props.propsDivSingle[2]} />
        <DivAttrSingle propsDivSingle={props.propsDivSingle[3]} />
      </div>
    </div>
  );

}

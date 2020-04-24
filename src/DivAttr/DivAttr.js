import React from 'react';
import './DivAttr.scss';
import {DivAttrSingle} from '../DivAttrSingle/DivAttrSingle';

export function DivAttr(props) {
  console.log('DivAttr: ',props);
  return (
    <div className="divAttr">
      <div className="divAttrPic">
        <img src={props.propsDiv.imgSrc} alt="" />
      </div>
      <div className="divAttrSingleBody">
        <DivAttrSingle propsDivSingle={props.propsDivSingle[0]} />
        <DivAttrSingle propsDivSingle={props.propsDivSingle[1]} />
        <DivAttrSingle propsDivSingle={props.propsDivSingle[2]} />
        <DivAttrSingle propsDivSingle={props.propsDivSingle[3]} />
      </div>
    </div>
  );

}

import React from 'react';
import './DivPctTxtForm.scss';

export function DivPctTxtForm(props) {
  console.log('DivIntro: ',props);
  return (
    <div className={props.propsDiv.name}>
      <img src={props.propsDiv.imgSrc} alt="" />
      <div className="block">
        <div className="h1">
          {props.propsDiv.h1Txt}
        </div>
        <div className="p">
          {props.propsDiv.pTxt}
        </div>
        <div className="blockForm">
          {props.propsDiv.isBtnOrFormOrLnk === 'form' &&
            <input type='text' placeholder={props.propsDiv.formPlaceholder} />
          }
          <div className={props.propsDiv.isBtnOrFormOrLnk}>
            {props.propsDiv.btnLnkTxt}
          </div>
        </div>
      </div>
    </div>
  );

}

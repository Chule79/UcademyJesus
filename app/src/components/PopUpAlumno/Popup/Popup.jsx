import './Popup.css';

import React, { useState } from 'react';
import Popup from 'reactjs-popup';

import DatosPop from '../BodyPop/DatosPop';

export const PopCreate = ({ item }) => {
  return (
    <Popup
      trigger={
        <button className="informacion" key={item.id}>
          <img src="https://www.svgrepo.com/show/137539/information.svg"></img>
        </button>
      }
      modal
    >
      {(close) => (
        <div className="modal">
          <div className="ticket">
            <DatosPop item={item} />
            <div className="divClose">
              <button className="close" onClick={close}>
                Cerar
              </button>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};

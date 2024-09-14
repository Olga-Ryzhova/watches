import React, { Component } from 'react';
import './ClockListItem.css';

import deleteIcon from '../../img/delete.png';

class ClockListItem extends Component {
  render() {
    const { nameSity, timezone, onDelete, referenceTime } = this.props;

    const getTimeInTimezone = (time, offset) => {
      const date = new Date(time);
      const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
      const localTime = new Date(utc + (3600000 * offset));
      return localTime.toLocaleTimeString('ru-RU');
    };

    const formattedTime = getTimeInTimezone(referenceTime.toISOString(), timezone);

    return (
      <li className="list-group-item">
        <div className="clockInfo">
          <div className="sity-name">{nameSity}</div>
          <div className="list-group-date">{formattedTime}</div>  
        </div>

        <div className="list-group-buttons">
          <button type="button" className="btn-delete" onClick={onDelete}>
            <img className="icon" src={deleteIcon} alt="delete" />
          </button>
        </div>
      </li>
    );
  }
}

export default ClockListItem;
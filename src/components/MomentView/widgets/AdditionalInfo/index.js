import React, { memo } from 'react';
import getImageUrl from '../../../AppCommon/helpers/assets';

const AdditionalInfo = ({ details }) => (
  details.additionalInfo.map((info, index) => (
    <div key={index} className="additional-info-wrapper">
      <div id="info-title">{info.title}</div>
      <img key={info.icon} className="full-size-asset" src={getImageUrl(info.icon)} alt="full-asset" />
      <div id="info-field1">{info.field1}</div>
      <div id="info-field2-wrapper">
        <div id="info-field2">{info.field2}</div>
      </div>
    </div>
  ))
);


export default memo(AdditionalInfo);

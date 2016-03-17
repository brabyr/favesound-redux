import React from 'react';

function renderInfo(info, idx) {
  return (
    <div className="info-list-item" key={idx}>
      <i
        className={info.className}
      >
        &nbsp;{info.count}
      </i>
    </div>
  );
}

export const InfoList = ({ information }) => {
  return (
    <div className="info-list">
      {information.map(renderInfo)}
    </div>
  );
};

InfoList.propTypes = {
  information: React.PropTypes.array
};

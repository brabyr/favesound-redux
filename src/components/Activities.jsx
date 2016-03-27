import React from 'react';
import map from 'lodash/fp/map';
import FetchOnScroll from '../components/FetchOnScroll';
import { TrackContainer } from '../components/Track';
import { LoadingSpinner } from '../components/LoadingSpinner';

function Activity({ entities, id, idx }) {
  return (
    <li>
      <TrackContainer activity={entities[id]} idx={idx} />
    </li>
  );
}

function Activities({ requestInProcess, ids, entities }) {
  if (!ids) {
    return <span></span>;
  }

  return (
    <div>
      <div>
        <ul>
          {map((id, idx) => {
            const props = { entities, id, idx };
            return <Activity key={idx} { ...props } />;
          }, ids)}
        </ul>
      </div>
      <LoadingSpinner isLoading={requestInProcess}/>
    </div>
  );
}

Activities.propTypes = {
  requestInProcess: React.PropTypes.bool,
  ids: React.PropTypes.array,
  entities: React.PropTypes.object
};

export default FetchOnScroll(Activities);

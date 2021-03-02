import React, {
  useContext, useEffect, useMemo, useState,
} from 'react';
import { useParams } from 'react-router-dom';

import sensorsReducer, {
  fetchSensorsFailed,
  fetchSensorsRequested,
  fetchSensorsSuccessed,
  sensorsInitialState,
} from 'reducers/sensors';
import { getSensors } from 'sideEffects/firebase';
import PlaceView from 'components/Places/PlaceView';
import useReducerState from 'hooks/useReducerState';
import { PlaceContext } from 'context/place';
import { LinearProgress } from '@material-ui/core';
import { groupSensorsByTaxonomyPropValues } from 'presenters/place';
import { SensorsGroupByTaxonomyPropValues } from 'common/types';
import PlaceSortBy from 'components/Places/PlaceSortBy';
import { taxonomyPropLabels, taxonomyProps } from 'common/constants';
import NotFound from 'components/NotFound';

function Place() {
  const [sensors, sensorsActions] = useReducerState(
    sensorsReducer,
    sensorsInitialState,
    fetchSensorsRequested,
    fetchSensorsSuccessed,
    fetchSensorsFailed,
  );
  const [place, placeActions] = useContext(PlaceContext);
  const { placeId }: { placeId: string } = useParams();
  const [sortTaxonomy, setSortTaxonomy] = useState(taxonomyProps.PURPOSE);
  const [sortVisible, setSortVisible] = useState(false);

  useEffect(() => {
    placeActions.onRequest(placeId);
  }, []);

  useEffect(() => {
    if (place.data) {
      sensorsActions.onRequest();
      getSensors(place.data, sensorsActions.onSuccess, sensorsActions.onError);
    }
  }, [place.data]);

  const groupedSensors: SensorsGroupByTaxonomyPropValues = useMemo(() => {
    if (!sensors.data) return {};
    return groupSensorsByTaxonomyPropValues(sensors.data, sortTaxonomy);
  }, [sensors.data, sortTaxonomy]);

  const handleSortTaxonomyClick = (taxonomyProp: taxonomyProps) => {
    setSortTaxonomy(taxonomyProp);
  };

  const handleSortClick = () => {
    setSortVisible(!sortVisible);
  };

  if (place.didInvalidate) {
    return <NotFound message={place.error.message} code={place.error.code} />;
  }

  if (!place.data
    || place.isFetching
    || !sensors.data
    || sensors.isFetching
  ) {
    return <LinearProgress color="primary" />;
  }

  return (
    <>
      <PlaceView
        place={place.data}
        taxonomySensors={groupedSensors?.taxonomyProp}
        taxonomySensorsSortedIds={groupedSensors?.taxonomyPropValues}
        otherSensors={groupedSensors?.other}
        onSortClick={handleSortClick}
        sortLabel={taxonomyPropLabels[sortTaxonomy]}
      />
      <PlaceSortBy
        onSelect={handleSortTaxonomyClick}
        selected={sortTaxonomy}
        onHide={handleSortClick}
        visible={sortVisible}
      />
    </>
  );
}

export default Place;

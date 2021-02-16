import React from 'react';

import { sensorsGroupLabels } from 'common/constants';
import { Option, SensorsGroup } from 'common/types';
import SensorAccordion from './SensorAccordion';

interface Props {
  accountable?: Option;
  sensorsGroup?: SensorsGroup[];
  sensorName: string;
}

function SensorTaxonomy({ sensorName, accountable, sensorsGroup }: Props) {
  if (!accountable && !sensorsGroup?.length) <></>;

  return (
    <div>
      {/* On top accountability sensor info */}
      {accountable?.description && (
      <SensorAccordion
        icon="/images/accountable/org.svg"
        title={accountable.name}
        label={sensorsGroupLabels.accountability}
        body={accountable.description}
        name={sensorName}
      />
      )}
      {/* Followed by the rest of sensor groups */}
      {sensorsGroup.map(({ label, options }) => options.map(
        ({ name, description, iconShortname }) => (
          <SensorAccordion
            key={name}
            icon={`/images/${iconShortname}.svg`}
            title={name}
            label={label}
            body={description}
            name={sensorName}
          />
        ),
      ))}
    </div>
  );
}

SensorTaxonomy.defaultProps = {
  accountable: undefined,
  sensorsGroup: undefined,
};

export default SensorTaxonomy;

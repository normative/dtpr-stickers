import React from 'react';

import { sensorsGroupLabels } from 'common/constants';
import { Option, SensorsGroup } from 'common/types';
import Accordian from './Accordian';

interface Props {
  accountable?: Option;
  sensorsGroup?: SensorsGroup[];
}

function SensorTaxonomy({ accountable, sensorsGroup }: Props) {
  if (!accountable && !sensorsGroup?.length) <></>;

  return (
    <div>
      {/* On top accountability sensor info */}
      {accountable?.description && (
      <Accordian
        icon="/images/accountable/org.svg"
        title={accountable.name}
        label={sensorsGroupLabels.accountability}
        body={accountable.description}
      />
      )}
      {/* Followed by the rest of sensor groups */}
      {sensorsGroup.map(({ label, options }) => options.map(
        ({ name, description, iconShortname }) => (
          <Accordian
            key={name}
            icon={`/images/${iconShortname}.svg`}
            title={name}
            label={label}
            body={description}
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

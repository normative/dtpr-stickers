import React from 'react';

import { PLACEHOLDERS, sensorsGroupLabels } from 'common/constants';
import { Option, SensorsGroup } from 'common/types';
import { createStyles, Theme, withStyles } from '@material-ui/core';
import SensorAccordion from './SensorAccordion';

interface Props {
  accountable?: Option;
  sensorsGroup?: SensorsGroup[];
  sensorName: string;
  classes: any,
}

function SensorTaxonomy({
  classes, sensorName, accountable, sensorsGroup,
}: Props) {
  if (!accountable && !sensorsGroup?.length) <></>;

  return (
    <div className={classes.root}>
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
      {sensorsGroup.map(({ sensorGroup, label, options }) => options.map(
        ({ name, description, iconShortname }) => (
          <SensorAccordion
            key={name}
            icon={`/images/${iconShortname}.svg`}
            placeholder={`/images/${PLACEHOLDERS[sensorGroup]}.svg`}
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

const styles = (theme: Theme) => createStyles({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
});

export default withStyles(styles)(SensorTaxonomy);

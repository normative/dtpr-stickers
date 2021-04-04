import React from 'react';

import { PLACEHOLDERS } from 'common/constants';
import { SenorTaxonomyPropValuesDetails } from 'common/types';
import { createStyles, Theme, withStyles } from '@material-ui/core';
import SensorAccordion from './SensorAccordion';

interface Props {
  sensorTaxonomy?: SenorTaxonomyPropValuesDetails[];
  sensorName: string;
  classes: any,
}

function SensorTaxonomy({
  classes, sensorName, sensorTaxonomy,
}: Props) {
  if (!Object.keys(sensorTaxonomy).length) <></>;

  return (
    <div className={classes.root}>
      {sensorTaxonomy.map(({ taxonomyProp, label, options }) => options.map(
        ({
          title, description, icon, additionalDescription,
        }) => (
          <SensorAccordion
            key={title}
            icon={icon}
            placeholder={`/images/${PLACEHOLDERS[taxonomyProp]}.svg`}
            title={title}
            label={label}
            body={description}
            additionalInfo={additionalDescription}
            name={sensorName}
          />
        ),
      ))}
    </div>
  );
}

SensorTaxonomy.defaultProps = {
  sensorTaxonomy: undefined,
};

const styles = (theme: Theme) => createStyles({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
});

export default withStyles(styles)(SensorTaxonomy);

import React from 'react';

import { PLACEHOLDERS, taxonomyPropLabels } from 'common/constants';
import { SenorTaxonomyPropValuesDetails, TaxonomyDetails } from 'common/types';
import { createStyles, Theme, withStyles } from '@material-ui/core';
import SensorAccordion from './SensorAccordion';

interface Props {
  accountable?: TaxonomyDetails;
  sensorTaxonomy?: SenorTaxonomyPropValuesDetails[];
  sensorName: string;
  classes: any,
}

function SensorTaxonomy({
  classes, sensorName, accountable, sensorTaxonomy,
}: Props) {
  if (!accountable && !sensorTaxonomy?.length) <></>;

  return (
    <div className={classes.root}>
      {/* On top accountability sensor info */}
      {accountable?.description && (
      <SensorAccordion
        icon="/images/accountable/org.svg"
        title={accountable.title}
        label={taxonomyPropLabels.accountability}
        body={accountable.description}
        name={sensorName}
      />
      )}
      {/* Followed by the rest of sensor groups */}
      {sensorTaxonomy.map(({ taxonomyProp, label, options }) => options.map(
        ({ title, description, icon }) => (
          <SensorAccordion
            key={title}
            icon={`/images/${icon}.svg`}
            placeholder={`/images/${PLACEHOLDERS[taxonomyProp]}.svg`}
            title={title}
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
  sensorTaxonomy: undefined,
};

const styles = (theme: Theme) => createStyles({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
});

export default withStyles(styles)(SensorTaxonomy);

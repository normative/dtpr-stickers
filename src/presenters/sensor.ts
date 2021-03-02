/* eslint-disable import/prefer-default-export */
import { taxonomyPropLabels, taxonomyProps } from 'common/constants';
import { TaxonomyDetails } from 'common/types';

export function prepareSensorTaxonomy(datachain?: { [name: string]: TaxonomyDetails }) {
  if (!datachain) return {};

  return Object
    .values(taxonomyProps)
    .reduce((res, taxonomyProp) => {
      if (datachain[taxonomyProp]) {
        res[taxonomyProp] = {
          taxonomyProp,
          label: taxonomyPropLabels[taxonomyProp],
          options: datachain[taxonomyProp],
        };
      }
      return res;
    }, {});
}

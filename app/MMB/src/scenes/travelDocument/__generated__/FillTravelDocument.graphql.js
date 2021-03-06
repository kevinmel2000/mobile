/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type PassengerTravelDocumentMenuGroup$ref = any;
type TripInfo$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FillTravelDocument$ref: FragmentReference;
export type FillTravelDocument = {|
  +id: string,
  +destinationImageUrl: ?string,
  +$fragmentRefs: TripInfo$ref & PassengerTravelDocumentMenuGroup$ref,
  +$refType: FillTravelDocument$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "FillTravelDocument",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "destinationImageUrl",
      "args": [
        {
          "kind": "Literal",
          "name": "dimensions",
          "value": "_375x165",
          "type": "BookingDestinationImageDimensions"
        }
      ],
      "storageKey": "destinationImageUrl(dimensions:\"_375x165\")"
    },
    {
      "kind": "FragmentSpread",
      "name": "TripInfo",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "PassengerTravelDocumentMenuGroup",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '535aa5308fa83d18b0a58e06db01bb43';
module.exports = node;

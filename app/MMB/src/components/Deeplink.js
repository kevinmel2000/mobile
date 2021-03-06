// @flow

import * as React from 'react';
import { WebView } from '@kiwicom/mobile-shared';
import { graphql, PublicApiRenderer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import BookingDetailContext from '../context/BookingDetailContext';
import type {
  DirectAccessURLValues,
  DeeplinkQueryResponse,
} from './__generated__/DeeplinkQuery.graphql';

type Props = {|
  +to?: DirectAccessURLValues,
|};

export default class Deeplink extends React.Component<Props> {
  renderInnerComponent = (renderProps: DeeplinkQueryResponse) => {
    const uri =
      idx(renderProps, _ => _.singleBooking.directAccessURL) ||
      'https://www.kiwi.com/';

    return <WebView source={{ uri }} />;
  };

  render = () => (
    <BookingDetailContext.Consumer>
      {({ bookingId, authToken }) => (
        <PublicApiRenderer
          render={this.renderInnerComponent}
          query={graphql`
            query DeeplinkQuery(
              $bookingId: Int!
              $authToken: String!
              $deeplinkTo: DirectAccessURLValues
            ) {
              singleBooking(id: $bookingId, authToken: $authToken) {
                ... on BookingInterface {
                  directAccessURL(deeplinkTo: $deeplinkTo)
                }
              }
            }
          `}
          variables={{
            bookingId,
            authToken,
            deeplinkTo: this.props.to,
          }}
        />
      )}
    </BookingDetailContext.Consumer>
  );
}

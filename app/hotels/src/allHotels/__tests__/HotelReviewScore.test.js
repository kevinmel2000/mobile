// @flow

import { Color } from '@kiwicom/mobile-shared';

import { HotelReviewScore } from '../HotelReviewScore';

let HRS;

beforeEach(() => {
  // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
  HRS = new HotelReviewScore({ hotel: { review: undefined } });
});

describe('formatScore', () => {
  it('returns correctly formatted score', () => {
    expect(HRS.formatScore(1)).toBe('1,0');
    expect(HRS.formatScore(1.0)).toBe('1,0');
    expect(HRS.formatScore(1.2)).toBe('1,2');
    expect(HRS.formatScore(1.25)).toBe('1,3');
  });
});

describe('calculateColor', () => {
  it('returns correct score color', () => {
    const RED = Color.red.monza;
    const ORANGE = Color.orange.normal;
    const GREEN = Color.green.lapalma;

    expect(HRS.calculateColor(-1)).toBeUndefined();
    expect(HRS.calculateColor(0)).toBe(RED);
    expect(HRS.calculateColor(3)).toBe(ORANGE);
    expect(HRS.calculateColor(7)).toBe(ORANGE);
    expect(HRS.calculateColor(10)).toBe(GREEN);
    expect(HRS.calculateColor(11)).toBeUndefined();
  });
});

describe('render', () => {
  it('returns null of falsy score values', () => {
    // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
    HRS = new HotelReviewScore({ hotel: { review: { score: 0 } } });
    expect(HRS.render()).toBe(null);

    // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
    HRS = new HotelReviewScore({ hotel: { review: { score: null } } });
    expect(HRS.render()).toBe(null);

    // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
    HRS = new HotelReviewScore({ hotel: { review: { score: undefined } } });
    expect(HRS.render()).toBe(null);

    // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
    HRS = new HotelReviewScore({ hotel: { review: { score: 1 } } });
    expect(HRS.render()).toBeInstanceOf(Object); // actual component
  });
});

// @flow

import * as React from 'react';
import type { TranslationType } from '@kiwicom/mobile-localization';
import type { StylePropType } from '@kiwicom/mobile-shared';

import Color from '../Color';
import StyleSheet from '../PlatformStyleSheet';
import ButtonTitle from './ButtonTitle';
import Button from './Button';

type Props = {|
  +title: TranslationType,
  +onPress: Function,
  +titleStyle?: StylePropType,
|};

/**
 * Button that looks like a simple link.
 */
export default function LinkButton(props: Props) {
  return (
    <Button style={styleSheet.link} onPress={props.onPress}>
      <ButtonTitle
        style={[styleSheet.text, props.titleStyle]}
        text={props.title}
      />
    </Button>
  );
}

const styleSheet = StyleSheet.create({
  link: {
    backgroundColor: 'transparent',
  },
  text: {
    color: Color.brand,
  },
});

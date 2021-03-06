// @flow

import * as React from 'react';
import { type TranslationType } from '@kiwicom/mobile-localization';

import Color from '../Color';
import StyleSheet from '../PlatformStyleSheet';
import ButtonTitle from './ButtonTitle';
import Button from './Button';

type Props = {|
  +title: TranslationType,
  +onPress: () => void,
  +disabled?: boolean,
|};

/**
 * Button with custom translated title.
 */
export default function TextButton(props: Props) {
  return (
    <Button
      onPress={props.onPress}
      disabled={props.disabled}
      style={props.disabled && styleSheet.buttonDisabled}
    >
      <ButtonTitle
        style={[
          styleSheet.buttonText,
          props.disabled && styleSheet.buttonTextDisabled,
        ]}
        text={props.title}
      />
    </Button>
  );
}

TextButton.defaultProps = {
  disabled: false,
};

const styleSheet = StyleSheet.create({
  buttonText: {
    color: Color.white,
  },
  buttonDisabled: {
    backgroundColor: Color.grey.$300,
  },
  buttonTextDisabled: {
    color: Color.ink.dark,
  },
});

import React from 'react';
import styled from 'styled-components';
import { RadioButtonWithVisasqLiteStyle } from './components';

import "wired-radio"
import "wired-radio-group"

const RADIO_NAME = 'radio';
const RADIO_ITEMS = ['React', 'Vue', 'Angular', 'Svelte'];

/**
 * @description translate3d はチラつき防止
 */
const StyledInput = styled.input`
  &:focus-visible {
    outline: 3px dashed darkorange;
    transition: 0s;
    transform: translate3d(0);
  }
`;

const StyledLabel = styled.label`
  margin-left: 10px;
`;
export const DemoOfRadioButtonsWithDefaultStyle = ({ className = '' }) => (
  <form className={className}>
    {RADIO_ITEMS.map(item => (
      <StyledLabel key={item}>
        <input type="radio" name={RADIO_NAME} value={item} /> {item}
      </StyledLabel>
    ))}
  </form>
);
export const DemoOfRadioButtonsWithCustomizedStyle = ({ className = '' }) => (
  <form className={className}>
    {RADIO_ITEMS.map(item => (
      <StyledLabel key={item}>
        <StyledInput type="radio" name={RADIO_NAME} value={item} /> {item}
      </StyledLabel>
    ))}
  </form>
);

export const DemoOfTextFieldWithDefaultStyle = ({ className = '' }) => (
  <form className={className}>
    <input />
  </form>
);
export const DemoOfTextFieldWithCustomizedStyle = ({ className = '' }) => (
  <form className={className}>
    <StyledInput />
  </form>
);

const InlineBlockDiv = styled.div`
  display: inline-block;
  margin-left: 10px;
`;
export const DemoOfRadioButtonsWithVisasqLiteStyle = ({ className = '' }) => (
  <form className={className}>
    {RADIO_ITEMS.map(item => (
      <InlineBlockDiv key={item}>
        <RadioButtonWithVisasqLiteStyle name={RADIO_NAME} value={item}>
          {item}
        </RadioButtonWithVisasqLiteStyle>
      </InlineBlockDiv>
    ))}
  </form>
);

const FontSize24Div = styled.div`
  font-size: 24px;
`;
export const DemoOfTest = ({ className = '' }) => (
  <FontSize24Div className={className}>
    <wired-radio-group role="radiogroup">
      {RADIO_ITEMS.map(item => (
        <wired-radio name={item} key={item}>{item}</wired-radio>
     ))}
    </wired-radio-group>
  </FontSize24Div>
);

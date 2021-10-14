import React from 'react';
import styled from 'styled-components';

export const StopPropagationDiv = ({ className = '', children }) => (
  <div className={className} onKeyDown={e => e.stopPropagation()}>{children}</div>
);

const VisasqLiteStyledSpan = styled.span``
const VisasqLiteStyledLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5em;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
  margin: 0;

  & ${VisasqLiteStyledSpan} {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #dce3ef;
    background: #f1f5fa;
    margin-right: 10px;
    -ms-flex-negative: 0;
    flex-shrink: 0
  }

  & ${VisasqLiteStyledSpan}:after {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    margin: 4px;
    border-radius: 50%;
    -webkit-transition: .1s;
    transition: .1s;
    background: rgba(220, 227, 239, .5)
  }

  & input:checked+${VisasqLiteStyledSpan}:after {
    background: #2ba
  }

  & input:focus-visible+${VisasqLiteStyledSpan} {
    -webkit-box-shadow: 0 0 0 1px #2ba;
    box-shadow: 0 0 0 1px #2ba;
    border-color: #2ba
  }

  & input {
    opacity: 0;
    position: absolute
  }

  &:hover ${VisasqLiteStyledSpan}:after {
    background-color: rgba(34, 187, 170, .4)
  }

  & ._03d3cb19 {
    opacity: .4
  }
`;

export const RadioButtonWithVisasqLiteStyle = ({ className = '', name = '', children = '' }) => {
  return (
    <VisasqLiteStyledLabel className={className}>
      <input type="radio" name={name} />
      <VisasqLiteStyledSpan />{children}
    </VisasqLiteStyledLabel>
  );
};

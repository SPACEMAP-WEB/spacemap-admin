import React from 'react';
import styled from 'styled-components';

const TinyHeader = ({ text, padding = '0' }) => (
  <TinyStyled className="tiny-header" style={{ padding }}>
    {text}
  </TinyStyled>
);

export default TinyHeader

const TinyStyled = styled.div`
  display: block;
  font-size: 10px;
  color: #adadad !important;
  font-weight: 200;
  letter-spacing: 0.5px;
  margin: 0 0 7px;
`;

import React from 'react';
import styled from 'styled-components';
import AppContentWidth from './AppContentWidth';
import TinyHeader from './TinyHeader';

const SideConfig = () => {
  return (
    <StyledWrapper>
      <TinyHeader text="CONFIG" />
      <div className="options">
        <div className="option-list">
          <h2>전체너비</h2>
          <AppContentWidth />
        </div>
      </div>
    </StyledWrapper>
  )
}

export default SideConfig;

const StyledWrapper = styled.div`  
  padding: 24px 24px 0;
  width: 100%;
  
  .option-list{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    h2 {
      font-size: 12px;
    }
  }
`;

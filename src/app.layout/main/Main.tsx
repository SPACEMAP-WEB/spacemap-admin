import React from 'react';
import styled from 'styled-components';

const Main = () => {
  return (
    <StyledWrapper>
      <div className="card-view">
        <h1>
          <img src="/images/logo/SPACEMAP_logo.png" alt="logo" />
          환영합니다.
          <br />
          <b>SPACEMAP 어드민</b>
          <br />
          입니다.
        </h1>
        <h2>원하시는 업무를 선택해주세요.</h2>
      </div>
    </StyledWrapper>
  );
};

export default Main;

export const StyledWrapper = styled.div`
  display: flex;
  margin: 22px 0 0;
  width: 500px;
  .card-view {
    background: #fff;
    width: 300px;
    height: 430px;
    padding: 34px;
    display: inline-block;
    border-radius: 8px;
    margin: 5px;
    vertical-align: top;
    border: 2px solid rgb(255 255 255 / 80%);
    line-height: 1.4;
    h1 {
      font-size: 20px;
      height: 320px;
      color: rgb(252, 203, 22);
      font-weight: 700;
      i {
        font-size: 30px;
        display: block;
        margin: 0 0 5px;
      }
      b {
        text-decoration: underline;
        font-weight: bold;
        color: #000;
      }
    }
    h2 {
      display: block;
      font-size: 14px;
      color: #000;
    }
  }

  .card-view.dark {
    h1,
    h2 {
      color: #fff;
    }
  }
`;

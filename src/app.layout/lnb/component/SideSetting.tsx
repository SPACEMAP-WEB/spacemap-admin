import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import { LogoutOutlined } from '@ant-design/icons';
import { _menuPadding, TinyHeader } from '../ScreenLNB';
import axios from 'axios';

const SideSetting: React.FC = () => {
  const logout = async () => {
    const { data } = await axios.post('/api/sign/signout');
    if (data) location.href = '/';
  };
  return (
    <section>
      <StyledWrapper _menuPadding={_menuPadding}>
        <TinyHeader text="SETTING" />
        <div className="setting-box">
          <Button onClick={logout}>
            <LogoutOutlined />
            로그아웃
          </Button>
        </div>
      </StyledWrapper>
    </section>
  );
};

export default SideSetting;

const StyledWrapper = styled.div`
  position: relative;
  text-align: left;
  margin: 0 0 7px;
  overflow: hidden;
  ${(props) => props._menuPadding && `padding: ${_menuPadding}px;`}
  .setting-box {
    display: flex;
    justify-content: flex-end;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48.5%;
      height: 35px;
      font-size: 12px;
      .anticon {
        position: relative;
        top: 1px;
      }
    }
  }
`;

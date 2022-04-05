import React from 'react';
import styled from 'styled-components';
import ScreenLNB from './lnb/ScreenLNB';
import { useStoreSSR } from 'app.store/rootStore';
import { useStoreMenuOpen } from './store/store.menuOpen';

export const transformValue = 54;

const AppWeb = ({ contentsComponent }) => {
  const getAppConfig = useStoreSSR((state) => state.appConfig);
  const { menuOpen } = useStoreMenuOpen();
  return (
    <StyledLayout sideMenuVisible={menuOpen}>
      <ScreenLNB />
      <div id="appSection">
        <div id="appContent">
          <div
            style={{ padding: '30px 40px' }}
            className={`content-layout apps-content full-width-${getAppConfig.minWidth}`}
          >
            {contentsComponent}
          </div>

          <div id="adminFooter">
            <div className="admin-footer-body">
              Copyright © 2022 by SPACEMAP, Inc. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </StyledLayout>
  );
};

export default AppWeb;

const StyledLayout = styled.div`
  display: flex; // Note: table 스크롤 사용시 주석처리
  #appSection {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 240px;
    width: 100%; // Note: table 스크롤 사용시 주석처리
    height: 100%;
    z-index: 2;
    transition: margin 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
    ${({ sideMenuVisible }) => sideMenuVisible && `margin: 0px;`};
  }

  #adminFooter {
    margin-top: 70px;
    width: 100%;
    .admin-footer-body {
      text-align: center;
      padding: 13px 0;
      border-top: 1px solid #ececec;
      color: #b1b1b1;
      font-weight: 100;
      letter-spacing: 0.2px;
      font-size: 12px;
    }
  }

  .apps-content {
    transition: 0.2s;
    margin: 0 auto;
    width: 100%;
  }

  .apps-content.full-width-true {
    width: 1400px;
  }
`;

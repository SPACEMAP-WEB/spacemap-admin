import React from 'react';
import { Switch } from 'antd';
import styled from 'styled-components';
import { useStoreSSR } from 'app.store/rootStore';

const AppContentWidth = () => {
  const getAppConfig = useStoreSSR(state => state.appConfig);
  const getAppConfigUpdate = useStoreSSR(state => state.configUpdate);

  const handleFullWidthSetting = () => {
    getAppConfigUpdate({ minWidth: !getAppConfig.minWidth })
  }

  return (
    <StyledWrapper>
      <div className={`full-wrap ${getAppConfig.minWidth ? 'small-width' : 'full-width'}`}>
        <Switch
          size="small"
          checked={getAppConfig.minWidth}
          onChange={handleFullWidthSetting}
        />
      </div>
    </StyledWrapper>
  )
}

export default AppContentWidth;

const StyledWrapper = styled.div`
  .option-list{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    h2 {
      font-size: 12px;
    }
  }
`;

import { Table } from 'antd';
import React from 'react';
import styled from 'styled-components';
import DataColumns from '../component/DataColumns';
import { dataSet } from '../component/testDataSet';

const ScreenUser = () => {
  return (
    <StyledWrapper>
      <div>
        <Table
          className="table"
          bordered
          size="middle"
          columns={DataColumns()}
          dataSource={dataSet}
          pagination={{
            pageSize: 10,
          }}
        />
      </div>
    </StyledWrapper>
  );
};

export default ScreenUser;

const StyledWrapper = styled.div``;

import { Table } from 'antd';
import React from 'react';
import styled from 'styled-components';
import DataColumns from '../component/DataColumns';
import { dataSet } from '../component/testDataset';

const ScreenContact = () => {
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

export default ScreenContact;

const StyledWrapper = styled.div``;

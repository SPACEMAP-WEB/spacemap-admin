import { Button, Table } from 'antd'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styled from 'styled-components'
import DataColumns from '../component/DataColumns'
import RowDeleteMessage from '../component/RowDeleteMessage'
import { dataSet } from '../component/testDataset'

const ScreenResource = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const router = useRouter()

  const handleCreateClick = () => {
    router.push({
      pathname: router.pathname + '/edit',
    })
  }

  const handleRowClick = (value) => {
    router.push({
      pathname: router.pathname + '/edit',
      query: { title: value.title },
    })
  }

  return (
    <StyledWrapper>
      <div className="button-group">
        <Button className="button" type="primary" onClick={handleCreateClick}>
          생성하기
        </Button>
      </div>
      <div>
        <RowDeleteMessage
          selectedRowKeys={selectedRowKeys}
          setSelectedRowKeys={setSelectedRowKeys}
        />
        <Table
          className="table"
          bordered
          size="middle"
          onRow={(record) => {
            return { onClick: () => handleRowClick(record) }
          }}
          columns={DataColumns()}
          dataSource={dataSet}
          rowKey={(row) => row.id}
          pagination={{
            pageSize: 10,
          }}
          rowSelection={{
            selectedRowKeys,
            columnWidth: '5%',
            onChange: (selectRowKey) => setSelectedRowKeys(selectRowKey),
          }}
        />
      </div>
    </StyledWrapper>
  )
}

export default ScreenResource

const StyledWrapper = styled.div`
  .button-group {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
  }
  .ant-table-row {
    cursor: pointer;
  }
`

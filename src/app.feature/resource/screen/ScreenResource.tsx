import { Button, Table } from 'antd'
import { useRouter } from 'next/router'
import Error from 'app.components/Error/Error'
import LottieLoadingTable from 'app.components/Loading/LottieLoadingTable'
import React, { useState } from 'react'
import styled from 'styled-components'
import DataColumns from '../component/DataColumns'
import RowDeleteMessage from '../component/RowDeleteMessage'
import { useQueryGetResource } from '../query/useQueryResource'

type RecordType = {
  id: number
  title: string
  index: string
  date: string
  type: string
}

const ScreenResource = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const router = useRouter()
  const { data, isLoading, isError, isSuccess } = useQueryGetResource()
  let dataSet: RecordType[] = []

  if (isError) return <Error />
  if (isLoading) return <LottieLoadingTable />
  if (isSuccess) {
    dataSet = data.map<RecordType>((item, id) => {
      return {
        title: item.title,
        index: item._id,
        date: item.createdAt,
        type: item.boardType,
        id: id + 1,
      }
    })
  }

  const handleCreateClick = () => {
    router.push({
      pathname: router.pathname + '/edit',
    })
  }

  const handleRowClick = (value: RecordType) => {
    router.push({
      pathname: router.pathname + '/edit',
      query: { id: value.index },
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

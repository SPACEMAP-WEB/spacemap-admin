import { Button, Select, Table } from 'antd'
import { useRouter } from 'next/router'
import Error from 'app.components/Error/Error'
import LottieLoadingTable from 'app.components/Loading/LottieLoadingTable'
import React, { useState } from 'react'
import styled from 'styled-components'
import DataColumns from '../component/DataColumns'
import RowDeleteMessage from '../component/RowDeleteMessage'
import { useQueryGetResource } from '../query/useQueryResource'
import moment from 'moment'

type RecordType = {
  id: string
  title: string
  index: number
  date: string
  type: string
}

const { Option } = Select

const ScreenResource = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const router = useRouter()
  const { data, isLoading, isError, isSuccess } = useQueryGetResource(router.query)

  let dataSet: RecordType[] = []

  if (isError) return <Error />
  if (isLoading) return <LottieLoadingTable />
  if (isSuccess) {
    dataSet = data.map<RecordType>((item, id) => {
      return {
        title: item.title,
        index: id + 1,
        date: moment(item.createdAt).format('YYYY-MM-DD / HH:MM:SS'),
        type: item.boardType,
        id: item._id,
      }
    })
  }

  const handleChange = (value: string) => {
    router.push({ query: { ...(value ? { boardType: value } : {}) } })
  }

  const handleCreateClick = () => {
    router.push({
      pathname: router.pathname + '/create',
    })
  }

  const handleRowClick = (value: RecordType) => {
    router.push({
      pathname: router.pathname + '/edit',
      query: { id: value.id },
    })
  }

  return (
    <StyledWrapper>
      <div className="button-group">
        <div>
          <span className="text">Type : </span>
          <Select
            placeholder="type"
            className="button-select"
            allowClear
            onChange={handleChange}
            defaultValue={router.query.boardType}
          >
            {['media', 'document'].map((type) => (
              <Option key={type}>{type}</Option>
            ))}
          </Select>
        </div>
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
          columns={DataColumns}
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
  .text {
    font-weight: bold;
    font-size: 15px;
  }
  .button-select {
    width: 110px;
  }
  .button-group {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .ant-table-row {
    cursor: pointer;
  }
`

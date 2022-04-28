import { Table } from 'antd'
import Error from 'app.components/Error/Error'
import LottieLoadingTable from 'app.components/Loading/LottieLoadingTable'
import React from 'react'
import styled from 'styled-components'
import DataColumns from '../component/DataColumns'
import { useQueryGetUsers } from '../query/useQueryUser'

const ScreenUser = () => {
  const { data, isLoading, isError, isSuccess } = useQueryGetUsers()

  if (isError) return <Error />
  if (isLoading) return <LottieLoadingTable />
  if (isSuccess) {
    data.map((user, idx) => (user.index = idx + 1))
  }

  return (
    <StyledWrapper>
      <div>
        <Table
          className="table"
          bordered
          size="middle"
          columns={DataColumns}
          dataSource={data}
          pagination={{
            pageSize: 10,
            total: data?.length,
          }}
        />
      </div>
    </StyledWrapper>
  )
}

export default ScreenUser

const StyledWrapper = styled.div``

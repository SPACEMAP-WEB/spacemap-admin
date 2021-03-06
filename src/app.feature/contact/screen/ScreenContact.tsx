import { Table } from 'antd'
import Error from 'app.components/Error/Error'
import LottieLoadingTable from 'app.components/Loading/LottieLoadingTable'
import React from 'react'
import styled from 'styled-components'
import DataColumns from '../component/DataColumns'
import { TContact } from '../constants/type'
import { useQueryGetContacts } from '../query/useQueryContact'

const ScreenContact = () => {
  const { data, isLoading, isError, isSuccess } = useQueryGetContacts()
  let contactData: TContact[] = []

  if (isError) return <Error />
  if (isLoading) return <LottieLoadingTable />
  if (isSuccess) {
    contactData = (data as TContact[]).map((contact, idx) => {
      return { ...contact, index: idx + 1 }
    })
  }

  return (
    <StyledWrapper>
      <div>
        <Table
          className="table"
          bordered
          size="middle"
          columns={DataColumns}
          dataSource={contactData}
          pagination={{
            pageSize: 20,
            total: data?.length,
          }}
          rowKey={(row) => row._id}
        />
      </div>
    </StyledWrapper>
  )
}

export default ScreenContact

const StyledWrapper = styled.div``

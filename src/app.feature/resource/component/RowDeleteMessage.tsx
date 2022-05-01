import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button, Alert, message } from 'antd'
import { useMutationDeleteResource } from '../query/useMutationResource'

type DeleteMessageProps = {
  selectedRowKeys: React.Key[]
  setSelectedRowKeys: React.Dispatch<React.SetStateAction<React.Key[]>>
}

const RowDeleteMessage = ({ selectedRowKeys, setSelectedRowKeys }: DeleteMessageProps) => {
  const [isChecked, setIsChecked] = useState(false)

  const { mutateAsync } = useMutationDeleteResource()

  const handleDeletePress = async () => {
    try {
      await Promise.all(selectedRowKeys.map((id: string) => mutateAsync(id)))
      message.success('삭제에 성공했습니다!')
      setSelectedRowKeys([])
    } catch (error) {
      message.error('삭제에 실패했습니다!')
    }
  }
  useEffect(() => {
    selectedRowKeys.length && setIsChecked(true)
  }, [selectedRowKeys])

  let className = ''

  if (selectedRowKeys.length) {
    className = 'form can-delete'
  } else {
    if (isChecked) {
      className = 'form can-not-delete'
    } else {
      className = 'form'
    }
  }

  return (
    <StyledWrapper>
      <div className={className}>
        <Alert
          message={
            <div>
              Selected <span className="count">{selectedRowKeys.length}</span>
              <span> items</span>
            </div>
          }
          type="error"
          action={
            <Button danger size="small" type="primary" onClick={handleDeletePress}>
              Delete
            </Button>
          }
        />
      </div>
    </StyledWrapper>
  )
}

export default RowDeleteMessage

const StyledWrapper = styled.div`
  position: relative;

  .form {
    width: 100%;
    display: none;
    position: absolute;

    .count {
      color: #fff;
      background: #ea2128;
    }

    button {
      margin-right: 25px;
    }
  }

  .form.can-delete {
    display: initial;
    animation: slideUp 500ms forwards 1;
  }

  .form.can-not-delete {
    display: initial;
    animation: slideDown 500ms forwards 1;
  }

  @keyframes slideUp {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-42px);
    }
  }

  @keyframes slideDown {
    0% {
      transform: translateY(-42px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`

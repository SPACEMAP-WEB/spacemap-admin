export const initializeAntdStyle = `
.ant-table-thead > tr > th {
  font-size: 13px;
  background: #e6e8ec !important;
  border-bottom-color: #ddd !important;
}

.ant-table.ant-table-middle .ant-table-thead 
.ant-table-column-sorters, 
.ant-table.ant-table-middle .ant-table-title, 
.ant-table.ant-table-middle .ant-table-footer, 
.ant-table.ant-table-middle .ant-table-thead > tr > th, 
.ant-table.ant-table-middle .ant-table-tbody > tr > td, 
.ant-table.ant-table-middle tfoot > tr > th, 
.ant-table.ant-table-middle tfoot > tr > td {
  padding: 6px;
}

.custom-form-type1 .ant-form-item {
  margin-bottom: 10px;
}

.custom-form-type1 .ant-form-item-explain.ant-form-item-explain-error, 
.custom-form-type1 .ant-form-item-explain.ant-form-item-explain-success {
  position: absolute;
  top: 6px;
  right: 35px;
}

.ant-drawer-header {
  background: #f5f5f5;
  padding: 9px 24px;
}

.ant-message-notice-content {
  background: #1e2f38;
}

.ant-message-notice-content span {
  color: #ffffff;
}

.ant-drawer-body {
  padding: 32px 40px;
}

.ant-drawer .ant-drawer-content {
  border-radius: 13px 0 0 13px;
}

.ant-table-row[data-row-key='total_data_row'] {
  background: #f7f7f7;
  color: #000;
  font-weight: 600;
  text-decoration: underline;
}

.ant-menu-submenu .insert-img {
  width: 19px;
  display: inline-block;
  margin-right: 4px;
}

.ant-menu-submenu .insert-img img {
  border-radius: 100px;
}

.ant-modal-content .ant-modal-header {
  padding: 16px 24px;
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  border-top: 3px solid #179aff;
}

.ant-table.ant-table-bordered > .ant-table-container {
  border-top: none;
}

.ant-tabs-tab-active .count, .ant-tabs-tab .count {
  border-radius: 100px;
  padding: 1px 6px;
  text-align: center;
  background: #eaeaea;
  color: #7f7f7f;
  font-weight: normal;
  margin-left: 5px;
}

.ant-tabs-tab-active .count {
  background: red;
  color: #fff;
}

.ant-form-item {
  margin-bottom: 10px;
}

.ant-table-content {
  ::-webkit-scrollbar {
    height: 5px;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #d7d7d7;
    border-radius: 100px;
  }
}
`;

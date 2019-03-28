import styled from 'styled-components';
import { Modal as AntModal } from 'antd';

const Modal = styled(AntModal)`
  .ant-modal-content {
    border-radius: 2px;
  }
  .ant-modal-body {
    font-size: 10px;
    padding: 10px;
    background: ${(props) => props.theme.colors.gray};
  }
`;

export default Modal;

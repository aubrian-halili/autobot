import styled from 'styled-components';
import antd from 'antd';

export const Home = styled.div`
  padding: 20px;
  min-height: 500px;
  > section {
    max-width: 1226px;
    width: 100%;
    margin: auto;
  }
`;

export const Search = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PeopleList = styled(antd.List)`
  .ant-list-item-meta-title {
    font-weight: 600;
  }
`;

export const VehicleList = styled(antd.List)`
  .ant-list-item-meta-title {
    font-weight: 600;
  }
`;

export const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255,255,255,0.8);
  z-index: 999999;
  > * {
    z-index: 1000000;
    p {
      font-weight: bold;
    }
  }
`;

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  List, Avatar, Row, Col,
} from 'antd';

import * as S from './styles';

const Vehicles = ({ data }) => {
  return (
    <S.Vehicles
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={(<Avatar shape="square" size={54} icon="car" />)}
            title={item.name}
            description={(
              <div>
                <Row>
                  <Col span={12}>
                    <b>Model:</b>{` ${item.model}`}
                  </Col>
                  <Col span={12}>
                    <b>Vehicle Class:</b>{` ${_.capitalize(item.vehicleClass)}`}
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <b>Manufacturer:</b>{` ${item.manufacturer}`}
                  </Col>
                </Row>
              </div>
            )}
          />
        </List.Item>
      )}
    />
  );
};

Vehicles.propTypes = {
  data: PropTypes.array,
};

Vehicles.defaultProps = {
  data: [],
};

export default Vehicles;

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import scrollToComponent from 'react-scroll-to-component';
import { formatDate } from 'common/helpers';
import {
  List, Button, Divider, Avatar,
} from 'antd';

import * as S from './styles';

const onScroll = () => {
  const navigation = document.querySelector('#top');
  scrollToComponent(navigation);
  navigation.focus();
};

const People = ({ data, total, getPeople, getVehicles, setPreview, toggleDrawer }) => {
  return (
    <S.People
      itemLayout="horizontal"
      dataSource={data}
      pagination={{
        total,
        defaultCurrent: 1,
        onChange: (page) => {
          onScroll();
          getPeople({ page });
        },
      }}
      renderItem={(item) => (
        <List.Item
          actions={[(
            <Button
              onClick={() => {
                getVehicles(item.id);
                setPreview(item.id);
                toggleDrawer(true);
              }}
            >
              Show Vehicles
            </Button>
          )]}
        >
          <List.Item.Meta
            avatar={(<Avatar size={54} icon="user" />)}
            title={item.name}
            description={(
              <div>
                <b>Height:</b>{` ${item.height}`}
                <Divider type="vertical" />
                <b>Mass:</b>{` ${item.mass}`}
                <Divider type="vertical" />
                <b>Gender:</b>{` ${_.capitalize(item.gender)}`}
                <Divider type="vertical" />
                <b>Edited:</b>{` ${formatDate(item.edited)}`}
              </div>
            )}
          />
        </List.Item>
      )}
    />
  );
};

People.propTypes = {
  data: PropTypes.array,
  total: PropTypes.number,
  getPeople: PropTypes.func.isRequired,
  getVehicles: PropTypes.func.isRequired,
  setPreview: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

People.defaultProps = {
  data: [],
  total: 0,
};

export default People;

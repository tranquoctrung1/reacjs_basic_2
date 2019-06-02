import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import SongInfor from '../src/components/songinfor.js'

const songinfor = {
    id: '01',
    name: 'Đừng yêu ai em nhé',
    singer: 'Cao Nam Thành',
    countingviewer: 3000
  }

  const Red = props => <span style={{ color: 'red' }} {...props} />;

  const TableComponent = ({ propDefinitions }) => {
    const props = propDefinitions.map(
      ({ property, propType, required, description, defaultValue }) => {
        return (
          <tr key={property}>
            <td>
              {property}
              {required ? <Red>*</Red> : null}
            </td>
            <td>{propType.name}</td>
            <td>{defaultValue}</td>
            <td>{description}</td>
          </tr>
        );
      }
    );
  
    return (
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>type</th>
            <th>default</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>{props}</tbody>
      </table>
    );
  };

storiesOf('SongInfor', module)
.add('v0.0', () => (
    <SongInfor song={songinfor}/>
    ),
    {info: {
        TableComponent
    }})
.addDecorator(withInfo)
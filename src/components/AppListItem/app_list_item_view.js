import React from 'react';
import { Link } from 'react-router';

const AppListItem = function (props) {
  return (
    <tr>
      <td>{props.ancient.name}</td>
      <td>{props.ancient.superpower}</td>
    </tr>
  );
};

export default AppListItem;

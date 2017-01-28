import React from 'react';
import { Link } from 'react-router';

const AppListView = function (props) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Ancient Name</th>
          <th>Superpower</th>
        </tr>
        {props.ancients ? props.ancients.map(props.renderItem) : <tr><td>'Loading'</td></tr>}
      </tbody>
    </table>
  );
};

export default AppListView;

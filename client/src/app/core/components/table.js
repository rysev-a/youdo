import React from 'react';
import {Component} from 'react';


class TableWrapper extends Component{
  render() {
    return <div className="container">
      <h2>Название таблицы</h2>
      <div className="card">
        <div className="card-content">
          <Table/>
        </div>
      </div>
    </div>;
  }
}

class Table extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>City</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dakota Rice</td>
            <td>Niger</td>
            <td>Oud-Turnhout</td>
            <td className="text-primary">$36,738</td>
          </tr>
          <tr>
            <td>Minerva Hooper</td>
            <td>Curaçao</td>
            <td>Sinaai-Waas</td>
            <td className="text-primary">$23,789</td>
          </tr>
          <tr>
            <td>Sage Rodriguez</td>
            <td>Netherlands</td>
            <td>Baileux</td>
            <td className="text-primary">$56,142</td>
          </tr>
          <tr>
            <td>Philip Chaney</td>
            <td>Korea, South</td>
            <td>Overland Park</td>
            <td className="text-primary">$38,735</td>
          </tr>
          <tr>
            <td>Doris Greene</td>
            <td>Malawi</td>
            <td>Feldkirchen in Kärnten</td>
            <td className="text-primary">$63,542</td>
          </tr>
          <tr>
            <td>Mason Porter</td>
            <td>Chile</td>
            <td>Gloucester</td>
            <td className="text-primary">$78,615</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default TaskWrapper

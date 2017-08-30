// jshint esversion: 6
import React from 'react';
import './table.css';

class Table extends React.Component {
    render() {
        return (
            <table className='main-table'>
            <tbody>
                <tr>
                    <th>Status</th>
                    <th>End Time</th>
                    <th>Start Job</th>
                    <th>End Job</th>
                    <th>SLA</th>
                </tr>
                {this.props.data.map(row => {
                    let bulletColor = 'grey';
                    if (typeof row.active !== 'undefined') {
                        switch (Object.values(row.active)[0]) {
                            case false:
                                bulletColor = 'red';
                                break;
                            case true:
                                bulletColor = 'green';
                                break;
                            default:
                        }
                    }

                    return (
                        <tr className='table-row'>
                            <td style={{ color: bulletColor }}> • </td>
                            <td className='table-cell'> {Object.values(row.endTime)[0]} </td>
                            <td className='table-cell'> {Object.values(row.startJob)[0]} </td>
                            <td className='table-cell'> {Object.values(row.endJob)[0]} </td>
                            <td className='table-cell'> {Object.values(row.SLA)[0]} </td>
                        </tr>
                    );
                })}
            </tbody>
            </table>
        );
    }
}


export default Table;

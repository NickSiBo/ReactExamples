import React from 'react';
import './table.css';

class Table extends React.Component {
    render() {
        return (
            <table className='main-table'>
            <tr>
                <th>Status</th>
                <th>End Time</th>
                <th>Start Job</th>
                <th>End Job</th>
                <th>SLA</th>
            </tr>
            {this.props.data.map(row => {
                let bulletColor = 'green';
                if (row.status === false) {
                    bulletColor = 'red';
                } else if (row.status === 'unknown') {
                    bulletColor = 'yellow';
                }

                return (
                    <tr className='table-row'>
                        <td style={{ color: bulletColor }}> • </td>
                        <td className='table-cell'> {row.endTime} </td>
                        <td className='table-cell'> {row.startJob} </td>
                        <td className='table-cell'> {row.endJob} </td>
                        <td className='table-cell'> {row.SLA} </td>
                    </tr>
            )})}
            </table>
        );
    }
}


export default Table;

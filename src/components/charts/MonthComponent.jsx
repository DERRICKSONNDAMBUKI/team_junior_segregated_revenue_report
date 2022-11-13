import React from "react";
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class MonthComponent extends React.Component {

    data = [
        {
            "name": "Jan 2019",
            "Laboratory": 3432,
            "Registration": 2342,
            "Pharmacy":4567,
            "Radiology":6789
        },
        {
            "name": "Feb 2019",
            "Laboratory": 3432,
            "Registration": 2342,
            "Pharmacy":4567,
            "Radiology":6789
            
        },
        {
            "name": "Mar 2019",
            "Laboratory": 3432,
            "Registration": 2342,
            "Pharmacy":4567,
            "Radiology":6789
        },
        {
            "name": "Apr 2019",
            "Laboratory": 3432,
            "Registration": 2342,
            "Pharmacy":4567,
            "Radiology":6789
        },
        {
            "name": "May 2019",
            "Laboratory": 3432,
            "Registration": 2342,
            "Pharmacy":4567,
            "Radiology":6789
        }
    ]

    render() {
        return (
            <LineChart width={730} height={250} data={this.data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Laboratory" stroke="#0095FF" />
                <Line type="monotone" dataKey="Registration" stroke="#FF0000" />
                <Line type="monotone" dataKey="Pharmacy" stroke="grey" />
                <Line type="monotone" dataKey="Radiology" stroke="Aqua" />
            </LineChart>
        )
    };
}

export default MonthComponent;
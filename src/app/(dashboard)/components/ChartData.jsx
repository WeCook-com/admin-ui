'use client';

import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

const ChartData = ({ chartType, data }) => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            {chartType === 'area' ? (
                <AreaChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" fontSize="16px" tickMargin={12} />
                    <YAxis tickMargin={12} fontSize="16px" />
                    <Tooltip />
                    <Area type="monotone" dataKey="Revenue" stroke="#3b82f6" fill="#dbeafe" />
                </AreaChart>
            ) : chartType === 'bar' ? (
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" fontSize="16px" tickMargin={12} />
                    <YAxis tickMargin={12} fontSize="16px" />
                    <Tooltip />
                    <Bar dataKey="Orders" fill="#3b82f6" stroke="#3b82f6">
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill="#dbeafe" />
                        ))}
                    </Bar>
                </BarChart>
            ) : null}
        </ResponsiveContainer>
    );
};

export default ChartData;

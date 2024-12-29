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

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const AreaChartData = ({ chartType }) => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            {chartType === 'area' ? (
                <AreaChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" fontSize="16px" tickMargin={12} />
                    <YAxis tickMargin={12} fontSize="16px" />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#3b82f6" fill="#dbeafe" />
                </AreaChart>
            ) : chartType === 'bar' ? (
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" fontSize="16px" tickMargin={12} />
                    <YAxis tickMargin={12} fontSize="16px" />
                    <Tooltip />
                    <Bar dataKey="pv" fill="#3b82f6" stroke="#3b82f6">
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill="#dbeafe" />
                        ))}
                    </Bar>
                </BarChart>
            ) : null}
        </ResponsiveContainer>
    );
};

export default AreaChartData;

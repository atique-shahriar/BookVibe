import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const PageToRead = () => {
    const readBooks = JSON.parse(localStorage.getItem('readBooks')) || [];

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };


    return (
        <div className='mb-10'>
            <h1 className="text-3xl font-bold text-center mb-4">Charts</h1>
            <div className='bg-gray-100 flex items-center justify-center md:p-16 rounded-xl'>

                <ResponsiveContainer width="80%"
                    height={400}>
                    <BarChart
                        data={readBooks}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="bookName" tick={{ fontSize: '14px' }}>


                        </XAxis>
                        <YAxis />
                        <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {readBooks.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>

            </div>
        </div>

    );
};


export default PageToRead;
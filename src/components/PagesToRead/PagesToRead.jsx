import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const PagesToRead = () => {
  const items = useLoaderData();
  
  const storedReadBooks = JSON.parse(localStorage.getItem('read') || '[]'); // Parse read books from localStorage
  const readbooks = items.filter(item => storedReadBooks.includes(item.bookId)); // Filter read books

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
    <div>
      <Helmet>
        <title>Book Vibe | Pages to Read</title>
      </Helmet>
      {
        readbooks.length === 0 
        ?
        <h2 className="text-3xl text-center mt-6">No pages to read</h2>
        :
        <ResponsiveContainer width="100%" aspect={3}>
          <BarChart data={readbooks}>
            <CartesianGrid strikethroughPosition="3 3"/>
            <XAxis dataKey="bookName" />
            <YAxis dataKey="totalPages"/> 
            <Tooltip/>
            <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }} type="monotone" >
              {readbooks.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      }
    </div>
  );
};

export default PagesToRead;
import { ResponsiveContainer, LineChart, Line ,XAxis, YAxis} from 'recharts';
const data =  [
        {name: 'Aug 21', leave: 28},
        {name: 'Sep 21', leave: 27},
        {name: 'Oct 21', leave: 22},
        {name: 'Nov 21', leave: 25},
        {name: 'Dec 21', leave: 20},
        {name: 'Jan 21', leave: 26},
        {name: 'Feb 21', leave: 27},
        {name: 'Mar 21', leave: 25},
        {name: 'Apr 21', leave: 24},
        {name: 'May 21', leave: 20},
        {name: 'Jun 21', leave: 21},
        {name: 'Jul 21', leave: 18},
    ];

const Chart = () => {
    return (

        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
                <Line type="monotone" dataKey="leave" stroke="#258bf7" strokeWidth={2} />
                <XAxis dataKey="name" tick={{fontSize: 11, fill: '#333'}} tickLine={{ stroke: 'transparent' }}/>
                <YAxis tick={{fontSize: 11, }}  style={{ color: '#333', }} tickLine={{ stroke: 'transparent' }} width={20}/>
            </LineChart>
        </ResponsiveContainer>
    )
}

export default Chart
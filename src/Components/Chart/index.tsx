import { useAppSelector } from "../../app/hooks"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { useEffect, useState } from "react";
import { ICustomHistory } from '../../Interfaces/history'



const Chart = () => {

    const history = useAppSelector((select) => select.covid.history)
    const [selectHistory, setSelectHistory] = useState<Array<ICustomHistory>>([{ Confirmed: 0, Recorved: 0, Death: 0, Date: '' }])

    useEffect(() => {
        const tempHistory: Array<ICustomHistory> = history.map((his) => {
            return {
                Confirmed: his.Confirmed,
                Recorved: his.Confirmed - his.Death,
                Death: his.Death,
                Date: new Date(his.Date).toLocaleString('tr', { dateStyle: 'short' })
            }
        })
        setSelectHistory([...tempHistory])
    }, [history])

    return (
        <div className='w-full my-5'>
            <LineChart className='mx-auto' width={800} height={400} data={selectHistory.filter((h, i) => i % 5 === 0)} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type='monotone' dot={false} dataKey='Recorved' stroke="blue" />
                <Line type='monotone' dot={false} dataKey='Death' stroke='red' />
                <Line type='monotone' dot={false} dataKey='Confirmed' stroke='green' />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="Date" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    )
}

export default Chart
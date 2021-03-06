import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';

export default function BarChart() {
    return (
                
        <Bar
            data={{
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [
                    {
                        label: '# of votes',
                        data: [9, 5, 3, 5, 2, 3, 3],
                        backgroundColor: ['red',],
                    },
                ],
                
            }}
            height={50}
            width={100}
            options={{ maintainAspectRation: false, }}
            />
    )
}
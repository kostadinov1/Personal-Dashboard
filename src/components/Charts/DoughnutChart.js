import { Doughnut } from "react-chartjs-2";
import Chart from 'chart.js/auto';

export default function DoughnutChart() {
    return (
        
        <Doughnut id="serverstatus2"
            data={{
                // labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [
                    {
                        label: '# of votes',
                        data: [12, 5, 3, 5, 2, 3, 3],
                        backgroundColor: ['red',],
                    },
                ],
                
            }}
            height={200}
            width={200}
            options={{ maintainAspectRation: false, }}
        />
    )
}
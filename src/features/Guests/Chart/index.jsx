import React from "react"
import { MdClose } from "react-icons/md"
import { Button, Container, Drawer, Icon, Segment } from "../../../@fastor"
import { Bar, Pie } from "react-chartjs-2"
import {
    Chart,
    ArcElement,
    BarController,
    BarElement,
    CategoryScale,
    Title,
    Legend,
    LinearScale,
} from "chart.js"
Chart.register(
    ArcElement,
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    Legend,
    Title
)


export default function GuestChart({ name, chartdata, setChart }){
    const data = {
    labels: [
        'Accept',
        'Decline',
        'Undecided'
    ],
    datasets: [{
        label: `${name} RSVP Stats`,
        data: chartdata,
        backgroundColor: [
            '#5ca37e',
            '#dc3545',
            'rgb(54, 162, 235)'
        ],
        hoverOffset: 4
        }]
    };

    return (
        <Drawer h="100vh" pos="rtv" zx="2000" pv="center" bg="var(--snow10)" bgd="var(--dark70)">
            <Segment pos="abs" $top="0" space="var(--s10)">
                <Button rad="50px" space="8px" bg="var(--sagebrush)" onClick={() => setChart(false)}>
                    <Icon size={24} hex="var(--snow10)"><MdClose /></Icon>
                </Button>
            </Segment>

            <Container $dir="vrt">
                <Segment>
                    <Bar data={data} />
                </Segment>
            </Container>
        </Drawer>
    )
}

GuestChart.defaultProps = {
    name: '',
    chartdata: [],
}

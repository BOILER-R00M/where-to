import React, {useState} from "react";
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export default function TopBarStats() {
    // Generate random scores between 4 and 9 for the 4 locations
    const randomScores = Array.from(
        { length: 4 },
        () => Math.floor(Math.random() * (9 - 4 + 3)) + 4
    );

    const [hidden, setHidden] = useState("hidden")

    const toggleView = () => {
        if (hidden === "hidden"){
            setHidden("block")
        } else {
            setHidden("hidden")
        }
    }

    const group001Data = {
        labels: ["Atlanta", "New York", "Chicago", "Texas"],
        datasets: [
            {
                label: "Avg Score",
                data: randomScores,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(255, 206, 86, 0.5)",
                    "rgba(75, 192, 192, 0.5)",
                    "rgba(153, 102, 255, 0.5)",
                ],
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        legend: {
            position: "right",
            labels: {
                font: {
                    size: 18,
                },
                color: "rgba(255, 255, 255, 1)", // Fix color here
                boxWidth: 20,
                padding: 20,
            },
        },
        title: {
            display: true,
            text: "Top Locations by Average Score",
        },
        scale: {
            ticks: {
                beginAtZero: true,
                max: 10,
            },
        },
        animation: {
            duration: 2500,
            easing: "easeOutQuart", // Smoother easing function
        },
    };

    return (
        <div className="m-5 text-center border flex flex-row rounded-xl">
            <div>
                <h1 className="text-2xl font-bold mb-5 ">
                    Test Chart For Group Locations
                </h1>
                <h1 className="text-2xl font-bold mb-5 ">
                    Group Name + short details
                </h1>
            </div>
            <div className="p-5">

            <div className={` mx-auto w-full max-w-xs px-5 flex-row`}>
                <PolarArea data={group001Data} options={chartOptions} />
            </div>
                <div className="members mb-15 absolute flex justify-items-center flex-row left-20  ">
                    <div className="relative rounded-full w-10 h-10 m-3 bg-blue-500 bottom-10"> G </div>
                    <div className="relative rounded-full w-10 h-10 m-3 bg-blue-800 bottom-10"> M </div>
                    <div className="relative rounded-full w-10 h-10 m-3 bg-tertiary bottom-10"> G </div>
                    <div className="relative rounded-full w-10 h-10 m-3 bg-secondary bottom-10"> K </div>
                </div>

            </div>
        </div>
    );
}

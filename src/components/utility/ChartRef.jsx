import React from "react";
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
// import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const groupOO1Data = {
    labels: ["Atlanta", "New York", "Chicago", "Texas", ],
    datasets: [
        {
            label: "Avg Score",
            data: [12, 19, 3, 5, ],
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

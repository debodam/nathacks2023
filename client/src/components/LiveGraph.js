import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const LiveGraph = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Live Data",
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        data: [],
      },
    ],
  });

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Generate random data
      const newDataPoint = Math.floor(Math.random() * 100);
      const newLabels = [...data.labels, new Date().toLocaleTimeString()];
      const newDataset = {
        ...data.datasets[0],
        data: [...data.datasets[0].data, newDataPoint],
      };

      setData({ labels: newLabels, datasets: [newDataset] });
    }, 1000);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <div>
      <h2>Live Graph</h2>
      <Line data={data} />
    </div>
  );
};

export default LiveGraph;

import React from 'react';
import BarChartData from './BarChartData/BarChartData';
import LineChartData from './LineChartData/LineChartData';

const ResourcesGraphData = () => {
    return (
        <div>
            <LineChartData/>
            <BarChartData/>
        </div>
    );
};

export default ResourcesGraphData;
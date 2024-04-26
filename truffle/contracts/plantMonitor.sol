// SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;

contract PlantMonitor {
    // Struct to represent a data point
    struct DataPoint {
        uint timestamp;
        uint temperature;
        uint humidity;
        uint moisture;
    }

    // Array to store all data points
    DataPoint[] public dataPoints;

    // Event emitted when a new data point is added
    event DataPointAdded(uint indexed timestamp, uint temperature, uint humidity, uint moisture);

    // Function to add a new data point
    function addDataPoint(uint _temperature, uint _humidity, uint _moisture) public {
        DataPoint memory newPoint = DataPoint(block.timestamp, _temperature, _humidity, _moisture);
        dataPoints.push(newPoint);
        emit DataPointAdded(block.timestamp, _temperature, _humidity, _moisture);
    }

    // Function to get the number of data points
    function getDataPointCount() public view returns (uint) {
        return dataPoints.length;
    }

    // Function to get the data point at a specific index
    function getDataPoint(uint _index) public view returns (uint timestamp, uint temperature, uint humidity, uint moisture) {
        require(_index < dataPoints.length, "Index out of range");
        DataPoint memory point = dataPoints[_index];
        return (point.timestamp, point.temperature, point.humidity, point.moisture);
    }
}
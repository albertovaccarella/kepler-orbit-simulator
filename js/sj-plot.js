var configOptions = {
    showLink: false,
    displaylogo: false
};

function plotProjection(plotDiv, xAxisData, yAxisData) {

    var trace = {
        type: 'scatter',                    // set the chart type
        mode: 'lines',                      // connect points with lines
        x: xAxisData,
        y: yAxisData,
        opacity: 1,
        line: {                             // set the width of the line.
            width: 1,
            reversescale: false
        }
    };

    var layout = {
            title: xName + ' - ' + yName,
            margin: {
                l: 15,
                r: 15,
                b: 50,
                t: 100,
                pad: 4
              },
            plot_bgcolor: "rgb(230, 230,200)"
        };

        Plotly.newPlot(plotDiv, [trace], layout, configOptions);
}
d3.json("data.json")
  .then(data => {
    data.forEach(d => {
      d.height = +d.height;
    });

    const svg = d3
      .select("#chart-area")
      .append("svg")
      .attr("width", 400)
      .attr("height", 400);

    // pass in the loaded data
    const circles = svg.selectAll("circle").data(data);

    // cx - center x, from left margin on x axis 
    // cy - center y, from top margin on y axis
    // i - index of all data starting from 0
    circles
      .enter()
      .append("circle")
      .attr("cx", (d, i) => {
        return i * 50 + 25;
      })
      .attr("cy", 25)
      .attr("r", d => {
        return d.height / 20;
      })
      .attr("fill", d => {
        if (d.height > 255) {
          return "red";
        }
        return "blue";
      });
  })
  .catch(e => {
    console.log(e);
  });

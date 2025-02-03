import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const RadialTreeChart = () => {
  const svgRef = useRef(null);

  const data = {
    name: "Projects",
    children: [
      {
        name: "Development",
        children: [
          {
            name: "Frontend",
            children: [{ name: "React" }, { name: "Vue" }],
          },
          {
            name: "Backend",
            children: [{ name: "Node.js" }, { name: "Django" }],
          },
          { name: "Testing" },
        ],
      },
      {
        name: "Marketing",
        children: [
          {
            name: "SEO",
            children: [{ name: "On-page" }, { name: "Off-page" }],
          },
          { name: "Social Media" },
          { name: "Content Writing" },
        ],
      },
      {
        name: "Operations",
        children: [
          { name: "Resource Allocation" },
          { name: "Task Management" },
          { name: "Reporting" },
        ],
      },
    ],
  };

  useEffect(() => {
    const containerWidth = svgRef.current.parentElement.clientWidth;
    const width = containerWidth > 500 ? 500 : containerWidth - 40;
    const height = width;
    const radius = width / 2;

    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const tree = d3.tree().size([2 * Math.PI, radius - 80]);
    const root = d3.hierarchy(data);
    tree(root);

    const linkGenerator = d3
      .linkRadial()
      .angle((d) => d.x)
      .radius((d) => d.y);

    svg
      .selectAll("path")
      .data(root.links())
      .enter()
      .append("path")
      .attr("d", linkGenerator)
      .attr("fill", "none")
      .attr("stroke", "#555")
      .attr("stroke-width", 1.5);

    const node = svg
      .selectAll("g.node")
      .data(root.descendants())
      .enter()
      .append("g")
      .attr("transform", (d) => `rotate(${(d.x * 180) / Math.PI - 90}) translate(${d.y},0)`);

    node.append("circle").attr("r", 5).attr("fill", "#69b3a2");

    node
      .append("text")
      .attr("dy", "0.31em")
      .attr("x", (d) => (d.x < Math.PI ? 10 : -10))
      .attr("text-anchor", (d) => (d.x < Math.PI ? "start" : "end"))
      .attr("transform", (d) => (d.x >= Math.PI ? "rotate(180)" : null))
      .text((d) => d.data.name)
      .style("font-size", "10px");
  }, [data]);

  return (
    
    <div className="bg-white rounded-2xl p-5 justify-center items-center w-full h-auto">
      <h3 className="text-lg font-semibold text-center text-gray-700 mb-4 merienda-title">
        Project Management Radial Tree
      </h3>
      <svg ref={svgRef} className="w-full bg-gray-100 rounded-lg"></svg>
    </div>
  );
};

export default RadialTreeChart;

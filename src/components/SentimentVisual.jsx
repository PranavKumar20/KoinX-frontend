import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

export const SentimentVisual = ({ number, percentages }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Clear any existing content
    svg.selectAll("*").remove();

    const width = 400; // Width of the SVG element
    const height = 200; // Height of the SVG element

    // Create circle with number inside
    svg
      .append("circle")
      .attr("cx", 50)
      .attr("cy", height / 2 - 40)
      .attr("r", 40)
      .attr("fill", "#C6F6D5")
      .attr("stroke", "none");

    svg
      .append("text")
      .attr("x", 50)
      .attr("y", height / 2 - 55)
      .attr("dy", "0.8em")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("font-size", "24px")
      .attr("fill", "#065F46")
      .text(number);

    // Define colors for lines
    const colors = ["green", "gray", "red"];

    // Create rows with text and lines based on percentages
    percentages.forEach((percent, index) => {
      const y = 30 * (index + 1);

      // Text
      svg
        .append("text")
        .attr("x", 150) // Adjusted x to provide space for text
        .attr("y", y)
        .attr("dy", "0.3em")
        .text(percent.text);

      // Line
      svg
        .append("line")
        .attr("x1", 190) // Adjusted x1 to align with the end of the text
        .attr("y1", y)
        .attr("x2", 390 * (percent.percent / 100) + 190) // Adjusted x2 to align with the end of the SVG
        .attr("y2", y)
        .attr("stroke", colors[index % colors.length]) // Use colors from the predefined array
        .attr("stroke-width", 4);

      // Percentage Text
      svg
        .append("text")
        .attr("x", 390 * (percent.percent / 100) + 200) // Position text to the right of the line
        .attr("y", y)
        .attr("dy", "0.3em")
        .text(percent.percent + "%"); // Display the percentage value
    });
  }, [number, percentages]);

  return <svg ref={svgRef} width={600} height={100}></svg>;
};

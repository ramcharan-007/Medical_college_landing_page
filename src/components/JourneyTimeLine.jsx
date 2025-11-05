import React, { useCallback } from "react";
import ReactFlow, {
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
  Position,
} from "reactflow";
import "reactflow/dist/style.css";
import { courseJourney } from "./../journeyTimeline";

const JourneyFlow = () => {
  const nodesData = courseJourney.map((term, index) => ({
    id: term.id,
    position: { x: index * 320, y: 150 },
    data: {
      label: term.label,
      badge: term.badge || null,
    },
    style: {
      backgroundColor: term.color,
      borderRadius: "50%",
      padding: 20,
      border: "5px solid #4338ca",
      width: 160,
      height: 160,
      fontWeight: 600,
      fontSize: 13,
      textAlign: "center",
      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
  }));

  const edgesData = courseJourney.slice(0, -1).map((term, index) => ({
    id: `e${term.id}-${courseJourney[index + 1].id}`,
    source: term.id,
    target: courseJourney[index + 1].id,
    animated: true,
    type: "smoothstep",
    style: { stroke: "#fbbf24", strokeWidth: 4 },
    markerEnd: {
      type: "arrowclosed",
      color: "#fbbf24",
    },
  }));

  const [nodes, , onNodesChange] = useNodesState(nodesData);
  const [edges, setEdges, onEdgesChange] = useEdgesState(edgesData);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
    [setEdges]
  );

  return (
    <div className="relative w-full py-12 bg-transparent">
      <div className="text-center mb-12"></div>

      <div className="relative w-full h-[500px] p-8 rounded-2xl shadow-lg">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          panOnScroll={true}
          preventScrolling={false}
        >
          <Controls showZoom={false} />
        </ReactFlow>
      </div>
    </div>
  );
};

export default JourneyFlow;

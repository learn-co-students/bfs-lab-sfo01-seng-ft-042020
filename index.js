function bfs(startingNode, vertices, edges) {
  startingNode.distance = 0;
  let discovered = [startingNode];
  let nodes = [startingNode];
  while (discovered.length != 0) {
    let currentNode = discovered.shift();
    let adjacentNodes = findAdjacent(currentNode.name, vertices, edges);
    if (adjacentNodes.length > 0) {
      adjacentNodes.forEach((n) => {
        nodes.push(n);
      });
    }
    markDistanceAndPredecessor(currentNode, adjacentNodes);
    discovered = discovered.concat(adjacentNodes);
  }
  return nodes;
}

function markDistanceAndPredecessor(predecessor, adjacentNodes) {
  adjacentNodes.map(function (node) {
    node.distance = predecessor.distance + 1;
    node.predecessor = predecessor;
  });
}

function findAdjacent(node, vertices, edges) {
  let nodeEdges = edges.filter((e) => e.includes(node));

  if (nodeEdges.length) {
    let unvisited = vertices.filter((v) => v.distance === null);
    let adjacent = nodeEdges.flat().filter((a) => a !== node);
    return unvisited.filter((v) => adjacent.includes(v.name));
  }
  return [];
}

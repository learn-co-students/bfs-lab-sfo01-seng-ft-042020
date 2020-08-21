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

function findAdjacent(source, vertices, edges){
    let results = [];
    for (let edge of edges) {
        let idx = edge.indexOf(source)
        if (idx !== -1) {
            let adjacent = (idx === 0 ? edge[1] : edge[0])
            let vertex = vertices.find(v=>v.name === adjacent)
            if (vertex.distance === null) { results.push(vertex)}
        }
    }
    return results
}

function markDistanceAndPredecessor(predecessor, adjVertices){
    for (let vertex of adjVertices) {
        vertex.predecessor = predecessor;
        vertex.distance = predecessor.distance + 1
    }
}

function addToQueue(){

}
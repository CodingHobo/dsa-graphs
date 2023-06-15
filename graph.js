/** Node class for graph. */

class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

/** Graph class. */

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  /** add Node instance and add it to nodes property on graph. */
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  /** add array of new Node instances and adds to them to nodes property. */
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.nodes.add(vertex);
    }
  }

  /** add edge between vertices v1,v2 */
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  /** remove edge between vertices v1,v2 */
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  /** remove vertex from graph:
   *
   * - remove it from nodes property of graph
   * - update any adjacency lists using that vertex
   */
  removeVertex(vertex) {
    this.nodes.delete(vertex);
    for (let node of this.nodes) {
      if (node.adjacent.has(vertex)) {
        node.adjacent.delete(vertex);
      }
    }
  }

  /** traverse graph with DFS and returns array of Node values */
  depthFirstSearch(start) {
    let toVisitStack = [start];
    let seen = new Set(toVisitStack);
    let result = [];

    while (toVisitStack.length > 0) {
      let currNode = toVisitStack.pop();
      result.push(currNode.value);

      for (let neighbor of currNode.adjacent) {
        if (!seen.has(neighbor)) {
          toVisitStack.push(neighbor);
          seen.add(neighbor);
        }
      }
    }

    return result;
  }

  /** traverse graph with BDS and returns array of Node values */
  breadthFirstSearch(start) {
    let toVisitQueue = [start];
    let seen = new Set(toVisitQueue);
    let result = [];

    while (toVisitQueue.length > 0) {
      let currNode = toVisitQueue.shift();
      result.push(currNode.value);

      for (let neighbor of currNode.adjacent) {
        if (!seen.has(neighbor)) {
          toVisitQueue.push(neighbor);
          seen.add(neighbor);
        }
      }
    }

    return result;
  }

  /** find the distance of the shortest path from the start vertex to the end vertex */
  distanceOfShortestPath(start, end) {
    let toVisitStack = [start];
    let seen = new Set(toVisitStack);
    let distances = new Set();

    while (toVisitStack.length > 0) {
      let currNode = toVisitStack.pop()
      let distance = 0;

    }
  }
}

module.exports = { Graph, Node };

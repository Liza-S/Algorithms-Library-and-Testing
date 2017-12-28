const hasIncomingEdges = node => node.edges.length;
const noIncomingEdges = node => !node.edges.length;

function removeEdge(adjacentVertex, node) {
    node.edges = node.edges.filter(vertex => vertex !== adjacentVertex);
    return node;
}

function topologicalSort(nodes = []) {
    let noEdges = nodes.filter(noIncomingEdges),
        withEdges = nodes.filter(hasIncomingEdges),
        sorted = [];

    while (noEdges.length) {
        const node = noEdges.pop();
        sorted.push(node);

        withEdges = withEdges.map( removeEdge.bind(null, node.name) );
        const newNoEdges = withEdges.filter(noIncomingEdges);
        noEdges = noEdges.concat(newNoEdges);

        withEdges = withEdges.filter(hasIncomingEdges);
    }  
    return sorted.map(node => node.name);
}

/*// Example

const sorted = topologicalSort([
{
  name: 'A',
  edges: ['B', 'C']
},
{
  name: 'B',
  edges: []
},
{
  name: 'C',
  edges: []
}
]);

console.log(sorted);*/
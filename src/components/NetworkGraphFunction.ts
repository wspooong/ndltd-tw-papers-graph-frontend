import * as d3 from 'd3';
import { useFocusDocumentStore } from '@/stores/focusDocument';
import { useGraphLayoutSizeStore} from '@/stores/graphLayoutSize';

const focusDocument = useFocusDocumentStore();
const graphLayoutSize = useGraphLayoutSizeStore();

const color_palette: { [key: number]: string } = { 0: '#9E1A30', 1: '#EE4B6A', 2: '#EF8354', 3: '#D8A47F' };

function createNetworkGraph(data:any) {
    const edges = data['edges'];
    const nodes = data['nodes'];
    const documents = data['documents']

    const networkGraph = d3.select('.network_graph');
    const width = (networkGraph.node() as Element)?.getBoundingClientRect().width;
    const height = graphLayoutSize.height;

    const nodeSize = 50;
    const edgeForce = 150;

    function zoomed(event: any) {
        svg.attr('transform', event.transform);
    }

    const svg = d3
        .select('.network_graph')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .call(d3.zoom<SVGSVGElement, unknown>().on('zoom', zoomed))
        .append('g')

    const g = svg.append('g');


    const link = svg.append('g')
        .attr('class', 'links')
        .selectAll('line')
        .data(edges)
        .enter().append('line')
        .attr('stroke-width', 1)
        .attr('stroke', 'gray')
        .attr('stroke-opacity', 0.6);

    const node = svg.append('g')
        .attr('class', 'nodes')
        .selectAll('circle')
        .data(nodes)
        .enter()
        .append('circle')
        .attr('r', nodeSize)
        .attr('fill', (d: any) => color_palette[d.layer])
        .attr('opacity', 0.7)
        .on('mouseenter', (evt, d:any) => {
            link
                .attr('display', 'none')
                .filter((l: any) => l.source.uid === (d as any).uid || l.target.uid === (d as any).uid)
                .attr('stroke', 'black')
                .attr('stroke-width', 2)
                .attr('display', 'block');
            focusDocument.setDocument(d.uid)
        })
        .on('click', (evt, d: any) => {
            focusDocument.setDocument(d.uid)
        })
        .on('mouseleave', evt => {
            link
                .attr('display', 'block')
                .attr('stroke', 'gray')
                .attr('stroke-width', 1);
        });

    const text = svg.selectAll('text')
        .data(nodes)
        .enter()
        .append('text')
        .style('fill', 'black')
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'middle')
        .style('text-shadow', '1px 1px 2px white')
        .text((d: any) => `${documents[d.uid].author} - ${documents[d.uid].graduated_academic_year}`);

    const simulation = d3.forceSimulation()
        .force('link', d3.forceLink().id((d: any) => d.uid))
        .force('charge', d3.forceManyBody())
        .force('center', d3.forceCenter(width / 2, height / 2))
        .force('collision', d3.forceCollide().radius(10).iterations(2));

    simulation
        .nodes(nodes)
        .on('tick', ticked);

    (
        simulation
            .force('link') as d3.ForceLink<any, any>)
            .links(edges)
            .distance((n: any) => n.score * edgeForce
    );

    (simulation.force('charge') as d3.ForceManyBody<any>).strength(-200);

    function ticked() {
        link
            .attr('x1', (d: any) => d.source.x)
            .attr('y1', (d: any) => d.source.y)
            .attr('x2', (d: any) => d.target.x)
            .attr('y2', (d: any) => d.target.y);

        node
            .attr('cx', (d: any) => d.x)
            .attr('cy', (d: any) => d.y);

        text
            .attr('x', (d: any) => d.x)
            .attr('y', (d: any) => d.y);
    };

}

export default createNetworkGraph;
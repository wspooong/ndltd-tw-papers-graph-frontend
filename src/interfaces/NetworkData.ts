import Node from './Node'
import Edge from './Edge'
import Paper from './Paper'

interface NetworkData {
    nodes: Node[]
    edges: Edge[]
    documents: { [uid: string]: Paper }
}

export default NetworkData
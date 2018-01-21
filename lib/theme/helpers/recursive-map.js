import { type } from 'ramda';

export default function recursiveMap(node, callback) {
    if (!callback || !node || type(node) !== 'Object') return node;

    const newNode = Object.assign({}, node);

    Object.keys(node).forEach(key => {
        if (type(node[key]) === 'Object')
            return (newNode[key] = recursiveMap(node[key], callback));

        return (newNode[key] = callback(node[key], key));
    });

    return newNode;
}

export default function(str = '') {
    if (!str) return 0;

    let hash = '';

    for (var ii = 0; ii < str.length; ii++) {
        const char = str.charCodeAt(ii);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
    }

    return hash;
}

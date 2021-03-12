export class ArrayUtil {
    static group_array_elements(array, chunks) {
        if (chunks <= 0) {
            return [];
        }

        // calculate the req no. of elements per chunk.
        // using Math.round and a default of 1, as by using other rounding function will result in inconsistent results with different remainders.
        const elem_per_array = Math.round(array.length / chunks) || 1;

        // using a reducer and accumulating the result over the entire range.
        return array.reduce((result, el, i) => {
            // if the no. of elem per chunk has been reached (or first iteration), we add a new chunk (unless we've reached the max chunks)
            if (i % elem_per_array === 0 && result.length < chunks) {
                result.push([el]);
            } else {
                // we add the element to the last chunk if we've reached the max chunks or haven't reached the max elements per chunk.
                result[result.length - 1].push(el);
            }

            return result;
        }, []);
    }

    constructor() {

    }
}

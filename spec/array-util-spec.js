import { ArrayUtil } from "../util/array-util.js";
import * as assert from "assert";

describe('group_array_elements', () =>  {

    it('should return 3 arrays of length 4', () => {
        const actual = ArrayUtil.group_array_elements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],3);
        assert.deepStrictEqual(actual, [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]);
    });

    it('should return 2 arrays of length 2 and 1 array of length 1', () => {
        const actual = ArrayUtil.group_array_elements([1 , 2, 3, 4, 5], 3);
        assert.deepStrictEqual(actual, [[1, 2], [3, 4], [5]]);
    });

    it('should return 2 arrays of length 2 and 1 array of length 3', () => {
        const actual = ArrayUtil.group_array_elements([1, 2, 3, 4, 5, 6, 7], 3) ;
        assert.deepStrictEqual(actual,[[1, 2], [3, 4], [5, 6, 7]]);
    });

    it('should return 1 array of length 5, and 1 array of length 4', () => {
        const actual = ArrayUtil.group_array_elements([1, 2, 3, 4, 5, 6, 7, 8, 9], 2) ;
        assert.deepStrictEqual(actual,[[1, 2, 3, 4, 5], [6, 7, 8, 9]]);
    });

    it('should return 2 arrays of length 1 only', () => {
        const actual = ArrayUtil.group_array_elements([1, 2], 5) ;
        assert.deepStrictEqual(actual,[[1], [2]]);
    });

    it('should return 0 arrays', () => {
        const actual = ArrayUtil.group_array_elements([], 5) ;
        assert.deepStrictEqual(actual,[]);
    });

});

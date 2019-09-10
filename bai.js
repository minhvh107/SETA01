import * as assert from 'assert';
import { findString, sumMax } from './operations.js';

it("find the strings’ length that appear most in ['a', 'ab', 'abc', 'cd', 'def']", () => {
    assert.deepEqual(findString(['a', 'ab', 'abc', 'cd', 'def']), ['abc', 'def']);
});

it("find the strings’ length that appear most in ['a', 'ab', 'cd', 'def']", () => {
    assert.deepEqual(findString(['a', 'ab', 'cd', 'def']), ['def']);
});

it("find the strings’ length that appear most in ['a', 'ab', 'cd', 'b', 'c']", () => {
    assert.deepEqual(findString(['a', 'ab', 'cd', 'b', 'c']), ['ab', 'cd']);
});

it("sum of integers on top 2 in [1, 4, 2, 3, 5]", () => {
    assert.deepEqual(sumMax([1, 4, 2, 3, 5]), 9);
});

it("sum of integers on top 2 in [1, 4, 2, 3, 5]", () => {
    assert.deepEqual(sumMax([1, 5, 2, 7, 5]), 12);
});

it("sum of integers on top 2 in [1, 4, 2, 3, 5]", () => {
    assert.deepEqual(sumMax([1, 5, 2, 7, 5, 11, 12, 1, 3]), 23);
});
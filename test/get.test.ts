export {};
import my_axios from '../lib/my-axios';
import { test } from 'node:test';
import assert from 'node:assert';

test('test return value', async() => {
    assert.strictEqual(
        await my_axios.get('http://localhost:8080/'),
        'Hello world'
    );
});
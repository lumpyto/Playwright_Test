import {test, expect} from '@playwright/test'

test.skip('My First Test', async function({page}){
//
expect(12).toBe(12);

})

test('My Second Test', async function({page}){
//
expect(120).toBe(129);

})

test.skip('My Third Test', async function({page}){
//
expect('Lyubo is the best').toContain('Lyubo');
expect(true).toBeTruthy();

})

test('My Forth Test', async function({page}){
//
expect('Lyubo is the best').toContain('Lyubo');
expect(false).toBeFalsy();
})

test('My Фифтх Test', async function({page}){
//
expect('Lyubo is the best').toContain('Lyubo');
expect('This is a new opportunity'.includes('opportunity')).toBeTruthy();
})
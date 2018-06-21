window.vff = {};
window.vff.define = jest.fn();


test('Index.js defined and object', () => {
    require('../src/index');
    expect(window.vff.define.mock.calls.length).toBe(1);
    expect(window.vff.define.mock.calls[0][0]).toBe('vff-videobox');
});

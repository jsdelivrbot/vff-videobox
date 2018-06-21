import VideoBox from '../src/videobox';
jest.mock('../src/videobox');

beforeEach(() => {
    VideoBox.mockClear();
});


test('dummy test', () => {
    expect(true).toBe(true);
});

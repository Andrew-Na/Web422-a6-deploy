import { createMocks } from 'node-mocks-http';
import handler from '@/pages/api/hello';
import About from '@/pages/about';
import Home from '@/pages/index';
import { render } from '@testing-library/react';

describe('Test API ', () => {
    test('returns a user from the hello api', async () => {
        const { req, res } = createMocks({
          method: 'GET',
        });
      
        await handler(req, res);
      
        expect(res._getStatusCode()).toBe(200);
        expect(JSON.parse(res._getData())).toEqual(
            expect.objectContaining({
              "name":"John Doe",
            })
          );
      });
  });

  describe('Render Pages', () => {
    test('able to render about page', async () => {
        const {container} = render(<About />);
        const child = container
        expect(child).toBeTruthy();
  });
  test('able to render home page', async () => {
    const {container} = render(<Home />);
    const child = container
    expect(child).toBeTruthy();
});
});

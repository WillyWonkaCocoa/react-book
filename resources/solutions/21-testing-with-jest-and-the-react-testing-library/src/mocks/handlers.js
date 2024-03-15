import { rest } from 'msw';
import { items } from '../items';
import { addOrder } from './data';

const handlers = [
  rest.get('/api/items', (req, res, ctx) => res(ctx.json(items))),
  rest.get('/api/auth/current-user', (req, res, ctx) => (
    res(ctx.json({ access: 'associate', username: 'Tester' }))
  )),
  rest.post('/api/orders', async (req, res, ctx) => {
    addOrder(await req.json());
    return res(ctx.status(201));
  }),
];

export default handlers;

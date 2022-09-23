import cats from './routes/cats.js';
import candies from './routes/candies.js';
import sauces from './routes/sauces.js';
import notFound from './not-found.js';
import parse from './bodyParser.js'

const routes = {
  cats,
  candies,
  sauces,
};

const serverLog = (...args) => console.log('[server]', ...args);

export default async function (req, res) {
  const parts = req.url.split('/');
  if (parts.length && parts[1] === 'api') {
    req.body = await parse(req);
    const resource = routes[parts[parts.length - 1 ]];
    
    const route = resource[req.method.toLowerCase()];
    
    if (route == undefined) {
      notFound(req, res)
      return;
    }
    route(req, res);
    return;
    
  }
  notFound(req, res);
}

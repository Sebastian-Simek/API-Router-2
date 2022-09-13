import cats from './routes/cats.js';
import candies from './routes/candies.js';
import notFound from './not-found.js';
// import bodyParser from './bodyParser.js'
const routes = {
  cats,
  candies,
};

const serverLog = (...args) => console.log('[server]', ...args);

export default async function (req, res) {
  const parts = req.url.split('/');
  serverLog(parts);
  if (parts.length && parts[1] === 'api') {
    // req.body = await bodyParser(req);
    // serverLog(req.body)
    serverLog(routes[parts[2]])
    const resource = routes[parts[2]];
    
    const route = resource[req.method.toLowerCase()];
    
    route(req, res);
    return;
  }
  
  notFound(req, res);
}

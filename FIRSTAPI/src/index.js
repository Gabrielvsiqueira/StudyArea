const http = require('http');
const routes = require('../src/routes');
const { URL } = require('url');

const server = http.createServer((request, response) => {
    const parsedUrl = new URL(`http://localhost:3003${request.url}`);

    console.log(`Request Method: ${request.method} | Endpoint: ${parsedUrl.pathname}`);

    let { pathname } = parsedUrl;
    let id = null;

    const splitEndpoint = pathname.split('/').filter(Boolean);

    if (splitEndpoint.length > 1) {
        pathname = `/${splitEndpoint[0]}/:id`;
        id = splitEndpoint[1];
    }

    const route = routes.find(
        (routeObj) =>
            routeObj.endpoint === pathname && routeObj.method === request.method
    );

    if (route) {
        request.query = Object.fromEntries(parsedUrl.searchParams);
        if (id) {
            request.params = { id };
        }
        request.send = (statusCode, body) => {
            response.writeHead(statusCode, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify(body));
        };
        route.handler(request, response);
    } else {
        response.writeHead(404, { 'Content-type': 'text/html' });
        response.end(`Cannot ${request.method} ${parsedUrl.pathname}`);
    }
});

server.listen(3003, () => console.log('🔥 Server started at http://localhost:3003'));

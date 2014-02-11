var portApp = 8000;
var proxy = require('./lib/proxy-tamper').start({port: portApp});

// Tampering all the websites (they all should have a dot '.')
proxy.tamper(/\./, function (request) {

    // gzip encoding is not supported when tampering the body
    delete request.headers['accept-encoding'];

    request.onResponse(function (response) {
        var headers = response.headers;
        if (headers != undefined) {
            var content_type = headers['content-type'];
            if (content_type != undefined && content_type.indexOf("application/json") != -1) {
                console.log('[+] ' + request.url);
                console.log(response.body);
                console.log('\n');
            }
        }
        response.complete();
    });
});
console.log("Proxy server listening on port %d", portApp);
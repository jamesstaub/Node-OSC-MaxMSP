var http = require('http');

function getTestPersonaLoginCredentials(callback) {

    return http.get({
        host: 'personatestuser.org',
        path: '/email'
    }, function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {

            // Data reception is done, do whatever with it!
            var parsed = JSON.parse(body);
            callback({
                email: parsed.email,
                password: parsed.pass
            });
        });
    });

},

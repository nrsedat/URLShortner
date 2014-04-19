var benchrest = require('bench-rest');
  //var flow = 'http://localhost:8000/';  // can use as simple single GET

  // OR more powerfully define an array of REST operations with substitution
  // This does a unique PUT and then a GET for each iteration
  var flow = {
    main: [
      { post: 'http://localhost:3000/shorten', json: { url: 'http://www.example.com' }  }
      //,{ get: 'http://localhost:8000/foo_#{INDEX}' }
    ]
  };
  // There are even more flow options like setup and teardown, see detailed usage

  var runOptions = {
    limit: 100,     // concurrent connections
    iterations: 1000  // number of iterations to perform
  };
  benchrest(flow, runOptions)
    .on('error', function (err, ctxName) { console.error('Failed in %s with err: ', ctxName, err); })
    .on('end', function (stats, errorCount) {
      console.log('error count: ', errorCount);
      console.log('stats', stats);
    });
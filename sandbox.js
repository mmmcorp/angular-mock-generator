const assert = require('assert');
const path = require('path');

function rename (srcName, addition) {
  const parsed = path.parse(srcName);
  return [parsed.dir, '/', parsed.name, '.', addition, parsed.ext].join('');
}

const result = rename('test/is/true/sample.js', 'angular');
console.log(result);

assert(result === 'test/is/true/sample.angular.js');


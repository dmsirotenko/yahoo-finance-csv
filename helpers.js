const util = require('util');
const get = require('lodash/get');

const sleep = util.promisify(setTimeout);

function mapColumnValues(columns, data = {}) {
    return columns.reduce((acc, { header, field, formatter }) => {
        const value = get(data, field);

        acc[header] = formatter ? formatter(value) : value;

        return acc;
    }, {});
}

module.exports = { sleep, mapColumnValues };

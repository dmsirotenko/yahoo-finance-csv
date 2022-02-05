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

function extractEarnings(entries, key = 'earnings', separator = ',') {
    return entries
        .map(({ date, ...values }) => {
            const value = values[key]?.raw ?? 0;

            return `${date}:${value}`;
        })
        .join(separator);
}

module.exports = { sleep, mapColumnValues, extractEarnings };

const util = require('util');
const get = require('lodash/get');

const sleep = util.promisify(setTimeout);

function formatNumber(value, locale) {
    return new Intl.NumberFormat(locale, { useGrouping: false }).format(value);
}

function formatValue(value, locale = 'ru-RU') {
    if (typeof value === 'number') {
        return formatNumber(value, locale)
    }
    
    return value;
}

function mapColumnValues(columns, data = {}) {
    return columns.reduce((acc, { header, field, formatter }) => {
        const value = get(data, field);

        acc[header] = formatter ? formatter(value) : formatValue(value);

        return acc;
    }, {});
}

function extractEarnings(entries, key = 'earnings', separator = ',') {
    return entries
        .map(({ date, ...values }) => {
            const value = values[key]?.raw ?? 0;

            return `${date}:${formatValue(value)}`;
        })
        .join(separator);
}

module.exports = { sleep, mapColumnValues, extractEarnings };

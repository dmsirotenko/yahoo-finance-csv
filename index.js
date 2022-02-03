const fs = require('fs');
const path = require('path');
const assert = require('assert');

const axios = require('axios');
const axiosRetry = require('axios-retry');
const csv = require('fast-csv');
const random = require('lodash/random');

const { sleep, mapColumnValues } = require('./helpers');

const {
    PARSE_HEADERS,
    FORMAT_HEADERS,
    COLUMN_VALUES,
} = require('./config');

const [FILE_PATH] = process.argv.slice(2);

const input = path.resolve(FILE_PATH);

const { name, ext, dir } = path.parse(input);

assert.equal(ext, '.csv', 'Not a csv file');

const output = path.join(dir, `${name}-result${ext}`);

const yahoo = axios.create({
    baseURL: 'https://query1.finance.yahoo.com/v10/finance/quoteSummary',
    params: {
        modules: 'assetProfile,price,defaultKeyStatistics,earnings,financialData',
    },
    validateStatus(status) {
        return status === 200;
    },
});

axiosRetry(yahoo, {
    retries: 5,
    retryDelay: axiosRetry.exponentialDelay,
});

fs.createReadStream(path.resolve(input))
    .pipe(csv.parse({
        headers: PARSE_HEADERS,
        discardUnmappedColumns: true,
        strictColumnHandling: true,
        trim: true,
    }))
    .pipe(csv.format({
        headers: FORMAT_HEADERS,
    }))
    .transform(({ symbol }, next) => {
        yahoo.get(symbol)
            .then(async response => {
                const [data] = response.data.quoteSummary.result;

                const result = mapColumnValues(COLUMN_VALUES, data);

                await sleep(random(10));

                next(null, result);
            })
            .catch(next);
    })
    .pipe(fs.createWriteStream(output))
    .on('error', error => console.error(error))
    .on('end', () => process.exit());

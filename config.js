const PARSE_HEADERS = ['symbol'];

const COLUMN_VALUES = [
    { header: 'symbol', field: 'price.symbol' },
    { header: 'longName', field: 'price.longName' },

    { header: 'sector', field: 'assetProfile.sector' },
    { header: 'industry', field: 'assetProfile.industry' },
    { header: 'website', field: 'assetProfile.website' },
    { header: 'compensationRisk', field: 'assetProfile.compensationRisk' },
    { header: 'shareHolderRightsRisk', field: 'assetProfile.shareHolderRightsRisk' },
    { header: 'overallRisk', field: 'assetProfile.overallRisk' },

    { header: 'enterpriseValue', field: 'defaultKeyStatistics.enterpriseValue.raw' },
    { header: 'forwardPE', field: 'defaultKeyStatistics.forwardPE.raw' },
    { header: 'profitMargins', field: 'defaultKeyStatistics.profitMargins.raw' },
    { header: 'beta', field: 'defaultKeyStatistics.beta.raw' },
    { header: 'bookValue', field: 'defaultKeyStatistics.bookValue.raw' },
    { header: 'priceToBook', field: 'defaultKeyStatistics.priceToBook.raw' },
    { header: 'earningsQuarterlyGrowth', field: 'defaultKeyStatistics.earningsQuarterlyGrowth.raw' },
    { header: 'trailingEps', field: 'defaultKeyStatistics.trailingEps.raw' },
    { header: 'forwardEps', field: 'defaultKeyStatistics.forwardEps.raw' },
    { header: 'enterpriseToRevenue', field: 'defaultKeyStatistics.enterpriseToRevenue.raw' },
    { header: 'enterpriseToEbitda', field: 'defaultKeyStatistics.enterpriseToEbitda.raw' },

    { header: 'earningsYearly', field: 'earnings.financialsChart.yearly', formatter: JSON.stringify },
    { header: 'earningsQuarterly', field: 'earnings.financialsChart.quarterly', formatter: JSON.stringify },

    { header: 'targetHighPrice', field: 'financialData.targetHighPrice.raw' },
    { header: 'targetLowPrice', field: 'financialData.targetLowPrice.raw' },
    { header: 'targetMedianPrice', field: 'financialData.targetMedianPrice.raw' },
    { header: 'recommendationMean', field: 'financialData.recommendationMean.raw' },
    { header: 'recommendationKey', field: 'financialData.recommendationKey' },
    { header: 'ebitda', field: 'financialData.ebitda.raw' },
    { header: 'currentRatio', field: 'financialData.currentRatio.raw' },
    { header: 'totalRevenue', field: 'financialData.totalRevenue.raw' },
    { header: 'debtToEquity', field: 'financialData.debtToEquity.raw' },
    { header: 'returnOnAssets', field: 'financialData.returnOnAssets.raw' },
    { header: 'returnOnEquity', field: 'financialData.returnOnEquity.raw' },
    { header: 'earningsGrowth', field: 'financialData.earningsGrowth.raw' },
    { header: 'revenueGrowth', field: 'financialData.revenueGrowth.raw' },
]

const FORMAT_HEADERS = COLUMN_VALUES.map(({ header }) => header);

module.exports = {
    PARSE_HEADERS,
    FORMAT_HEADERS,
    COLUMN_VALUES,
};

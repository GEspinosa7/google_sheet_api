const express = require('express');

const { testConnection } = require('./controllers/test/testConnection');
const { getSpreadSheet } = require('./controllers/google/spreadsheet');

const router = express();

router.get('/test_server', testConnection);

router.get('/spreadsheet/:spreadsheetId', getSpreadSheet);

module.exports = router;
const { google } = require('googleapis');
const sheets = google.sheets('v4');

const { authorize } = require('./authorization');

async function getSpreadSheet(req, res) {
    const authClient = await authorize();

    const { spreadsheetId } = req.params;
    const { sheetName } = req.query;

    const range = `'${sheetName}'!A:A`;

    const reqIds = {
        spreadsheetId: spreadsheetId,
        range,
        auth: authClient
    };

    try {
        const idColumn = (await sheets.spreadsheets.values.get(reqIds)).data;

        let idList = [];
        for (let val in idColumn.values) {
            idList.push(idColumn.values[val].toString());
        }

        if (idList[0] == 'Id') {
            idList.splice(0, 1);
        }

        return res.status(200).json(idList);
    } catch (err) {
        return res.status(400).json({ error: err.message })
    }
}

module.exports = { getSpreadSheet };
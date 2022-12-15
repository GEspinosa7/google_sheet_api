async function testConnection(req, res) {

    const abap_structure = {
        RFCINT4: 345,
        RFCFLOAT: 1.23456789,
        RFCCHAR4: "ABCD",
        RFCDATE: "20180625", // ABAP date format
        // or RFCDATE: new Date('2018-06-25'), // as JavaScript Date object, with clientOption "date"
    };
    // ABAP table
    let abap_table = [abap_structure];


    try {
        return res.status(200).json({ success: abap_table })
    } catch (err) {
        returnres.status(400).json({ error: err.message })
    }
}

module.exports = { testConnection };
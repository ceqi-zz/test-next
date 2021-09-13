import Airtable from 'airtable'

export default function airtableHandler(req, res) {
    const {
        query: { date },
        method,
    } = req

    switch (method) {
        case 'GET':
            // Get data from your database
            let base = new Airtable({ apiKey: `${process.env.AIRTABLE_API_KEY}` }).base('appBZhe7wfpBWg4I3');

            base('ContainerBooking').find('recDg8ft0TghhOqxb', function (err, record) {
                if (err) { console.error(err); return; }
                res.status(200).json({ orderNumber: record.fields.OrderNumber })
            });
            break
        default:
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}




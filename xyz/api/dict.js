export default function dictHandler(req, res) {
    const {
        query: { word },
        method,
    } = req

    switch (method) {
        case 'GET':
            // Get data from your database
                res.status(200).json({ word, server: `${method}` })
            break
        default:
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}
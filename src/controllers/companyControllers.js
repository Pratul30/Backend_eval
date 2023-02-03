const services = require('../services/companyServices');
const  HTTPError  = require('../utils/error/HTTPError');

exports.saveData = async (req, res) => {
    try {
        const { urlLink } = req.body;
        const data = await services.saveData(urlLink);
        if (!data) throw new HTTPError('Error in saving data', 400);
        res.status(201).json(data);
    } catch (err) {
        if (err instanceof HTTPError) {
            res.status(err.code).json({ message: err.message });
        } else {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
};


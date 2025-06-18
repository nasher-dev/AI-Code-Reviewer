const aiService = require('../services/ai.service');

module.exports.getReview = async (req, res) => {
    const code = req.body.code;
    if (!code) {
        return res.status(400).json({ error: 'Prompt is required' });
    }
    const response = await aiService(code);
    // You may want to send the response back to the client, e.g.:
    // return res.json({ response });
    res.send(response);
};
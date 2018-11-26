module.exports = {
    /**
     * Show Article page
     * 
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    index(req, res, next) {
        return res.json({ msg: 'test' });
    }
};

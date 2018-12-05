module.exports = (err, req, res, next) => {
  if (err instanceof SyntaxError) {
    return res.status(500).json({ msg: 'Invalid data' });
  } else {
    next();
  }
};

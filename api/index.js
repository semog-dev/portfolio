let cachedHandler;

module.exports = async (req, res) => {
  if (!cachedHandler) {
    ({ reqHandler: cachedHandler } = await import('../dist/portfolio/server/server.mjs'));
  }
  return cachedHandler(req, res);
};

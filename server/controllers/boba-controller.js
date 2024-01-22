const showBobaStores = (req, res, next) => {
  res.status(200).json({
    stores: ['store-1', 'store-2'],
    status: 'ok'
  });
}

export default { showBobaStores };
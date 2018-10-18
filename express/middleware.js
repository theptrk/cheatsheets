const checkRequiredFields = fields => (req, res, next) => {
  let missingFields = fields.filter(field => req.body[field] === undefined)
  return missingFields.length === 0
    ? next()
    : res.send(`required fields not submitted ${missingFields}`)
}

const sauces = [{name: 'Carbonara', tasteLevel: 11}];

export default {
  get(req, res) {
    res.write(JSON.stringify(sauces));
    res.end();
  },
  post(req, res) {
    sauces.push(req.body)
    res.statusCode = 200
    res.write('success! Good job you are good at this!')
    res.end()
  },
  delete(req, res) {
    res.status = 400
    res.write('no deleting for you!')
    res.end();
  },
  put(req, res) {
    const updatedCat = sauces[sauces.findIndex((cat) => cat.name === req.body.name)]
    updatedCat.name = req.body.newName
    res.write(JSON.stringify(sauces))
    res.end()
  },

};
const cats = [{name: 'Marshal', Cuteness: 11}];

export default {
  get(req, res) {
    res.write(JSON.stringify(cats));
    res.end();
  },
  post(req, res) {
    cats.push(req.body)
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
    const updatedCat = cats[cats.findIndex((cat) => cat.name === req.body.name)]
    updatedCat.name = req.body.newName
    res.write(JSON.stringify(cats))
    res.end()
  },

};
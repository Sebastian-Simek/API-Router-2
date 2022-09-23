
const candies = [
  {name: 'mars', taste: 11}
]

export default {
  get(req, res) {
    res.write(JSON.stringify(candies));
    res.end();
  },
  post(req, res) {
    candies.push(req.body)
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
    const updatedCandy = candies[candies.findIndex((candy) => candy.name === req.body.name)]
    updatedCandy.name = req.body.newName
    res.write(JSON.stringify(candies))
    res.end()
  },

};

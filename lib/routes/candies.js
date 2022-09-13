const candies = [
  {name: 'mars', taste: 11}
]

export default {
  get(req, res) {
    res.write(JSON.stringify(candies));
    res.end();
  },
  post(req, res) {},
};

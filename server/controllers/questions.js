const axios = require('axios');
const config = require('../../config.js');

module.exports = {

  getAllQuestions: (req, res) => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/qa/questions',
      headers: {
        'Authorization': `${config.TOKEN}`
      },
      params: {
        'product_id': `${req.query.id}`,
        'page': 1,
        'count': 5
      }
    }).then(result => {
      console.log('test data!!!!', result.data)
      res.send(result.data);
    }).catch(err => console.log('error at get all questions', err));
  },

  markAnswerHelpful: (req, res) => {
    axios({
      method: 'put',
      url: `http://localhost:3000/qa/answers/${req.body.id}/helpful`,
      headers: {
        'Authorization': `${config.TOKEN}`
      }
    }).then(response => {
      res.send('success');
      res.end();
    }).catch(err => { console.log('err'); });
  },
  markQuestionHelpful: (req, res) => {
    axios({
      method: 'put',
      url: `https://localhost:3000/qa/questions/${req.body.id}/helpful`,
      headers: {
        'Authorization': `${config.TOKEN}`
      }
    }).then(response => {
      res.send('success');
      res.end();
    }).catch(err => { console.log('err'); });
  },
  postAnswer: (req, res) => {
    var data = {body: req.body.body, name: req.body.name, email: req.body.email}
    var questionID = parseInt(req.body.questionID)
    axios({
      method: 'post',
      url: `https://localhost:3000/qa/questions/${questionID}/answers`,
      headers: {
        'Authorization': `${config.TOKEN}`
      },
      data: data
    }).then(response => {
        console.log('made it to then')
        res.send(response.data);
      }).catch(err => console.log(err, 'err in post A'));
  },

  postQuestion: (req, res) => {
    console.log(req.body, 'data in post q')
    var data = {body: req.body.body, name: req.body.name, email: req.body.email, product_id: parseInt(req.body.product_id)}
    console.log(data, 'data in post q after mod')
    axios({
      method: 'post',
      url: 'https://localhost:3000/qa/questions',
      headers: {
        'Authorization': `${config.TOKEN}`
      },
      data: data
    }).then(response => {
        console.log('made it to then')
        res.send(response.data);
      }).catch(err => console.log(err, 'err in post Q'));
  },
  reportAnswer: (req, res) => {
    axios({
      method: 'put',
      url: `https://localhost:3000/qa/answers/${req.body.answer_id}/report`,
      headers: {
        'Authorization': `${config.TOKEN}`
      }
    }).then(response => {
      res.send('success');
      res.end();
    }).catch(err => { console.log('err'); });
  }

}
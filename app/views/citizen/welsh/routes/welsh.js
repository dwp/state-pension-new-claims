const express = require('express');
const router = express.Router()



router.post('/welsh/contact', (req, res) => {
  res.redirect('/welsh/language-speak')
})
;

router.post('/welsh/language-speak', (req, res) => {
  res.redirect('/welsh/language-write')
})
;

router.post('/welsh/large-print', (req, res) => {
  res.redirect('/welsh/bank')
})
;


// Language write to large print

router.post('/welsh/language-write', function(req, res) {
  if (req.body['language-write'] === 'english') {
    res.redirect('alt-formats');
  } else {
    res.redirect('large-print');
  }
});

// Alternative formats

router.post('/welsh/alt-formats', function(req, res) {
  if (req.body['alt-formats'] === 'yes') {
    res.redirect('alt-formats-choice');
  } else {
    res.redirect('bank');
  }
});


  module.exports = router;

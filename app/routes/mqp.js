const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

// Disallowance
router.post('/details-answer', function(request, response) {

  var exports = request.session.data['details']
  if (details.includes("none")){
      response.redirect("/claim-disallowed")
  } else {
      response.redirect("/remove-claim")
  }
})


module.exports = router

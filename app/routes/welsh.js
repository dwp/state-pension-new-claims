const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

function addTimelineEvent(req, eventData) {
  req.session.data['timelineHistory'] = req.session.data['timelineHistory'] || []

  req.session.data['timelineHistory'].push(eventData)

  if (req.session.data['timelineHistory'].length > 10) {
    req.session.data['timelineHistory'].shift()
  }
}

router.post('/welsh/contact-pref-spoken', (req, res) => {
  req.session.data['showBanner'] = 'yes'
  req.session.data['lastChanged'] = 'spoken'

  addTimelineEvent(req, {
    type: 'spoken',
    value: req.session.data['contactPrefSpoken']
  })

  res.redirect('record-contact')
})

router.post('/welsh/contact-pref-written', (req, res) => {
  req.session.data['showBanner'] = 'yes'
  req.session.data['lastChanged'] = 'written'

  addTimelineEvent(req, {
    type: 'written',
    value: req.session.data['contactPrefWritten']
  })

  res.redirect('record-contact')
})

router.post('/welsh/contact-pref-alt-format', (req, res) => {
  req.session.data['showBanner'] = 'yes'
  req.session.data['lastChanged'] = 'altFormat'

  addTimelineEvent(req, {
    type: 'altFormat',
    value: req.session.data['altFormat']
  })

  res.redirect('record-contact')
})

router.use((req, res, next) => {
  if (req.path !== '/welsh/record-contact') {
    req.session.data['showBanner'] = 'no'
    req.session.data['lastChanged'] = null
  }
  next()
})

module.exports = router

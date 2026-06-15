const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

function addTimelineEvent(req, eventData) {
  req.session.data['timelineHistory'] = req.session.data['timelineHistory'] || []
  req.session.data['timelineHistory'].push(eventData)

  if (req.session.data['timelineHistory'].length > 10) {
    req.session.data['timelineHistory'].shift()
  }
}

router.use((req, res, next) => {
  if (req.session.data['savedSpokenLanguage'] === undefined) {
    req.session.data['savedSpokenLanguage'] = 'english'
  }
  if (req.session.data['savedWrittenLanguage'] === undefined) {
    req.session.data['savedWrittenLanguage'] = 'english'
  }
  if (req.session.data['savedAltFormat'] === undefined) {
    req.session.data['savedAltFormat'] = 'none'
  }
  next()
})

router.post('/welsh/contact-pref-spoken', (req, res) => {
  const oldValue = req.session.data['savedSpokenLanguage']
  const newValue = req.body['contactPrefSpoken']

  if (oldValue !== newValue) {
    req.session.data['showBanner'] = 'yes'
    req.session.data['lastChanged'] = 'spoken'

    addTimelineEvent(req, {
      type: 'spoken',
      value: newValue
    })

    req.session.data['savedSpokenLanguage'] = newValue
  } else {
    req.session.data['showBanner'] = 'no'
  }

  res.redirect('record-contact')
})

router.post('/welsh/contact-pref-written', (req, res) => {
  const oldValue = req.session.data['savedWrittenLanguage']
  const newValue = req.body['contactPrefWritten']

  if (oldValue !== newValue) {
    req.session.data['showBanner'] = 'yes'
    req.session.data['lastChanged'] = 'written'

    addTimelineEvent(req, {
      type: 'written',
      value: newValue
    })

    req.session.data['savedWrittenLanguage'] = newValue
  } else {
    req.session.data['showBanner'] = 'no'
  }

  res.redirect('record-contact')
})

router.post('/welsh/contact-pref-alt-format', (req, res) => {
  const oldValue = req.session.data['savedAltFormat']
  const newValue = req.body['altFormat']

  if (oldValue !== newValue) {
    req.session.data['showBanner'] = 'yes'
    req.session.data['lastChanged'] = 'altFormat'

    addTimelineEvent(req, {
      type: 'altFormat',
      value: newValue
    })

    req.session.data['savedAltFormat'] = newValue
  } else {
    req.session.data['showBanner'] = 'no'
  }

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

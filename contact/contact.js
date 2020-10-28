var Airtable = require('airtable')
var base = new Airtable({ apiKey: 'keyVmZRFl4GrOMtGS' }).base(
  'appbqdLTu3TWgAupV'
)

const contactFormElement = document.getElementById('contact-form')

contactFormElement.addEventListener('submit', (event) => {
  event.preventDefault()

  const contactNameElement = document.getElementById('contact-name')
  const contactEmailElement = document.getElementById('contact-email')
  const contactPhoneElement = document.getElementById('contact-phone')
  const contactSubjectElement = document.getElementById('contact-subject')
  const contactMessageElement = document.getElementById('contact-message')

  const contactData = {
    name: contactNameElement.value,
    email: contactEmailElement.value,
    phone: contactPhoneElement.value,
    subject: contactSubjectElement.value,
    message: contactMessageElement.value
  }

  base('Contact').create(contactData, (err, record) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(record)
  })
})

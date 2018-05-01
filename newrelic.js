'use strict'

exports.config = {
  app_name: ['newrelic-test-delete-this'],
  license_key: process.env.NEWRELIC_KEY,
  logging: {
    level: 'info'
  },
  allow_all_headers: true
}

'use strict'

var theme = require('jsonresume-theme-eloquent')

var resume = require('./keidrych.json')
process.stdout.write(theme.render(resume))

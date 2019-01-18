'use strict'

const got = require('got');
const Env = use('Env')

class CurrencyController {
  async rate() {
    try {
      const CURRENCY_API_KEY = Env.get('CURRENCY_API_KEY')
      const response = await got(
        `https://openexchangerates.org/apix/latest.json?app_id=${CURRENCY_API_KEY}&symbols=egp&show_alternative=true`, 
        {
          json: true
        }
      );
      return {
        data: {
          egp: response.body.rates['EGP'],
        },
        duration: response.timings.phases.total
      };
    } catch (error) {
      console.log(error)
      return {
        error: 'Could not make it',
        message: error.toString()
      }
    }
  }
}

module.exports = CurrencyController

'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')
const API_BASE_URL = '/api'

Route.get(`${API_BASE_URL}/rates`, 'CurrencyController.rate')

Route.any('*', 'NuxtController.render')
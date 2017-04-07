/**
 * domainRouter is a nested router of apiRouter
 * so the path prefix is /api/domain
 *
 * for exmaple: /xx => /api/domain/xx
 */

'use strict'

const domainRouter = require('koa-router')()
const domainService = require('../../services/domain')

domainRouter.get('/list', domainService.list)

module.exports = domainRouter

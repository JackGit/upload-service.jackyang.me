/**
 * resourceRouter is a nested router of apiRouter
 * so the path prefix is /api/resource
 *
 * for exmaple: /xx => /api/resource/xx
 */

'use strict'

const resourceRouter = require('koa-router')()
const resourceService = require('../../services/resource')

resourceRouter.get('/:bucket/:key', resourceService.stat)
resourceRouter.delete('/:bucket/:key', resourceService.delete)
resourceRouter.post('/batchDelete', resourceService.batchDelete)

module.exports = resourceRouter

import os from 'os'
import logging from "@config/logging"

const winston = require('winston')
const GrayLog = require('winston-graylog2')
const dataFormat = 'YYYY-MM-DD HH:mm:ss'

const logger = winston.createLogger({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp({
        format: dataFormat
      }),
      winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`+(info.splat!==undefined?`${info.splat}`:" "))
    ),
    defaultMeta: { service: logging.name },
    transports: [],
})

logger.add(new GrayLog({
  name: logging.name,
  level: logging.level,
  silent: false,
  handleExceptions: false,
  graylog: {
    servers: [
      {
        host: logging.host, 
        port: logging.port
      }
    ],
    hostname: os.hostname(),
    facility: logging.stream
  },
  staticMeta: {
    service: logging.name
  }
}))
  
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp({
          format: dataFormat
        }),
        winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`+(info.splat!==undefined?`${info.splat}`:" "))
      ),
    }));
}

export default logger
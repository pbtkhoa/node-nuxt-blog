const winston = require('winston');
const { createLogger, format, transports } = winston;

const enumerateErrorFormat = format(info => {
  if (info.message instanceof Error) {
    info.message = Object.assign(
      {
        message: info.message.message,
        stack: info.message.stack
      },
      info.message
    );
  }

  if (info instanceof Error) {
    return Object.assign(
      {
        message: info.message,
        stack: info.stack
      },
      info
    );
  }

  return info;
});

module.exports = createLogger({
  format: format.combine(enumerateErrorFormat(), format.json()),
  transports: [
    new transports.File({
      filename: 'logs/combined.log'
    })
  ]
});

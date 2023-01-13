import "@lib/VariableManager";

export default {
    name: process.env.APP_NAME,
    level: process.env.GRAYLOG_LEVEL,
    host: process.env.GRAYLOG_HOST,
    port: parseInt(process.env.GRAYLOG_PORT),
    stream: process.env.GRAYLOG_STREAM
}
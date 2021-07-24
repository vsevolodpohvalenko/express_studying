import colors from 'colors'

export const requestTime = (req, res, next) => {
    req.requestTime = Date.now()
    next()
}

export const logger = (req, res, next) => {
    console.log(colors.bgGreen.black(`Req.time: ${req.requestTime}`))
    next()
}

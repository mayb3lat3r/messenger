import express from 'express'
import config from 'config'

const app = express()

const PORT = process.env.PORT || config.get('PORT')

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
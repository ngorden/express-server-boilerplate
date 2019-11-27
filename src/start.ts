import './LoadEnv'
import app from './Server'

const port = process.env.PORT || 3000
app.listen(port, () => console.log("Express Server Listening on port: " + port))

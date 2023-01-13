import { app } from './app'
import server from '@config/server'

const port = server.port

app.listen(port, () => console.log(`Server running on port ${port}`))
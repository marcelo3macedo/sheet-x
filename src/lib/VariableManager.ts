import dotenv from 'dotenv'
import path from 'path'
import { ENVIROMENT_PROD } from '@constants/enviroments'

const enviroment = process.env.npm_lifecycle_event === ENVIROMENT_PROD ? 
    'production' : ''
    
dotenv.config({
    path: path.resolve(__dirname, "../../", `${enviroment}.env`),
    encoding: 'utf-8'
})
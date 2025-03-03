import '../scss/style.scss'
import { updateTime } from './timer.js'
import {buttonDeleteAllElement} from './variables.js'
import { handleDeleteAll } from './handlers.js'

setInterval(updateTime, 1000)
buttonDeleteAllElement.addEventListener('click', handleDeleteAll)

import anelController from './controller/anelController.js'
import brincoController from './controller/brincoController.js'
import colarController from './controller/colarController.js'
import pulseiraController from './controller/pulseiraController.js'


export default function adicionarRotas(servidor) {

    servidor.use(anelController )
    servidor.use(brincoController )
    servidor.use(colarController )
    servidor.use(pulseiraController )

}

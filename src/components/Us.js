import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from 'react-responsive'
const Us = () => {
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 });
    return (
        <div className='section'>
            {isMobile ? (
                <div className='section-us_xs'>
                    <span className='section-subtitle'>Qu&eacute; decirte...</span>
                    <h1 className='section-title'>SOBRE NOSOTROS</h1>
                    <div className='container_xs'>
                        <p>Todo empezó en 2016. Éramos muchos menos que ahora; teníamos muchas ganas; y teníamos recetas de pan y de burger que nos convencían.
                            Abrimos nuestro primer local en 26 de marzo. Y a partir de ahí, fue todo crecimiento, aprendizaje y muchas, muchísimas burgers.
                            Y todo gracias a vos. Sí, a vos. Que estás leyendo. Y que pedís nuestras burgers. Y que nos bancás en cada paso que damos.</p>
                        <p>Queremos que todos los que entren a RUDY, se vayan más felices de lo que entraron. Tenemos pasión por generar la mejor experiencia posible al cliente, lo hacemos ofreciendo nuestros productos caseros cuidando siempre la calidad.</p>
                        <button><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></button>
                    </div>
                </div>) :
                (
                    <div className='section-us'>
                        <span className='section-subtitle'>Qu&eacute; decirte...</span>
                        <h1 className='section-title'>SOBRE NOSOTROS</h1>
                        <div className='container'>
                            <p>Todo empezó en 2016. Éramos muchos menos que ahora; teníamos muchas ganas; y teníamos recetas de pan y de burger que nos convencían.
                                Abrimos nuestro primer local en 26 de marzo. Y a partir de ahí, fue todo crecimiento, aprendizaje y muchas, muchísimas burgers.
                                Y todo gracias a vos. Sí, a vos. Que estás leyendo. Y que pedís nuestras burgers. Y que nos bancás en cada paso que damos.</p>
                            <p>Queremos que todos los que entren a RUDY, se vayan más felices de lo que entraron. Tenemos pasión por generar la mejor experiencia posible al cliente, lo hacemos ofreciendo nuestros productos caseros cuidando siempre la calidad. Vivimos el servicio como si se lo estuviésemos brindando a nuestras familias, con esa energía tan linda que nos destaca. Contribuimos en el crecimiento personal / profesional de todos nosotros usando como faro nuestros valores. Estamos convencidos que a pesar de ser todos jóvenes podemos asumir responsabilidades y lograr los objetivos, reafirmando día a día que la excelencia que buscamos, sin diversión no es excelencia. Innovamos continuamente, nos equivocamos, nos hacemos cargo y aprendemos de nuestros errores para seguir creciendo. Nunca nos quedamos cómodos con nada, nos escuchamos entre todos buscando oportunidades para cambiar y mejorar. Nos enloquece cuando las cosas no salen bien y hacemos lo que sea para resolverlo. Sentimos orgullo por lo que hacemos, nos destacamos. Aspiramos siempre al crecimiento sostenible generando cada vez más oportunidades para todos.</p>
                            <button><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></button>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default Us
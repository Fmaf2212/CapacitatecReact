import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'; // Importar motion
import { event_data } from '../../data';
import AllEvents from './all-events';

const event_items = event_data.filter(event => event.event_grid);

const EventArea = () => {
    const controls = useAnimation();
    // Definir la animación de slide-up con framer-motion
    const slideUp = {
        hidden: { opacity: 0, y: 100 }, // Estado inicial (oculto)
        visible: { opacity: 1, y: 0 }  // Estado final (visible)
    };

    useEffect(() => {
        controls.start("visible");
    }, [controls]);

    return (
        <div className="edu-event-area event-area-1 section-gap-equal">
            <div className="container">
                <motion.div
                    initial="hidden"     // Estado inicial
                    animate={controls}    // Estado tras la animación
                    transition={{ delay: 0.3, duration: 1.2 }} // Retraso y duración
                    variants={slideUp}    // Variantes de la animación
                >
                    <div className="row g-5">
                        <AllEvents itemsPerPage={6} items={event_items} />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default EventArea;
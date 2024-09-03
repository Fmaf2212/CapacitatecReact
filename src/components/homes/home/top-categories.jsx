import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const category_contents = {
    title: 'Top Categories',
    text: 'Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore',
    category_items: [
        {
            delay: '50',
            color: 'color-primary-style',
            icon: 'icon-9',
            title: 'Business Management'
        },
        {
            delay: '100',
            color: 'color-secondary-style',
            icon: 'icon-10 art-design',
            title: 'Arts & Design'
        },
        {
            delay: '150',
            color: 'color-extra01-style',
            icon: 'icon-11 personal-development',
            title: 'Personal Development'
        },
        {
            delay: '50',
            color: 'color-tertiary-style',
            icon: 'icon-12 health-fitness',
            title: 'Health & Fitness'
        },
        {
            delay: '100',
            color: 'color-extra02-style',
            icon: 'icon-13 data-science',
            title: 'Data Science'
        },
        {
            delay: '150',
            color: 'color-extra03-style',
            icon: 'icon-14',
            title: 'Marketing'
        },
        {
            delay: '50',
            color: 'color-extra04-style',
            icon: 'icon-15',
            title: 'Business & Finance'
        },
        {
            delay: '100',
            color: 'color-extra05-style',
            icon: 'icon-16 computer-science',
            title: 'Computer Science'
        },
        {
            delay: '150',
            color: 'color-extra06-style',
            icon: 'icon-17 video-photography',
            title: 'Video & Photography'
        }
    ]
}

const { title, text, category_items } = category_contents;

const TopCategories = () => {
    const controls = useAnimation();
    const ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const { top } = ref.current.getBoundingClientRect();
                if (top < window.innerHeight) {
                    controls.start({ opacity: 1, y: 0 });
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check the scroll position initially

        return () => window.removeEventListener('scroll', handleScroll);
    }, [controls]);
    return (
        <div className="edu-categorie-area categorie-area-2 edu-section-gap">
            <div className="container">
                <motion.div
                    ref={ref}
                    className="section-title section-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 1, delay: 0 }}
                >
                    <h2 className="title">{title}</h2>
                    <span className="shape-line"><i className="icon-19"></i></span>
                    <p>{text}</p>
                </motion.div>

                <div className="row g-5">
                    {category_items.map((item, i) => (
                        <motion.div
                            ref={ref}
                            key={i}
                            className="col-lg-4 col-md-6"
                            initial={{ opacity: 0, y: 50 }}
                            animate={controls}
                            transition={{ duration: 1, delay: item.delay/1000 }}
                        >
                            <div className={`categorie-grid categorie-style-2 ${item.color}`}>
                                <div className="icon">
                                    <i className={item.icon}></i>
                                </div>
                                <div className="content">
                                    <Link href="/course-style-1">
                                        <h5 className="title">{item.title}</h5>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopCategories;
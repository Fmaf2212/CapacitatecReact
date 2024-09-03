import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const HeroArea = () => {
  const { mouseDirection, mouseReverse } = useMouseMoveUI();
  
  return (
    <div className="hero-banner hero-style-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="banner-content">
              <motion.h1
                className="title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Get <span className="color-secondary">2500+</span> <br />Best Online Courses From EduBlink
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
              >
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.
              </motion.p>
              <motion.div
                className="banner-btn"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
              >
                <Link href="/course-style-1" className="edu-btn">
                  Find courses <i className="icon-4"></i>
                </Link>
              </motion.div>
              <ul className="shape-group">
                <motion.li
                  className="shape-1 scene"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, x: mouseReverse(25).x, y: mouseReverse(25).y }}
                  transition={{ duration: 1 }}
                >
                  <img src="/assets/images/about/shape-13.png" alt="Shape" />
                </motion.li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-thumbnail">
              <div
                className="thumbnail sal-animate"
                data-sal-delay="500"
                data-sal="slide-left"
                data-sal-duration="1000"
              >
                <img src="/assets/images/banner/girl-1.webp" alt="Girl Image" />
              </div>
              <div
                className="instructor-info sal-animate"
                data-sal-delay="600"
                data-sal="slide-up"
                data-sal-duration="1000"
              >
                <div className="inner">
                  <h5 className="title">Instructor</h5>
                  <div className="media">
                    <div className="thumb">
                      <img src="/assets/images/banner/author-1.png" alt="Images" />
                    </div>
                    <div className="content">
                      <span>200+</span> Instructors
                    </div>
                  </div>
                </div>
              </div>
              <ul className="shape-group">
                <motion.li
                  className="shape-2 scene"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, x: mouseDirection(25).x, y: mouseDirection(25).y }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  <img src="/assets/images/about/shape-16.png" alt="Shape" />
                </motion.li>
                <motion.li
                  className="shape-3 scene"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, x: mouseReverse(20).x, y: mouseReverse(20).y }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  <span className="circle-shape d-block"></span>
                </motion.li>
                <motion.li
                  className="shape-5 scene"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, x: mouseReverse(25).x, y: mouseReverse(25).y }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  <img src="/assets/images/about/shape-13.png" alt="Shape" />
                </motion.li>
                <motion.li
                  className="shape-6 scene"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, x: mouseDirection(20).x, y: mouseDirection(20).y }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  <img src="/assets/images/about/shape-18.png" alt="Shape" />
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-7">
        <img src="/assets/images/about/h-1-shape-01.png" alt="Shape" />
      </div>
    </div>
  );
};

export default HeroArea;

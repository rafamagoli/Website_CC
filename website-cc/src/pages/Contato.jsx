import { motion } from 'framer-motion'
import Contact from '../sections/contact/Contact.jsx'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -10, transition: { duration: 0.3, ease: 'easeIn' } },
}

export default function Contato() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Contact />
    </motion.div>
  )
}

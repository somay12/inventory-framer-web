import { motion } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'

export function ScrollProgress() {
  const { scrollY } = useScroll()
  const scaleX = useTransform(scrollY, [0, 1000], [0, 1])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-brand-500 z-50 origin-left"
      style={{ scaleX }}
    />
  )
}

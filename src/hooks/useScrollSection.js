import { useState, useEffect } from 'react'
import { getActiveSection } from '../utils/scrollToSection'

export const useScrollSection = (sections) => {
  const [activeSection, setActiveSection] = useState(sections[0])

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = getActiveSection(sections, window.scrollY)
      if (currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections, activeSection])

  return activeSection
} 
export const scrollToSection = (sectionId: string): void => {
  if (typeof window === "undefined") return;
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

export const getActiveSection = (sections: string[], scrollPosition: number = typeof window !== "undefined" ? window.scrollY : 0): string => {
  if (typeof window === "undefined") return sections[0] || "";
  const adjustedScrollPosition = scrollPosition + 100;

  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const offsetTop = element.offsetTop;
      const offsetHeight = element.offsetHeight;

      if (adjustedScrollPosition >= offsetTop && adjustedScrollPosition < offsetTop + offsetHeight) {
        return section;
      }
    }
  }
  
  return sections[0] || "";
}; 
export const handleScroll = (id: string): void => {
    const element = document.getElementById(id);
  
    if (element) {
      const offset = 70; // Sesuaikan dengan tinggi navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };
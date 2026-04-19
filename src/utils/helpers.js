// Smooth scroll utility
export const smoothScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

// Format text utilities
export const capitalizeFirst = (text) => text.charAt(0).toUpperCase() + text.slice(1);

// Nexaura Studios - Vanilla JavaScript

class NexauraApp {
    constructor() {
        this.init();
    }

    init() {
        this.setupThemeToggle();
        this.setupSmoothScrolling();
        this.setupIntersectionObserver();
        this.setup3DOrb();
        this.setupParticles();
        this.setupContactForm();
        this.setupMouseInteractions();
    }

    // Theme Toggle Functionality
    setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        const html = document.documentElement;
        const sunIcon = themeToggle.querySelector('.sun-icon');
        const moonIcon = themeToggle.querySelector('.moon-icon');

        // Check for saved theme preference or default to dark
        const savedTheme = localStorage.getItem('theme') || 'dark';
        html.className = savedTheme;
        this.updateThemeIcons(savedTheme, sunIcon, moonIcon);

        themeToggle.addEventListener('click', () => {
            const currentTheme = html.className;
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            html.className = newTheme;
            localStorage.setItem('theme', newTheme);
            this.updateThemeIcons(newTheme, sunIcon, moonIcon);
        });
    }

    updateThemeIcons(theme, sunIcon, moonIcon) {
        if (theme === 'dark') {
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        } else {
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        }
    }

    // Smooth Scrolling
    setupSmoothScrolling() {
        // Navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Intersection Observer for Animations
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const animationType = element.getAttribute('data-animate');
                    const delay = parseInt(element.getAttribute('data-delay') || 0);

                    setTimeout(() => {
                        element.classList.add('animate-on-scroll', 'animated');
                        if (animationType) {
                            element.classList.add(animationType);
                        }
                    }, delay);

                    observer.unobserve(element);
                }
            });
        }, observerOptions);

        // Observe all elements with data-animate attribute
        document.querySelectorAll('[data-animate]').forEach(el => {
            observer.observe(el);
        });

        // Feature cards sequential animation
        this.setupFeatureCardsAnimation();
    }

    setupFeatureCardsAnimation() {
        const featureCards = document.querySelectorAll('.feature-card');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    featureCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0) scale(1)';
                        }, index * 200);
                    });
                    observer.disconnect();
                }
            });
        }, { threshold: 0.2 });

        const whyUsSection = document.getElementById('why-us');
        if (whyUsSection) {
            observer.observe(whyUsSection);
        }

        // Initialize cards as hidden
        featureCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px) scale(0.9)';
            card.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        });
    }

    // 3D Orb Interactions
    setup3DOrb() {
        const orb = document.getElementById('hero-orb');
        if (!orb) return;

        let mouseX = 0;
        let mouseY = 0;

        const handleMouseMove = (e) => {
            const rect = orb.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            mouseX = (e.clientX - centerX) / 20;
            mouseY = (e.clientY - centerY) / 20;
        };

        const updateOrb = () => {
            orb.style.transform = `
                rotateX(${mouseY}deg) 
                rotateY(${mouseX}deg) 
                translateZ(0px)
            `;
            requestAnimationFrame(updateOrb);
        };

        document.addEventListener('mousemove', handleMouseMove);
        updateOrb();
    }

    // Particle System
    setupParticles() {
        const particlesContainer = document.querySelector('.particles-container');
        if (!particlesContainer) return;

        // Create particles
        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: 8px;
                height: 8px;
                background: var(--primary);
                border-radius: 50%;
                filter: blur(2px);
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) rotate(${i * 30}deg) translateX(200px);
                animation: spin ${15 + i * 2}s linear infinite;
                opacity: 0;
                animation-delay: ${0.5 + i * 0.1}s;
            `;
            
            // Fade in particle
            setTimeout(() => {
                particle.style.opacity = '1';
            }, (0.5 + i * 0.1) * 1000);

            particlesContainer.appendChild(particle);
        }
    }

    // Contact Form
    setupContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Simulate form submission
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.background = 'var(--gradient-secondary)';
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                    form.reset();
                }, 2000);
            }, 1500);
            
            console.log('Form submitted:', data);
        });
    }

    // Mouse Interactions
    setupMouseInteractions() {
        // Magnetic effect for buttons
        document.querySelectorAll('.btn-primary, .btn-outline').forEach(button => {
            button.addEventListener('mouseenter', (e) => {
                e.target.style.transform = 'translateY(-2px) scale(1.05)';
            });
            
            button.addEventListener('mouseleave', (e) => {
                e.target.style.transform = '';
            });
        });

        // Card hover effects
        document.querySelectorAll('.feature-card, .project-card').forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                e.target.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', (e) => {
                e.target.style.transform = '';
            });
        });

        // Social links glow effect
        document.querySelectorAll('.social-link').forEach(link => {
            link.addEventListener('mouseenter', (e) => {
                e.target.style.boxShadow = 'var(--shadow-glow)';
            });
            
            link.addEventListener('mouseleave', (e) => {
                e.target.style.boxShadow = '';
            });
        });
    }
}

// Utility Functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Parallax Effect
function setupParallax() {
    let ticking = false;

    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.bg-effect');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick);
}

// Performance Optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    new NexauraApp();
    setupParallax();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Window resize handler
window.addEventListener('resize', debounce(() => {
    // Handle responsive adjustments
    const orb = document.getElementById('hero-orb');
    if (orb && window.innerWidth < 768) {
        orb.style.transform = 'scale(0.8)';
    } else if (orb) {
        orb.style.transform = '';
    }
}, 250));

// Export for global access
window.NexauraApp = NexauraApp;
window.scrollToSection = scrollToSection;
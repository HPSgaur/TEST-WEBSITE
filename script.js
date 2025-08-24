// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load content from db.js
    if (window.db) {
        loadHeroContent();
        loadServicesContent();
        loadProductsContent();
        loadFeatureSectionsContent();
        loadAboutContent();
        loadTestimonialsContent();
        loadContactContent();
        loadFooterContent();
    } else {
        console.error('Database not loaded. Check if db.js is properly included.');
    }
    
    // Function to load feature sections content
     function loadFeatureSectionsContent() {
         if (!window.db || !window.db.featureSections) return;
         
         const featureSections = window.db.featureSections;
         
         // Load WhatsApp API section
         if (featureSections.whatsappApi) {
             const section = document.querySelector('#whatsapp-api');
             if (section) {
                 const featureList = section.querySelector('.feature-list');
                 if (featureList && featureSections.whatsappApi.features) {
                     featureList.innerHTML = featureSections.whatsappApi.features
                         .map(feature => `<li>${feature}</li>`)
                         .join('');
                 }
                 
                 const description = section.querySelector('.feature-description');
                 if (description && featureSections.whatsappApi.description) {
                     description.textContent = featureSections.whatsappApi.description;
                 }
                 
                 const image = section.querySelector('.feature-image img');
                 if (image && featureSections.whatsappApi.image) {
                     image.src = featureSections.whatsappApi.image;
                     image.alt = featureSections.whatsappApi.title || 'WhatsApp API Solutions';
                 }
             }
         }
         
         // Load Quotes Agent section
         if (featureSections.quotesAgent) {
             const section = document.querySelector('#quotes-agent');
             if (section) {
                 const featureList = section.querySelector('.feature-list');
                 if (featureList && featureSections.quotesAgent.features) {
                     featureList.innerHTML = featureSections.quotesAgent.features
                         .map(feature => `<li>${feature}</li>`)
                         .join('');
                 }
                 
                 const description = section.querySelector('.feature-description');
                 if (description && featureSections.quotesAgent.description) {
                     description.textContent = featureSections.quotesAgent.description;
                 }
                 
                 const image = section.querySelector('.feature-image img');
                 if (image && featureSections.quotesAgent.image) {
                     image.src = featureSections.quotesAgent.image;
                     image.alt = featureSections.quotesAgent.title || 'Quotes Agent Services';
                 }
             }
         }
         
         // Load Agent Services section
         if (featureSections.agentServices) {
             const section = document.querySelector('#agent-services');
             if (section) {
                 const featureList = section.querySelector('.feature-list');
                 if (featureList && featureSections.agentServices.features) {
                     featureList.innerHTML = featureSections.agentServices.features
                         .map(feature => `<li>${feature}</li>`)
                         .join('');
                 }
                 
                 const description = section.querySelector('.feature-description');
                 if (description && featureSections.agentServices.description) {
                     description.textContent = featureSections.agentServices.description;
                 }
                 
                 const image = section.querySelector('.feature-image img');
                 if (image && featureSections.agentServices.image) {
                     image.src = featureSections.agentServices.image;
                     image.alt = featureSections.agentServices.title || 'Agent Services';
                 }
             }
         }
         
         // Load Calling Assistant section
         if (featureSections.callingAssistant) {
             const section = document.querySelector('#calling-assistant');
             if (section) {
                 const featureList = section.querySelector('.feature-list');
                 if (featureList && featureSections.callingAssistant.features) {
                     featureList.innerHTML = featureSections.callingAssistant.features
                         .map(feature => `<li>${feature}</li>`)
                         .join('');
                 }
                 
                 const description = section.querySelector('.feature-description');
                 if (description && featureSections.callingAssistant.description) {
                     description.textContent = featureSections.callingAssistant.description;
                 }
                 
                 const image = section.querySelector('.feature-image img');
                 if (image && featureSections.callingAssistant.image) {
                     image.src = featureSections.callingAssistant.image;
                     image.alt = featureSections.callingAssistant.title || 'Calling Assistant Services';
                 }
             }
         }
         
         // Load Build Website section
         if (featureSections.buildWebsite) {
             const section = document.querySelector('#build-website');
             if (section) {
                 const featureList = section.querySelector('.feature-list');
                 if (featureList && featureSections.buildWebsite.features) {
                     featureList.innerHTML = featureSections.buildWebsite.features
                         .map(feature => `<li>${feature}</li>`)
                         .join('');
                 }
                 
                 const description = section.querySelector('.feature-description');
                 if (description && featureSections.buildWebsite.description) {
                     description.textContent = featureSections.buildWebsite.description;
                 }
                 
                 const image = section.querySelector('.feature-image img');
                 if (image && featureSections.buildWebsite.image) {
                     image.src = featureSections.buildWebsite.image;
                     image.alt = featureSections.buildWebsite.title || 'Build Your First Website';
                 }
             }
         }
         
         // Load Bing Agents section
         if (featureSections.bingAgents) {
             const section = document.querySelector('#bing-agents');
             if (section) {
                 const featureList = section.querySelector('.feature-list');
                 if (featureList && featureSections.bingAgents.features) {
                     featureList.innerHTML = featureSections.bingAgents.features
                         .map(feature => `<li>${feature}</li>`)
                         .join('');
                 }
                 
                 const description = section.querySelector('.feature-description');
                 if (description && featureSections.bingAgents.description) {
                     description.textContent = featureSections.bingAgents.description;
                 }
                 
                 const image = section.querySelector('.feature-image img');
                 if (image && featureSections.bingAgents.image) {
                     image.src = featureSections.bingAgents.image;
                     image.alt = featureSections.bingAgents.title || 'Bing Agents';
                 }
             }
         }
     }
    
    // Variables
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            this.innerHTML = mainNav.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.mobile-menu-btn') && !event.target.closest('.main-nav') && mainNav && mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            if (mobileMenuBtn) {
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
    
    // Get testimonials after they're dynamically loaded
    let testimonials = [];
    setTimeout(() => {
        testimonials = document.querySelectorAll('.testimonial');
        // Initialize testimonial slider if testimonials exist
        if (testimonials.length > 0) {
            initTestimonialSlider();
        }
    }, 500); // Small delay to ensure dynamic content is loaded
    
    // Sticky header on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.padding = '15px 0';
            header.style.backgroundColor = 'rgba(45, 52, 54, 0.95)';
        } else {
            header.style.padding = '20px 0';
            header.style.backgroundColor = 'var(--dark-color)';
        }
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Simple auto-scrolling testimonial slider
    function initTestimonialSlider() {
        let currentTestimonial = 0;
        
        function showNextTestimonial() {
            if (testimonials.length > 0) {
                testimonials[currentTestimonial].scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'start'
                });
                
                currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            }
        }
        
        // Change testimonial every 5 seconds
        setInterval(showNextTestimonial, 5000);
    }
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelectorAll('input[type="text"]')[1].value;
            const message = this.querySelector('textarea').value;
            
            // Simple form validation
            if (name && email && message) {
                // In a real application, you would send this data to a server
                alert(`Thank you for your message, ${name}! We will get back to you soon.`);
                this.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
    
    // Add animation to service cards
    function initServiceCardAnimations() {
        const serviceCards = document.querySelectorAll('.service-card');
        
        if (serviceCards.length === 0) {
            // If service cards aren't loaded yet, try again after a short delay
            setTimeout(initServiceCardAnimations, 500);
            return;
        }
        
        function checkScroll() {
            serviceCards.forEach(card => {
                const cardTop = card.getBoundingClientRect().top;
                const triggerBottom = window.innerHeight * 0.8;
                
                if (cardTop < triggerBottom) {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                }
            });
        }
        
        // Set initial styles for service cards
        serviceCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
        
        // Check scroll position on load and scroll
        window.addEventListener('scroll', checkScroll);
        checkScroll(); // Initial check
    }
    
    // Initialize service card animations
    setTimeout(initServiceCardAnimations, 500); // Small delay to ensure dynamic content is loaded
    
    // Mobile menu toggle functionality
    const createMobileMenu = () => {
        const nav = document.querySelector('nav');
        const hamburger = document.createElement('div');
        hamburger.className = 'hamburger';
        hamburger.innerHTML = '<span></span><span></span><span></span>';
        
        header.querySelector('.container').appendChild(hamburger);
        
        // Add styles for mobile menu
        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 768px) {
                nav {
                    display: none;
                    width: 100%;
                    text-align: center;
                }
                
                nav.active {
                    display: block;
                }
                
                nav ul {
                    flex-direction: column;
                }
                
                nav ul li {
                    margin: 10px 0;
                }
                
                .hamburger {
                    display: block;
                    cursor: pointer;
                }
                
                .hamburger span {
                    display: block;
                    width: 25px;
                    height: 3px;
                    background-color: white;
                    margin: 5px 0;
                    transition: all 0.3s ease;
                }
                
                .hamburger.active span:nth-child(1) {
                    transform: rotate(45deg) translate(5px, 5px);
                }
                
                .hamburger.active span:nth-child(2) {
                    opacity: 0;
                }
                
                .hamburger.active span:nth-child(3) {
                    transform: rotate(-45deg) translate(7px, -7px);
                }
            }
            
            @media (min-width: 769px) {
                .hamburger {
                    display: none;
                }
            }
        `;
        
        document.head.appendChild(style);
        
        // Toggle menu on hamburger click
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    };
      
      // Initialize mobile menu
      createMobileMenu();
});

// Function to load about content
function loadAboutContent() {
    if (!window.db || !window.db.about) return;
    
    const aboutSection = document.querySelector('#about');
    if (!aboutSection) return;
    
    const aboutDescription = aboutSection.querySelector('.about-description');
    if (aboutDescription && window.db.about.description) {
        aboutDescription.textContent = window.db.about.description;
    }
    
    const aboutImage = aboutSection.querySelector('.about-image img');
    if (aboutImage && window.db.about.image) {
        aboutImage.src = window.db.about.image;
        aboutImage.alt = window.db.about.title || 'About Us';
    }
}

// Function to load hero content
function loadHeroContent() {
    if (!window.db || !window.db.hero) return;
    
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;
    
    const heroTitle = heroSection.querySelector('.hero-title');
    if (heroTitle && window.db.hero.title) {
        heroTitle.textContent = window.db.hero.title;
    }
    
    const heroSubtitle = heroSection.querySelector('.hero-subtitle');
    if (heroSubtitle && window.db.hero.subtitle) {
        heroSubtitle.textContent = window.db.hero.subtitle;
    }
    
    const heroCta = heroSection.querySelector('.hero-cta');
    if (heroCta && window.db.hero.cta) {
        heroCta.textContent = window.db.hero.cta;
    }
    
    const whatsappBtn = heroSection.querySelector('.whatsapp-btn');
    if (whatsappBtn && window.db.hero.whatsappCta) {
        whatsappBtn.textContent = window.db.hero.whatsappCta;
        if (window.db.hero.whatsappNumber && window.db.hero.whatsappText) {
            const encodedText = encodeURIComponent(window.db.hero.whatsappText);
            whatsappBtn.href = `https://wa.me/${window.db.hero.whatsappNumber}?text=${encodedText}`;
        }
    }
}

// Function to load services content
function loadServicesContent() {
    if (!window.db || !window.db.services) return;
    
    const servicesGrid = document.querySelector('#services-grid');
    if (!servicesGrid) return;
    
    servicesGrid.innerHTML = '';
    
    window.db.services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <div class="service-content">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <a href="${service.link}" class="btn primary-btn">Learn More</a>
            </div>
        `;
        servicesGrid.appendChild(serviceCard);
    });
}

// Function to load products content
function loadProductsContent() {
    if (!window.db || !window.db.products) return;
    
    const productsGrid = document.querySelector('#products-grid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    window.db.products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        // Create bullet points HTML
        const bulletPoints = product.bullets ? 
            `<ul class="product-bullets">
                ${product.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
            </ul>` : '';
            
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-content">
                <h3>${product.title}</h3>
                ${bulletPoints}
                <a href="${product.link}" class="btn">${product.cta || 'View Details'}</a>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}
}

// Function to load testimonials content
function loadTestimonialsContent() {
    if (!window.db || !window.db.testimonials) return;
    
    const testimonialsContainer = document.querySelector('.testimonial-slider');
    if (!testimonialsContainer) return;
    
    testimonialsContainer.innerHTML = '';
    
    window.db.testimonials.forEach(testimonial => {
        const testimonialDiv = document.createElement('div');
        testimonialDiv.className = 'testimonial';
        testimonialDiv.innerHTML = `
            <div class="testimonial-image">
                <img src="${testimonial.image}" alt="${testimonial.name}">
            </div>
            <p class="testimonial-quote">${testimonial.quote}</p>
            <div class="client-info">
                <h4>${testimonial.name}</h4>
                <p>${testimonial.position}, ${testimonial.company}</p>
            </div>
        `;
        testimonialsContainer.appendChild(testimonialDiv);
    });
}

// Function to load contact content
function loadContactContent() {
    if (!window.db || !window.db.contact) return;
    
    const contactSection = document.querySelector('#contact');
    if (!contactSection) return;
    
    const addressElement = contactSection.querySelector('.address');
    if (addressElement && window.db.contact.address) {
        addressElement.textContent = window.db.contact.address;
    }
    
    const phoneElement = contactSection.querySelector('.phone');
    if (phoneElement && window.db.contact.phone) {
        phoneElement.textContent = window.db.contact.phone;
        const phoneLink = phoneElement.closest('a');
        if (phoneLink) {
            phoneLink.href = `tel:${window.db.contact.phone.replace(/\s+/g, '')}`;
        }
    }
    
    const emailElement = contactSection.querySelector('.email');
    if (emailElement && window.db.contact.email) {
        emailElement.textContent = window.db.contact.email;
        const emailLink = emailElement.closest('a');
        if (emailLink) {
            emailLink.href = `mailto:${window.db.contact.email}`;
        }
    }
    
    const hoursElement = contactSection.querySelector('.hours');
    if (hoursElement && window.db.contact.hours) {
        hoursElement.textContent = window.db.contact.hours;
    }
}

// Function to load footer content
function loadFooterContent() {
    if (!window.db || !window.db.footer) return;
    
    const footer = document.querySelector('footer');
    if (!footer) return;
    
    // Quick Links
    const quickLinks = footer.querySelector('.quick-links ul');
    if (quickLinks && window.db.footer.quickLinks) {
        quickLinks.innerHTML = window.db.footer.quickLinks
            .map(link => `<li><a href="${link.link}">${link.text}</a></li>`)
            .join('');
    }
    
    // Service Links
    const serviceLinks = footer.querySelector('.service-links ul');
    if (serviceLinks && window.db.footer.services) {
        serviceLinks.innerHTML = window.db.footer.services
            .map(link => `<li><a href="${link.link}">${link.text}</a></li>`)
            .join('');
    }
    
    // Social Links
    const socialLinks = footer.querySelector('.social-icons');
    if (socialLinks && window.db.footer.social) {
        socialLinks.innerHTML = window.db.footer.social
            .map(link => `<a href="${link.link}" target="_blank"><i class="${link.icon}"></i></a>`)
            .join('');
    }
    
    // Copyright
    const copyright = footer.querySelector('.copyright');
    if (copyright && window.db.footer.copyright) {
        copyright.innerHTML = window.db.footer.copyright;
    }
}
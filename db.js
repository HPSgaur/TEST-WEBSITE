// Local database for the website content
window.db = {
    hero: {
        title: "Transform Your Business with AI-Powered Solutions",
        subtitle: "Cutting-edge AI tools and services to help your business thrive in the digital age",
        cta: "Explore Services",
        whatsappCta: "Chat on WhatsApp",
        whatsappNumber: "+919876543210",
        whatsappText: "Hello, I'm interested in GrowwBizz AI services!"
    },
    services: [
        {
            id: 1,
            title: "WhatsApp API",
            description: "Integrate powerful WhatsApp business APIs to streamline customer communication and support.",
            icon: "fab fa-whatsapp",
            link: "#whatsapp-api",
            learnMore: "Learn More"
        },
        {
            id: 2,
            title: "CRM/Leads",
            description: "Comprehensive customer relationship management and lead generation solutions.",
            icon: "fas fa-users",
            link: "#crm-leads",
            learnMore: "Learn More"
        },
        {
            id: 3,
            title: "Agents/Automation",
            description: "AI-powered customer service agents that handle inquiries 24/7 with human-like interactions.",
            icon: "fas fa-robot",
            link: "#agent-services",
            learnMore: "Learn More"
        },
        {
            id: 4,
            title: "Website Dev",
            description: "Custom website solutions with modern design and functionality tailored to your business needs.",
            icon: "fas fa-laptop-code",
            link: "#build-website",
            learnMore: "Learn More"
        },
        {
            id: 5,
            title: "Voice/Calling Agents",
            description: "Smart calling solutions with voice recognition and automated follow-ups for your business.",
            icon: "fas fa-phone-alt",
            link: "#calling-assistant",
            learnMore: "Learn More"
        },
        {
            id: 6,
            title: "Data/Analytics",
            description: "Comprehensive data analysis and business intelligence solutions to drive informed decisions.",
            icon: "fas fa-chart-line",
            link: "#data-analytics",
            learnMore: "Learn More"
        }
    ],
    products: [
        {
            id: 1,
            title: "WhatsApp Business API Integration",
            image: "placeholder.svg",
            bullets: [
                "Seamless integration with your existing systems",
                "Automated responses and customer support",
                "Analytics and reporting dashboard"
            ],
            cta: "View Details",
            link: "https://whatsapp.groupbiz.com/login"
        },
        {
            id: 2,
            title: "AI Customer Service Agent",
            image: "placeholder.svg",
            bullets: [
                "24/7 customer support automation",
                "Natural language processing capabilities",
                "Seamless handoff to human agents when needed"
            ],
            cta: "View Details",
            link: "#"
        },
        {
            id: 3,
            title: "Business Intelligence Dashboard",
            image: "placeholder.svg",
            bullets: [
                "Real-time data visualization",
                "Customizable reporting tools",
                "Actionable insights for business growth"
            ],
            cta: "View Details",
            link: "#"
        },
        {
            id: 4,
            title: "Voice Assistant Integration",
            image: "placeholder.svg",
            bullets: [
                "Natural voice interaction for your business",
                "Multi-language support",
                "Custom voice and brand personality"
            ],
            cta: "View Details",
            link: "#"
        }
    ],
    featureSections: {
        whatsappApi: {
            title: "WhatsApp API Integration",
            description: "Seamlessly integrate WhatsApp Business API into your existing systems for enhanced customer communication.",
            image: "placeholder.svg",
            features: [
                "Official WhatsApp Business API integration",
                "Automated responses and chatbots",
                "Multi-agent support system",
                "Analytics and reporting dashboard",
                "CRM integration capabilities"
            ]
        },
        quotesAgent: {
            title: "Automated Quotation Agent",
            description: "AI-powered quotation system that generates accurate quotes instantly based on customer requirements.",
            image: "placeholder.svg",
            features: [
                "Instant quote generation",
                "Customizable templates",
                "Integration with CRM systems",
                "Multi-currency support",
                "Approval workflow automation"
            ]
        },
        agentServices: {
            title: "AI Agent Services",
            description: "Complete AI-powered customer service solution for businesses of all sizes.",
            image: "placeholder.svg",
            features: [
                "24/7 customer support automation",
                "Natural language processing capabilities",
                "Seamless handoff to human agents",
                "Multi-channel support (email, chat, social)",
                "Custom training for your business needs"
            ]
        },
        callingAssistant: {
            title: "Voice Calling Assistant",
            description: "Advanced voice assistant technology that handles calls, schedules appointments, and provides information.",
            image: "placeholder.svg",
            features: [
                "Natural voice interaction",
                "Call routing and management",
                "Appointment scheduling",
                "Information delivery",
                "Integration with your business systems"
            ]
        },
        buildWebsite: {
            title: "Custom Website Development",
            description: "Professional website design and development services tailored to your business needs.",
            image: "placeholder.svg",
            features: [
                "Responsive design for all devices",
                "SEO optimization",
                "Content management system",
                "E-commerce capabilities",
                "Ongoing support and maintenance"
            ]
        },
        bingAgents: {
            title: "Data Analytics Solutions",
            description: "Comprehensive data analysis and business intelligence solutions to drive informed decisions.",
            image: "placeholder.svg",
            features: [
                "Real-time data visualization",
                "Customizable reporting tools",
                "Actionable insights for business growth",
                "Integration with existing data sources",
                "Predictive analytics capabilities"
            ]
        }
    },
    about: {
        title: "About GrowwBizz AI",
        description: "GrowwBizz AI is a cutting-edge AI agency specializing in business automation, customer service solutions, and data analytics. Our mission is to help businesses of all sizes leverage the power of artificial intelligence to improve efficiency, enhance customer experiences, and drive growth.",
        image: "placeholder.svg"
    },
    testimonials: [
        {
            id: 1,
            name: "Rajesh Kumar",
            position: "CEO, TechSolutions India",
            company: "TechSolutions",
            image: "placeholder.svg",
            quote: "GrowwBizz AI transformed our customer service operations. Their WhatsApp API integration has increased our response rate by 80% and customer satisfaction scores are at an all-time high."
        },
        {
            id: 2,
            name: "Priya Sharma",
            position: "Marketing Director",
            company: "Global Retail Ltd",
            image: "placeholder.svg",
            quote: "The AI agents have been a game-changer for our business. We're handling 3x the customer inquiries with the same team size, and our customers love the instant responses."
        },
        {
            id: 3,
            name: "Amit Patel",
            position: "Operations Manager",
            company: "Logistics Pro",
            image: "placeholder.svg",
            quote: "The data analytics solution provided by GrowwBizz AI has given us insights we never had before. We've optimized our routes and reduced delivery times by 30%."
        },
        {
            id: 4,
            name: "Sunita Reddy",
            position: "Customer Service Head",
            company: "RetailMart",
            image: "placeholder.svg",
            quote: "The voice calling assistant has reduced our call handling time by 45%. Our team can now focus on complex issues while the AI handles routine inquiries."
        },
        {
            id: 5,
            name: "Vikram Singh",
            position: "CTO",
            company: "FinTech Innovations",
            image: "placeholder.svg",
            quote: "The integration capabilities of GrowwBizz AI solutions are impressive. We connected their system with our existing infrastructure with minimal disruption."
        },
        {
            id: 6,
            name: "Ananya Desai",
            position: "Digital Transformation Lead",
            company: "Healthcare Solutions",
            image: "placeholder.svg",
            quote: "From implementation to ongoing support, the GrowwBizz AI team has been exceptional. They truly understand our business needs and deliver solutions that work."
        }
    ],
    contact: {
        address: "123 Tech Park, Whitefield, Bangalore, Karnataka 560066",
        phone: "+91 98765 43210",
        email: "info@growwbizz.ai",
        hours: "Monday - Friday: 9:00 AM - 6:00 PM",
        formPlaceholders: {
            name: "Your Name",
            email: "Your Email",
            subject: "Subject",
            message: "Your Message",
            button: "Send Message"
        }
    },
    footer: {
        quickLinks: [
            { text: "Home", link: "#home" },
            { text: "About Us", link: "#about" },
            { text: "Services", link: "#services" },
            { text: "Products", link: "#products" },
            { text: "Contact", link: "#contact" },
            { text: "Admin", link: "admin-login.html" }
        ],
        services: [
            { text: "WhatsApp API", link: "#whatsapp-api" },
            { text: "CRM/Leads", link: "#crm-leads" },
            { text: "Agents/Automation", link: "#agent-services" },
            { text: "Website Dev", link: "#build-website" },
            { text: "Voice/Calling Agents", link: "#calling-assistant" },
            { text: "Data/Analytics", link: "#data-analytics" }
        ],
        social: [
            { icon: "fab fa-facebook-f", link: "#" },
            { icon: "fab fa-twitter", link: "#" },
            { icon: "fab fa-linkedin-in", link: "#" },
            { icon: "fab fa-instagram", link: "#" }
        ],
        copyright: "© 2023 GrowwBizz AI. All rights reserved."
    },
    users: [
        {
            id: 1,
            username: "admin",
            password: "admin123",
            name: "Admin User"
        }
    ]
};
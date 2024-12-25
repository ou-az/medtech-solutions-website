require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');

const app = express();

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layout/main');
app.use(expressLayouts);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Custom middleware to make some variables available to all templates
app.use((req, res, next) => {
    res.locals.currentPath = req.path;
    next();
});

// Routes
app.get('/', (req, res) => {
    res.render('pages/index', {
        title: 'MedTech Solutions - Advanced Medical Systems',
        products: products,
        testimonials: testimonials
    });
});

app.get('/products', (req, res) => {
    res.render('pages/products', {
        title: 'Our Products',
        products: products
    });
});

app.get('/services', (req, res) => {
    res.render('pages/services', {
        title: 'Our Services',
        services: services
    });
});

app.get('/about', (req, res) => {
    res.render('pages/about', {
        title: 'About Us',
        companyProfile: companyProfile
    });
});

app.get('/contact', (req, res) => {
    res.render('pages/contact', {
        title: 'Contact Us'
    });
});

// Data
const companyProfile = {
    name: 'MedTech Solutions',
    founded: '2020',
    mission: 'Revolutionizing healthcare through advanced technology and AI-driven solutions',
    vision: 'To be the global leader in secure, efficient, and intelligent medical systems',
    values: [
        'Innovation in Healthcare',
        'Patient Data Security',
        'Regulatory Compliance',
        'Continuous Improvement',
        'Healthcare Excellence'
    ]
};

const products = [
    {
        id: 1,
        name: 'Advanced Medical System',
        description: 'State-of-the-art medical system with AI-driven diagnostics and secure patient data management',
        features: [
            'HIPAA Compliant Security',
            'AI-Powered Diagnostics',
            'Real-time Patient Monitoring',
            'Advanced Data Analytics',
            'Multi-layer Encryption'
        ],
        price: 'Custom Quote',
        image: '/images/medical-system.jpg'
    },
    {
        id: 2,
        name: 'Healthcare Analytics Platform',
        description: 'Comprehensive analytics platform for healthcare providers with ML capabilities',
        features: [
            'Predictive Analytics',
            'Patient Outcome Tracking',
            'Resource Optimization',
            'Custom Reporting',
            'Integration APIs'
        ],
        price: 'Starting at $999/month',
        image: '/images/analytics-platform.jpg'
    }
];

const services = [
    {
        id: 1,
        name: 'System Implementation',
        description: 'Full-service implementation of our medical systems',
        features: [
            'Requirements Analysis',
            'System Configuration',
            'Data Migration',
            'Staff Training',
            '24/7 Support'
        ],
        price: 'Custom Quote'
    },
    {
        id: 2,
        name: 'Security Consulting',
        description: 'Expert security consulting for healthcare organizations',
        features: [
            'Security Assessment',
            'Compliance Audit',
            'Risk Management',
            'Security Training',
            'Ongoing Monitoring'
        ],
        price: 'Starting at $5,000'
    }
];

const testimonials = [
    {
        id: 1,
        name: 'Dr. Sarah Johnson',
        role: 'Chief of Medicine',
        organization: 'Metropolitan Hospital',
        quote: 'The Advanced Medical System has transformed our patient care workflow. The AI-driven diagnostics have significantly improved our accuracy and efficiency.',
        image: '/images/testimonial1.jpg'
    },
    {
        id: 2,
        name: 'James Wilson',
        role: 'IT Director',
        organization: 'Healthcare Systems Inc.',
        quote: 'The security features and HIPAA compliance of the system give us complete peace of mind. The support team is exceptional.',
        image: '/images/testimonial2.jpg'
    }
];

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

# MedTech Solutions Company Website

A modern, responsive company website built with Node.js and Express, showcasing our healthcare technology solutions, products, and services.

## Features

- Responsive design using Bootstrap 5
- Dynamic content rendering with EJS templates
- Contact form with validation
- Interactive UI elements and animations
- Mobile-friendly navigation
- SEO-friendly structure

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd company-website
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```
PORT=3000
```

4. Start the server:
```bash
npm start
```

The website will be available at `http://localhost:3000`

## Project Structure

```
company-website/
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
├── views/
│   ├── layout/
│   │   └── main.ejs
│   └── pages/
│       ├── index.ejs
│       ├── products.ejs
│       ├── services.ejs
│       ├── about.ejs
│       └── contact.ejs
├── app.js
├── package.json
└── README.md
```

## Pages

1. **Home (/)**: Landing page with company overview, featured products, and testimonials
2. **Products (/products)**: Detailed product listings and specifications
3. **Services (/services)**: Available services and implementation process
4. **About (/about)**: Company history, team, and achievements
5. **Contact (/contact)**: Contact form and company location

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- Bootstrap 5
- Font Awesome
- Custom CSS animations
- Intersection Observer API

## Development

To start the development server with nodemon:

```bash
npm run dev
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Email: info@medtechsolutions.com
- Phone: (555) 123-4567
- Address: 123 Innovation Drive, Silicon Valley, CA 94025

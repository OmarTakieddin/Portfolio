import React from 'react';
// Directly import from the library or use relative paths for your components

// Correct way to import from node_modules
import { Button } from 'radix-ui/react-button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@radix-ui/react-card';
import { Badge } from '@radix-ui/react-badge';

// If you have utilities in the `lib` folder, import like this (adjust the relative path as needed)
import { cn } from './lib/utils'; // Assuming utils.js is inside the `lib` folder in the `src` directory

// Animation library import from framer-motion
import { motion } from 'framer-motion';

// Icons from lucide-react
import {
    Laptop,
    Briefcase,
    GraduationCap,
    Code,
    Mail,
    Github,
    Linkedin,
    Twitter,
    ChevronRight,
    ArrowRight
} from 'lucide-react';


// --- Helper Data ---
const experiences = [
    {
        title: 'Front-End Developer',
        company: 'Freelance',
        location: 'Damascus, Syria',
        date: '2022 - Present',
        description: [
            'Developed and maintained responsive websites and web applications.',
            'Collaborated with clients to define project requirements and deliver solutions.',
            'Utilized HTML, CSS, JavaScript, and React to create user-friendly interfaces.',
            'Optimized websites for performance and accessibility.',
        ],
    },
    {
        title: 'IT Support Technician',
        company: 'Smart Systems',
        location: 'Damascus, Syria',
        date: '2020 - 2022',
        description: [
            'Provided technical support to clients, resolving hardware and software issues.',
            'Configured and maintained computer systems and networks.',
            'Assisted in the implementation of new IT projects.',
            'Trained users on software applications and hardware usage.',
        ],
    },
];

const educations = [
    {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'University of the People',
        location: 'Pasadena, CA, USA (Online)',
        date: '2021 - Present',
        description: ['Currently pursuing a Bachelor\'s degree with a focus on web development and software engineering.'],
    },
    {
        degree: 'High School Diploma',
        institution: 'Al-Mutanabbi High School',
        location: 'Damascus, Syria',
        date: '2018',
        description: [],
    },
];

const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Tailwind CSS',
    'Next.js',
    'Git',
    'Responsive Design',
    'Web Accessibility',
    'UI/UX Principles',
    'Problem Solving',
    'Communication',
    'Figma'
];

const projects = [
    {
        title: 'E-commerce Website',
        description: 'Developed a full-stack e-commerce website with user authentication, product catalog, shopping cart, and checkout functionality.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
        link: '#', // Replace with actual project link
        image: 'https://placehold.co/600x400/EEE/31343C', // Placeholder
    },
    {
        title: 'Personal Portfolio Website',
        description: 'Designed and built my personal portfolio website to showcase my skills, projects, and experience.',
        technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
        link: '#', // Replace
        image: 'https://placehold.co/600x400/EEE/31343C', // Placeholder
    },
    {
        title: 'Task Management App',
        description: 'Created a task management application to help users organize their tasks, set deadlines, and track progress.',
        technologies: ['React', 'Redux', 'Firebase'],
        link: '#', // Replace
        image: 'https://placehold.co/600x400/EEE/31343C', // Placeholder
    },
];

// --- Animation Variants ---
const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeInOut' } },
};

const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
};

// --- Components ---

const Header = () => {
    return (
        <header className="py-4 border-b border-gray-800 bg-gray-900/50 backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <a href="#" className="text-xl font-bold text-white">
                    Omar Takieddin
                </a>
                <nav className="hidden md:block">
                    <ul className="flex space-x-6">
                        <li>
                            <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#experience" className="text-gray-300 hover:text-white transition-colors">
                                Experience
                            </a>
                        </li>
                        <li>
                            <a href="#education" className="text-gray-300 hover:text-white transition-colors">
                                Education
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="text-gray-300 hover:text-white transition-colors">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* Mobile Menu (Simplified for this exercise) */}
                <div className="md:hidden">
                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                        Contact
                    </a>
                </div>
            </div>
        </header>
    );
};

const HomeSection = () => {
    return (
        <section id="home" className="py-20 md:py-32 bg-gray-950">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2 text-center md:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        Omar Takieddin
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
                        className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6"
                    >
                        Front-End Developer & Web Enthusiast
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.4 }}
                        className="text-gray-300 mb-8"
                    >
                        Crafting modern, responsive, and scalable web experiences.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.6 }}
                    >
                        <Button
                            variant="outline"
                            size="lg"
                            className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 hover:text-blue-300 border-blue-500/50"
                        >
                            <a href="#projects" className="flex items-center gap-2">
                                View My Work <ArrowRight className="w-5 h-5" />
                            </a>
                        </Button>
                    </motion.div>
                </div>
                <div className="md:w-1/2">
                    <motion.img
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        src="https://placehold.co/400x400/EEE/31343C" // Placeholder image
                        alt="Omar Takieddin"
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

const AboutSection = () => {
    return (
        <section id="about" className="py-20 md:py-32 bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInVariants}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
                >
                    About Me
                </motion.h2>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInVariants}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-gray-300 text-lg leading-relaxed"
                >
                    I&apos;m Omar Takieddin, a passionate front-end developer based in Damascus, Syria. With a solid
                    foundation in computer science and hands-on experience in web development and IT support, I
                    build user-centric applications that perform beautifully across devices. Currently pursuing my
                    Bachelor&apos;s degree in Computer Science from the University of the People, I’m always eager to
                    learn and collaborate on exciting web projects.
                </motion.p>
            </div>
        </section>
    );
};

const ExperienceSection = () => {
    return (
        <section id="experience" className="py-20 md:py-32 bg-gray-950">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInVariants}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
                >
                    Experience
                </motion.h2>
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            variants={cardVariants}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <Card className="bg-gray-900 border-gray-800">
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <Briefcase className="w-8 h-8 text-blue-400" />
                                        <div>
                                            <CardTitle className="text-white">{exp.title}</CardTitle>
                                            <CardDescription className="text-gray-400">
                                                {exp.company}, {exp.location}
                                            </CardDescription>
                                            <CardDescription className="text-gray-500">{exp.date}</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                                        {exp.description.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const EducationSection = () => {
    return (
        <section id="education" className="py-20 md:py-32 bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInVariants}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
                >
                    Education
                </motion.h2>
                <div className="space-y-8">
                    {educations.map((edu, index) => (
                         <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            variants={cardVariants}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <Card className="bg-gray-900 border-gray-800">
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <GraduationCap className="w-8 h-8 text-blue-400" />
                                        <div>
                                            <CardTitle className="text-white">{edu.degree}</CardTitle>
                                            <CardDescription className="text-gray-400">
                                                {edu.institution}, {edu.location}
                                            </CardDescription>
                                            <CardDescription className="text-gray-500">{edu.date}</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    {edu.description.length > 0 && (
                                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                                            {edu.description.map((desc, i) => (
                                                <li key={i}>{desc}</li>
                                            ))}
                                        </ul>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const SkillsSection = () => {
    return (
        <section id="skills" className="py-20 md:py-32 bg-gray-950">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInVariants}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
                >
                    Skills
                </motion.h2>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInVariants}
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    {skills.map((skill, index) => (
                        <Badge
                            key={index}
                            variant="secondary"
                            className="bg-blue-500/20 text-blue-300 border-blue-500/50 px-4 py-2 rounded-full"
                        >
                            <Code className='inline-block w-4 h-4 mr-1' />
                            {skill}
                        </Badge>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-20 md:py-32 bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInVariants}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
                >
                    Projects
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            variants={cardVariants}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <Card className="bg-gray-900 border-gray-800 hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-white">{project.title}</CardTitle>
                                    <CardDescription className="text-gray-400">
                                        {project.technologies.join(' | ')}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover rounded-md mb-4"
                                    />
                                    <p className="text-gray-300 mb-4">{project.description}</p>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
                                    >
                                        View Project <ChevronRight className="w-4 h-4" />
                                    </a>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 md:py-32 bg-gray-950">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInVariants}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
                >
                    Contact Me
                </motion.h2>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInVariants}
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-8"
                >
                    <div className="text-center md:text-left">
                        <p className="text-gray-300 mb-4">
                            Feel free to reach out to me for any collaboration opportunities, questions, or just to say
                            hello!
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-gray-300">
                                <Mail className="w-5 h-5 text-blue-400" />
                                <span>Email: omar.takieddin@example.com</span> {/* Replace */}
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                                <Github className="w-5 h-5 text-blue-400" />
                                <span>GitHub: /OmarTakieddin</span> {/* Replace */}
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                                <Linkedin className="w-5 h-5 text-blue-400" />
                                <span>LinkedIn: /in/OmarTakieddin</span> {/* Replace */}
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                                <Twitter className="w-5 h-5 text-blue-400" />
                                <span>Twitter: @OmarTakieddin</span>  {/* Replace */}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="py-6 bg-gray-900 border-t border-gray-800">
            <div className="container mx-auto px-4 text-center text-gray-400">
                &copy; {new Date().getFullYear()} Omar Takieddin. All rights reserved.
            </div>
        </footer>
    );
};

const PortfolioApp = () => {
    return (
        <div className="bg-gray-950 min-h-screen">
            <Header />
            <main>
                <HomeSection />
                <AboutSection />
                <ExperienceSection />
                <EducationSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default PortfolioApp;

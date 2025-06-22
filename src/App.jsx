import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Award, 
  Trophy,
  User,
  Briefcase,
  GraduationCap,
  Star,
  Menu,
  X
} from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  // Set dark theme by default
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  // Placeholder data - user can edit these
  const personalInfo = {
    name: "Your Name",
    title: "Full Stack Developer",
    email: "your.email@example.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    bio: "Passionate developer with expertise in modern web technologies. I love creating innovative solutions and bringing ideas to life through code."
  }

  const skills = [
    "JavaScript", "React", "Node.js", "Python", "TypeScript", "Next.js",
    "MongoDB", "PostgreSQL", "AWS", "Docker", "Git", "Tailwind CSS"
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React frontend and Node.js backend",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://your-ecommerce-demo.com",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      github: "https://github.com/yourusername/taskapp",
      demo: "https://your-taskapp-demo.com",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts",
      technologies: ["JavaScript", "API Integration", "Chart.js"],
      github: "https://github.com/yourusername/weather",
      demo: "https://your-weather-demo.com",
      image: "/api/placeholder/400/250"
    }
  ]

  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "ABC123456"
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      credentialId: "DEF789012"
    }
  ]

  const achievements = [
    {
      title: "Hackathon Winner",
      description: "First place in Tech Innovation Hackathon 2024",
      date: "2024"
    },
    {
      title: "Open Source Contributor",
      description: "Contributed to 15+ open source projects with 500+ stars",
      date: "2023-2024"
    }
  ]

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold"
            >
              {personalInfo.name}
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 border-t border-border"
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              {personalInfo.title}
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              {personalInfo.bio}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                <a href="#contact" className="flex items-center gap-2">
                  Get In Touch
                  <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg">
                <a href="#projects" className="flex items-center gap-2">
                  View My Work
                  <Code size={16} />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-4">
              <User className="text-primary" size={24} />
              <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm a passionate developer who loves creating digital experiences that make a difference. 
              With a strong foundation in both frontend and backend technologies, I enjoy tackling 
              complex problems and turning ideas into reality.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-4">
              <Code className="text-primary" size={24} />
              <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Badge variant="secondary" className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-4">
              <Briefcase className="text-primary" size={24} />
              <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
              Here are some of my recent projects that showcase my skills and experience.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                    <Code size={48} className="text-muted-foreground" />
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                      <Button size="sm" className="flex-1">
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-4">
              <GraduationCap className="text-primary" size={24} />
              <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="text-primary" size={20} />
                      {cert.name}
                    </CardTitle>
                    <CardDescription>
                      {cert.issuer} • {cert.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Credential ID: {cert.credentialId}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-4">
              <Trophy className="text-primary" size={24} />
              <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="text-primary" size={20} />
                      {achievement.title}
                    </CardTitle>
                    <CardDescription>{achievement.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-4">
              <Mail className="text-primary" size={24} />
              <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-12">
              I'm always open to discussing new opportunities and interesting projects.
              Feel free to reach out if you'd like to connect!
            </motion.p>
            <motion.div variants={fadeInUp} className="flex justify-center gap-6">
              <Button size="lg" className="group">
                <Mail size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                <a href={`mailto:${personalInfo.email}`}>Email Me</a>
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Linkedin size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Github size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 {personalInfo.name}. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App


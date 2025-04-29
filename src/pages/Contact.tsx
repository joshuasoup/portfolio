
import { useState, FormEvent } from 'react';
import Layout from '../components/Layout';
import { Mail, Linkedin, Github } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData);
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
      <div className="animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Contact</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="mb-6 text-lg">
              Feel free to reach out to me through the form or via any of the channels below.
              I'm always open to discussing new projects, opportunities, or just having a chat.
            </p>
            
            <div className="space-y-4 mb-8">
              <a 
                href="mailto:joshuasouphanthong@carleton.ca" 
                className="flex items-center gap-3 hover:text-portfolio-accent transition-colors"
              >
                <Mail size={20} />
                <span>joshuasouphanthong@carleton.ca</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/joshua-souphanthong/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-portfolio-accent transition-colors"
              >
                <Linkedin size={20} />
                <span>linkedin.com/in/joshua-souphanthong</span>
              </a>
              <a 
                href="https://github.com/joshuasoup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-portfolio-accent transition-colors"
              >
                <Github size={20} />
                <span>github.com/joshuasoup</span>
              </a>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:border-transparent resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-portfolio-accent text-black px-6 py-3 rounded font-medium hover:bg-portfolio-accent/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

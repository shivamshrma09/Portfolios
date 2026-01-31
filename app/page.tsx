'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { CiLocationArrow1 } from "react-icons/ci";
import { GrAchievement } from "react-icons/gr";
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";
import { TfiDownload } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { GrDocumentDownload } from "react-icons/gr";
import { AiOutlineCopyright } from "react-icons/ai";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import ProjectCard from '../components/ProjectCard';
import BlogCard from '../components/BlogCard';
import EducationCard from '../components/EducationCard';
import ConnectCard from '../components/ConnectCard';

function page() {
  const achievements = [
    "Kaggle Meachine Learing Certificate", 
    "Google Cloud Certified",
    "Built 4+ Full Stack Projects",
    "Open Source Contributor",
    "Preparing For GSOC",
    "Actively participated in Hackthons",
    "Competitive Programmer",
    "Tech Blogger at Medium"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSkillCategory, setSelectedSkillCategory] = useState('Web Development');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentEducationImageIndex, setCurrentEducationImageIndex] = useState(0);
  const [currentClass12ImageIndex, setCurrentClass12ImageIndex] = useState(0);
  const [currentClass10ImageIndex, setCurrentClass10ImageIndex] = useState(0);
  const [isConnectCardOpen, setIsConnectCardOpen] = useState(false);
  const [currentEducationCard, setCurrentEducationCard] = useState(0);

  const carouselImages = [
    'https://ik.imagekit.io/qwzhnpeqg/Portfolio/Screenshot%202026-01-31%20012005.png',
    'https://ik.imagekit.io/qwzhnpeqg/Portfolio/Screenshot%202026-01-31%20012040.png',
    'https://ik.imagekit.io/qwzhnpeqg/Portfolio/Screenshot%202026-01-31%20012005.png',
  ];

  const educationImages = [
    'https://pbs.twimg.com/media/DuSf60jWoAAWbJ-.jpg',
    'https://ik.imagekit.io/qwzhnpeqg/Portfolio/download%20(1).jpg'
  ];

  const class12Images = [
    'https://ik.imagekit.io/qwzhnpeqg/Portfolio/download.png',
    'https://ik.imagekit.io/qwzhnpeqg/Portfolio/download%20(6).jpg'
  ];

  const class10Images = [
    'https://ik.imagekit.io/qwzhnpeqg/Portfolio/download%20(15).png',
    'https://ik.imagekit.io/qwzhnpeqg/Portfolio/download%20(2).jpg'
  ];

  const educationData = [
    {
      degree: "B.Tech Electrical Enginner",
      institution: "Delhi Technological University (DTU), New Delhi",
      duration: "2024 - 2028",
      achievements: ['CGPA 7.9/10', 'Gold medal and 10 CGPA in Semester 4'],
      images: educationImages,
      currentImageIndex: currentEducationImageIndex
    },
    {
      degree: "Class 12th, DBSE",
      institution: "Dr. B.R. Ambedkar School of Specialized Excellence (SOSE), New Delhi",
      duration: "2023 - 2024",
      achievements: ['87%', 'Mental Maths school level'],
      images: class12Images,
      currentImageIndex: currentClass12ImageIndex
    },
    {
      degree: "Class 10th, CBSE",
      institution: "Government Boys Senior Secondary School (GBSSS), New Delhi",
      duration: "2021 - 2022",
      achievements: ['87%', 'Mental Maths from class 3rd to 12th', 'Won 5+ Science and other competitions'],
      images: class10Images,
      currentImageIndex: currentClass10ImageIndex
    }
  ];

  const skillCategories = {
    'Languages': ['Python', 'C++', 'C', 'JavaScript', 'TypeScript'],
    'Web Development': ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'WebSockets'],
    'Databases & Tools': ['MongoDB', 'MySQL', 'Git', 'Docker', 'Kubernetes', 'JWT Auth'],
    'Machine Learning': ['TensorFlow', 'OpenCV', 'NumPy', 'Pandas', 'Scikit-learn'],
    'Cloud & Platforms': ['AWS', 'Firebase', 'Vercel', 'Render', 'ImageKit']
  };

  const skillImages = {
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'C++': 'https://ik.imagekit.io/qwzhnpeqg/Portfolio/download__2_-removebg-preview%20(1).png',
    'C': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    'WebSockets': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'Kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    'JWT Auth': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg',
    'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    'OpenCV': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
    'NumPy': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
    'Pandas': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
    'Scikit-learn': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
    'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    'Vercel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
    'Render': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/render/render-original.svg',
    'ImageKit': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % achievements.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(imageInterval);
  }, []);

  useEffect(() => {
    const educationImageInterval = setInterval(() => {
      setCurrentEducationImageIndex((prev) => (prev + 1) % educationImages.length);
    }, 4000);
    return () => clearInterval(educationImageInterval);
  }, []);

  useEffect(() => {
    const class12ImageInterval = setInterval(() => {
      setCurrentClass12ImageIndex((prev) => (prev + 1) % class12Images.length);
    }, 5000);
    return () => clearInterval(class12ImageInterval);
  }, []);

  useEffect(() => {
    const class10ImageInterval = setInterval(() => {
      setCurrentClass10ImageIndex((prev) => (prev + 1) % class10Images.length);
    }, 6000);
    return () => clearInterval(class10ImageInterval);
  }, []);

  return (
    <div className='min-h-screen bg-black w-full flex justify-center'>
      <div className='max-w-6xl w-full'>
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='sticky top-0 z-50 bg-black/80 backdrop-blur-md mt-2 border-neutral-500/20 rounded-3xl flex flex-row justify-between items-center border-2 px-10 py-1'>
          <div className='text-white text-center flex flex-row gap-2 items-center font-semibold text-xl'>
            <Image src="https://ik.imagekit.io/qwzhnpeqg/mockround.ai%20imges%20public/candidate.jpg?updatedAt=1767107537991" alt="Logo" width={40} height={50} className='mx-auto rounded-full'/>
            <h1>Shivam Kumar</h1>
          </div>
          
          <div className='text-neutral-500 text-center flex flex-row gap-3 px-10 py-2 rounded-xl border border-neutral-500/15'>
            <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className='hover:text-white'>About</button>
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className='hover:text-white'>Projects</button>
            <button onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })} className='hover:text-white'>Skills</button>
            <button onClick={() => document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' })} className='hover:text-white'>Achievements</button>
            <button onClick={() => document.getElementById('blogs')?.scrollIntoView({ behavior: 'smooth' })} className='hover:text-white'>Blogs</button>
            <button onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })} className='hover:text-white'>Education</button>
          </div>

          <div className='flex flex-row'>
            <div className='items-center justify-center px-4 mr-1 font-bold py-1 rounded-xl border border-gray-500/30 hover:bg-white text-white bg-black hover:text-black text-center flex flex-row gap-2'>
              <a href="/resume.pdf" download="Shivam_Kumar_Resume.pdf">
                <button className='flex items-center gap-2'>
                  Resume
                  <GrDocumentDownload size={20}/>
                </button>
              </a>
            </div> 

            <div className='items-center justify-center px-4 font-bold py-1 rounded-xl border border-gray-500/20 bg-white text-black text-center flex flex-row gap-2'>
              <button onClick={() => setIsConnectCardOpen(true)}>Connect</button>
              <CiLocationArrow1 size={20}/>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='flex flex-col items-center justify-center mt-20'>
          <motion.p 
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className='text-xl text-neutral-400/40 text-center mt-4 mb-4 border border-neutral-500/20 py-1 px-3 rounded-2xl max-w-3xl'>
            {achievements[currentIndex]}
          </motion.p>
          <h1 className='text-6xl font-bold text-white text-center leading-tight'>
            I Don't Just Write <span className='text-white'>Code</span>
          </h1>
          <h2 className='text-5xl font-bold text-neutral-700 text-center mt-4'>
             Solve <span className='text-neutral-500'>Real Problems</span>
          </h2>
        </motion.div>

        <motion.div 
          id="about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className='flex flex-col justify-center items-center mt-50 gap-5'>
          <h1 className='font-bold text-white text-5xl'>ABOUT</h1>
          <hr className='w-90 border-neutral-500/30 border-t-2'></hr>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className='max-w-4xl text-center'>
            <h2 className='text-3xl font-bold text-white mb-6'>"Turning Voltage into Vision"</h2>
            <div className='text-neutral-300 text-lg leading-relaxed space-y-4'>
              <p>
                I'm currently an Electrical Engineering undergrad at Delhi Technological University (formerly DCE). My journey started with circuits and systems, but pretty soon I found myself drawn to programming and solving real-world problems with code. That's when I realized I wanted to dive deeper into Computer Science.
              </p>
              <p>
                Over time, I've picked up C, C++, Python, and built a good foundation in Data Structures & Algorithms. These days, I'm really enjoying Full Stack Web Development and exploring the world of Machine Learning and Deep Learning—especially working with frameworks like PyTorch.
              </p>
              <p>
                My goal is to work on real-world projects and use technology to solve problems that matter.
              </p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className='flex gap-4 mt-8 justify-center'>
              <button 
                onClick={() => window.open('https://x.com/Vsion09', '_blank')}
                className='flex items-center gap-2 px-3 py-3 hover:bg-neutral-400/10 border border-neutral-600 rounded-full text-neutral-300 hover:text-white transition-colors'>
                <FaXTwitter size={18}/>
              </button>
              <button className='flex items-center gap-2 px-3 py-3 hover:bg-neutral-400/10 border border-neutral-600 rounded-full text-neutral-300 hover:text-white transition-colors'>
                <FaLinkedinIn size={18}/>
              </button>
              <button 
                onClick={() => window.open('https://medium.com/@vsion09', '_blank')}
                className='flex items-center gap-2 px-3 py-3 hover:bg-neutral-400/10 border border-neutral-600 rounded-full text-neutral-300 hover:text-white transition-colors'>
                <FaMedium size={18}/>
              </button>
              <button 
                onClick={() => window.open('https://codeforces.com/profile/VISIONcoder_9', '_blank')}
                className='flex items-center gap-2 px-3 py-3 hover:bg-neutral-400/10 border border-neutral-600 rounded-full text-neutral-300 hover:text-white transition-colors'>
                <SiCodeforces size={18}/>
              </button>
              <button className='flex items-center gap-2 px-3 py-3 hover:bg-neutral-400/10 border border-neutral-600 rounded-full text-neutral-300 hover:text-white transition-colors'>
                <SiLeetcode size={18}/>
              </button>
              <button 
                onClick={() => window.open('https://github.com/shivamshrma09', '_blank')}
                className='flex items-center gap-2 px-3 py-3 hover:bg-neutral-400/10 border border-neutral-600 rounded-full text-neutral-300 hover:text-white transition-colors'>
                <FaGithub size={18}/>
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className='flex justify-center mt-8'>
              <div className='w-full border border-neutral-500/20'>
                <Image 
                  key={currentImageIndex}
                  src={carouselImages[currentImageIndex]}
                  alt='Portfolio showcase'
                  width={1200}
                  height={1200}
                  className='w-full h-full object-cover transition-opacity duration-500'
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          id="skills"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className='flex flex-col justify-center items-center mt-30 gap-5'>
          <h1 className='font-bold text-white text-5xl'>SKILLS</h1>
          <hr className='w-90 border-neutral-500/30 border-t-2'></hr>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className='max-w-4xl w-full'>
            
            <div className='flex justify-center mb-8'>
              <select 
                value={selectedSkillCategory}
                onChange={(e) => setSelectedSkillCategory(e.target.value)}
                className='px-4 py-2 bg-neutral-900 border border-neutral-600 rounded-lg text-neutral-300 outline-none focus:border-neutral-400'>
                <option value=''>Select a skill category</option>
                {Object.keys(skillCategories).map((category) => (
                  <option key={category} value={category} className='bg-neutral-900'>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            
            {selectedSkillCategory && selectedSkillCategory in skillCategories && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                {skillCategories[selectedSkillCategory as keyof typeof skillCategories].map((skill, index) => (
                  <div
                    key={skill}
                    className='flex flex-col items-center p-4 rounded-lg hover:border-neutral-500/50 transition-colors'>
                    <div className='flex h-16 w-16 items-center justify-center shadow-lg mb-2'>
                      <Image 
                        src={skillImages[skill as keyof typeof skillImages]} 
                        alt={skill} 
                        width={100} 
                        height={100} 
                        className='object-contain'
                        title={skill}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        <motion.div 
          id="education"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className='flex flex-col justify-center items-center mt-30 gap-5'>
          <h1 className='font-bold text-white text-5xl'>EDUCATION</h1>
          <hr className='w-90 border-neutral-500/30 border-t-2'></hr>

          <div className='relative w-full flex items-center justify-center gap-8'>
            <button 
              onClick={() => setCurrentEducationCard(prev => prev === 0 ? educationData.length - 1 : prev - 1)}
              className='p-2 bg-neutral-800 hover:bg-neutral-700 rounded-full text-white transition-colors'
            >
              <IoChevronBack size={24} />
            </button>
            
            <div className='flex-1 max-w-4xl'>
              <EducationCard 
                degree={educationData[currentEducationCard].degree}
                institution={educationData[currentEducationCard].institution}
                duration={educationData[currentEducationCard].duration}
                achievements={educationData[currentEducationCard].achievements}
                images={educationData[currentEducationCard].images}
                currentImageIndex={educationData[currentEducationCard].currentImageIndex}
              />
            </div>
            
            <button 
              onClick={() => setCurrentEducationCard(prev => prev === educationData.length - 1 ? 0 : prev + 1)}
              className='p-2 bg-neutral-800 hover:bg-neutral-700 rounded-full text-white transition-colors'
            >
              <IoChevronForward size={24} />
            </button>
          </div>
          
          <div className='flex justify-center mt-6 gap-2'>
            {educationData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentEducationCard(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentEducationCard ? 'bg-white' : 'bg-neutral-600'
                }`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div 
          id="projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className='mt-50 mb-10 flex flex-col'>
          <div className='flex flex-row justify-between items-center'>
            <h1 className='text-white text-5xl font-bold'>PROJECTS</h1>
            <p className='text-neutral-400 text-xl'>Explore my latest work and innovations <br/> From concept to deployment</p>
          </div>

          <div className='flex flex-row'>
            <div className='mt-5 w-1/2 border-t border-r border-b pr-5 border-neutral-500/20'>
              <ProjectCard 
                title="MockRound.AI"
                date="Oct 2025 - Dec 2025"
                image="https://ik.imagekit.io/qwzhnpeqg/mockround.ai%20imges%20public/testetmpplet.png?updatedAt=1767107540820"
                technologies={['Next.js', 'TypeScript', 'Python', 'Phi-3.5', 'Judge0 API', 'MongoDB']}
                description="Built full stack AI mock interview platform with custom AI model for coding, technical MCQs, and role specific rounds. Integrated ML models for anti-cheating protection and mentorship sessions. Achieved 130+ users and 15+ completed mocks."
                githubLink="https://github.com/shivamshrma09/MockRound.Ai-Frontend"
                liveLink="https://mockroundai-six.vercel.app/"
              />
              
              <ProjectCard 
                title="PlusDSA"
                date="Jan 2026 - Jan 2026"
                image="https://ik.imagekit.io/qwzhnpeqg/PlusDSA/Screenshot%202026-01-12%20003102.png?updatedAt=1768158090669"
                technologies={['Next.js', 'TypeScript', 'Python', 'Phi-3.5', 'Judge0 API', 'MongoDB', 'WebSockets']}
                description="Comprehensive DSA platform with curated sheets (Striver A2Z, Love Babbar, Blind 75). Features playlist creation, time tracking, live contests, mock interviews, progress analytics, and spaced repetition. Achieved 150+ users."
                githubLink="https://github.com/shivamshrma09/PlusDSA"
                liveLink="https://plusdsaai.vercel.app/"
              />
            </div>

            <div className='mt-5 w-1/2 border-t border-l border-b pl-5 border-neutral-500/20'>
              <ProjectCard 
                title="Classroom Mitra"
                date="Jan 2026 - Present"
                image="https://ik.imagekit.io/qwzhnpeqg/Classroom%20Mitra/Screenshot%202025-11-02%20225701.png?updatedAt=1769804206352"
                technologies={['Next.js', 'JavaScript', 'MongoDB']}
                description="Virtual classroom platform for teachers to replace WhatsApp with assignment/attendance tracking, real-time announcements, resource sharing, online classes, quizzes/tests, student progress analytics, and discussion sections."
                githubLink="https://github.com/shivamshrma09/ClassRoom-Mitra"
                liveLink="https://classroomMitra1.vercel.app/"
              />
            </div>
          </div>
          
          <p className='text-neutral-400 text-center text-lg mt-6 mb-4'>Get my contact details and connect with me professionally</p>
          
          <div className='flex justify-center mt-8'>
            <a href="/business-card.pdf" download="Shivam_Kumar_Card.pdf">
              <button className='flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-colors'>
                Download My Card
                <TfiDownload size={18}/>
              </button>
            </a>
          </div>
        </motion.div>

        <motion.div 
          id="blogs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className='mt-50 mb-10 flex flex-col'>
          <div className='flex mb-5 flex-row justify-between items-center'>
            <h1 className='text-white text-5xl font-bold'>BLOGS</h1>
            <p className='text-neutral-400 text-xl'>Explore What i know i write <br/> From concept to deployment</p>
          </div>

          <hr className='w-full border-neutral-500/30 border-t-2'></hr>

          <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6'>
            <BlogCard 
              title="From 2 Failed projects to Production ready Frontend"
              date="Dec 20, 2025"
              image="https://ik.imagekit.io/qwzhnpeqg/Portfolio/0_ALVSrc9K9GN6-boh.webp"
              link="https://medium.com/@vsion09/from-beginner-to-production-level-frontend-7dff3ba350e2"
            />

            <BlogCard 
              title="How to Scale you system for first 1000 users"
              date="Jan 20, 2025"
              image="https://ik.imagekit.io/qwzhnpeqg/Portfolio/design_freedom.jpeg"
            />
          </div>
        </motion.div>

        <ConnectCard 
          isOpen={isConnectCardOpen} 
          onClose={() => setIsConnectCardOpen(false)} 
        />
      </div>
    </div>
  )
}

export default page
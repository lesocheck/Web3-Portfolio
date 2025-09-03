'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import { Card, Badge } from '@/components/common';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Static portfolio data (moved from database as requested)
const PORTFOLIO_DATA = {
  personalInfo: {
    name: 'Andrei Beliaev',
    title: 'Frontend Developer (Next.js, React, Angular, Web3)',
    location: 'Remote / Distributed Teams',
    email: 'belyaev.andrey.hr@gmail.com',
    github: 'https://github.com/lesocheck',
    linkedin: 'https://www.linkedin.com/in/beliaev-andrei/',
    summary: 'Frontend developer with 10+ years of experience building modern web applications using Next.js, React, and Angular. In recent years, I have focused on Web3: crypto payments, blockchain-based authentication, and decentralized services. I also have hands-on experience writing and deploying smart contracts in Solidity, including implementing the ERC-20 token standard. I combine deep frontend expertise with blockchain solutions, designing scalable architectures and delivering user-friendly experiences. Experienced in working with distributed teams across multiple time zones.'
  },
  
  experiences: [
        {
            position: 'Frontend Web3 Developer',
            company: 'Apique',
            duration: '04/2022 – 06/2025',
            description:
                'Built B2B admin panel, integrated crypto subscription payments, Web3Auth, optimized performance and UX, and wrote frontend tests.',
            stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'ethers.js', 'wagmi', 'viem', 'Web3Auth', 'Playwright', 'Jest'],
            achievements: [
                'Designed a scalable architecture ready for future Web3 expansion',
                'Streamlined complex workflows for faster operations',
                'Boosted frontend stability and backend integration quality'
            ]
        },
        {
            position: 'Frontend Developer',
            company: 'DK Region',
            duration: '09/2020 – 05/2022',
            description:
                'Developed internal admin panels for analytics and management, optimized performance, collaborated on UI.',
            stack: ['Angular', 'TypeScript', 'SCSS', 'NgRx', 'Bootstrap', 'Git'],
            achievements: [
                'Delivered complex analytics visualizations without sacrificing speed',
                'Made large datasets easy to navigate and act on'
            ]
        },
        {
            position: 'Frontend Developer',
            company: 'BPC Development',
            duration: '12/2018 – 09/2020',
            description:
                'Created both a seller admin panel and a main marketplace admin. Built UI and modules with Angular. Translated UX wireframes into responsive, interactive features.',
            stack: ['Angular', 'TypeScript', 'SCSS', 'Git', 'Material Design', 'Nx', 'NgRx'],
            achievements: [
                'Developed a scalable architecture for two different admin systems',
                'Reduced load times for large-scale marketplace data'
            ]
        },
        {
            position: 'Frontend Developer',
            company: 'SoftLight',
            duration: '12/2017 – 12/2018',
            description:
                'Built and maintained Angular apps, optimized for mobile, and developed modular templates.',
            stack: ['Angular', 'TypeScript', 'SCSS', 'Git'],
            achievements: [
                'Delivered responsive design improvements that boosted mobile engagement',
                'Shortened build and deployment times via bundler optimization'
            ]
        },
        {
            position: 'Frontend Developer',
            company: 'DUDES',
            duration: '12/2016 – 12/2017',
            description:
                'Developed e-commerce apps with Angular, AngularJS, and React, added WebSocket for real-time updates.',
            stack: ['Angular', 'AngularJS', 'React', 'JavaScript', 'WebSocket'],
            achievements: [
                'Integrated multiple frameworks in one project without chaos',
                'Enabled instant data updates without page reloads'
            ]
        }
    ],
  
  skills: [
    'Next.js', 'React', 'Angular', 'TypeScript', 'JavaScript', 'Solidity',
    'web3.js', 'ethers.js', 'wagmi', 'viem', 'Web3Auth', 'MetaMask',
    'Redux', 'Zustand', 'HTML5', 'CSS3', 'Sass', 'SCSS', 'Tailwind CSS',
    'Material Design', 'Ant Design', 'Bootstrap', 'NgRx', 'Nx',
    'WebSocket', 'Jest', 'Playwright', 'Turbopack', 'Vite', 'Webpack', 'Git', 'Figma'
  ],
  
  education: [
    {
      degree: 'Master in Banking',
      university: 'DonNUET',
      duration: '07/2004 — 06/2009'
    }
  ]
};

const BLOCKCHAIN_FEATURES = [
  {
    title: 'Ethereum',
    description: 'Smart contracts, DeFi, and NFTs on the world\'s largest blockchain',
    href: '/ethereum',
    color: 'bg-blue-500',
    features: ['Wagmi', 'Viem', 'MetaMask']
  },
  {
    title: 'Solana',
    description: 'High-speed transactions with minimal fees',
    href: '/solana', 
    color: 'bg-purple-500',
    features: ['Phantom']
  },
  {
    title: 'TON',
    description: 'The Open Network for scalable applications',
    href: '/ton',
    color: 'bg-cyan-500', 
    features: ['OpenMask']
  }
];

export function PortfolioClient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <div className="lg:col-span-1 space-y-6">
            <motion.div variants={itemVariants}>
              <Card>
                <div className="text-center">
                  <div className="mb-2 flex items-center justify-center">
                    <Image
                      src="/avatar.jpg"
                      alt="My photo"
                      className="rounded-full"
                      width={96}
                      height={96}
                    />
                  </div>
                  
                  <h1 className="text-2xl font-bold text-gray-900 mb-1">
                    {PORTFOLIO_DATA.personalInfo.name}
                  </h1>
                  <p className="text-lg text-blue-600 mb-2">
                    {PORTFOLIO_DATA.personalInfo.title}
                  </p>
                  <div className="flex items-center justify-center text-gray-600 mb-4">
                    <FiMapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{PORTFOLIO_DATA.personalInfo.location}</span>
                  </div>

                  <div className="flex justify-center space-x-4 mb-4">
                    <a
                      href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <FiMail className="w-5 h-5" />
                    </a>
                    <a
                      href={PORTFOLIO_DATA.personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <FiGithub className="w-5 h-5" />
                    </a>
                    <a
                      href={PORTFOLIO_DATA.personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <FiLinkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card title="Skills" subtitle="Technical expertise and tools">
                <div className="flex flex-wrap gap-2">
                  {PORTFOLIO_DATA.skills.map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Blockchain Features */}
            <motion.div variants={itemVariants}>
              <Card title="Blockchain Networks" subtitle="Explore multi-chain capabilities">
                <div className="space-y-4">
                  {BLOCKCHAIN_FEATURES.map((feature, index) => (
                    <Link key={index} href={feature.href}>
                      <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <div className={`w-3 h-3 rounded-full ${feature.color} mr-2`} />
                            <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                          </div>
                          <FiArrowRight className="text-gray-400 group-hover:text-blue-500" />
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{feature.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {feature.features.slice(0, 3).map((tech, techIndex) => (
                            <span key={techIndex} className="px-1.5 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                              {tech}
                            </span>
                          ))}
                          {feature.features.length > 3 && (
                            <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                              +{feature.features.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <motion.div variants={itemVariants}>
              <Card title="Professional Summary">
                <p className="text-gray-700 leading-relaxed">
                  {PORTFOLIO_DATA.personalInfo.summary}
                </p>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card title="Education">
                {PORTFOLIO_DATA.education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4 mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                    <p className="text-blue-600 font-medium">{edu.university}</p>
                    <Badge variant="info">{edu.duration}</Badge>
                  </div>
                ))}
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card title="Work Experience">
                <div className="space-y-6">
                  {PORTFOLIO_DATA.experiences.map((job, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {job.position}
                        </h3>
                        <Badge variant="info">{job.duration}</Badge>
                      </div>
                      <p className="text-blue-600 font-medium mb-2">{job.company}</p>
                      <p className="text-gray-700 mb-3">{job.description}</p>

                      <div className="mb-3">
                        <h4 className="font-medium text-gray-900">Stack:</h4>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {job.stack.map((tech, techIndex) => (
                            <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <h4 className="font-medium text-gray-900">Key Achievements:</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {job.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-gray-600">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
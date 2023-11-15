import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Anil Bradley.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Harvard CS Graduate, currently seeking opportunities in tech. 
        Find below my professional and academic experience, as well as current and past projects.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">

      </p>
    </>
  ),
  actions: [
  
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  description: `Harvard '23 Computer Science with a passion for new technology, software that utilizes data and product driven development.`,
  aboutItems: [
    {label: 'Location', text: 'New York, NY', Icon: MapIcon},
    {label: 'Interests', text: 'Sports, Powerlifting, Poker, Video Gaming', Icon: SparklesIcon},
    {label: 'Study', text: 'Harvard University, A.B in Computer Science', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Former Product Manager Intern at FanDuel', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming languages',
    skills: [
      {
        name: 'Python',
        level: 10,
      },
      {
        name: 'C/C#/C++',
        level: 4,
      },
      {
        name: 'SQL',
        level: 3,
      },
      {
        name: 'JavaScript',
        level: 3,
      },
    ],
  },
  {
    name: 'Technology',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'Git',
        level: 6,
      },
      {
        name: 'Amplitude',
        level: 9,
      },
      {
        name: 'Tableau',
        level: 7,
      },
      {
        name: 'MySQL',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2018 - May 2023',
    location: 'Harvard University',
    title: 'A.B. in Computer Science',
    content: <p>Relevant coursework: Data Structures and Algorithms, Machine Learning, Linear Algebra for Big Data, Computer Graphics </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Summer 2022',
    location: 'FanDuel',
    title: 'Product Management Intern',
    content: (
      <p>
        Member of product team for the FanDuel payment platform. Built models to predict key indicators and constructured a roadmap to prioritize competitive advantages.
      </p>
    ),
  },
  {
    date: 'June 2020 - June 2021',
    location: 'Elite Construction of NY',
    title: 'Assisstant Project Engineer',
    content: (
      <p>
        Balanced budget, scope and schedule to deliver multimillion dollar new construction and existing improvemnemt projects to clients.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
   
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Reach out to me',
  items: [
    {
      type: ContactType.Email,
      text: 'anilmbradley@gmail.com',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Github,
      text: 'anilbradley1',
      href: 'https://github.com/anilbradley1',
    },
  ],
};


export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/anilbradley1'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'www.linkedin.com/in/anil-bradley-429140181/'},
];

import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Jeril Roger Cipres Cruz, I'm a CPE student in UA
          I have a hobby of reading online and playing online games on my PC, I took Computer Engineering because this particular course 
          is the new trend in our time. I see myself in 5 years as a successful Computer Engineer in the future.
          I anticipate continuous advancements in web development technologies, frameworks, and tools. 
          Stay informed about emerging trends such as Progressive Web Apps (PWAs), WebAssembly, and serverless architectures. 
          I also expect the evolution of web standards and browser capabilities, influencing the way web applications are built. 
          Keep an eye on updates to HTML, CSS, and JavaScript specifications, as well as browser compatibility improvements. 
          And to also stay updated on design principles and user experience (UX) trends to create intuitive and visually appealing interfaces. 
          Incorporate mobile-first development practices to address the increasing usage of smartphones and tablets.]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
  
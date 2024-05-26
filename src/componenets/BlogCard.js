// import React from 'react'
// import blog1 from '../images/blog1.webp'
// import { Link } from 'react-router-dom'

// const BlogCard = () => {
//   return (
//     <div className='col-3'>
//         <div className='blog-card'>
//             <div>

//             <div className='card-image'>
//                 <img src={blog1} alt='blog1' className='img-fluid' />
//             </div>
//             <div className='blog-content'>
//                 <p className='date'>Mar 31, 2024</p>
//                 <h5 className='title'>What Causes Dry Skin in Babies? Causes,Treatments and product Recommendations</h5>
//                 <p className='desc'>Dry skin in babies can cause much discomfort and irritation when it comes to your little ones. Gaining an understanding of the causes behind this issue is essential for us parents...</p>
//                 <Link className='button' to='/'>Read More</Link>
//             </div>

//             </div>

            
            
//         </div>
//     </div>
//   )
// }

// export default BlogCard

import React from 'react';
import { Link } from 'react-router-dom';
import blog1 from '../images/blog1.webp';
import blog2 from '../images/blog2.webp';
import blog3 from '../images/blog3.webp';
import blog4 from '../images/blog4.webp';

const blogs = [
  {
    image: blog1,
    date: 'Mar 31, 2024',
    title: 'What Causes Dry Skin in Babies? Causes, Treatments, and Product Recommendations',
    description: 'Dry skin in babies can cause much discomfort and irritation when it comes to your little ones. Gaining an understanding of the causes behind this issue is essential for us parents...',
    link: '/blog1'
  },
  {
    image: blog2,
    date: 'Mar 31, 2024',
    title: 'The Complete Curly Hair-Guide - Enhancing Your Curls with Cantu',
    description: 'Curly hair is not just a hairstyle; it is a statement of individuality and your sense of style, But for some of us, maintaining our...',
    link: '/blog2'
  },
  {
    image: blog3,
    date: 'Jan 5, 2024 ',
    title: 'Best Vegan Makup and Cosmetics Brands Available in Sri Lanka',
    description: 'In recent years, the beauty industry has seen a remarkable shift towards cruelty-free and vegan-friendly products, reflecting a growing awareness of ethical consumption among...',
    link: '/blog3'
  },
  {
    image: blog4,
    date: 'Jan 19, 2024',
    title: 'Popula Skincare Products to Treat and Manage Eczema and Psoriasis',
    description: 'Eczema and psoriasis are common skin conditions that can cause discomfort, itching, and inflammation. While these conditions are chronic and may not have a definitive cure, effective management is possible...',
    link: '/blog4'
  }
];

const BlogCard = ({ image, date, title, description, link }) => {
  return (
    <div className='col-3'>
      <div className='blog-card'>
        <div>
          <div className='card-image'>
            <img src={image} alt='blog' className='img-fluid' />
          </div>
          <div className='blog-content'>
            <p className='date'>{date}</p>
            <h5 className='title'>{title}</h5>
            <p className='desc'>{description}</p>
            <Link className='button' to={link}>Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogList = () => {
  return (
    <div className='row'>
      {blogs.map((blog, index) => (
        <BlogCard
          key={index}
          image={blog.image}
          date={blog.date}
          title={blog.title}
          description={blog.description}
          link={blog.link}
        />
      ))}
    </div>
  );
};

export default BlogList;

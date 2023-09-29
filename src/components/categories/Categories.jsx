import React from 'react';
import { useNavigate } from 'react-router-dom';
import './categories.css';

function Categories({ categories, setCategories }) {
  const navigate = useNavigate();
  const data = [
    { title: 'Dentist', description: 'Teeting troubles? Schedule a dental checkup', image: 'https://res.cloudinary.com/vaibhavi/image/upload/v1695970423/caroline-lm-JiBssiZVPZA-unsplash_xhnhua.jpg' },
    { title: 'Gynecologist', description: 'Explore for women health, pregnancy, and infertility treatments', image: 'https://res.cloudinary.com/vaibhavi/image/upload/v1695970544/Gynecologist-in-Noida_z8niw8.jpg' },
    { title: 'Dietitian', description: 'Get guidance on eating right, weight managemnent andsports nutrition', image: 'https://res.cloudinary.com/vaibhavi/image/upload/v1695970422/18-fascinating-facts-about-dietitian-1695742518_pify2w.jpg' },
    
  ];

  return (
    <div className='main_grp'>
        <h2>Book an appointment for an in-clinic consultation</h2>
        <h4>Find experienced doctors accross all specialities</h4>

        <div className="categories-container">
        {data.map((item, index) => (
            <div key={index} className="category-card" onClick={() => {
            setCategories(item.title);
            navigate('/doctors');
            }}>
            <img src={item.image} alt={item.title} className="category-image" />
            <h3 className="category-title">{item.title}</h3>
            <p className="category-description">{item.description}</p>
            </div>
        ))}
        </div>
        
    </div>
  );
}

export default Categories;

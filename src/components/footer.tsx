import React from 'react';
import './footer.css';
 
const deals = [
  { name: 'Red leather GUCCI bag', price: '4500 Bdt', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSDMWENA36E1KDlycUlXkjJr-C5d0cNA13CYG2YA7MA7eFfuRE_' },
  { name: 'LEXRX face cream', price: '300 Bdt', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQDm5dBQ5hcfFinmhLNqKRMDzcY5_yJGWkvtHEBDyUd-6Y8TTkB' },
  { name: 'Fuji Film DSLR camera', price: '35000 Bdt', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNeEWe6blOlfi1-3UxIvhDz8HXHJdp8iADj52cU-zxPmjMt9gk' },
  { name: 'Sky blue kids shoe', price: '900 Bdt', image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSUFyky2tIaluYF-0ilettogQlnfnJ9G7tkU5xa-trD3ge_espe' },
  { name: 'Brown leather wallet', price: '600 Bdt', image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR3FMCtECdz_FNTUBszGOxzFzeCoH2VlzXfKkwpYGaF49gfoLPj' },
  { name: 'Pink bag', price: '1000 Bdt', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ6e00Z7jasbvPqrG-UBjpGDUAYWi30m9rIG_cvgnTdCTu96mLE' }
];
 
const Footer: React.FC = () => (
  <div className="footer">
    <h2>
      <span className="title">Deals of the Day</span>
      <span className="divider">|</span>
      <span className="countdown">20:24:12 left</span>
    </h2>
    <div className="deals-list">
      <div className="deal-item">
        <img src={deals[0].image} alt={deals[0].name} />
        <h3>{deals[0].name}</h3>
        <p>{deals[0].price}</p>
      </div>
      <div className="deal-item">
        <img src={deals[1].image} alt={deals[1].name} />
        <h3>{deals[1].name}</h3>
        <p>{deals[1].price}</p>
      </div>
      <div className="deal-item">
        <img src={deals[2].image} alt={deals[2].name} />
        <h3>{deals[2].name}</h3>
        <p>{deals[2].price}</p>
      </div>
      <div className="deal-item">
        <img src={deals[3].image} alt={deals[3].name} />
        <h3>{deals[3].name}</h3>
        <p>{deals[3].price}</p>
      </div>
      <div className="deal-item">
        <img src={deals[4].image} alt={deals[4].name} />
        <h3>{deals[4].name}</h3>
        <p>{deals[4].price}</p>
      </div>
      <div className="deal-item">
        <img src={deals[5].image} alt={deals[5].name} />
        <h3>{deals[5].name}</h3>
        <p>{deals[5].price}</p>
      </div>
    </div>
  </div>
);
 
export default Footer;
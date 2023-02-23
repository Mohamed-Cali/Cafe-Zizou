"use client";

import "./page.css";
import { useState } from "react";
import { Catamaran } from '@next/font/google'

const catamaran = Catamaran({
  subsets: ['latin'],
  display: 'swap',
})

export default function Menu() {
  const [activeItem, setActiveItem] = useState([]);
  const [showItems, setShowItems] = useState([]);

  const handleCategoryClick = (index) => {
    if (showItems.includes(index)) {
      setShowItems(showItems.filter((item) => item !== index));
    } else {
      setShowItems([...showItems, index]);
    }
  };

  const handleClick = (index) => {
    setActiveItem(index);
  };

  return (
    <div className={catamaran.className}>
      <div className="menu" >
        <div className="menu-title-section">
          <div className="banner-gradient">
            <h1 className="menu-title">Menu</h1>
          </div>
        </div>
        <div className="menu-container">
          <nav className="menu-nav">
            <ul>
              <li className={activeItem === 0 ? "active" : ""}>
                <a href="#hot-drinks" onClick={() => handleClick(0)}>
                  Hot Drinks
                </a>
              </li>
              <li className={activeItem === 1 ? "active" : ""}>
                <a href="#sandwiches" onClick={() => handleClick(1)}>
                  Sandwiches
                </a>
              </li>
              <li className={activeItem === 2 ? "active" : ""}>
                <a href="#burgers" onClick={() => handleClick(2)}>
                  Fresh Homemade Burger
                </a>
              </li>
              <li className={activeItem === 2 ? "active" : ""}>
                <a href="#salads" onClick={() => handleClick(2)}>
                  Fresh Made Salads
                </a>
              </li>
              <li className={activeItem === 2 ? "active" : ""}>
                <a href="#soup" onClick={() => handleClick(2)}>
                  Homemade Soup
                </a>
              </li>
              <li className={activeItem === 2 ? "active" : ""}>
                <a href="#chips" onClick={() => handleClick(2)}>
                  Chips
                </a>
              </li>
              <li className={activeItem === 2 ? "active" : ""}>
                <a href="#english" onClick={() => handleClick(2)}>
                  English Breakfast
                </a>
              </li>
              <li className={activeItem === 2 ? "active" : ""}>
                <a href="#breakfast" onClick={() => handleClick(2)}>
                Breakfast
                </a>
              </li>
              <li className={activeItem === 2 ? "active" : ""}>
                <a href="#eggs" onClick={() => handleClick(2)}>
                  Eggs Benedict
                </a>
              </li>
              <li className={activeItem === 2 ? "active" : ""}>
                <a href="#savories" onClick={() => handleClick(2)}>
                  Savories and Quiche
                </a>
              </li>
              <li className={activeItem === 2 ? "active" : ""}>
                <a href="#porridge" onClick={() => handleClick(2)}>
                  Porridge  
                </a>
              </li>
              <li className={activeItem === 2 ? "active" : ""}>
                <a href="#plates" onClick={() => handleClick(2)}>
                  Hot Plates
                </a>
              </li>
              <li className={activeItem === 2 ? "active" : ""}>
                <a href="#potatoes" onClick={() => handleClick(2)}>
                  Jacket Potatoes
                </a>
              </li>
              <li className={activeItem === 2 ? "active" : ""}>
                <a href="#cold-drinks" onClick={() => handleClick(2)}>
                  Cold Drinks
                </a>
              </li>
              <li className={activeItem === 2 ? "active" : ""}>
                <a href="#smoothie" onClick={() => handleClick(2)}>
                  Smoothie Freshly Squeezed Juice
                </a>
              </li>
              <li className={activeItem === 2 ? "active" : ""}>
                <a href="#fudge" onClick={() => handleClick(2)}>
                  Fudge
                </a>
              </li>
              <li className={activeItem === 2 ? "active" : ""}>
                <a href="#desserts" onClick={() => handleClick(2)}>
                Desserts
                </a>
              </li>
              <li className={activeItem === 2 ? "active" : ""}>
                <a href="#pastries" onClick={() => handleClick(2)}>
                  Pastries
                </a>
              </li>
              
            </ul>
          </nav>
          <div className="menu-items">
            <div className="category">
              <h2
                id="hot-drinks"
                className={
                  "category-name" +
                  (showItems.includes(0) ? " active" : "")
                }
                onClick={() => handleCategoryClick(0)}
              >
                Hot Drinks
              </h2>

              <div className="items" >
                <div>
                  <h3>Espresso</h3>
                  <div>
                    <p>£2.34 Small</p>
                    <p>£2.60 Medium</p>
                  </div>
                </div>
                <div>
                  <h3>Macchiato</h3>
                  <div>
                    <p>£2.47 Small</p>
                    <p>£2.73 Medium</p>
                  </div>
                </div>
                <div>
                  <h3>Flat White</h3>
                  <div>
                    <p>£2.73 Small</p>
                    <p>£3.25 Medium</p>
                  </div>
                </div>
                <div>
                  <h3>Cappuccino</h3>
                  <div>
                    <p>£2.73 Small</p>
                    <p>£3.25 Medium</p>
                    <p>£3.51 Large</p>
                  </div>
                </div>
                <div>
                  <h3>Baby Chino</h3>
                  <div>
                    <p>£1.43 Small</p>
                    <p>£2.08 Medium</p>
                  </div>
                </div>
                <div>
                  <h3>Glass of Milk - Small</h3>
                  <div>
                    <p>£1.69 Cold</p>
                    <p>£1.69 Hot</p>
                  </div>
                </div>
                <div>
                  <h3>Latte</h3>
                  <div>
                    <p>£2.73 Small</p>
                    <p>£3.25 Medium</p>
                    <p>£3.51 Large</p>
                  </div>
                </div>
                <div>
                  <h3>Chai Late in Glass</h3>
                  <div>
                    <p>£2.99 Small</p>
                    <p>£3.51 Medium</p>
                    <p>£4.03 Large</p>
                  </div>
                </div>
                <div>
                  <h3>Americano</h3>
                  <div>
                    <p>£2.54 Small</p>
                    <p>£3.06 Medium</p>
                    <p>£3.32 Large</p>
                  </div>
                </div>
                <div>
                  <h3>Mochaccino</h3>
                  <div>
                    <p>£3.06 Small</p>
                    <p>£3.71 Medium</p>
                    <p>£3.97 Large</p>
                  </div>
                </div>
                <div>
                  <h3>Hot Chocolate</h3>
                  <div>
                    <p>£2.99 Small</p>
                    <p>£3.51 Medium</p>
                    <p>£3.77 Large</p>
                  </div>
                </div>
                <div>
                  <h3>Traditional Tea per Pot</h3>
                  <div>
                    <p>£2.67</p>
                  </div>
                </div>
                <div>
                  <h3>Earl Grey Tea per Pot</h3>
                  <div>
                    <p>£2.67</p>
                  </div>
                </div>
                <div>
                  <h3>Herbal Teas per Pot</h3>
                  <div>
                    <p>£2.86</p>
                  </div>
                </div>
                <div>
                  <h3>Frappe</h3>
                  <div id="frappe-item">
                    <div>
                      <p>£4.23 Coffee</p>
                      <p>£4.23 Chocolate</p>
                      <p>£4.23 Vanilla Served with Fresh Cream</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="category">
              <h2
                id="sandwiches"
                className={
                  "category-name" +
                  (showItems.includes(1) ? " active" : "")
                }
                onClick={() => handleCategoryClick(1)}
              >
                Sandwiches
              </h2>

              <div className="items" >
                <div>
                  <h3>All Day Breakfast Sandwiches</h3>
                  <p>
                    Free range egg, rasher, beef sausage, mayo, fresh tomato
                  </p>
                  <p className="price">£5.85</p>
                </div>
                <div>
                  <h3>Colmar Breakfast</h3>
                  <p>Sweet chili sauce, salami, mozzarella, rocket</p>
                  <p className="price">£5.20</p>
                </div>
                <div>
                  <h3>Chicken Caesar Sandwich</h3>
                  <p>Chicken, mayo, lettuce, tomato, cucumber</p>
                  <p className="price">£5.20</p>
                </div>

                <div>
                  <h3>Lyon Sandwich</h3>
                  <p>Chicken, mayo, avocado, lettuce, tomato</p>
                  <p className="price">£5.53</p>
                </div>
                <div>
                  <h3>BLT with Cheese Sandwich</h3>
                  <p>Rashers bacon, lettuce, tomato, mayo, cheddar</p>
                  <p className="price">£5.20</p>
                </div>
                <div>
                  <h3>Florentine Sandwich</h3>
                  <p>Spinach, mozzarella, chicken, sundried tomato, mint sauce</p>
                  <p className="price">£5.53</p>
                </div>
                <div>
                  <h3>Perpignan Sandwich</h3>
                  <p>Tortilla bread <br></br><br></br> Falafel, tomato ketchup, lettuce, cucumber, tomato, hummus, seasoning, red onion</p>
                  <p className="price">£5.20</p>
                </div>
                <div>
                  <h3>Tuna Classic Sandwich</h3>
                  <p>Tuna, mayo, sweetcorn, cucumber</p>
                  <p className="price">£4.55</p>
                </div>
                <div>
                  <h3>Meditterranean Sandwich</h3>
                  <p>Tuna, mayo, roasted pepper, rocket</p>
                  <p className="price">£5.20</p>
                </div>
                <div>
                  <h3>Sandwich with 1 Filling and Sauce</h3>
                  <p className="price">£4.55</p>
                </div>
                <div>
                  <h3>Sandwich with 2 Filling and Sauce</h3>
                  <p className="price">£4.55</p>
                </div>
                <div>
                  <h3>Sandwich with 3 Filling and Sauce</h3>
                  <p className="price">£5.53</p>
                </div>
                </div>
                
              </div>
            

            <div className='category'>
              <h2 
                id="burgers"
                className={
                  "category-name" +
                  (showItems.includes(2) ? " active" : "")
                }
                onClick={() => handleCategoryClick(2)}
              >
                Fresh Homemade Burger
              </h2>
            
                <div className='items' >
                <div>
                  <h3>Fresh Homemade Burger</h3>
                  <p>With chips</p>
                  <p className="price">£7.15</p>
                  </div>
                  <div>
                  <h3>Fresh Homemade Cheese Burger</h3>
                  <p>With chips</p>
                  <p className="price">£8.13</p>
                  </div>
                </div>    
            </div>

            <div className='category'>
              <h2 
                id='salads'
                className={
                  "category-name" +
                  (showItems.includes(3) ? " active" : "")
                }
                onClick={() => handleCategoryClick(3)}
              >
                Fresh Made Salads
              </h2>
              
                <div className='items' >
                <p className="items-desc">Served with any requested bread extra £150</p>
                <div>
                  <h3>Chicken Salad</h3>
                  <p>Roasted chicken, lettuce, rocket, tomato, cucumber, olives, crouton, zizou dressing</p>
                  <p className="price">£7.80</p>
                  </div>
                  <div>
                    <h3>Nicoise Salad</h3>
                    <p>Tuna, free range boiled eggs, lettuce, rocket, olives, green beans, tomato, anchovies, zizou dressing</p>
                    <p className="price">£8.13</p>
                  </div>
                  <div>
                    <h3>Greek Salad</h3>
                    <p>Feta cheese, lettuce, rocket, cucumber, tomato, olives, humous, zizou dressing</p>
                    <p className="price">£7.15</p>
                  </div>
                  <div>
                    <h3>Mediterranean Salad</h3>
                    <p>Spinach, lettuce, roasted (aubergines, courgette, pepper), cucumber, tomato, olives, Zizou dressing</p>
                    <p className="price">£7.15</p>
                  </div>
                </div>    
            </div>

            <div className='category'>
              <h2
                id="soup"
                className={
                  "category-name" +
                  (showItems.includes(4) ? " active" : "")
                }
                onClick={() => handleCategoryClick(4)}
              >
                Homemade Soup
              </h2>
            
                <div className='items' >
                <div>
                  <h3>Soup</h3>
                  <p>Served with bread & butter portion</p>
                  <p className="price">£6.50</p>
                  </div>
                </div>    
            </div>

            <div className='category'>
              <h2 
                id="chips"
                className={
                  "category-name" +
                  (showItems.includes(5) ? " active" : "")
                }
                onClick={() => handleCategoryClick(5)}
              >
                Chips
              </h2>
            
                <div className='items' >
                <div>
                  <h3>Small Chips</h3>
                  <p className="price">£2.28</p>
                  </div>
                  <div>
                  <h3>Medium Chips</h3>
                  <p className="price">£2.93</p>
                  </div>
                  <div>
                  <h3>Large Chips</h3>
                  <p className="price">£3.25</p>
                  </div>
                </div>    
            </div>

            <div className='category'>
              <h2 
                id="english"
                className={
                  "category-name" +
                  (showItems.includes(6) ? " active" : "")
                }
                onClick={() => handleCategoryClick(6)}
              >
                English Breakfast
              </h2>
              
            
                <div className='items' >
                  <p className="items-desc">All served with free range eggs</p>
                <div>
                  <h3>Full English Breakfast</h3>
                  <p>3 Rashers bacon, 1 beef sausage, 2 free range eggs, 1hash brown, butter mushrooms, beans, 2 toasts</p>
                  <p className="price">£8.45</p>
                  </div>
                  <div>
                  <h3>Vegetarian English Breakfast</h3>
                  <p>2 Free range eggs, 1 veg sausage, 2 hash brown, beans, butter mushrooms, 2 toasts</p>
                  <p className="price">£8.45</p>
                  </div>
                  <div>
                  <h3>Small English Breakfast</h3>
                  <p>1 Free range egg, beans or mushrooms, 1 beef sausage, 2 rashers bacon, 1 toast</p>
                  <p className="price">£6.50</p>
                  </div>
                </div>    
            </div>

            <div className='category'>
              <h2 
                id="breakfast"
                className={
                  "category-name" +
                  (showItems.includes(7) ? " active" : "")
                }
                onClick={() => handleCategoryClick(7)}
              >
                Breakfast
              </h2>
            
                <div className='items' >
                <div>
                  <h3>Breakfast with Smoked Salmon & Toast</h3>
                  <div>
                    <p>Scrambled Eggs &middot; £9.10</p>
                    <p>Poached Eggs &middot; £9.10</p>
                  </div>
                </div>
                <div>
                  <h3>Breakfast with Mushroom & Toast</h3>
                  <div>
                    <p>Scrambled Eggs &middot; £6.50</p>
                    <p>Poached Eggs &middot; £6.50</p>
                  </div>
                </div>
                <div>
                  <h3>Breakfast with 2 Rasher Bacon & Toast</h3>
                  <div>
                    <p>Scrambled Eggs &middot; £6.50</p>
                    <p>Poached Eggs &middot; £6.50</p>
                  </div>
                </div>
                <div>
                  <h3>Breakfast with 1 Sausage & Toast</h3>
                  <div>
                    <p>Scrambled Eggs &middot; £6.50</p>
                    <p>Poached Eggs &middot; £6.50</p>
                  </div>
                </div>
                <div>
                  <h3>Breakfast with Toast & Butter</h3>
                  <div>
                    <p>Scrambled Eggs &middot; £5.85</p>
                    <p>Poached Eggs &middot; £5.85</p>
                  </div>
                </div>
                <div>
                  <h3>Zizou Omelette & Toast Breakfast</h3>
                  <div>
                    <p>Scrambled Eggs &middot; £8.45</p>
                    <p>Poached Eggs &middot; £8.45</p>
                  </div>
                </div>
                <div>
                  <h3>Breakfast with 2 Free Range Fried Eggs on Toast & Butter</h3>
                  <div>
                    <p>Scrambled Eggs &middot; £5.14</p>
                    <p>Poached Eggs &middot; £5.14</p>
                  </div>
                </div>
                <div>
                  <h3>Breakfast with 3 Scrambled or Poached Free Range Eggs with Toast & Butter</h3>
                  <div>
                    <p>Scrambled Eggs &middot; £5.85</p>
                    <p>Poached Eggs &middot; £5.85</p>
                  </div>
                </div>
                <div>
                  <h3>Breakfast with 2 Poached or Scrambled Free Range Eggs</h3>
                  <div>
                    <p>Scrambled Eggs &middot; £8.58</p>
                    <p>Poached Eggs &middot; £8.58</p>
                  </div>
                </div>
                </div>    
            </div>

            <div className='category'>
              <h2 
                id="eggs"
                className={
                  "category-name" +
                  (showItems.includes(8) ? " active" : "")
                }
                onClick={() => handleCategoryClick(8)}
              >
                Eggs Benedict
              </h2>
            
                <div className='items' >
                <div>
                  <h3>Fresh Homemade Burger</h3>
                  <p>With chips</p>
                  <p className="price">£7.15</p>
                  </div>
                  <div>
                  <h3>Fresh Homemade Cheese Burger</h3>
                  <p>With chips</p>
                  <p className="price">£8.13</p>
                  </div>
                </div>    
            </div>

            <div className='category'>
              <h2 
                id="savories"
                className={
                  "category-name" +
                  (showItems.includes(9) ? " active" : "")
                }
                onClick={() => handleCategoryClick(9)}
              >
                Savories and Quiche
              </h2>
            
                <div className='items' >
                <div>
                  <h3>Fresh Homemade Burger</h3>
                  <p>With chips</p>
                  <p className="price">£7.15</p>
                  </div>
                  <div>
                  <h3>Fresh Homemade Cheese Burger</h3>
                  <p>With chips</p>
                  <p className="price">£8.13</p>
                  </div>
                </div>    
            </div>

            <div className='category'>
              <h2 
                id="porridge"
                className={
                  "category-name" +
                  (showItems.includes(10) ? " active" : "")
                }
                onClick={() => handleCategoryClick(10)}
              >
                Porridge
              </h2>
            
                <div className='items' >
                <div>
                  <h3>Fresh Homemade Burger</h3>
                  <p>With chips</p>
                  <p className="price">£7.15</p>
                  </div>
                  <div>
                  <h3>Fresh Homemade Cheese Burger</h3>
                  <p>With chips</p>
                  <p className="price">£8.13</p>
                  </div>
                </div>    
            </div>

            <div className='category'>
              <h2 
                id="plates"
                className={
                  "category-name" +
                  (showItems.includes(11) ? " active" : "")
                }
                onClick={() => handleCategoryClick(11)}
              >
                Hot Plates
              </h2>
            
                <div className='items' >
                <div>
                  <h3>Fresh Homemade Burger</h3>
                  <p>With chips</p>
                  <p className="price">£7.15</p>
                  </div>
                  <div>
                  <h3>Fresh Homemade Cheese Burger</h3>
                  <p>With chips</p>
                  <p className="price">£8.13</p>
                  </div>
                </div>    
            </div>

            <div className='category'>
              <h2 
                id="potatoes"
                className={
                  "category-name" +
                  (showItems.includes(12) ? " active" : "")
                }
                onClick={() => handleCategoryClick(12)}
              >
                Jacket Potatoes
              </h2>
            
                <div className='items' >
                <div>
                  <h3>Fresh Homemade Burger</h3>
                  <p>With chips</p>
                  <p className="price">£7.15</p>
                  </div>
                  <div>
                  <h3>Fresh Homemade Cheese Burger</h3>
                  <p>With chips</p>
                  <p className="price">£8.13</p>
                  </div>
                </div>    
            </div>

            <div className='category'>
              <h2 
                id="cold-drinks"
                className={
                  "category-name" +
                  (showItems.includes(13) ? " active" : "")
                }
                onClick={() => handleCategoryClick(13)}
              >
                Cold Drinks
              </h2>
            
                <div className='items' >
                <div>
                  <h3>Fresh Homemade Burger</h3>
                  <p>With chips</p>
                  <p className="price">£7.15</p>
                  </div>
                  <div>
                  <h3>Fresh Homemade Cheese Burger</h3>
                  <p>With chips</p>
                  <p className="price">£8.13</p>
                  </div>
                </div>    
            </div>

            <div className='category'>
              <h2 
                id="smoothie"
                className={
                  "category-name" +
                  (showItems.includes(14) ? " active" : "")
                }
                onClick={() => handleCategoryClick(14)}
              >
                Smoothie Freshly Squeezed Juice
              </h2>
            
                <div className='items' >
                <div>
                  <h3>Fresh Homemade Burger</h3>
                  <p>With chips</p>
                  <p className="price">£7.15</p>
                  </div>
                  <div>
                  <h3>Fresh Homemade Cheese Burger</h3>
                  <p>With chips</p>
                  <p className="price">£8.13</p>
                  </div>
                </div>    
            </div>

            <div className='category'>
              <h2 
                id="fudge"
                className={
                  "category-name" +
                  (showItems.includes(15) ? " active" : "")
                }
                onClick={() => handleCategoryClick(15)}
              >
                Fudge
              </h2>
            
                <div className='items' >
                <div>
                  <h3>Fresh Homemade Burger</h3>
                  <p>With chips</p>
                  <p className="price">£7.15</p>
                  </div>
                  <div>
                  <h3>Fresh Homemade Cheese Burger</h3>
                  <p>With chips</p>
                  <p className="price">£8.13</p>
                  </div>
                </div>    
            </div>

            <div className='category'>
              <h2 
                id="desserts"
                className={
                  "category-name" +
                  (showItems.includes(16) ? " active" : "")
                }
                onClick={() => handleCategoryClick(16)}
              >
                Desserts
              </h2>
            
                <div className='items' >
                <div>
                  <h3>Fresh Homemade Burger</h3>
                  <p>With chips</p>
                  <p className="price">£7.15</p>
                  </div>
                  <div>
                  <h3>Fresh Homemade Cheese Burger</h3>
                  <p>With chips</p>
                  <p className="price">£8.13</p>
                  </div>
                </div>    
            </div>

            <div className='category'>
              <h2 
                id="pastries"
                className={
                  "category-name" +
                  (showItems.includes(17) ? " active" : "")
                }
                onClick={() => handleCategoryClick(17)}
              >
                Pastries
              </h2>
            
                <div className='items' >
                <div>
                  <h3>Fresh Homemade Burger</h3>
                  <p>With chips</p>
                  <p className="price">£7.15</p>
                  </div>
                  <div>
                  <h3>Fresh Homemade Cheese Burger</h3>
                  <p>With chips</p>
                  <p className="price">£8.13</p>
                  </div>
                </div>    
            </div>

          </div>
        </div>
        
      </div>
    </div>
  );
}

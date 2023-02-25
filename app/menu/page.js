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
                    <p>£2.00 Small</p>
                    <p>£2.40 Medium</p>
                  </div>
                </div>
                <div>
                  <h3>Macchiato</h3>
                  <div>
                    <p>£2.10 Small</p>
                    <p>£2.50 Medium</p>
                  </div>
                </div>
                <div>
                  <h3>Flat White</h3>
                  <div>
                    <p>£2.50 Small</p>
                    <p>£3.00 Medium</p>
                  </div>
                </div>
                <div>
                  <h3>Cappuccino</h3>
                  <div>
                    <p>£2.50 Small</p>
                    <p>£3.00 Medium</p>
                    <p>£3.20 Large</p>
                  </div>
                </div>
                <div>
                  <h3>Baby Chino</h3>
                  <div>
                    <p>£1.50 Small</p>
                    <p>£2.00 Medium</p>
                  </div>
                </div>
                <div>
                  <h3>Glass of Milk (cold or hot)</h3>
                  <div>
                    <p>£1.60</p>
                  </div>
                </div>
                <div>
                  <h3>Latte</h3>
                  <div>
                    <p>£2.50 Small</p>
                    <p>£3.00 Medium</p>
                    <p>£3.20 Large</p>
                  </div>
                </div>
                <div>
                  <h3>Chai Late in Glass</h3>
                  <p>(Spicy or Vanilla)</p>
                  <div>
                    <p>£2.70 Small</p>
                    <p>£3.20 Medium</p>
                    <p>£3.60 Large</p>
                  </div>
                </div>
                <div>
                  <h3>Americano</h3>
                  <div>
                    <p>£2.35 Small</p>
                    <p>£2.75 Medium</p>
                    <p>£2.95 Large</p>
                  </div>
                </div>
                <div>
                  <h3>Mochaccino</h3>
                  <div>
                    <p>£2.75 Small</p>
                    <p>£3.25 Medium</p>
                    <p>£3.45 Large</p>
                  </div>
                </div>
                <div>
                  <h3>Hot Chocolate</h3>
                  <div>
                    <p>£2.70 Small</p>
                    <p>£3.20 Medium</p>
                    <p>£3.30 Large</p>
                  </div>
                </div>
                <div>
                  <h3>Traditional Tea per Pot</h3>
                  <div>
                    <p>£2.35</p>
                  </div>
                </div>
                <div>
                  <h3>Earl Grey Tea per Pot</h3>
                  <div>
                    <p>£2.35</p>
                  </div>
                </div>
                <div>
                  <h3>Herbal Teas per Pot</h3>
                  <div>
                    <p>£2.50</p>
                  </div>
                </div>
                <div>
                  <h3>Frappe</h3>
                  <p>(Coffee, chocolate, vanilla served with fresh cream)</p>
                  <div id="frappe-item">
                    <div>
                      <p>£3.95</p>
                    </div>
                  </div>
                </div>
                <p className="topping">Extra soya milk - 35p<br/>Extra fresh cream - 35p <br/>Extra shot of coffee - 35p <br/>Extra shot of syrup - 35p</p>
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
                Sandwiches (Hot and Cold)
              </h2>
              

              <div className="items" >
                <p>Served with white or granary bread & garnish salad<br/>Requested Baguette, Panini or Wrap - extra 55p</p>
                <div>
                  <h3>All Day Breakfast</h3>
                  <p>
                    Free range egg, rasher, beef sausage, mayo, fresh tomato
                  </p>
                  <p className="price">£6.00</p>
                </div>
                <div>
                  <h3>Colmar</h3>
                  <p>Sweet chili sauce, salami, mozzarella, rocket</p>
                  <p className="price">£5.40</p>
                </div>
                <div>
                  <h3>Chicken Caesar</h3>
                  <p>Chicken, mayo, lettuce, tomato, cucumber</p>
                  <p className="price">£5.40</p>
                </div>

                <div>
                  <h3>Lyon</h3>
                  <p>Chicken, mayo, avocado, lettuce, tomato</p>
                  <p className="price">£5.70</p>
                </div>
                <div>
                  <h3>Sete</h3>
                  <p>Smoked salmon, cream cheese, avocado. rocket, lemon juice</p>
                  <p className="price">£5.75</p>
                </div>
                <div>
                  <h3>Le Corse</h3>
                  <p>Brie, mayo, rasher, tomato</p>
                  <p className="price">£5.40</p>
                </div>
                <div>
                  <h3>Zizou Cclub</h3>
                  <p>Chicken, rasher, free range boiled egg, mayo, lettuce, tomato</p>
                  <p className="price">£5.40</p>
                </div>
                <div>
                  <h3>Paris</h3>
                  <p>Avocado, tomato, mayo, cheddar, rocket</p>
                  <p className="price">£5.40</p>
                </div>
                <div>
                  <h3>Sicilian</h3>
                  <p>Mixed grilled veg, mayo, cheddar, rocket</p>
                  <p className="price">£5.40</p>
                </div>
                <div>
                  <h3>Marseille</h3>
                  <p>Prawns, prawn cocktail sauce, rocket lemon juice</p>
                  <p className="price">£5.40</p>
                </div>
                <div>
                  <h3>Verona</h3>
                  <p>French mustard, turkey, mozzarella, sundried tomato</p>
                  <p className="price">£5.40</p>
                </div>
                <div>
                  <h3>Provencale</h3>
                  <p>Brie, tomato, basil</p>
                  <p className="price">£5.10</p>
                </div>
                <div>
                  <h3>Florentine</h3>
                  <p>Spinach, mozzarella, chicken, sundried tomato, pesto sauce</p>
                  <p className="price">£5.80</p>
                </div>
                <div>
                  <h3>Perpignan</h3>
                  <p>Tortilla bread <br></br><br></br> Falafel, lettuce, cucumber, tomato, hummus, seasoning, red onion, red sauce</p>
                  <p className="price">£5.10</p>
                </div>
                <div>
                  <h3>BLT</h3>
                  <p>Rashers bacon, lettuce, tomato, mayo</p>
                  <p className="price">£4.80</p>
                </div>
                <div>
                  <h3>BLT with Cheese</h3>
                  <p>Rashers bacon, lettuce, tomato, mayo, cheddar</p>
                  <p className="price">£5.40</p>
                </div>
                <div>
                  <h3>Tuna Classic</h3>
                  <p>Tuna, mayo, sweetcorn, cucumber</p>
                  <p className="price">£4.80</p>
                </div>
                <div>
                  <h3>Meditterranean</h3>
                  <p>Tuna, mayo, roasted pepper, rocket</p>
                  <p className="price">£5.40</p>
                </div>
                <div>
                  <h3>Sandwich with 1 Filling, Salad and Sauce</h3>
                  <p className="price">£4.80</p>
                </div>
                <div>
                  <h3>Sandwich with 2 Filling, Salad and Sauce</h3>
                  <p className="price">£5.40</p>
                </div>
                <div>
                  <h3>Sandwich with 3 Filling, Salad and Sauce</h3>
                  <p className="price">£6.00</p>
                </div>
                <p className="topping">£1.50 for any extra meat topping<br/>£1.50 for any extra vegetable topping</p>
                </div>
                <div>
              
                  
            
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
                <p>With chips</p>
                <div>
                  <h3>Fresh Homemade Burger</h3>
                  <p>Burger bun, homemade beef burger, red onion, tomato, lettuce, burger sauce </p>
                  <p className="price">£7.20</p>
                  </div>
                  <div>
                  <h3>Fresh Homemade Cheese Burger</h3>
                  <p>Burger bun, homemade beef burger, red onion, tomato, lettuce,  burger sauce </p>
                  <p className="price">£8.40</p>
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
                  <p className="price">£8.40</p>
                  </div>
                  <div>
                    <h3>Nicoise Salad</h3>
                    <p>Tuna, free range boiled eggs, lettuce, rocket, olives, green beans, tomato, anchovies, zizou dressing</p>
                    <p className="price">£8.70</p>
                  </div>
                  <div>
                    <h3>Greek Salad</h3>
                    <p>Feta cheese, lettuce, rocket, cucumber, tomato, olives, humous, zizou dressing</p>
                    <p className="price">£7.80</p>
                  </div>
                  <div>
                    <h3>Mediterranean Salad</h3>
                    <p>Spinach, lettuce, roasted (aubergines, courgette, pepper), cucumber, tomato, olives, Zizou dressing</p>
                    <p className="price">£7.80</p>
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
                Soup
              </h2>
            
                <div className='items' >
                <div>
                  <h3>Homemade Soup</h3>
                  <p>Served with white or multigrain Baguette & butter portion</p>
                  <p className="price">£6.50</p>
                  </div>
                  <p className="topping">£1.00 for extra bread and butter </p>
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
                  <p className="price">£1.75</p>
                  </div>
                  <div>
                  <h3>Medium Chips</h3>
                  <p className="price">£2.25</p>
                  </div>
                  <div>
                  <h3>Large Chips</h3>
                  <p className="price">£2.50</p>
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
                  <p>3 Rashers bacon, 1 beef sausage, 2 free range eggs, 1 hash brown, butter mushrooms, beans, 2 toasts</p>
                  <p className="price">£7.50</p>
                  </div>
                  <div>
                  <h3>Vegetarian Breakfast</h3>
                  <p>2 Free range eggs, 1 veg sausage, 2 hash brown, beans, butter mushrooms, 2 toasts</p>
                  <p className="price">£7.50</p>
                  </div>
                  <div>
                  <h3>Small English Breakfast</h3>
                  <p>1 Free range egg, beans or mushrooms, 1 beef sausage, 2 rashers bacon, 1 toast</p>
                  <p className="price">£6.00</p>
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
                <p>Poached or Scrambled Eggs (all served with free range eggs)</p>
                <div>
                  <h3>Breakfast with Smoked Salmon & Toast</h3>
                  <div>
                    <p>£8.00</p>
                    
                  </div>
                </div>
                <div>
                  <h3>Breakfast with Mushroom & Toast</h3>
                  <div>
                    <p>£6.00</p>
                  </div>
                </div>
                <div>
                  <h3>Breakfast with 2 Rasher Bacon & Toast</h3>
                  <div>
                    <p>£6.25</p>
                  </div>
                </div>
                <div>
                  <h3>Breakfast with 1 Sausage & Toast</h3>
                  <div>
                    <p>£6.25</p>
                  </div>
                </div>
                <div>
                  <h3>Breakfast with Toast & Butter</h3>
                  <div>
                    <p>£5.50</p>
                  </div>
                </div>
                <div>
                  <h3>Zizou Omelette & Toast Breakfast</h3>
                  <p>Butter mushrooms, red onion, cheddar cheese, toamto, grilled turkey</p>
                  <div>
                    <p>£7.50</p>
                  </div>
                </div>
                <div>
                  <h3>Breakfast with 2 Free Range Fried Eggs on Toast & Butter</h3>
                  <div>
                    <p>£4.95</p>
                  </div>
                </div>
                <div>
                  <h3>Breakfast with 3 Scrambled or Poached Free Range Eggs with Toast & Butter</h3>
                  <div>
                    <p>£5.50</p>
                  </div>
                </div>
                <div>
                  <h3>Breakfast with 2 Poached or Scrambled Free Range Eggs</h3>
                  <div>
                    <p>£7.50</p>
                  </div>
                </div>
                <p className="topping">£2.00 for any extra 2 slices of rashers<br/>
                  95p for any extra vegetable topping<br/>
                  £1.50 for any extra grated cheddar cheese<br/>
                  £1.25 for any extra 1 beef sausage<br/>
                  £1.25 for any extra toast with butter
                </p>
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
                <p>All served with free range eggs</p>
                <div>
                  <h3>with mushrooms</h3>
                  <p className="price">£7.00</p>
                  </div>
                  <div>
                  <h3>with rashers or turkey</h3>
                  <p className="price">£7.25</p>
                  </div>
                  <div>
                  <h3>with spinach</h3>
                  <p className="price">£7.00</p>
                  </div>
                  <div>
                  <h3>with smoked salmon (royal)</h3>
                  <p className="price">£8.25</p>
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
                 <p>All served with free range eggs</p>
                  <div>
                    <h3>Croque Monsieur</h3>
                    <p>Turkey or rashers, 2 slices of toast, bechamel sauce, cheddar cheese</p>
                    <p className="price">£5.75</p>
                  </div>
                  <div>
                    <h3>Croque Monsieur</h3>
                    <p>Fresh Tomato, 2 slices toast, bechamel sauce, cheddar cheese</p>
                    <p className="price">£5.20</p>
                  </div>
                  <div>
                    <h3>Croque Monsieur</h3>
                    <p>Butter mushroom, 2 slices toast, bechamel sauce, cheddar cheese</p>
                    <p className="price">£5.20</p>
                  </div>
                  <div>
                    <h3>Croque Madame</h3>
                    <p>Turkey or rashers, 2 slices of toast, bechamel sauce, cheddar cheese, 1 free range egg</p>
                    <p className="price">£6.40</p>
                  </div>
                  <div>
                    <h3>Croque Madame</h3>
                    <p>Fresh Tomato, 2 slices toast, bechamel sauce, cheddar cheese, 1 free range egg</p>
                    <p className="price">£6.30</p>
                  </div>
                  <div>
                    <h3>Croque Madame</h3>
                    <p>Butter mushroom, 2 slices toast, bechamel sauce, cheddar cheese, 1 free range egg</p>
                    <p className="price">£6.30</p>
                  </div>
                  <div>
                    <h3>Homemade Sausage Rolls</h3>
                    <p>Puff pastry filled with beef sausage</p>
                    <p className="price">£3.05</p>
                  </div>
                  <div>
                    <h3>Turkey Cheddar Cheese Croissant</h3>
                    <p className="price">£3.40</p>
                  </div>
                  <div>
                    <h3>Tomato, Cheddar Cheese Croissant</h3>
                    <p className="price">£3.30</p>
                  </div>
                  <div>
                    <h3>Quiche de Provence</h3>
                    <p>Chicken, mushroom, cheddar, double cream</p>
                    <p className="price">£6.00</p>
                  </div>
                  <div>
                    <h3>Quiche Loraine</h3>
                    <p>Turkey, cheddar, double cream</p>
                    <p className="price">£6.00</p>
                  </div>
                  <div>
                    <h3>Quiche St Remit</h3>
                    <p>Feta cheese, spinach, cheddar, double cream</p>
                    <p className="price">£5.95</p>
                  </div>
                  <div>
                    <h3>Quiche Sete</h3>
                    <p>Salmon, broccoli, cheddar, double cream</p>
                    <p className="price">£6.30</p>
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
                  <h3>Organic Porridge with Brown Sugar</h3>
                  <p className="price">£4.80</p>
                  </div>
                  <div>
                  <h3>Organic Porridge with Sultana & Honey</h3>
                  <p className="price">£5.90</p>
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
                <p>All hot plates served with garnish salad</p>
                  <div>
                  <h3>Meat Lasagne</h3>
                  <p>Beef mince, carrots, plum tomato, onion, fresh peppers, grated cheddar cheese & bechamel sauce</p>
                  <p className="price">£8.90</p>
                  </div>
                  <div>
                    <h3>Vegetarian Lasagne</h3>
                    <p>Fresh peppers, aubergines, courgette, carrots, plum tomato, onion, cheese, grated cheddar cheese & bechamel sauce</p>
                    <p className="price">£8.90</p>
                  </div>
                  <div>
                    <h3>Spaghetti Bolognese</h3>
                    <p>Pasta, beef mince, plum tomato, onion, fresh pepper & carrots</p>
                    <p className="price">£8.90</p>
                  </div>
                  <div>
                    <h3>Chicken Leg & Rice or Chips</h3>
                    <p>Chicken, onion, carrots, mushrooms, green olives, parsley with Mediterranean sauce</p>
                    <p className="price">£8.90</p>
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
                <p>Served with garnish salad</p>
                  <div>
                    <h3>Jacket Potatoes with Chilli con Carne & Butter</h3>
                    <p className="price">£7.50</p>
                  </div>
                  <div>
                    <h3>Jacket Potatoes with Butter and Cheddar Cheese</h3>
                    <p className="price">£6.00</p>
                  </div>
                  <div>
                    <h3>Jacket Potatoes with Cheddar Cheese and Beans</h3>
                    <p className="price">£6.50</p>
                  </div>
                  <div>
                    <h3>Jacket Potatoes with Tuna, Mayo, Sweet Corn, Cheddar Cheese</h3>
                    <p className="price">£7.25</p>
                  </div>
                  <div>
                    <h3>Jacket Potatoes with Roasted Vegetables, Cheddar Cheese</h3>
                    <p className="price">£6.75</p>
                  </div>
                  <div>
                    <h3>Jacket Potatoes with Beans and Coleslaw</h3>
                    <p className="price">£6.75</p>
                  </div>
                  <div>
                    <h3>Jacket Potatoes with Prawns, Prawn Cocktail, Dill</h3>
                    <p className="price">£7.00</p>
                  </div>
                <p className="topping">£1.50 for any extra meat topping<br/>
                £1.25 for any extra veg topping</p>
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
                  <h3>Coke, Diet Coke Icon</h3>
                  <p className="price">£2.25</p>
                </div>
                <div>
                  <h3>Still Water</h3>
                  <p className="price">£1.55</p>
                </div>
                <div>
                  <h3>Sparkling Water</h3>
                  <p className="price">£1.55</p>
                </div>
                <div>
                  <h3>Appletiser</h3>
                  <p className="price">£2.35</p>
                </div>
                <div>
                  <h3>Orangina</h3>
                  <p className="price">£2.40</p>
                </div>
                <div>
                  <h3>Fanta Orange</h3>
                  <p className="price">£2.20</p>
                </div>
                <div>
                  <h3>Sprite Icon</h3>
                  <p className="price">£2.20</p>
                </div>
                <div>
                  <h3>Oasis Citrus Punch</h3>
                  <p className="price">£2.00</p>
                </div>
                <div>
                  <h3>Oasis Summer Fruit</h3>
                  <p className="price">£2.00</p>
                </div>
                <div>
                  <h3>Apple Juice</h3>
                  <p className="price">£2.30</p>
                </div>
                <div>
                  <h3>Ice Cream Milkshakes</h3>
                  <p>Vanilla, choco, strawberry, banana</p>
                  <p className="price">£3.95</p>
                </div>
                <div>
                  <h3>Ice Coffee</h3>
                  <p className="price">£3.95</p>
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
                  <h3>Smoothie Mixed with Apple Juice</h3>
                  <p className="price">£4.50</p>
                </div>
                <div>
                  <h3>Freshly Squeezed Orange Juice</h3>
                  <p className="price">£3.95</p>
                </div>
                <div>
                  <h3>Freshly Squeezed Lemon Juice</h3>
                  <p className="price">£3.95</p>
                </div>
                <div>
                  <h3>Freshly Squeezed Carrot Juice</h3>
                  <p className="price">£3.95</p>
                </div>
                <div>
                  <h3>Freshly Squeezed Apple Juice</h3>
                  <p className="price">£3.95</p>
                </div>
                <div>
                  <h3>Any 2 Fresh Fruit Combination</h3>
                  <p className="price">£4.50</p>
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
                  <h3>Flapjack or Flaky Cake</h3>
                  <p className="price">£2.20</p>
                </div>
                <div>
                  <h3>Chocolate Caramel</h3>
                  <p className="price">£2.20</p>
                </div>
                <div>
                  <h3>Chocolate Rice Crispy</h3>
                  <p className="price">£2.20</p>
                </div>
                <div>
                  <h3>Chocolate, Fruit & Nuts</h3>
                  <p className="price">£2.20</p>
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
                  <h3>Nougat Sticks</h3>
                  <p className="price">£3.95</p>
                </div>
                <div>
                  <h3>Almond Stick</h3>
                  <p className="price">£3.95</p>
                </div>
                <div>
                  <h3>Apple Pie Crumble</h3>
                  <p className="price">£3.65</p>
                </div>
                <div>
                  <h3>County Carrot Cake</h3>
                  <p className="price">£3.65</p>
                </div>
                <div>
                  <h3>New York Cheese Cake</h3>
                  <p className="price">£3.65</p>
                </div>
                <p className="topping">Extra 1 scoop of ice cream - £1.95 <br/>Extra 2 scoop of ice cream - £3.45<br/> Extra ice cream syrup - £0.75 <br/> Extra fresh cream - £0.95</p>
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
                  <h3>Butter Croissant</h3>
                  <p className="price">£1.55</p>
                </div>
                <div>
                  <h3>Pain au Chocolate</h3>
                  <p className="price">£1.75</p>
                </div>
                <div>
                  <h3>Pain au Raisin</h3>
                  <p className="price">£2.35</p>
                </div>
                <div>
                  <h3>Apricot Danish</h3>
                  <p className="price">£2.45</p>
                </div>
                <div>
                  <h3>Almond Croissant</h3>
                  <p className="price">£2.35</p>
                </div>
                <div>
                  <h3>Pecan Caramel</h3>
                  <p className="price">£2.45</p>
                </div>
                <div>
                  <h3>Cinnamon Swirl</h3>
                  <p className="price">£2.45</p>
                </div>
                <div>
                  <h3>Chocolate Twist</h3>
                  <p className="price">£2.55</p>
                </div>
                <div>
                  <h3>Brown or White Toast</h3>
                  <p>Served with butter portion & jam</p>
                  <p className="price">£2.40</p>
                </div>
                <p className="topping">Real butter portion - 50p <br/> Jam or marmalade - 50p</p> 
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.
*/

function menuMaker(menuArray){
  const menuGroup = document.createElement('div')
  const menuList = document.createElement('ul')
  const menuStu = document.createElement('li')
  const menuFac = document.createElement('li')
  const menuWha = document.createElement('li')
  const menuTec = document.createElement('li')
  const menuMus = document.createElement('li')
  const menuLogOut = document.createElement('li')

  menuGroup.appendChild(menuList)
  menuList.appendChild(menuStu)
  menuList.appendChild(menuFac)
  menuList.appendChild(menuWha)
  menuList.appendChild(menuTec)
  menuList.appendChild(menuMus)
  menuList.appendChild(menuLogOut)

  menuGroup.className = 'menu'
  menuList.className = 'ul'
  menuStu.className = 'li'
  menuFac.className = 'li'
  menuWha.className = 'li'
  menuTec.className = 'li'
  menuMus.className = 'li'
  menuLogOut.className = 'li'

/*
  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>
*/

  // menuArray.forEach(item => {
  //   const createdItem = document.createElement('li')

  //   menuList.appendChild(createdItem)
  //   createdItem.className = 'li'
  //   createdItem.textContent = item
  // })


/*
  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').
*/

const menuHamburger = document.querySelector('.menu-button') 
//menuGroup.appendChild(menuHamburger)
//menuHamburger.className = 'menu-button'

/*
  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

*/

menuHamburger.addEventListener('click', () => {
  menuHamburger.classList.toggle('menu--open')
})


/*
  Step 5: Don't forget to return your div.menu.
*/

return menuGroup

}

/*
  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

menuMaker(menuItems)

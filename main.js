import './style.css'
const openMenuBtn = document.querySelector('.openMenuBtn');
const closeMenuBtn = document.querySelector('.closeMenuBtn');
const navBar = document.querySelector('.nav__bar');
const branding = document.querySelector('.branding');
const navList = document.querySelector('.nav__list');
const btnPrev = document.querySelector('.btn--prev');
const btnNext = document.querySelector('.btn--next');

openMenuBtn.addEventListener("click", () => {
  navBar.classList.add("is--active");
  branding.classList.add("hide");
  navList.classList.remove("hide");
  openMenuBtn.classList.add("hide");
  closeMenuBtn.classList.remove("hide");
})
closeMenuBtn.addEventListener("click", () => {
  navBar.classList.remove("is--active");
  branding.classList.remove("hide");
  navList.classList.add("hide");
  closeMenuBtn.classList.add("hide");
  openMenuBtn.classList.remove("hide");
})

const slider = [
  {
    img: '',
    title: 'Discover innovative ways to decorate',
    description: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
  },
  {
    img: '',
    title: 'We are available all across the globe',
    description: 'With stores all over the world, it\'s easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don\'t hesitate to contact us today.',
  },
  {
    img: '',
    title: 'Manufactured with the best materials',
    description: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
  },
]


btnNext.addEventListener("click", ()=>{
  console.log("btnNext");
})
btnPrev.addEventListener("click", ()=>{
  console.log("btnPrev");
})
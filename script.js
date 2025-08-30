/* ===== Load HTML sections dynamically ===== */
async function loadHTML(id, url) {
  const res = await fetch(url);
  document.getElementById(id).innerHTML = await res.text();
}

loadHTML("header", "header.html");
loadHTML("menu", "menu.html");
loadHTML("secret", "secret-menu.html");
loadHTML("footer", "footer.html");

/* ===== Menu Items ===== */
const coffee = [
  {n:"Classic Espresso",p:"Post Story",d:"Strong and bold, the way it should be", payment:"I am nothing but a weak submissive..."},
  {n:"Creamy Cappuccino",p:"Post Story",d:"Perfect balance of espresso, steamed milk and foam", payment:"I'm a mere submissive..."},
  {n:"Caramel Macchiato",p:"Post Story",d:"Espresso with vanilla syrup, milk and caramel drizzle", payment:"I'm such a basic submissive..."},
  {n:"Mocha Dream",p:"Post Story",d:"Chocolate, espresso and steamed milk perfectly combined", payment:"I'm a weak sub who can't handle real coffee..."}
];

const tea = [
  {n:"English Breakfast",p:"Post Story",d:"Robust black tea to start your day right", payment:"I'm a traditional submissive..."},
  {n:"Green Tea Sensation",p:"Post Story",d:"Light and refreshing with subtle grassy notes", payment:"I'm a delicate submissive..."},
  {n:"Chamomile Bliss",p:"Post Story",d:"Soothing herbal tea for relaxation", payment:"I'm such an anxious submissive..."},
  {n:"Chai Latte",p:"Post Story",d:"Spiced tea with steamed milk - sweet and aromatic", payment:"I'm an exotic submissive..."}
];

const desserts = [
  {n:"Croissant",p:"Post Story",d:"Buttery, flaky perfection - plain or with chocolate", payment:"I'm a French-inspired submissive..."},
  {n:"Blueberry Muffin",p:"Post Story",d:"Moist muffin bursting with fresh blueberries", payment:"I'm a bursting-with-excitement submissive..."},
  {n:"Chocolate Brownie",p:"Post Story",d:"Rich, fudgy chocolate brownie with walnuts", payment:"I'm a dense, fudgy submissive..."},
  {n:"New York Cheesecake",p:"Post Story",d:"Creamy classic with berry compote", payment:"I'm a dense, creamy submissive..."}
];

/* ===== Secret Menu Items ===== */
const chokeItems = [
  {n:"Reverse Headscissor",p:"Post Content",d:"Crushing thighs around the neck until submission.", payment:"I desperately beg..."},
  {n:"Figure-Four Leg Choke",p:"Post Content",d:"Legs locked in a figure-four around the neck...", payment:"I confess my complete inadequacy..."},
  {n:"Rear Naked Choke",p:"Post Content",d:"Blood choke from behind...", payment:"I openly admit my desire..."},
  {n:"Air Headscissor",p:"Post Content",d:"Legs wrapped around the head/neck from the front...", payment:"I beg to be lifted off the ground..."},
  {n:"Bosom Smother",p:"Post Content",d:"Suffocation through breast smothering.", payment:"I desperately need to be suffocated..."}
];

const juiceItems = [
  {n:"Cum Consumption Ritual",p:"Post Content",d:"Forced cum drinking with humiliation.", payment:"I openly beg to serve as a living vessel..."},
  {n:"Golden Shower",p:"Post Content",d:"Urolagnia ritual, humiliating ownership.", payment:"I confess my deepest desire..."},
  {n:"Face Farting",p:"Post Content",d:"Total degradation with breath control.", payment:"I desperately need my Dommy Mommy to release..."}
];

const physicalItems = [
  {n:"Pegging Domination",p:"Post Content",d:"Strap-on mastery with anal control.", payment:"I openly beg for my Dommy Mommy..."},
  {n:"Total Bondage",p:"Post Content",d:"Full restraints and immobilization.", payment:"I need to be completely immobilized..."},
  {n:"Impact Play",p:"Post Content",d:"Whips, paddles, and corporal punishment.", payment:"I confess that my flesh deserves to be marked..."}
];

const humiliationItems = [
  {n:"Foot Worship",p:"Post Content",d:"Sole licking, trampling, and verbal degradation.", payment:"I confess that my tongue belongs pressed..."},
  {n:"Facesitting Throne",p:"Post Content",d:"Ownership through smothering facesit.", payment:"I need my Dommy Mommy to use my face..."},
  {n:"Human Furniture",p:"Post Content",d:"Forced to act as functional furniture.", payment:"I beg to be used as living furniture..."}
];

/* ===== Functions ===== */
function openPaymentModal(itemName, paymentText, isSecret = false) {
  const modal = document.getElementById('paymentModal');
  const nameEl = modal.querySelector('#paymentItemName') || createPaymentNameElement(modal);
  const textEl = modal.querySelector('#paymentText') || createPaymentTextElement(modal);

  nameEl.textContent = `Payment Required: ${itemName}`;
  textEl.innerHTML = `
    <p><strong>To receive your ${isSecret ? 'secret item' : 'order'}, you must upload the following text publicly:</strong></p>
    <p>"${paymentText}"</p>
    <p><strong>Tag @DommyMommyCafe and include #${isSecret ? 'SecretMenuPayment' : 'StoryPayment'}</strong></p>
  `;
  modal.style.display = 'flex';
}

function closePaymentModal() {
  document.getElementById('paymentModal').style.display = 'none';
  alert("Thank you for your payment. Your order is being prepared!");
}

function fillItems(containerId, items, isSecret = false){
  const container = document.getElementById(containerId);
  if(!container) return;
  container.innerHTML = '';
  items.forEach(i => {
    const itemEl = document.createElement('div');
    itemEl.className = isSecret ? 'secret-item' : 'menu-item';
    itemEl.innerHTML = `
      <div class="item-name">${i.n}<span class="item-price">${i.p}</span></div>
      <p class="${isSecret ? 'secret-item-desc' : 'item-desc'}">${i.d}</p>
      <div class="${isSecret ? 'post-indicator' : 'story-indicator'}">
        <i class="fas ${isSecret ? 'fa-comment' : 'fa-book'}"></i> 
        Click to view payment requirements
      </div>
    `;
    itemEl.addEventListener('click', () => openPaymentModal(i.n, i.payment, isSecret));
    container.appendChild(itemEl);
  });
}

/* ===== Initialize Menu Items ===== */
setTimeout(() => { // delay to ensure sections are loaded
  fillItems('coffeeItems', coffee);
  fillItems('teaItems', tea);
  fillItems('dessertItems', desserts);
  fillItems('chokeItems', chokeItems, true);
  fillItems('juiceItems', juiceItems, true);
  fillItems('physicalItems', physicalItems, true);
  fillItems('humiliationItems', humiliationItems, true);
}, 500);

/* ===== Secret Menu Modal ===== */
const passwordModal = document.getElementById('passwordModal');
const secretMenu = document.getElementById('secretMenu');
const passwordInput = document.getElementById('passwordInput');
const passwordError = document.getElementById('passwordError');

function toggleModal(show){
  if(!passwordModal) return;
  passwordModal.style.display = show ? 'flex' : 'none';
  if(passwordInput) passwordInput.value = '';
  if(passwordError) passwordError.style.display = 'none';
}

function checkPassword(){
  if(passwordInput.value==='mommyy'){
    toggleModal(false);
    if(secretMenu) secretMenu.style.display='block';
    const btnText = document.getElementById('btnText');
    if(btnText) btnText.textContent='Hide Secret Menu';
  } else if(passwordError){
    passwordError.style.display='block';
    passwordInput.value='';
  }
}

if(passwordModal) passwordModal.addEventListener('click', e => { if(e.target===passwordModal) toggleModal(false) });
const paymentModal = document.getElementById('paymentModal');
if(paymentModal) paymentModal.addEventListener('click', e => { if(e.target===paymentModal) closePaymentModal(); });
if(passwordInput) passwordInput.addEventListener('keypress', e => { if(e.key==='Enter') checkPassword(); });

/* ===== Helpers (optional) ===== */
function createPaymentNameElement(modal){
  const h2 = document.createElement('h2');
  h2.id = 'paymentItemName';
  modal.querySelector('.payment-form')?.prepend(h2);
  return h2;
}

function createPaymentTextElement(modal){
  const div = document.createElement('div');
  div.id = 'paymentText';
  modal.querySelector('.payment-form')?.appendChild(div);
  return div;
}
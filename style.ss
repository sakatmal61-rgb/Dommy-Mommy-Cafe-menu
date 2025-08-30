/* ===== Root Variables ===== */
:root {
  --bg1: #2c1a3b;
  --bg2: #4e2c5c;
  --accent1: #ff7ec8;
  --accent2: #a64d79;
  --accent3: #d9b0e6;
}

/* ===== Global Styles ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, sans-serif;
  background: linear-gradient(135deg, var(--bg1), var(--bg2));
  color: var(--accent3);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

/* ===== Menu Container ===== */
.menu-container {
  max-width: 1100px;
  width: 100%;
}

/* ===== Menu Header ===== */
.menu-header {
  text-align: center;
  margin-bottom: 30px;
}

.menu-title {
  font-size: 3.5rem;
  color: var(--accent1);
  margin-bottom: 10px;
  text-shadow: 3px 3px 0 var(--accent2);
  letter-spacing: 2px;
  font-weight: 800;
}

.menu-subtitle {
  font-style: italic;
  color: #d9b0f1;
  margin-bottom: 20px;
  font-size: 1.2rem;
}

/* ===== Menu Styles ===== */
.menu {
  background: rgba(44, 26, 59, 0.9);
  border-radius: 25px;
  padding: 40px;
  box-shadow: 0 15px 40px rgba(0,0,0,.4);
  backdrop-filter: blur(5px);
  border: 2px solid var(--accent2);
  position: relative;
  overflow: hidden;
}

.menu::before {
  content:"";
  position: absolute;
  top:0;
  left:0;
  right:0;
  height: 8px;
  background: linear-gradient(90deg,#ff73b9,#7e3f8f,#493c7d);
  border-radius: 25px 25px 0 0;
}

.menu-category {
  margin-bottom: 35px;
}

.category-title {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.category-icon {
  font-size: 1.8rem;
  margin-right: 15px;
  color: var(--accent1);
}

.category-name {
  font-size: 1.8rem;
  color: var(--accent1);
  border-bottom: 3px solid var(--accent2);
  padding-bottom: 8px;
  flex-grow: 1;
}

.menu-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
  gap: 20px;
}

.menu-item, .secret-item {
  background: rgba(78,44,92,.6);
  border-radius: 15px;
  padding: 18px;
  border: 1px solid var(--accent2);
  transition: .3s;
  position: relative;
  text-align: center;
  cursor: pointer;
}

.menu-item:hover, .secret-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(166,77,121,.3);
  border-color: var(--accent1);
  background: rgba(78,44,92,.8);
}

.item-name {
  font-weight: bold;
  font-size: 1.2rem;
  color: #ffa8d9;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
}

.item-price {
  color: var(--accent3);
  font-weight: normal;
  font-size: 0.9rem;
  background: rgba(166,77,121,0.3);
  padding: 4px 8px;
  border-radius: 10px;
}

.item-desc, .secret-item-desc {
  font-size: .95rem;
  color: #e8d0f1;
  line-height: 1.5;
  margin-top: 10px;
}

/* ===== Secret Menu ===== */
.secret-section {
  text-align: center;
  margin-top: 40px;
  padding-top: 30px;
  border-top: 2px solid var(--accent2);
}

.secret-btn {
  background: linear-gradient(to right,#ff73b9,#9d5caf);
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 16px 35px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: .3s;
  box-shadow: 0 5px 15px rgba(157,92,175,.3);
}

.secret-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(157,92,175,.4);
  background: linear-gradient(to right,#ff8ac6,#a86dbb);
}

.secret-menu {
  display: none;
  margin-top: 30px;
  animation: fadeIn .8s ease-in-out;
  background: linear-gradient(135deg, rgba(78,44,92,.9), rgba(60,30,70,.9));
  border-radius: 20px;
  padding: 30px;
  border: 2px solid #ff73b9;
}

.secret-title {
  font-size: 2rem;
  color: var(--accent1);
  margin-bottom: 25px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.secret-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
  gap: 25px;
}

.secret-category-title {
  font-size: 1.5rem;
  color: #ff7ec8;
  margin: 30px 0 15px;
  padding-bottom: 10px;
  border-bottom: 2px solid #a64d79;
  text-align: center;
}

/* ===== Footer ===== */
.footer {
  text-align: center;
  margin-top: 30px;
  color: var(--accent3);
  font-size: .9rem;
}

.warning {
  color: var(--accent1);
  font-size: .9rem;
  margin-top: 15px;
  font-style: italic;
}

/* ===== Modals ===== */
.password-modal, .payment-modal {
  display: none;
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.8);
  z-index: 1000;
  justify-content: center;
  align-items: center;
}

.password-form, .payment-form {
  background: rgba(44,26,59,.95);
  padding: 30px;
  border-radius: 20px;
  width: 90%;
  max-width: 500px;
  text-align: center;
  border: 2px solid #ff73b9;
  box-shadow: 0 10px 30px rgba(255,126,200,.3);
}

.password-title, .payment-title {
  color: var(--accent1);
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.password-input {
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  border: 2px solid var(--accent2);
  background: rgba(78,44,92,.6);
  color: #fff;
  font-size: 1rem;
  margin-bottom: 20px;
}

.password-input:focus {
  outline: none;
  border-color: var(--accent1);
}

.password-submit, .payment-submit {
  background: linear-gradient(to right,#ff73b9,#9d5caf);
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 12px 25px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: .3s;
  margin-top: 15px;
}

.password-submit:hover, .payment-submit:hover {
  background: linear-gradient(to right,#ff8ac6,#a86dbb);
}

/* ===== Animations ===== */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ===== Responsive ===== */
@media(max-width:768px){
  .menu { padding: 25px; }
  .menu-title { font-size: 2.5rem; }
  .menu-items, .secret-grid { grid-template-columns: 1fr; }
}
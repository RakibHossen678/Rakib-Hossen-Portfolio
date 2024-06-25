import React from 'react'; 
const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-4 bg-primary/20 text-base-content">
        <aside>
          <p>
            Copyright © <span>{new Date().getFullYear()}</span> - All right
            reserved by Rakib Hossen
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;

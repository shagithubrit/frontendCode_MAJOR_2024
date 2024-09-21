import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminNav = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => setHoverIndex(index);
  const handleMouseLeave = () => setHoverIndex(null);

  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        {navItems.map((item, index) => (
          <li
            key={item.to}
            style={styles.li}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to={item.to}
              style={{
                ...styles.link,
                ...(hoverIndex === index ? styles.linkHover : {}),
              }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const navItems = [
  { to: "/admin/dashboard", label: "Dashboard" },
  { to: "/admin/product", label: "Product" },
  { to: "/admin/products", label: "Products" },
  { to: "/admin/category", label: "Category" },
  { to: "/admin/sub", label: "Sub Category" },
  { to: "/admin/coupon", label: "Coupons" },
  { to: "/user/password", label: "Password" },
];

const styles = {
  nav: {
    width: "250px",
    backgroundColor: "#ffffff", // White background
    padding: "1rem",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
    border: "1px solid #e0e0e0", // Light border for separation
    transition: "0.3s",
  },
  ul: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  li: {
    margin: "0.5rem 0",
  },
  link: {
    display: "block",
    padding: "0.75rem 1rem",
    color: "#333", // Dark text color for contrast
    textDecoration: "none",
    borderRadius: "4px",
    transition: "background-color 0.3s, color 0.3s",
    cursor: "pointer",
  },
  linkHover: {
    backgroundColor: "#f0f0f0", // Light gray background on hover
    color: "#000", // Dark text color on hover
  },
};

// Media query styles would be applied globally in your CSS file.
// For demonstration, if you must include it here, you can use a media query library or inline styles with conditions.

export default AdminNav;

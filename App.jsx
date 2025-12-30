import React from "react";

export default function App() {
  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", padding: "50px", background: "#111", color: "#fff", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>Netaji Patil</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
        Retail Operations & Multi-Store Management Professional
      </p>

      <h2 style={{ fontSize: "2rem" }}>Key Expertise</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>Multi-Store Operations</li>
        <li>Team Leadership & Training</li>
        <li>Inventory & KPI Management</li>
      </ul>

      <h2 style={{ fontSize: "2rem", marginTop: "30px" }}>Experience Snapshot</h2>
      <p>Hands-on experience in store operations, SOP implementation, KPI tracking, inventory control, and team management.</p>

      <h2 style={{ fontSize: "2rem", marginTop: "30px" }}>Contact</h2>
      <p>Email: netaji.patil2000@gmail.com | netaji_patil2000@yahoo.com</p>
      <p>Phone: +91 7249709424</p>
      <p>
        <a href="https://wa.me/917249709424" target="_blank" style={{ color: "#0f0", textDecoration: "underline" }}>
          WhatsApp Me
        </a>
      </p>
    </div>
  );
}

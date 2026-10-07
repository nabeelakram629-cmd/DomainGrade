function Navbar() {
  return (
    <header className="navbar">

      {/* Left */}
      <div className="navbar-title">
        <h2>Domain Dashboard</h2>
      </div>


      {/* Right */}
      <div className="navbar-actions">




        {/* Notification */}
        <button className="notification">
          <span>🔔</span>
          <i></i>
        </button>


        {/* Profile */}
        <div className="user-profile">

          <div className="user-avatar">
            A
          </div>

          <div className="user-details">
            <h4>Admin User</h4>
            <p>Administrator</p>
          </div>

          <span className="arrow">⌄</span>

        </div>

      </div>

    </header>
  );
}

export default Navbar;
function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        Domain<span>Hub</span>
      </div>

      <nav>
        <a className="active" href="#">
          🏠 Dashboard
        </a>

        <a href="#">
          🌐 All Domains
        </a>

        <a href="#">
          ⚠️ Expiring Soon
        </a>

        <a href="#">
          ❌ Expired
        </a>

        <a href="#">
          ⚙️ Settings
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;

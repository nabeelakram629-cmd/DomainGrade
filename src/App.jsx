import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import StatCard from "./components/StatCard";
import DomainTable from "./components/DomainTable";

import domains from "./data/domains";

import "./App.css";

function App() {
  const totalDomains = domains.length;

  const activeDomains = domains.filter(
    (domain) => domain.status === "Active"
  ).length;

  const expiredDomains = domains.filter(
    (domain) => domain.status === "Expired"
  ).length;

  const expiringDomains = domains.filter(
    (domain) => domain.status === "Expiring"
  ).length;

  return (
    <div className="app">
      <Sidebar />

      <main className="main">
        <Navbar />

        <section className="content">

          <div className="stats">

            <StatCard
              title="Total Domains"
              number={totalDomains}
              icon="🌐"
              color="blue"
            />

            <StatCard
              title="Active Domains"
              number={activeDomains}
              icon="✓"
              color="green"
            />

            <StatCard
              title="Expiring Soon"
              number={expiringDomains}
              icon="!"
              color="orange"
            />

            <StatCard
              title="Expired Domains"
              number={expiredDomains}
              icon="×"
              color="red"
            />

          </div>

          <DomainTable domains={domains} />

        </section>
      </main>
    </div>
  );
}

export default App;

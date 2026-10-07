function DomainTable({ domains }) {
  return (
    <div className="table-box">
      <div className="table-header">
        <div>
          <h3>All Domains</h3>
        </div>

        <input
          type="text"
          placeholder="Search domain..."
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Domain</th>
            <th>Registrar</th>
            <th>Expiry Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {domains.map((domain) => (
            <tr key={domain.id}>
              <td>
                <strong>{domain.name}</strong>
              </td>

              <td>{domain.registrar}</td>

              <td>{domain.expiry}</td>

              <td>
                <span
                  className={`status ${domain.status.toLowerCase()}`}
                >
                  {domain.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DomainTable;

import Bus from '@mui/icons-material/DepartureBoard';

function Navbar() {

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="flex items-center justify-between px-6 h-14">
        <a href="#" className="flex items-center gap-2.5 group">
          <div
            className="flex items-center justify-center w-9 h-9 rounded-xl"
            style={{ background: "#f97316" }}
          >
            <Bus fontSize="large" />
          </div>
          <span
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 800,
              fontSize: "1.2rem",
              color: "#fff",
              letterSpacing: "-0.01em",
            }}
          >
            Rota<span style={{ color: "#f97316" }}>Livre</span>
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar; 
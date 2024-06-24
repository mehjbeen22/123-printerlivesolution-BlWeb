import PrintIcon from '@mui/icons-material/Print';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#312e81] text-[#f1f5f9] shadow-lg flex">
      <div>
        <Link to="/" className="container mx-auto px-4 py-2 flex items-center">
          <PrintIcon
            className="text-[#f1f5f9] mr-4 t"
            sx={{ fontSize: '3rem' }}
          />
          <div>
            <p className="text-lg font-bold">123-printerlivesolution</p>
            <p className="text-sm">Printer Setup</p>
          </div>
        </Link>
      </div>

      <div className="flex justify-center items-center gap-10 ml-10">
        <Link to="/printerOffline">Printer Offline</Link>
        <Link to="/printerSetup">Printer Setup</Link>
        <Link to="/privacypolicy">Privacy Policy</Link>
      </div>
    </nav>
  );
};

export default Navbar;

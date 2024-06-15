import PrintIcon from '@mui/icons-material/Print';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#312e81] text-[#f1f5f9] shadow-lg">
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
    </nav>
  );
};

export default Navbar;

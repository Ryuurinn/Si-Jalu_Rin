// Navbar Component
function Navbar({ currentPage, navigate, CustomLink }) {
  const { useState, useEffect } = React;
  const Link = CustomLink || window.CustomLink;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Check authentication status when component mounts and when it changes
  useEffect(() => {
    const checkAuth = () => {
      const authData = JSON.parse(localStorage.getItem('auth') || '{}');
      setIsLoggedIn(!!authData.isLoggedIn);
      setUser(authData.user || null);
    };

    checkAuth();

    // Listen for auth changes
    window.addEventListener('authChange', checkAuth);
    return () => window.removeEventListener('authChange', checkAuth);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path) => {
    return currentPage === path ? 'active' : '';
  };

  const handleLogout = () => {
    // Clear auth data
    localStorage.removeItem('auth');

    // Update auth state
    setIsLoggedIn(false);
    setUser(null);

    // Trigger auth event
    window.dispatchEvent(new Event('authChange'));

    // Navigate to home
    navigate('home');
  };

  return (
    <nav className="navbar py-4 px-6" data-id="fqec5cfo9" data-path="components/Navbar.js">
      <div className="container mx-auto flex justify-between items-center" data-id="e1khfcwaq" data-path="components/Navbar.js">
        <Link to="/" className="text-2xl font-bold text-primary flex items-center" data-id="2h9aw7ie3" data-path="components/Navbar.js">
          <i className="fas fa-handshake mr-2" data-id="dypl1fptk" data-path="components/Navbar.js"></i>
          Si Jalu
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8" data-id="zjrhkstjh" data-path="components/Navbar.js">
          <Link to="/" className={`nav-link text-dark hover:text-primary ${isActive('home')}`} data-id="b41ab17fz" data-path="components/Navbar.js">
            Home
          </Link>
          <Link to="/give-quest" className={`nav-link text-dark hover:text-primary ${isActive('give-quest')}`} data-id="v7ko8vibc" data-path="components/Navbar.js">
            Give Quest
          </Link>
          <Link to="/take-quest" className={`nav-link text-dark hover:text-primary ${isActive('take-quest')}`} data-id="cvk55lhrm" data-path="components/Navbar.js">
            Take Quest
          </Link>
          <Link to="/statistics" className={`nav-link text-dark hover:text-primary ${isActive('statistics')}`} data-id="08zsgb48s" data-path="components/Navbar.js">
            Stats
          </Link>
          <Link to="/about" className={`nav-link text-dark hover:text-primary ${isActive('about')}`} data-id="70ycmu72g" data-path="components/Navbar.js">
            About
          </Link>
          <div className="flex items-center space-x-2" data-id="k5dc1l5w2" data-path="components/Navbar.js">
            {isLoggedIn ?
            <div className="flex items-center space-x-3" data-id="tfegg0jav" data-path="components/Navbar.js">
                <div className="flex items-center text-sm text-primary mr-1" data-id="71bpdkhv8" data-path="components/Navbar.js">
                  <i className="fas fa-coins mr-1" data-id="1ihv8opar" data-path="components/Navbar.js"></i>
                  <span data-id="08tjjdl94" data-path="components/Navbar.js">{user?.pointsBalance || 0}</span>
                </div>
                <Link to="/profile" className="text-dark hover:text-primary" data-id="zgxm4g1be" data-path="components/Navbar.js">
                  <div className="w-8 h-8 bg-mint rounded-full flex items-center justify-center overflow-hidden" data-id="pa2v5et83" data-path="components/Navbar.js">
                    {user?.profileImage ?
                  <img src={user.profileImage} alt={user.name} className="w-full h-full object-cover" data-id="8p1xhl5tv" data-path="components/Navbar.js" /> :

                  <i className="fas fa-user text-primary" data-id="clg2l0qlo" data-path="components/Navbar.js"></i>
                  }
                  </div>
                </Link>
                <button
                onClick={handleLogout}
                className="btn btn-secondary text-sm px-3 py-1" data-id="2wzmjyqjn" data-path="components/Navbar.js">

                  Logout
                </button>
              </div> :

            <div className="flex items-center space-x-2" data-id="4ftp32hq4" data-path="components/Navbar.js">
                <Link to="/login" className="btn btn-primary" data-id="55quqwji0" data-path="components/Navbar.js">
                  Sign In
                </Link>
                <Link to="/signup" className="btn btn-secondary" data-id="7pyrx6c1p" data-path="components/Navbar.js">
                  Sign Up
                </Link>
              </div>
            }
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-dark focus:outline-none"
          onClick={toggleMobileMenu} data-id="yfusb80te" data-path="components/Navbar.js">

          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`} data-id="tpjostk0l" data-path="components/Navbar.js"></i>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen &&
      <div className="md:hidden bg-light py-4 px-6 shadow-lg absolute top-full left-0 w-full z-50" data-id="bqrmv1g7t" data-path="components/Navbar.js">
          <div className="flex flex-col space-y-4" data-id="wn4z0j30b" data-path="components/Navbar.js">
            <Link
            to="/"
            className={`nav-link text-dark hover:text-primary ${isActive('home')}`}
            onClick={() => setMobileMenuOpen(false)} data-id="1zwkui8pj" data-path="components/Navbar.js">

              Home
            </Link>
            <Link
            to="/give-quest"
            className={`nav-link text-dark hover:text-primary ${isActive('give-quest')}`}
            onClick={() => setMobileMenuOpen(false)} data-id="x7f0ds8a2" data-path="components/Navbar.js">

              Give Quest
            </Link>
            <Link
            to="/take-quest"
            className={`nav-link text-dark hover:text-primary ${isActive('take-quest')}`}
            onClick={() => setMobileMenuOpen(false)} data-id="qwozu9sg1" data-path="components/Navbar.js">

              Take Quest
            </Link>
            <Link
            to="/statistics"
            className={`nav-link text-dark hover:text-primary ${isActive('statistics')}`}
            onClick={() => setMobileMenuOpen(false)} data-id="8vzhf0360" data-path="components/Navbar.js">

              Stats
            </Link>
            <Link
            to="/about"
            className={`nav-link text-dark hover:text-primary ${isActive('about')}`}
            onClick={() => setMobileMenuOpen(false)} data-id="a6mh9f1ql" data-path="components/Navbar.js">

              About
            </Link>
            
            {isLoggedIn ?
          <>
                <div className="flex items-center justify-between border-t border-gray-200 pt-3" data-id="gr0q92n08" data-path="components/Navbar.js">
                  <div className="flex items-center text-sm" data-id="y3e6od92o" data-path="components/Navbar.js">
                    <i className="fas fa-coins mr-1 text-primary" data-id="9d2990g2f" data-path="components/Navbar.js"></i>
                    <span data-id="13klzjovc" data-path="components/Navbar.js">{user?.pointsBalance || 0} points</span>
                  </div>
                  <Link
                to="/profile"
                className={`text-dark hover:text-primary font-medium`}
                onClick={() => setMobileMenuOpen(false)} data-id="ehy96eym7" data-path="components/Navbar.js">
                    My Profile
                  </Link>
                </div>
                <button
              onClick={() => {
                handleLogout();
                setMobileMenuOpen(false);
              }}
              className="btn btn-secondary w-full" data-id="b5gxoehxp" data-path="components/Navbar.js">

                  Logout
                </button>
              </> :

          <>
                <Link
              to="/login"
              className="btn btn-primary w-full"
              onClick={() => setMobileMenuOpen(false)} data-id="oyfpsfpw4" data-path="components/Navbar.js">
                  Sign In
                </Link>
                <Link
              to="/signup"
              className="btn btn-secondary w-full"
              onClick={() => setMobileMenuOpen(false)} data-id="g2cianzr3" data-path="components/Navbar.js">
                  Sign Up
                </Link>
              </>
          }
          </div>
        </div>
      }
    </nav>);

}
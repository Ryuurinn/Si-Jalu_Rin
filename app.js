// Main App Component
function App() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  // Check authentication on initial load
  React.useEffect(() => {
    const checkAuth = () => {
      const authData = JSON.parse(localStorage.getItem('auth') || '{}');
      setIsLoggedIn(!!authData.isLoggedIn);
    };

    checkAuth();

    // Listen for auth state changes
    window.addEventListener('authChange', checkAuth);
    return () => window.removeEventListener('authChange', checkAuth);
  }, []);

  // Render the appropriate page based on the current route
  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login data-id="nqrzclnmd" data-path="app.js" />;
      case 'signup':
        return <SignUp data-id="tg4vhqx1g" data-path="app.js" />;
      case 'email-verification':
        return <EmailVerification data-id="v1ykr1y0e" data-path="app.js" />;
      case 'phone-verification':
        return <PhoneVerification data-id="7s9b3nxsn" data-path="app.js" />;
      case 'points-top-up':
        return isLoggedIn ? <PointsTopUp data-id="15gs6uj0x" data-path="app.js" /> : navigate('login');
      case 'points-cash-out':
        return isLoggedIn ? <PointsCashOut data-id="e3qsge2c2" data-path="app.js" /> : navigate('login');
      case 'give-quest':
        return <GiveQuest data-id="136ictaal" data-path="app.js" />;
      case 'take-quest':
        return <TakeQuest data-id="z30xbkdnn" data-path="app.js" />;
      case 'about':
        return <About data-id="9z42gwkxh" data-path="app.js" />;
      case 'profile':
        return isLoggedIn ? <UserProfile data-id="43p4f600y" data-path="app.js" /> : navigate('login');
      case 'statistics':
        return <Statistics data-id="372so7zsu" data-path="app.js" />;
      default:
        return <Home data-id="849tgngsy" data-path="app.js" />;
    }
  };

  // Navigation function to change pages
  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // Create a context for navigation
  const NavigationContext = React.createContext({
    currentPage: 'home',
    navigate: () => {}
  });

  // Custom Link component that uses our navigation system
  const Link = ({ to, children, className }) => {
    const handleClick = (e) => {
      e.preventDefault();
      const path = to === '/' ? 'home' : to.replace('/', '');
      navigate(path);
    };

    return (
      <a href={to} onClick={handleClick} className={className} data-id="zk1h1ctib" data-path="app.js">
        {children}
      </a>);

  };

  // Make the Link and navigation available to all components
  window.CustomLink = Link;
  window.navigate = navigate;

  return (
    <div className="flex flex-col min-h-screen" data-id="4yztme6az" data-path="app.js">
      <NavigationContext.Provider value={{ currentPage, navigate }} data-id="0ojk1otlw" data-path="app.js">
        <Navbar currentPage={currentPage} navigate={navigate} CustomLink={Link} data-id="g8r8mcv5r" data-path="app.js" />
        <main className="flex-grow" data-id="t5jk39xgc" data-path="app.js">
          {renderPage()}
        </main>
        <Footer CustomLink={Link} data-id="cy0lrkak9" data-path="app.js" />
      </NavigationContext.Provider>
    </div>);

}

// Render the App
ReactDOM.render(
  <App data-id="294e2wv5o" data-path="app.js" />,
  document.getElementById('root')
);
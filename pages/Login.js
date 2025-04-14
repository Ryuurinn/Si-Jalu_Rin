// Login Page
function Login() {
  const { useState } = React;
  const Link = window.CustomLink;
  const navigate = window.navigate;

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // In a real implementation, this would be an actual API call
      setTimeout(() => {
        // Mock login logic - in production, replace with actual authentication
        if (formData.email && formData.password) {
          // Store auth state in localStorage
          localStorage.setItem('auth', JSON.stringify({
            isLoggedIn: true,
            user: {
              email: formData.email,
              name: 'User Name', // In real app, this would come from the backend
              pointsBalance: 1250
            }
          }));

          // Trigger auth state update in app
          window.dispatchEvent(new Event('authChange'));

          // Redirect to home page after login
          navigate('home');
        } else {
          setError('Invalid email or password');
        }
        setLoading(false);
      }, 1000);
    } catch (err) {
      setError('Login failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-light py-12" data-id="5id2djwsn" data-path="pages/Login.js">
      <div className="container mx-auto px-4" data-id="d7h4eo6yc" data-path="pages/Login.js">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8" data-id="waeuutk2v" data-path="pages/Login.js">
          <h1 className="text-3xl font-bold text-primary text-center mb-8" data-id="11p4gbh0o" data-path="pages/Login.js">Login to Si Jalu</h1>
          
          {error &&
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert" data-id="gv9jdfabo" data-path="pages/Login.js">
              <span className="block sm:inline" data-id="4th58mtvy" data-path="pages/Login.js">{error}</span>
            </div>
          }
          
          <form onSubmit={handleSubmit} data-id="1oendefak" data-path="pages/Login.js">
            <div className="form-group mb-6" data-id="c0jurqf40" data-path="pages/Login.js">
              <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2" data-id="9qqpplyai" data-path="pages/Login.js">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="your@email.com"
                required data-id="518md32qj" data-path="pages/Login.js" />

            </div>
            
            <div className="form-group mb-6" data-id="64pmwgg1b" data-path="pages/Login.js">
              <div className="flex justify-between items-center" data-id="i0hid9s68" data-path="pages/Login.js">
                <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2" data-id="nt21l3zs5" data-path="pages/Login.js">Password</label>
                <a href="#" className="text-primary text-sm hover:underline" data-id="3hms2v9n4" data-path="pages/Login.js">Forgot Password?</a>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                placeholder="••••••••"
                required data-id="dk16xoz73" data-path="pages/Login.js" />

            </div>
            
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={loading} data-id="iftu4tmh8" data-path="pages/Login.js">

              {loading ?
              <span className="flex items-center justify-center" data-id="ilw1vm81y" data-path="pages/Login.js">
                  <i className="fas fa-spinner fa-spin mr-2" data-id="wdj32blp6" data-path="pages/Login.js"></i>
                  Logging in...
                </span> :
              'Login'}
            </button>
          </form>
          
          <div className="mt-8 text-center" data-id="xqyw9kh85" data-path="pages/Login.js">
            <p className="text-gray-600" data-id="1tz41i55h" data-path="pages/Login.js">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary font-medium hover:underline" data-id="rjapu0tqg" data-path="pages/Login.js">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>);

}
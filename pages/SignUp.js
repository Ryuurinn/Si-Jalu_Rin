// SignUp Page
function SignUp() {
  const { useState } = React;
  const Link = window.CustomLink;
  const navigate = window.navigate;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    placeOfBirth: '',
    password: '',
    confirmPassword: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));

    // Clear field-specific error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Full name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    // Phone validation
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^[0-9+\- ]{8,15}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number is invalid';
    }

    // Date of birth validation
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
    }

    // Place of birth validation
    if (!formData.placeOfBirth.trim()) {
      newErrors.placeOfBirth = 'Place of birth is required';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // In a real implementation, this would be an actual API call
      setTimeout(() => {
        // Mock signup logic (to be replaced with actual API)
        localStorage.setItem('pendingVerification', JSON.stringify({
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          verified: false
        }));

        navigate('email-verification');
        setLoading(false);
      }, 1000);
    } catch (err) {
      setError('Registration failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-light py-8" data-id="su8w8krrk" data-path="pages/SignUp.js">
      <div className="container mx-auto px-4" data-id="s78lyio3u" data-path="pages/SignUp.js">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8" data-id="kg0nz4ar0" data-path="pages/SignUp.js">
          <h1 className="text-3xl font-bold text-primary text-center mb-8" data-id="710dbafma" data-path="pages/SignUp.js">Join Si Jalu</h1>
          
          {error &&
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert" data-id="2czact1e1" data-path="pages/SignUp.js">
              <span className="block sm:inline" data-id="hwgx43ms5" data-path="pages/SignUp.js">{error}</span>
            </div>
          }
          
          <form onSubmit={handleSubmit} data-id="2gvo0l7l3" data-path="pages/SignUp.js">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4" data-id="nhi51yv16" data-path="pages/SignUp.js">
              <div className="form-group" data-id="7thx69rxc" data-path="pages/SignUp.js">
                <label htmlFor="fullName" className="block text-gray-700 text-sm font-medium mb-2" data-id="5ggmx02oq" data-path="pages/SignUp.js">
                  Full Name <span className="text-red-600" data-id="da4ok3bq1" data-path="pages/SignUp.js">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`form-control ${errors.fullName ? 'border-red-500' : ''}`}
                  placeholder="John Doe" data-id="qlqzq2uf2" data-path="pages/SignUp.js" />

                {errors.fullName && <p className="text-red-500 text-xs mt-1" data-id="c25wrtiu4" data-path="pages/SignUp.js">{errors.fullName}</p>}
              </div>
              
              <div className="form-group" data-id="nolhik08t" data-path="pages/SignUp.js">
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2" data-id="aqyp6ar6k" data-path="pages/SignUp.js">
                  Email Address <span className="text-red-600" data-id="habn6wu5x" data-path="pages/SignUp.js">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-control ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="your@email.com" data-id="moc7zgsp9" data-path="pages/SignUp.js" />

                {errors.email && <p className="text-red-500 text-xs mt-1" data-id="z1wfzfg13" data-path="pages/SignUp.js">{errors.email}</p>}
              </div>
              
              <div className="form-group" data-id="n65hwh7ov" data-path="pages/SignUp.js">
                <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-medium mb-2" data-id="66ilr24hh" data-path="pages/SignUp.js">
                  Phone Number <span className="text-red-600" data-id="wsgr76p9h" data-path="pages/SignUp.js">*</span>
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={`form-control ${errors.phoneNumber ? 'border-red-500' : ''}`}
                  placeholder="123-456-7890" data-id="r4kwwblqi" data-path="pages/SignUp.js" />

                {errors.phoneNumber && <p className="text-red-500 text-xs mt-1" data-id="gj0x1cwok" data-path="pages/SignUp.js">{errors.phoneNumber}</p>}
              </div>
              
              <div className="form-group" data-id="i8s6a1omw" data-path="pages/SignUp.js">
                <label htmlFor="dateOfBirth" className="block text-gray-700 text-sm font-medium mb-2" data-id="gpor7f9tg" data-path="pages/SignUp.js">
                  Date of Birth <span className="text-red-600" data-id="bafnttfpz" data-path="pages/SignUp.js">*</span>
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className={`form-control ${errors.dateOfBirth ? 'border-red-500' : ''}`} data-id="boi1y8c4o" data-path="pages/SignUp.js" />

                {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1" data-id="hyu2ztwsg" data-path="pages/SignUp.js">{errors.dateOfBirth}</p>}
              </div>
              
              <div className="form-group" data-id="f22at0zmh" data-path="pages/SignUp.js">
                <label htmlFor="placeOfBirth" className="block text-gray-700 text-sm font-medium mb-2" data-id="gm0f7hmms" data-path="pages/SignUp.js">
                  Place of Birth <span className="text-red-600" data-id="juy1ros6r" data-path="pages/SignUp.js">*</span>
                </label>
                <input
                  type="text"
                  id="placeOfBirth"
                  name="placeOfBirth"
                  value={formData.placeOfBirth}
                  onChange={handleChange}
                  className={`form-control ${errors.placeOfBirth ? 'border-red-500' : ''}`}
                  placeholder="City, Country" data-id="zjhi2f4po" data-path="pages/SignUp.js" />

                {errors.placeOfBirth && <p className="text-red-500 text-xs mt-1" data-id="z6azi4bj6" data-path="pages/SignUp.js">{errors.placeOfBirth}</p>}
              </div>
              
              <div className="form-group" data-id="3pd6kfmgu" data-path="pages/SignUp.js">
                <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2" data-id="a7k3eh7fe" data-path="pages/SignUp.js">
                  Password <span className="text-red-600" data-id="e9ts4as9f" data-path="pages/SignUp.js">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`form-control ${errors.password ? 'border-red-500' : ''}`}
                  placeholder="••••••••" data-id="v1m38hs94" data-path="pages/SignUp.js" />

                {errors.password && <p className="text-red-500 text-xs mt-1" data-id="c57i9mqes" data-path="pages/SignUp.js">{errors.password}</p>}
              </div>
              
              <div className="form-group" data-id="zd4nnp6sb" data-path="pages/SignUp.js">
                <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-medium mb-2" data-id="gqplyy5va" data-path="pages/SignUp.js">
                  Confirm Password <span className="text-red-600" data-id="cqpzaljr1" data-path="pages/SignUp.js">*</span>
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`form-control ${errors.confirmPassword ? 'border-red-500' : ''}`}
                  placeholder="••••••••" data-id="q1n9astg4" data-path="pages/SignUp.js" />

                {errors.confirmPassword && <p className="text-red-500 text-xs mt-1" data-id="k88fyrpzm" data-path="pages/SignUp.js">{errors.confirmPassword}</p>}
              </div>
            </div>
            
            <div className="mt-8" data-id="dd130nh5q" data-path="pages/SignUp.js">
              <div className="flex items-start mb-6" data-id="o0cxr5il2" data-path="pages/SignUp.js">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded mt-1"
                  required data-id="qlh3tpocs" data-path="pages/SignUp.js" />

                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700" data-id="457zbvtsf" data-path="pages/SignUp.js">
                  I agree to the <a href="#" className="text-primary hover:underline" data-id="nzoqvuq6l" data-path="pages/SignUp.js">Terms and Conditions</a> and{" "}
                  <a href="#" className="text-primary hover:underline" data-id="effz8zcif" data-path="pages/SignUp.js">Privacy Policy</a>
                </label>
              </div>
              
              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={loading} data-id="9j0539sky" data-path="pages/SignUp.js">

                {loading ?
                <span className="flex items-center justify-center" data-id="m1mqthmum" data-path="pages/SignUp.js">
                    <i className="fas fa-spinner fa-spin mr-2" data-id="bh9reghjy" data-path="pages/SignUp.js"></i>
                    Creating Account...
                  </span> :
                'Create Account'}
              </button>
            </div>
          </form>
          
          <div className="mt-8 text-center" data-id="b09pc9t4p" data-path="pages/SignUp.js">
            <p className="text-gray-600" data-id="rr6sonao2" data-path="pages/SignUp.js">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-medium hover:underline" data-id="5579myldm" data-path="pages/SignUp.js">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>);

}
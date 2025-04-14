// Points Top Up Page
function PointsTopUp() {
  const { useState, useEffect } = React;
  const Link = window.CustomLink;
  const navigate = window.navigate;

  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  // Predefined top up amounts
  const predefinedAmounts = [100, 250, 500, 1000, 2500, 5000];

  // Payment methods
  const paymentMethods = [
  { id: 'credit_card', name: 'Credit/Debit Card', icon: 'fa-credit-card' },
  { id: 'bank_transfer', name: 'Bank Transfer', icon: 'fa-university' },
  { id: 'e_wallet', name: 'E-Wallet', icon: 'fa-wallet' },
  { id: 'paypal', name: 'PayPal', icon: 'fa-paypal' }];


  // Get user data from localStorage
  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem('auth') || '{}');
    if (authData && authData.isLoggedIn) {
      setUser(authData.user);
    } else {
      // Redirect to login if not logged in
      navigate('login');
    }
  }, []);

  // Handle amount selection
  const handleAmountSelect = (selectedAmount) => {
    setAmount(selectedAmount.toString());
  };

  // Handle amount input change (for custom amount)
  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setAmount(value);
    }
  };

  // Handle payment method selection
  const handlePaymentMethodSelect = (method) => {
    setPaymentMethod(method);
  };

  // Process top up
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validate inputs
    if (!amount || parseInt(amount) <= 0) {
      setError('Please enter a valid amount');
      return;
    }

    if (!paymentMethod) {
      setError('Please select a payment method');
      return;
    }

    setLoading(true);

    // Mock top up process - Replace with actual payment API in production
    setTimeout(() => {
      try {
        const authData = JSON.parse(localStorage.getItem('auth') || '{}');

        if (authData && authData.isLoggedIn) {
          // Update user's points balance
          const updatedUser = {
            ...authData.user,
            pointsBalance: (authData.user.pointsBalance || 0) + parseInt(amount)
          };

          // Update localStorage
          localStorage.setItem('auth', JSON.stringify({
            ...authData,
            user: updatedUser
          }));

          // Update local state
          setUser(updatedUser);

          // Show success message
          setSuccess(true);

          // Trigger auth state update
          window.dispatchEvent(new Event('authChange'));

          // Reset form
          setAmount('');
          setPaymentMethod('');
        }
      } catch (err) {
        setError('An error occurred during top up. Please try again.');
      }

      setLoading(false);
    }, 1500);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-light py-12" data-id="z1ic3qaxz" data-path="pages/PointsTopUp.js">
        <div className="container mx-auto px-4" data-id="td0wbsh16" data-path="pages/PointsTopUp.js">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8" data-id="u8u6zhei1" data-path="pages/PointsTopUp.js">
            <div className="text-center mb-8" data-id="orwt9xqyb" data-path="pages/PointsTopUp.js">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4" data-id="a1wr8m0ct" data-path="pages/PointsTopUp.js">
                <i className="fas fa-check text-green-600 text-2xl" data-id="30t00r2vi" data-path="pages/PointsTopUp.js"></i>
              </div>
              <h1 className="text-2xl font-bold text-primary" data-id="2wjkgwh1j" data-path="pages/PointsTopUp.js">Top Up Successful!</h1>
              <p className="text-gray-600 mt-2" data-id="q04w4cydx" data-path="pages/PointsTopUp.js">
                You have successfully added {amount} points to your account.
              </p>
            </div>
            
            <div className="bg-mint rounded-lg p-4 text-center mb-6" data-id="0xdjpxwor" data-path="pages/PointsTopUp.js">
              <p className="text-gray-700" data-id="b2jy5z5ke" data-path="pages/PointsTopUp.js">Your new balance</p>
              <p className="text-3xl font-bold text-primary" data-id="omlg5500l" data-path="pages/PointsTopUp.js">{user?.pointsBalance || 0} points</p>
            </div>
            
            <div className="flex space-x-4" data-id="vtszgipno" data-path="pages/PointsTopUp.js">
              <Link to="/profile" className="btn btn-primary flex-1" data-id="8angzpgk3" data-path="pages/PointsTopUp.js">
                Go to Profile
              </Link>
              <button
                onClick={() => setSuccess(false)}
                className="btn btn-secondary flex-1" data-id="cqy1ymimt" data-path="pages/PointsTopUp.js">

                Top Up Again
              </button>
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-light py-12" data-id="oc3e67aj7" data-path="pages/PointsTopUp.js">
      <div className="container mx-auto px-4" data-id="njaokwxkk" data-path="pages/PointsTopUp.js">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8" data-id="iuufspe4z" data-path="pages/PointsTopUp.js">
          <div className="flex items-center mb-6" data-id="yib4a7xnr" data-path="pages/PointsTopUp.js">
            <Link to="/profile" className="text-primary hover:underline mr-4" data-id="jbbzzf4wr" data-path="pages/PointsTopUp.js">
              <i className="fas fa-arrow-left" data-id="rvoigd4y4" data-path="pages/PointsTopUp.js"></i>
            </Link>
            <h1 className="text-2xl font-bold text-primary" data-id="6x9g93hif" data-path="pages/PointsTopUp.js">Top Up Points</h1>
          </div>
          
          {error &&
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert" data-id="437urxvyd" data-path="pages/PointsTopUp.js">
              <span className="block sm:inline" data-id="vyaeddqpn" data-path="pages/PointsTopUp.js">{error}</span>
            </div>
          }
          
          <form onSubmit={handleSubmit} data-id="ighw0fio5" data-path="pages/PointsTopUp.js">
            {/* Current Balance */}
            <div className="bg-mint rounded-lg p-4 text-center mb-6" data-id="xrs11tvwh" data-path="pages/PointsTopUp.js">
              <p className="text-gray-700" data-id="taw5p0pf8" data-path="pages/PointsTopUp.js">Current Balance</p>
              <p className="text-3xl font-bold text-primary" data-id="p5rip24ry" data-path="pages/PointsTopUp.js">{user?.pointsBalance || 0} points</p>
            </div>
            
            {/* Amount Selection */}
            <div className="mb-6" data-id="urkd3r5gc" data-path="pages/PointsTopUp.js">
              <label className="block text-gray-700 text-sm font-medium mb-3" data-id="4ull9x0d9" data-path="pages/PointsTopUp.js">
                Select amount to top up
              </label>
              
              <div className="grid grid-cols-3 gap-3 mb-4" data-id="2ihe1l0qm" data-path="pages/PointsTopUp.js">
                {predefinedAmounts.map((presetAmount) =>
                <button
                  key={presetAmount}
                  type="button"
                  className={`p-3 border rounded-md text-center font-medium transition-colors ${
                  amount === presetAmount.toString() ?
                  'bg-primary text-white border-primary' :
                  'bg-white text-gray-700 border-gray-300 hover:border-primary hover:text-primary'}`
                  }
                  onClick={() => handleAmountSelect(presetAmount)} data-id="t31vpcdjx" data-path="pages/PointsTopUp.js">

                    {presetAmount} points
                  </button>
                )}
              </div>
              
              <div data-id="kzld4p339" data-path="pages/PointsTopUp.js">
                <label className="block text-gray-700 text-sm font-medium mb-2" data-id="3wbqd9j48" data-path="pages/PointsTopUp.js">
                  Or enter custom amount
                </label>
                <div className="relative" data-id="a2q8kgj9z" data-path="pages/PointsTopUp.js">
                  <input
                    type="text"
                    value={amount}
                    onChange={handleAmountChange}
                    className="form-control pl-12"
                    placeholder="0" data-id="5kuevkwgu" data-path="pages/PointsTopUp.js" />

                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" data-id="qwimhexga" data-path="pages/PointsTopUp.js">
                    <span className="text-gray-500 font-medium" data-id="a07rpnfgc" data-path="pages/PointsTopUp.js">Points</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Payment Method Selection */}
            <div className="mb-8" data-id="zb8gei1qh" data-path="pages/PointsTopUp.js">
              <label className="block text-gray-700 text-sm font-medium mb-3" data-id="wxpf1pgr4" data-path="pages/PointsTopUp.js">
                Select payment method
              </label>
              
              <div className="grid grid-cols-2 gap-3" data-id="x8wdxub62" data-path="pages/PointsTopUp.js">
                {paymentMethods.map((method) =>
                <div
                  key={method.id}
                  className={`p-4 border rounded-md flex items-center cursor-pointer transition-colors ${
                  paymentMethod === method.id ?
                  'bg-mint border-primary' :
                  'bg-white border-gray-300 hover:border-primary'}`
                  }
                  onClick={() => handlePaymentMethodSelect(method.id)} data-id="fdie5zia9" data-path="pages/PointsTopUp.js">

                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  paymentMethod === method.id ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`
                  } data-id="n5p1v6qsz" data-path="pages/PointsTopUp.js">
                      <i className={`fas ${method.icon}`} data-id="fglbpqok4" data-path="pages/PointsTopUp.js"></i>
                    </div>
                    <span className="ml-3 font-medium" data-id="rzkhlqay2" data-path="pages/PointsTopUp.js">{method.name}</span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={loading || !amount || !paymentMethod} data-id="nt7dsxtjg" data-path="pages/PointsTopUp.js">

              {loading ?
              <span className="flex items-center justify-center" data-id="cdhbf0uqf" data-path="pages/PointsTopUp.js">
                  <i className="fas fa-spinner fa-spin mr-2" data-id="i3lzdjnpq" data-path="pages/PointsTopUp.js"></i>
                  Processing...
                </span> :
              `Top Up ${amount ? amount + ' Points' : ''}`}
            </button>
          </form>
          
          <div className="mt-6 text-center text-sm text-gray-500" data-id="86zbd80bu" data-path="pages/PointsTopUp.js">
            <p data-id="6vy0c305b" data-path="pages/PointsTopUp.js">Need help? Contact our <a href="#" className="text-primary hover:underline" data-id="29za1wyoy" data-path="pages/PointsTopUp.js">customer support</a></p>
          </div>
        </div>
      </div>
    </div>);

}
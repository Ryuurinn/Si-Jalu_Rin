// Points Cash Out Page
function PointsCashOut() {
  const { useState, useEffect } = React;
  const Link = window.CustomLink;
  const navigate = window.navigate;

  const [amount, setAmount] = useState('');
  const [accountDetails, setAccountDetails] = useState({
    method: '',
    accountName: '',
    accountNumber: '',
    bankName: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  // Predefined cash out amounts
  const predefinedAmounts = [100, 250, 500, 1000, 2500, 5000];

  // Cash out methods
  const cashOutMethods = [
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
  const handleMethodSelect = (method) => {
    setAccountDetails({
      ...accountDetails,
      method
    });
  };

  // Handle account details change
  const handleAccountChange = (e) => {
    const { name, value } = e.target;
    setAccountDetails({
      ...accountDetails,
      [name]: value
    });
  };

  // Validate form
  const validateForm = () => {
    if (!amount || parseInt(amount) <= 0) {
      setError('Please enter a valid amount');
      return false;
    }

    if (parseInt(amount) > (user?.pointsBalance || 0)) {
      setError('Insufficient balance');
      return false;
    }

    if (!accountDetails.method) {
      setError('Please select a cash out method');
      return false;
    }

    if (!accountDetails.accountName.trim()) {
      setError('Please enter account name');
      return false;
    }

    if (!accountDetails.accountNumber.trim()) {
      setError('Please enter account number');
      return false;
    }

    if (accountDetails.method === 'bank_transfer' && !accountDetails.bankName.trim()) {
      setError('Please enter bank name');
      return false;
    }

    return true;
  };

  // Process cash out
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    // Mock cash out process - Replace with actual API in production
    setTimeout(() => {
      try {
        const authData = JSON.parse(localStorage.getItem('auth') || '{}');

        if (authData && authData.isLoggedIn) {
          const currentBalance = authData.user.pointsBalance || 0;
          const cashOutAmount = parseInt(amount);

          if (cashOutAmount > currentBalance) {
            setError('Insufficient balance');
            setLoading(false);
            return;
          }

          // Update user's points balance
          const updatedUser = {
            ...authData.user,
            pointsBalance: currentBalance - cashOutAmount
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
        }
      } catch (err) {
        setError('An error occurred during cash out. Please try again.');
      }

      setLoading(false);
    }, 1500);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-light py-12" data-id="1ouvzqssl" data-path="pages/PointsCashOut.js">
        <div className="container mx-auto px-4" data-id="n76ydbhev" data-path="pages/PointsCashOut.js">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8" data-id="invcbrr9c" data-path="pages/PointsCashOut.js">
            <div className="text-center mb-8" data-id="5pprb23tr" data-path="pages/PointsCashOut.js">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4" data-id="2uavhc9q0" data-path="pages/PointsCashOut.js">
                <i className="fas fa-check text-green-600 text-2xl" data-id="gnh14ijuc" data-path="pages/PointsCashOut.js"></i>
              </div>
              <h1 className="text-2xl font-bold text-primary" data-id="7f5wdzqq4" data-path="pages/PointsCashOut.js">Cash Out Successful!</h1>
              <p className="text-gray-600 mt-2" data-id="ze5g7hbha" data-path="pages/PointsCashOut.js">
                Your request to cash out {amount} points has been submitted.
              </p>
            </div>
            
            <div className="bg-mint rounded-lg p-4 text-center mb-6" data-id="u886igfxu" data-path="pages/PointsCashOut.js">
              <p className="text-gray-700" data-id="6mdefqqcw" data-path="pages/PointsCashOut.js">Your new balance</p>
              <p className="text-3xl font-bold text-primary" data-id="0iv4yyfky" data-path="pages/PointsCashOut.js">{user?.pointsBalance || 0} points</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6" data-id="1nv4xqhup" data-path="pages/PointsCashOut.js">
              <h3 className="font-medium text-gray-700 mb-2" data-id="z4lhhhp59" data-path="pages/PointsCashOut.js">Cash Out Details</h3>
              <div className="text-sm text-gray-600 space-y-1" data-id="xcxc1vai8" data-path="pages/PointsCashOut.js">
                <p data-id="tm0x70lqp" data-path="pages/PointsCashOut.js"><span className="font-medium" data-id="zj0q4rp4i" data-path="pages/PointsCashOut.js">Amount:</span> {amount} points</p>
                <p data-id="9dhkef67i" data-path="pages/PointsCashOut.js"><span className="font-medium" data-id="ekoxbsu9m" data-path="pages/PointsCashOut.js">Method:</span> {cashOutMethods.find((m) => m.id === accountDetails.method)?.name}</p>
                <p data-id="87qk425ti" data-path="pages/PointsCashOut.js"><span className="font-medium" data-id="2my0n8jow" data-path="pages/PointsCashOut.js">Account:</span> {accountDetails.accountName}</p>
                <p data-id="tsbnn4tr6" data-path="pages/PointsCashOut.js"><span className="font-medium" data-id="b4fcfbb0b" data-path="pages/PointsCashOut.js">Reference:</span> CO-{Math.floor(Math.random() * 1000000)}</p>
                <p className="text-xs text-gray-500 mt-2" data-id="zkzg4lxh8" data-path="pages/PointsCashOut.js">
                  Processing may take 2-3 business days
                </p>
              </div>
            </div>
            
            <div className="flex space-x-4" data-id="vcignx3my" data-path="pages/PointsCashOut.js">
              <Link to="/profile" className="btn btn-primary flex-1" data-id="1ps6qwip2" data-path="pages/PointsCashOut.js">
                Go to Profile
              </Link>
              <button
                onClick={() => setSuccess(false)}
                className="btn btn-secondary flex-1" data-id="hj3z1qjlg" data-path="pages/PointsCashOut.js">

                New Cash Out
              </button>
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-light py-12" data-id="r2rqkz0wm" data-path="pages/PointsCashOut.js">
      <div className="container mx-auto px-4" data-id="yz9du76av" data-path="pages/PointsCashOut.js">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8" data-id="e9ecq08bz" data-path="pages/PointsCashOut.js">
          <div className="flex items-center mb-6" data-id="fwx6uahcp" data-path="pages/PointsCashOut.js">
            <Link to="/profile" className="text-primary hover:underline mr-4" data-id="1ghsk0emv" data-path="pages/PointsCashOut.js">
              <i className="fas fa-arrow-left" data-id="atfzpdtdc" data-path="pages/PointsCashOut.js"></i>
            </Link>
            <h1 className="text-2xl font-bold text-primary" data-id="dbsnjtet5" data-path="pages/PointsCashOut.js">Cash Out Points</h1>
          </div>
          
          {error &&
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert" data-id="xejr76emn" data-path="pages/PointsCashOut.js">
              <span className="block sm:inline" data-id="v46bh7x5g" data-path="pages/PointsCashOut.js">{error}</span>
            </div>
          }
          
          <form onSubmit={handleSubmit} data-id="7wsf3ajsm" data-path="pages/PointsCashOut.js">
            {/* Current Balance */}
            <div className="bg-mint rounded-lg p-4 text-center mb-6" data-id="anobysluq" data-path="pages/PointsCashOut.js">
              <p className="text-gray-700" data-id="ov1vobtxa" data-path="pages/PointsCashOut.js">Current Balance</p>
              <p className="text-3xl font-bold text-primary" data-id="fh65ck273" data-path="pages/PointsCashOut.js">{user?.pointsBalance || 0} points</p>
            </div>
            
            {/* Amount Selection */}
            <div className="mb-6" data-id="0bvl4tjkm" data-path="pages/PointsCashOut.js">
              <label className="block text-gray-700 text-sm font-medium mb-3" data-id="vljmai9gw" data-path="pages/PointsCashOut.js">
                Select amount to cash out
              </label>
              
              <div className="grid grid-cols-3 gap-3 mb-4" data-id="dtnpqq72t" data-path="pages/PointsCashOut.js">
                {predefinedAmounts.map((presetAmount) =>
                <button
                  key={presetAmount}
                  type="button"
                  className={`p-3 border rounded-md text-center font-medium transition-colors ${
                  amount === presetAmount.toString() ?
                  'bg-primary text-white border-primary' :
                  'bg-white text-gray-700 border-gray-300 hover:border-primary hover:text-primary'} ${
                  (user?.pointsBalance || 0) < presetAmount ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={() => handleAmountSelect(presetAmount)}
                  disabled={(user?.pointsBalance || 0) < presetAmount} data-id="i8rtfbx8m" data-path="pages/PointsCashOut.js">

                    {presetAmount} points
                  </button>
                )}
              </div>
              
              <div data-id="7bekzu1la" data-path="pages/PointsCashOut.js">
                <label className="block text-gray-700 text-sm font-medium mb-2" data-id="8aram4ujk" data-path="pages/PointsCashOut.js">
                  Or enter custom amount
                </label>
                <div className="relative" data-id="w4q7078fm" data-path="pages/PointsCashOut.js">
                  <input
                    type="text"
                    value={amount}
                    onChange={handleAmountChange}
                    className="form-control pl-12"
                    placeholder="0" data-id="3oa6prvpv" data-path="pages/PointsCashOut.js" />

                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" data-id="ky4h7i1gf" data-path="pages/PointsCashOut.js">
                    <span className="text-gray-500 font-medium" data-id="u0lv0xloc" data-path="pages/PointsCashOut.js">Points</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Cash Out Method Selection */}
            <div className="mb-6" data-id="xjq7wo71k" data-path="pages/PointsCashOut.js">
              <label className="block text-gray-700 text-sm font-medium mb-3" data-id="2vs3c3aus" data-path="pages/PointsCashOut.js">
                Select cash out method
              </label>
              
              <div className="grid grid-cols-3 gap-3 mb-4" data-id="4lhd26ru0" data-path="pages/PointsCashOut.js">
                {cashOutMethods.map((method) =>
                <div
                  key={method.id}
                  className={`p-4 border rounded-md flex flex-col items-center cursor-pointer transition-colors ${
                  accountDetails.method === method.id ?
                  'bg-mint border-primary' :
                  'bg-white border-gray-300 hover:border-primary'}`
                  }
                  onClick={() => handleMethodSelect(method.id)} data-id="us8nxl37b" data-path="pages/PointsCashOut.js">

                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  accountDetails.method === method.id ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`
                  } data-id="npi01sprf" data-path="pages/PointsCashOut.js">
                      <i className={`fas ${method.icon}`} data-id="cmt81mt1h" data-path="pages/PointsCashOut.js"></i>
                    </div>
                    <span className="text-sm font-medium text-center" data-id="nb1uqce38" data-path="pages/PointsCashOut.js">{method.name}</span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Account Details */}
            {accountDetails.method &&
            <div className="mb-8 border border-gray-200 rounded-lg p-4" data-id="jt3pundpj" data-path="pages/PointsCashOut.js">
                <h3 className="font-medium text-gray-700 mb-4" data-id="hfmqw3u3i" data-path="pages/PointsCashOut.js">Enter your account details</h3>
                
                <div className="grid grid-cols-1 gap-4" data-id="glls1c1kl" data-path="pages/PointsCashOut.js">
                  <div className="form-group" data-id="mrgd5kbm7" data-path="pages/PointsCashOut.js">
                    <label htmlFor="accountName" className="block text-gray-700 text-sm font-medium mb-2" data-id="yjefxwbwj" data-path="pages/PointsCashOut.js">
                      Account Holder Name
                    </label>
                    <input
                    type="text"
                    id="accountName"
                    name="accountName"
                    value={accountDetails.accountName}
                    onChange={handleAccountChange}
                    className="form-control"
                    placeholder="Enter name on account" data-id="5d9z7hqbl" data-path="pages/PointsCashOut.js" />

                  </div>
                  
                  <div className="form-group" data-id="qp0f0vc61" data-path="pages/PointsCashOut.js">
                    <label htmlFor="accountNumber" className="block text-gray-700 text-sm font-medium mb-2" data-id="bpwo2jw1t" data-path="pages/PointsCashOut.js">
                      {accountDetails.method === 'bank_transfer' ? 'Account Number' :
                    accountDetails.method === 'paypal' ? 'PayPal Email' : 'Wallet Number'}
                    </label>
                    <input
                    type={accountDetails.method === 'paypal' ? 'email' : 'text'}
                    id="accountNumber"
                    name="accountNumber"
                    value={accountDetails.accountNumber}
                    onChange={handleAccountChange}
                    className="form-control"
                    placeholder={accountDetails.method === 'paypal' ? 'email@example.com' : 'Enter account number'} data-id="l0y258uzu" data-path="pages/PointsCashOut.js" />

                  </div>
                  
                  {accountDetails.method === 'bank_transfer' &&
                <div className="form-group" data-id="62yjg0ixu" data-path="pages/PointsCashOut.js">
                      <label htmlFor="bankName" className="block text-gray-700 text-sm font-medium mb-2" data-id="n05tyy7n2" data-path="pages/PointsCashOut.js">
                        Bank Name
                      </label>
                      <input
                    type="text"
                    id="bankName"
                    name="bankName"
                    value={accountDetails.bankName}
                    onChange={handleAccountChange}
                    className="form-control"
                    placeholder="Enter bank name" data-id="gowq5xbw2" data-path="pages/PointsCashOut.js" />

                    </div>
                }
                </div>
              </div>
            }
            
            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={loading || !amount || !accountDetails.method} data-id="1x7hj61re" data-path="pages/PointsCashOut.js">

              {loading ?
              <span className="flex items-center justify-center" data-id="ple66r0q0" data-path="pages/PointsCashOut.js">
                  <i className="fas fa-spinner fa-spin mr-2" data-id="hxzwfbtl3" data-path="pages/PointsCashOut.js"></i>
                  Processing...
                </span> :
              `Cash Out ${amount ? amount + ' Points' : ''}`}
            </button>
          </form>
          
          <div className="mt-6 text-center text-sm text-gray-500" data-id="56u3hltrg" data-path="pages/PointsCashOut.js">
            <p data-id="ucfgcew0u" data-path="pages/PointsCashOut.js">Need help? Contact our <a href="#" className="text-primary hover:underline" data-id="5t2wl8e9u" data-path="pages/PointsCashOut.js">customer support</a></p>
          </div>
        </div>
      </div>
    </div>);

}
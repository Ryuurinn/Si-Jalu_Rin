// Email Verification Page
function EmailVerification() {
  const { useState, useEffect } = React;
  const Link = window.CustomLink;
  const navigate = window.navigate;

  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [countdown, setCountdown] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [email, setEmail] = useState('');

  // Get stored email from localStorage
  useEffect(() => {
    const pendingVerification = JSON.parse(localStorage.getItem('pendingVerification') || '{}');
    if (pendingVerification && pendingVerification.email) {
      setEmail(pendingVerification.email);
    } else {
      // If no pending verification, redirect to signup
      navigate('signup');
    }

    // Start countdown for resend button
    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(timer);
          setCanResend(true);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Handle code input
  const handleCodeChange = (e, index) => {
    const value = e.target.value;

    // Only allow numbers
    if (value && !/^\d+$/.test(value)) return;

    // Update the code array
    const newCode = [...verificationCode];
    newCode[index] = value.slice(0, 1); // Only take the first character
    setVerificationCode(newCode);

    // Auto-focus next input if this one is filled
    if (value && index < 5) {
      const inputs = document.querySelectorAll('input[name^="code-"]');
      inputs[index + 1].focus();
    }
  };

  // Handle paste event for verification code
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').trim();

    if (/^\d+$/.test(pastedData) && pastedData.length <= 6) {
      const digits = pastedData.split('');
      const newCode = [...verificationCode];

      digits.forEach((digit, index) => {
        if (index < 6) newCode[index] = digit;
      });

      setVerificationCode(newCode);

      // Focus the next empty input or the last one if all filled
      const lastFilledIndex = Math.min(digits.length - 1, 5);
      const inputs = document.querySelectorAll('input[name^="code-"]');
      inputs[lastFilledIndex].focus();
    }
  };

  // Handle key press for backspace navigation
  const handleKeyDown = (e, index) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
      const inputs = document.querySelectorAll('input[name^="code-"]');
      inputs[index - 1].focus();
    }
  };

  // Submit verification code
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const code = verificationCode.join('');
    if (code.length !== 6) {
      setError('Please enter a valid verification code');
      return;
    }

    setLoading(true);

    // Mock verification API call - Replace with actual API in production
    setTimeout(() => {
      // For demo, any code works
      const pendingVerification = JSON.parse(localStorage.getItem('pendingVerification') || '{}');

      // Update verification status
      localStorage.setItem('pendingVerification', JSON.stringify({
        ...pendingVerification,
        emailVerified: true
      }));

      // Navigate to phone verification
      navigate('phone-verification');
      setLoading(false);
    }, 1500);
  };

  // Resend verification code
  const handleResend = () => {
    if (!canResend) return;

    setCanResend(false);
    setCountdown(30);

    // Mock resend API call
    setTimeout(() => {
      // Restart countdown
      const timer = setInterval(() => {
        setCountdown((prevCount) => {
          if (prevCount <= 1) {
            clearInterval(timer);
            setCanResend(true);
            return 0;
          }
          return prevCount - 1;
        });
      }, 1000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-light py-12" data-id="mstggsh04" data-path="pages/EmailVerification.js">
      <div className="container mx-auto px-4" data-id="53102awyp" data-path="pages/EmailVerification.js">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8" data-id="bbpjxfiok" data-path="pages/EmailVerification.js">
          <div className="text-center mb-8" data-id="acfkfy10g" data-path="pages/EmailVerification.js">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-mint rounded-full mb-4" data-id="9bgem70pr" data-path="pages/EmailVerification.js">
              <i className="fas fa-envelope text-primary text-2xl" data-id="02xgho1xv" data-path="pages/EmailVerification.js"></i>
            </div>
            <h1 className="text-2xl font-bold text-primary" data-id="mdzcwewax" data-path="pages/EmailVerification.js">Verify Your Email</h1>
            <p className="text-gray-600 mt-2" data-id="hdekclh0l" data-path="pages/EmailVerification.js">
              We've sent a 6-digit verification code to <span className="font-medium" data-id="4sh29jug7" data-path="pages/EmailVerification.js">{email}</span>
            </p>
          </div>
          
          {error &&
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert" data-id="eq5vzrmf0" data-path="pages/EmailVerification.js">
              <span className="block sm:inline" data-id="pvs6lpk2z" data-path="pages/EmailVerification.js">{error}</span>
            </div>
          }
          
          <form onSubmit={handleSubmit} data-id="g9io72xgj" data-path="pages/EmailVerification.js">
            <div className="mb-6" data-id="5ipq92lau" data-path="pages/EmailVerification.js">
              <label className="block text-gray-700 text-sm font-medium mb-3" data-id="6rg0buakl" data-path="pages/EmailVerification.js">
                Enter verification code
              </label>
              <div className="flex gap-2 justify-between" data-id="5k84ihu6g" data-path="pages/EmailVerification.js">
                {verificationCode.map((digit, index) =>
                <input
                  key={index}
                  type="text"
                  name={`code-${index}`}
                  value={digit}
                  onChange={(e) => handleCodeChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  maxLength="1"
                  className="w-12 h-12 text-center text-xl font-medium border border-gray-300 rounded-md focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20" data-id="n4yg3h70c" data-path="pages/EmailVerification.js" />

                )}
              </div>
            </div>
            
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={loading} data-id="8si9lgat9" data-path="pages/EmailVerification.js">

              {loading ?
              <span className="flex items-center justify-center" data-id="mw5jj7jp8" data-path="pages/EmailVerification.js">
                  <i className="fas fa-spinner fa-spin mr-2" data-id="5uyepa0l0" data-path="pages/EmailVerification.js"></i>
                  Verifying...
                </span> :
              'Verify Email'}
            </button>
            
            <div className="text-center mt-6" data-id="622tao4ih" data-path="pages/EmailVerification.js">
              <p className="text-gray-600 text-sm" data-id="u9i4iwfqo" data-path="pages/EmailVerification.js">
                Didn't receive the code?{" "}
                <button
                  type="button"
                  onClick={handleResend}
                  className={`font-medium ${canResend ? 'text-primary hover:underline' : 'text-gray-400 cursor-not-allowed'}`}
                  disabled={!canResend} data-id="ugyypah59" data-path="pages/EmailVerification.js">

                  {canResend ? 'Resend Code' : `Resend in ${countdown}s`}
                </button>
              </p>
            </div>
          </form>
          
          <div className="mt-8 text-center" data-id="jp1hxg20b" data-path="pages/EmailVerification.js">
            <Link to="/signup" className="text-primary font-medium hover:underline" data-id="99yms0uvc" data-path="pages/EmailVerification.js">
              <i className="fas fa-arrow-left mr-2" data-id="5cajv0kcm" data-path="pages/EmailVerification.js"></i>
              Back to Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>);

}
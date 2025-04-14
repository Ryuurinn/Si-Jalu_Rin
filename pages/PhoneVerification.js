// Phone Verification Page
function PhoneVerification() {
  const { useState, useEffect } = React;
  const Link = window.CustomLink;
  const navigate = window.navigate;

  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [countdown, setCountdown] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  // Get stored phone number from localStorage
  useEffect(() => {
    const pendingVerification = JSON.parse(localStorage.getItem('pendingVerification') || '{}');
    if (pendingVerification && pendingVerification.phoneNumber) {
      setPhoneNumber(pendingVerification.phoneNumber);

      // Check if email is verified first
      if (!pendingVerification.emailVerified) {
        navigate('email-verification');
        return;
      }
    } else {
      // If no pending verification, redirect to signup
      navigate('signup');
      return;
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
      const inputs = document.querySelectorAll('input[name^="phone-code-"]');
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
      const inputs = document.querySelectorAll('input[name^="phone-code-"]');
      inputs[lastFilledIndex].focus();
    }
  };

  // Handle key press for backspace navigation
  const handleKeyDown = (e, index) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
      const inputs = document.querySelectorAll('input[name^="phone-code-"]');
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

      // Create verified user in local storage
      localStorage.setItem('auth', JSON.stringify({
        isLoggedIn: true,
        user: {
          email: pendingVerification.email,
          phoneNumber: pendingVerification.phoneNumber,
          name: 'New User', // In real app, this would come from the signup form
          pointsBalance: 0
        }
      }));

      // Clear pending verification
      localStorage.removeItem('pendingVerification');

      // Trigger auth state update
      window.dispatchEvent(new Event('authChange'));

      // Navigate to home after successful verification
      navigate('home');
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
    <div className="min-h-screen bg-light py-12" data-id="3h9elfl75" data-path="pages/PhoneVerification.js">
      <div className="container mx-auto px-4" data-id="x8l8ni857" data-path="pages/PhoneVerification.js">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8" data-id="f5hmhckdr" data-path="pages/PhoneVerification.js">
          <div className="text-center mb-8" data-id="29nsonh15" data-path="pages/PhoneVerification.js">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-mint rounded-full mb-4" data-id="s5yyage76" data-path="pages/PhoneVerification.js">
              <i className="fas fa-mobile-alt text-primary text-2xl" data-id="ez7vqbvr1" data-path="pages/PhoneVerification.js"></i>
            </div>
            <h1 className="text-2xl font-bold text-primary" data-id="x6nv4obrk" data-path="pages/PhoneVerification.js">Verify Your Phone</h1>
            <p className="text-gray-600 mt-2" data-id="yfi4b4nni" data-path="pages/PhoneVerification.js">
              We've sent a 6-digit verification code to <span className="font-medium" data-id="skp71n12c" data-path="pages/PhoneVerification.js">{phoneNumber}</span>
            </p>
          </div>
          
          {error &&
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert" data-id="vv383txfn" data-path="pages/PhoneVerification.js">
              <span className="block sm:inline" data-id="atgkd3vfj" data-path="pages/PhoneVerification.js">{error}</span>
            </div>
          }
          
          <form onSubmit={handleSubmit} data-id="7ze7lzo1t" data-path="pages/PhoneVerification.js">
            <div className="mb-6" data-id="juo28uc1u" data-path="pages/PhoneVerification.js">
              <label className="block text-gray-700 text-sm font-medium mb-3" data-id="1ccttx0f7" data-path="pages/PhoneVerification.js">
                Enter verification code
              </label>
              <div className="flex gap-2 justify-between" data-id="bcn1vxfta" data-path="pages/PhoneVerification.js">
                {verificationCode.map((digit, index) =>
                <input
                  key={index}
                  type="text"
                  name={`phone-code-${index}`}
                  value={digit}
                  onChange={(e) => handleCodeChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  maxLength="1"
                  className="w-12 h-12 text-center text-xl font-medium border border-gray-300 rounded-md focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20" data-id="vqzsw42nn" data-path="pages/PhoneVerification.js" />

                )}
              </div>
            </div>
            
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={loading} data-id="8ekedmq49" data-path="pages/PhoneVerification.js">

              {loading ?
              <span className="flex items-center justify-center" data-id="nvca7p6m0" data-path="pages/PhoneVerification.js">
                  <i className="fas fa-spinner fa-spin mr-2" data-id="gnt54x7d9" data-path="pages/PhoneVerification.js"></i>
                  Verifying...
                </span> :
              'Complete Registration'}
            </button>
            
            <div className="text-center mt-6" data-id="96ex3lkr5" data-path="pages/PhoneVerification.js">
              <p className="text-gray-600 text-sm" data-id="eepkvl6av" data-path="pages/PhoneVerification.js">
                Didn't receive the code?{" "}
                <button
                  type="button"
                  onClick={handleResend}
                  className={`font-medium ${canResend ? 'text-primary hover:underline' : 'text-gray-400 cursor-not-allowed'}`}
                  disabled={!canResend} data-id="hkp3i408j" data-path="pages/PhoneVerification.js">

                  {canResend ? 'Resend Code' : `Resend in ${countdown}s`}
                </button>
              </p>
            </div>
          </form>
          
          <div className="mt-8 text-center" data-id="65k5p5wiw" data-path="pages/PhoneVerification.js">
            <Link to="/email-verification" className="text-primary font-medium hover:underline" data-id="fxok7456o" data-path="pages/PhoneVerification.js">
              <i className="fas fa-arrow-left mr-2" data-id="2g3o1gbbl" data-path="pages/PhoneVerification.js"></i>
              Back to Email Verification
            </Link>
          </div>
        </div>
      </div>
    </div>);

}
// User Profile Page
function UserProfile() {
  const { useState, useEffect } = React;
  const Link = window.CustomLink;
  const navigate = window.navigate;

  // Authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authUser, setAuthUser] = useState(null);

  // Check if user is logged in
  useEffect(() => {
    const checkAuth = () => {
      const authData = JSON.parse(localStorage.getItem('auth') || '{}');
      if (authData && authData.isLoggedIn) {
        setIsLoggedIn(true);
        setAuthUser(authData.user);
      } else {
        // Redirect to login if not logged in
        navigate('login');
      }
    };

    checkAuth();

    // Listen for auth changes
    window.addEventListener('authChange', checkAuth);
    return () => window.removeEventListener('authChange', checkAuth);
  }, []);

  // Static user data - would be merged/replaced with real user data from API in production
  const [userData] = useState({
    name: "Emma Rodriguez",
    joinDate: "January 2023",
    location: "Central District",
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    points: 1250,
    portfolioItems: [
    { id: 1, title: "Certified Tutor", description: "Mathematics and Sciences", icon: "fa-solid fa-graduation-cap" },
    { id: 2, title: "Experienced Driver", description: "Clean driving record, 5+ years", icon: "fa-solid fa-car" },
    { id: 3, title: "First Aid Certified", description: "Red Cross certification", icon: "fa-solid fa-kit-medical" }],

    questsGiven: 12,
    questsTaken: 28,
    giverRating: 4.8,
    takerRating: 4.9,
    giverReviews: [
    { id: 1, from: "Alex Johnson", rating: 5, text: "Emma was very clear about what she needed. Fair compensation too!", date: "2023-06-15", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" },
    { id: 2, from: "Sarah Wilson", rating: 4, text: "Good communication throughout the quest. Would help again.", date: "2023-05-22", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" }],

    takerReviews: [
    { id: 1, from: "Michael Chang", rating: 5, text: "Emma was amazing! She helped me move my furniture with great care.", date: "2023-06-28", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" },
    { id: 2, from: "Jamie Lee", rating: 5, text: "Outstanding math tutor! Helped me pass my calculus exam.", date: "2023-06-10", avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" },
    { id: 3, from: "Taylor Swift", rating: 5, text: "Very friendly and professional. Completed the quest perfectly.", date: "2023-05-05", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" }],

    questHistory: {
      given: [
      { id: 101, title: "Math tutoring needed", type: "Education", date: "2023-06-20", status: "Completed", reward: "$25" },
      { id: 102, title: "Help setting up new furniture", type: "Housechores", date: "2023-06-10", status: "Completed", reward: "$30" },
      { id: 103, title: "Ride to airport", type: "Transportation", date: "2023-05-15", status: "Completed", reward: "$40" }],

      taken: [
      { id: 201, title: "Dog walking for a week", type: "Health", date: "2023-06-25", status: "In Progress", reward: "$50" },
      { id: 202, title: "Computer troubleshooting", type: "Hobby", date: "2023-06-15", status: "Completed", reward: "$35" },
      { id: 203, title: "Grocery delivery", type: "Housechores", date: "2023-06-05", status: "Completed", reward: "$20" },
      { id: 204, title: "Party companion", type: "Social", date: "2023-05-20", status: "Completed", reward: "$30" }]
    }
  });

  const [activeTab, setActiveTab] = useState('overview');
  const [reviewsView, setReviewsView] = useState('taker');

  // If not logged in and redirecting, show loading state
  if (!isLoggedIn && !authUser) {
    return (
      <div className="min-h-screen flex justify-center items-center" data-id="p1n48swma" data-path="pages/UserProfile.js">
        <div className="text-center" data-id="wx90chnjb" data-path="pages/UserProfile.js">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" data-id="cmjl0rkl9" data-path="pages/UserProfile.js"></div>
          <p className="text-gray-600" data-id="tmb0ixhri" data-path="pages/UserProfile.js">Checking authentication status...</p>
        </div>
      </div>);

  }

  // Get points balance from auth user if available
  const pointsBalance = authUser?.pointsBalance || userData.points;

  return (
    <div data-id="blio9o1wh" data-path="pages/UserProfile.js">
      {/* Header */}
      <section className="bg-mint py-10" data-id="doy1q8tt5" data-path="pages/UserProfile.js">
        <div className="container mx-auto px-4" data-id="508g9mi0q" data-path="pages/UserProfile.js">
          <h1 className="text-3xl md:text-4xl font-bold text-primary" data-id="19xye92w5" data-path="pages/UserProfile.js">User Profile</h1>
          <p className="text-dark mt-2" data-id="xgaz4mwjk" data-path="pages/UserProfile.js">View and manage your profile details, quests, and rewards.</p>
        </div>
      </section>
      
      <section className="py-12" data-id="ne7xy73am" data-path="pages/UserProfile.js">
        <div className="container mx-auto px-4" data-id="do7ap723w" data-path="pages/UserProfile.js">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8" data-id="gtihfn3cy" data-path="pages/UserProfile.js">
            {/* Left Sidebar - User Info */}
            <div className="lg:col-span-1" data-id="synrggj01" data-path="pages/UserProfile.js">
              <div className="bg-white rounded-lg shadow-md p-6" data-id="s9k8hlngj" data-path="pages/UserProfile.js">
                <div className="flex flex-col items-center text-center mb-6" data-id="qtkpcsci9" data-path="pages/UserProfile.js">
                  <img
                    src={authUser?.profileImage || userData.profileImage}
                    alt={authUser?.name || userData.name}
                    className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-mint" data-id="o8fk89aqz" data-path="pages/UserProfile.js" />


                  <h2 className="text-2xl font-semibold text-primary" data-id="xu2xa3zdu" data-path="pages/UserProfile.js">{authUser?.name || userData.name}</h2>
                  <p className="text-gray-600" data-id="hxyv234z6" data-path="pages/UserProfile.js">Member since {userData.joinDate}</p>
                  <p className="text-gray-600" data-id="9yqqcb2n1" data-path="pages/UserProfile.js">{userData.location}</p>
                  
                  <div className="flex items-center mt-3 space-x-4" data-id="232p6kpvy" data-path="pages/UserProfile.js">
                    <div className="text-center" data-id="qjzyegsjq" data-path="pages/UserProfile.js">
                      <div className="flex items-center" data-id="xifjci9kl" data-path="pages/UserProfile.js">
                        <i className="fas fa-star text-yellow-500 mr-1" data-id="z37be69k2" data-path="pages/UserProfile.js"></i>
                        <span className="font-medium" data-id="ihmjoilrx" data-path="pages/UserProfile.js">{userData.giverRating}</span>
                      </div>
                      <p className="text-xs text-gray-500" data-id="xu246g9wd" data-path="pages/UserProfile.js">As Giver</p>
                    </div>
                    <div className="text-center" data-id="w0uzvrny3" data-path="pages/UserProfile.js">
                      <div className="flex items-center" data-id="85aq5ldws" data-path="pages/UserProfile.js">
                        <i className="fas fa-star text-yellow-500 mr-1" data-id="3zk475ie6" data-path="pages/UserProfile.js"></i>
                        <span className="font-medium" data-id="9z6i3ob8o" data-path="pages/UserProfile.js">{userData.takerRating}</span>
                      </div>
                      <p className="text-xs text-gray-500" data-id="mcl4n2kso" data-path="pages/UserProfile.js">As Taker</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4" data-id="ycparakbv" data-path="pages/UserProfile.js">
                  <div className="flex justify-between items-center mb-3" data-id="urg9xjvn0" data-path="pages/UserProfile.js">
                    <h3 className="font-medium" data-id="cnfzffpgs" data-path="pages/UserProfile.js">Points Balance</h3>
                    <span className="font-bold text-primary" data-id="sb62t0rib" data-path="pages/UserProfile.js">{pointsBalance}</span>
                  </div>
                  <div className="bg-gray-100 rounded-full h-4 mb-4" data-id="cwbfnxqs8" data-path="pages/UserProfile.js">
                    <div
                      className="bg-primary rounded-full h-4"
                      style={{ width: `${Math.min(pointsBalance / 20, 100)}%` }} data-id="uuvnnt4k1" data-path="pages/UserProfile.js">
                    </div>
                  </div>
                  
                  {/* Points Management Buttons */}
                  <div className="grid grid-cols-2 gap-2 mb-4" data-id="3bop2ek1z" data-path="pages/UserProfile.js">
                    <Link to="/points-top-up" className="btn btn-primary py-2 text-sm" data-id="m44re52xb" data-path="pages/UserProfile.js">
                      <i className="fas fa-plus mr-1" data-id="l9rbydvyt" data-path="pages/UserProfile.js"></i> Top Up
                    </Link>
                    <Link to="/points-cash-out" className="btn btn-secondary py-2 text-sm" data-id="t3jo6k5kl" data-path="pages/UserProfile.js">
                      <i className="fas fa-money-bill-wave mr-1" data-id="s5as2ym6e" data-path="pages/UserProfile.js"></i> Cash Out
                    </Link>
                  </div>
                  
                  <p className="text-xs text-gray-500 text-center" data-id="cbj2dsv7d" data-path="pages/UserProfile.js">
                    Earn more points by completing quests
                  </p>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mt-4" data-id="5p3g4y5sy" data-path="pages/UserProfile.js">
                  <h3 className="font-medium mb-3" data-id="hjfjdu5p6" data-path="pages/UserProfile.js">Quest Stats</h3>
                  <div className="grid grid-cols-2 gap-2" data-id="rfasa5hor" data-path="pages/UserProfile.js">
                    <div className="bg-gray-50 p-3 rounded-lg text-center" data-id="nrbvof4xx" data-path="pages/UserProfile.js">
                      <span className="block text-2xl font-bold text-primary" data-id="yn6w6f7f8" data-path="pages/UserProfile.js">{userData.questsGiven}</span>
                      <span className="text-xs text-gray-500" data-id="n39zhwtwj" data-path="pages/UserProfile.js">Quests Given</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center" data-id="ukwgj04lf" data-path="pages/UserProfile.js">
                      <span className="block text-2xl font-bold text-primary" data-id="ih9f13boz" data-path="pages/UserProfile.js">{userData.questsTaken}</span>
                      <span className="text-xs text-gray-500" data-id="qymjdcwy7" data-path="pages/UserProfile.js">Quests Taken</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 mt-6" data-id="msla7ecbd" data-path="pages/UserProfile.js">
                <h3 className="font-medium mb-4" data-id="kjxihna02" data-path="pages/UserProfile.js">Portfolio & Skills</h3>
                <div className="space-y-4" data-id="7hdyz542w" data-path="pages/UserProfile.js">
                  {userData.portfolioItems.map((item) =>
                  <div key={item.id} className="flex items-start" data-id="sogsgxv9m" data-path="pages/UserProfile.js">
                      <div className="w-10 h-10 bg-mint rounded-full flex items-center justify-center mr-3" data-id="r89gq71kq" data-path="pages/UserProfile.js">
                        <i className={`${item.icon} text-primary`} data-id="ii0fmwukx" data-path="pages/UserProfile.js"></i>
                      </div>
                      <div data-id="u3wtp7s40" data-path="pages/UserProfile.js">
                        <h4 className="font-medium" data-id="475st9mxy" data-path="pages/UserProfile.js">{item.title}</h4>
                        <p className="text-sm text-gray-600" data-id="w387o0q8v" data-path="pages/UserProfile.js">{item.description}</p>
                      </div>
                    </div>
                  )}
                </div>
                <button className="mt-4 w-full py-2 text-sm text-primary font-medium border border-primary rounded-lg hover:bg-mint" data-id="u9d5sjwnm" data-path="pages/UserProfile.js">
                  <i className="fas fa-plus mr-2" data-id="5v264t88k" data-path="pages/UserProfile.js"></i>Add New Skill
                </button>
              </div>
            </div>
            
            {/* Main Content Area */}
            <div className="lg:col-span-3" data-id="7496c1erd" data-path="pages/UserProfile.js">
              {/* Tabs Navigation */}
              <div className="bg-white rounded-lg shadow-md mb-6" data-id="291kvf8ve" data-path="pages/UserProfile.js">
                <div className="flex overflow-x-auto" data-id="0wxv6fh4t" data-path="pages/UserProfile.js">
                  <button
                    className={`px-6 py-4 font-medium text-gray-700 border-b-2 whitespace-nowrap ${activeTab === 'overview' ? 'border-primary text-primary' : 'border-transparent hover:text-primary'}`}
                    onClick={() => setActiveTab('overview')} data-id="x63bu4hzy" data-path="pages/UserProfile.js">

                    Overview
                  </button>
                  <button
                    className={`px-6 py-4 font-medium text-gray-700 border-b-2 whitespace-nowrap ${activeTab === 'quests' ? 'border-primary text-primary' : 'border-transparent hover:text-primary'}`}
                    onClick={() => setActiveTab('quests')} data-id="at15l2qj5" data-path="pages/UserProfile.js">

                    Quest History
                  </button>
                  <button
                    className={`px-6 py-4 font-medium text-gray-700 border-b-2 whitespace-nowrap ${activeTab === 'reviews' ? 'border-primary text-primary' : 'border-transparent hover:text-primary'}`}
                    onClick={() => setActiveTab('reviews')} data-id="tixcehi0w" data-path="pages/UserProfile.js">

                    Reviews
                  </button>
                  <button
                    className={`px-6 py-4 font-medium text-gray-700 border-b-2 whitespace-nowrap ${activeTab === 'settings' ? 'border-primary text-primary' : 'border-transparent hover:text-primary'}`}
                    onClick={() => setActiveTab('settings')} data-id="e42eumqge" data-path="pages/UserProfile.js">

                    Settings
                  </button>
                  <button
                    className={`px-6 py-4 font-medium text-gray-700 border-b-2 whitespace-nowrap ${activeTab === 'points' ? 'border-primary text-primary' : 'border-transparent hover:text-primary'}`}
                    onClick={() => setActiveTab('points')} data-id="yx5zhvjrd" data-path="pages/UserProfile.js">

                    Points History
                  </button>
                </div>
              </div>
              
              {/* Tab Content */}
              {activeTab === 'overview' &&
              <div className="space-y-6" data-id="ugjxx18pj" data-path="pages/UserProfile.js">
                  <div className="bg-white rounded-lg shadow-md p-6" data-id="cueebcfy6" data-path="pages/UserProfile.js">
                    <h3 className="text-xl font-semibold mb-4" data-id="dybs9d0v2" data-path="pages/UserProfile.js">Recent Activity</h3>
                    <div className="space-y-4" data-id="qe07cps3n" data-path="pages/UserProfile.js">
                      <div className="flex items-start" data-id="dvy3qdpp4" data-path="pages/UserProfile.js">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3" data-id="ocxp4sozi" data-path="pages/UserProfile.js">
                          <i className="fas fa-check text-green-600" data-id="heaieqwb4" data-path="pages/UserProfile.js"></i>
                        </div>
                        <div data-id="bq15ef7sg" data-path="pages/UserProfile.js">
                          <h4 className="font-medium" data-id="avhr4wgqm" data-path="pages/UserProfile.js">Completed a quest: Dog walking for a week</h4>
                          <p className="text-sm text-gray-500" data-id="v9ejdux3m" data-path="pages/UserProfile.js">2 days ago</p>
                        </div>
                      </div>
                      <div className="flex items-start" data-id="t56f3338g" data-path="pages/UserProfile.js">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3" data-id="y3tobnmqg" data-path="pages/UserProfile.js">
                          <i className="fas fa-plus text-blue-600" data-id="45qeht42j" data-path="pages/UserProfile.js"></i>
                        </div>
                        <div data-id="ux7cfyltq" data-path="pages/UserProfile.js">
                          <h4 className="font-medium" data-id="dabsi4usq" data-path="pages/UserProfile.js">Posted a new quest: Help with garden landscaping</h4>
                          <p className="text-sm text-gray-500" data-id="dyv7mvc1o" data-path="pages/UserProfile.js">5 days ago</p>
                        </div>
                      </div>
                      <div className="flex items-start" data-id="tctz6ryqo" data-path="pages/UserProfile.js">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3" data-id="b90ksufo9" data-path="pages/UserProfile.js">
                          <i className="fas fa-star text-purple-600" data-id="i62lh6lxn" data-path="pages/UserProfile.js"></i>
                        </div>
                        <div data-id="11ygumrk8" data-path="pages/UserProfile.js">
                          <h4 className="font-medium" data-id="brr6dqrtl" data-path="pages/UserProfile.js">Received a 5-star review from Michael Chang</h4>
                          <p className="text-sm text-gray-500" data-id="21z20067w" data-path="pages/UserProfile.js">1 week ago</p>
                        </div>
                      </div>
                    </div>
                    <button className="mt-4 w-full py-2 text-sm text-primary font-medium border border-primary rounded-lg hover:bg-mint" data-id="bksjnemj4" data-path="pages/UserProfile.js">
                      View All Activity
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-id="azyut9fix" data-path="pages/UserProfile.js">
                    <div className="bg-white rounded-lg shadow-md p-6" data-id="0y5wrcldv" data-path="pages/UserProfile.js">
                      <h3 className="text-xl font-semibold mb-4" data-id="h9qtntpld" data-path="pages/UserProfile.js">Quest Type Preferences</h3>
                      <div className="space-y-4" data-id="r4j1kfevf" data-path="pages/UserProfile.js">
                        <div data-id="jx9aa2izs" data-path="pages/UserProfile.js">
                          <div className="flex justify-between mb-1" data-id="ldfbv1q06" data-path="pages/UserProfile.js">
                            <span className="text-sm font-medium" data-id="dn141scjw" data-path="pages/UserProfile.js">Education</span>
                            <span className="text-sm font-medium" data-id="tyaxtcw4a" data-path="pages/UserProfile.js">75%</span>
                          </div>
                          <div className="bg-gray-200 rounded-full h-2.5" data-id="9knozfiis" data-path="pages/UserProfile.js">
                            <div className="bg-primary h-2.5 rounded-full" style={{ width: "75%" }} data-id="vb95lmmd6" data-path="pages/UserProfile.js"></div>
                          </div>
                        </div>
                        <div data-id="59vzij87f" data-path="pages/UserProfile.js">
                          <div className="flex justify-between mb-1" data-id="3aaxig86c" data-path="pages/UserProfile.js">
                            <span className="text-sm font-medium" data-id="s1wvlzm8g" data-path="pages/UserProfile.js">Health</span>
                            <span className="text-sm font-medium" data-id="h3uty3ok9" data-path="pages/UserProfile.js">60%</span>
                          </div>
                          <div className="bg-gray-200 rounded-full h-2.5" data-id="ixeroi4vz" data-path="pages/UserProfile.js">
                            <div className="bg-primary h-2.5 rounded-full" style={{ width: "60%" }} data-id="preuhbtpo" data-path="pages/UserProfile.js"></div>
                          </div>
                        </div>
                        <div data-id="10tu2r859" data-path="pages/UserProfile.js">
                          <div className="flex justify-between mb-1" data-id="qvz6xk5zx" data-path="pages/UserProfile.js">
                            <span className="text-sm font-medium" data-id="wf54ip2tz" data-path="pages/UserProfile.js">Transportation</span>
                            <span className="text-sm font-medium" data-id="vccsusaxn" data-path="pages/UserProfile.js">40%</span>
                          </div>
                          <div className="bg-gray-200 rounded-full h-2.5" data-id="2bzh720vi" data-path="pages/UserProfile.js">
                            <div className="bg-primary h-2.5 rounded-full" style={{ width: "40%" }} data-id="0a600qs3o" data-path="pages/UserProfile.js"></div>
                          </div>
                        </div>
                        <div data-id="lofehajmc" data-path="pages/UserProfile.js">
                          <div className="flex justify-between mb-1" data-id="6kmam62wu" data-path="pages/UserProfile.js">
                            <span className="text-sm font-medium" data-id="cfl6mypsg" data-path="pages/UserProfile.js">Social</span>
                            <span className="text-sm font-medium" data-id="4i8gesx9b" data-path="pages/UserProfile.js">30%</span>
                          </div>
                          <div className="bg-gray-200 rounded-full h-2.5" data-id="7vmxumrne" data-path="pages/UserProfile.js">
                            <div className="bg-primary h-2.5 rounded-full" style={{ width: "30%" }} data-id="wv3zdical" data-path="pages/UserProfile.js"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md p-6" data-id="t6vab42dn" data-path="pages/UserProfile.js">
                      <h3 className="text-xl font-semibold mb-4" data-id="eucgqbseq" data-path="pages/UserProfile.js">Achievements</h3>
                      <div className="grid grid-cols-3 gap-4" data-id="htfvky2xp" data-path="pages/UserProfile.js">
                        <div className="text-center" data-id="yhqcg9b2b" data-path="pages/UserProfile.js">
                          <div className="w-14 h-14 mx-auto bg-yellow-100 rounded-full flex items-center justify-center" data-id="lpqf3gv3r" data-path="pages/UserProfile.js">
                            <i className="fas fa-medal text-yellow-600 text-xl" data-id="io4p216ba" data-path="pages/UserProfile.js"></i>
                          </div>
                          <p className="text-xs mt-2" data-id="lgdcp8zcn" data-path="pages/UserProfile.js">Super Helper</p>
                        </div>
                        <div className="text-center" data-id="94iqvp56o" data-path="pages/UserProfile.js">
                          <div className="w-14 h-14 mx-auto bg-blue-100 rounded-full flex items-center justify-center" data-id="phzt56vcn" data-path="pages/UserProfile.js">
                            <i className="fas fa-graduation-cap text-blue-600 text-xl" data-id="ys5bi2v52" data-path="pages/UserProfile.js"></i>
                          </div>
                          <p className="text-xs mt-2" data-id="wjuf1qm13" data-path="pages/UserProfile.js">Education Pro</p>
                        </div>
                        <div className="text-center" data-id="aa73spojh" data-path="pages/UserProfile.js">
                          <div className="w-14 h-14 mx-auto bg-green-100 rounded-full flex items-center justify-center" data-id="29iyinwbl" data-path="pages/UserProfile.js">
                            <i className="fas fa-users text-green-600 text-xl" data-id="643b04ua6" data-path="pages/UserProfile.js"></i>
                          </div>
                          <p className="text-xs mt-2" data-id="jtyuhnekx" data-path="pages/UserProfile.js">Community Star</p>
                        </div>
                        <div className="text-center" data-id="b3jovjcbu" data-path="pages/UserProfile.js">
                          <div className="w-14 h-14 mx-auto bg-purple-100 rounded-full flex items-center justify-center" data-id="qgju9r13s" data-path="pages/UserProfile.js">
                            <i className="fas fa-heart text-purple-600 text-xl" data-id="da2ny6a36" data-path="pages/UserProfile.js"></i>
                          </div>
                          <p className="text-xs mt-2" data-id="dth8h8l3q" data-path="pages/UserProfile.js">Health Hero</p>
                        </div>
                        <div className="text-center" data-id="ake74jnf1" data-path="pages/UserProfile.js">
                          <div className="w-14 h-14 mx-auto bg-red-100 rounded-full flex items-center justify-center" data-id="2km07viv4" data-path="pages/UserProfile.js">
                            <i className="fas fa-car text-red-600 text-xl" data-id="3turk2wkq" data-path="pages/UserProfile.js"></i>
                          </div>
                          <p className="text-xs mt-2" data-id="5rm2wdzbm" data-path="pages/UserProfile.js">Transport Expert</p>
                        </div>
                        <div className="text-center" data-id="yt898h1ye" data-path="pages/UserProfile.js">
                          <div className="w-14 h-14 mx-auto bg-gray-100 rounded-full flex items-center justify-center" data-id="9nklryrbb" data-path="pages/UserProfile.js">
                            <i className="fas fa-plus text-gray-600 text-xl" data-id="9ybqd7y1b" data-path="pages/UserProfile.js"></i>
                          </div>
                          <p className="text-xs mt-2" data-id="y46y2mb21" data-path="pages/UserProfile.js">More</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
              
              {activeTab === 'quests' &&
              <div className="bg-white rounded-lg shadow-md" data-id="zeknjjg3f" data-path="pages/UserProfile.js">
                  <div className="flex overflow-x-auto border-b" data-id="12fhl3lxm" data-path="pages/UserProfile.js">
                    <button
                    className={`px-6 py-4 font-medium text-gray-700 border-b-2 whitespace-nowrap ${reviewsView === 'taker' ? 'border-primary text-primary' : 'border-transparent hover:text-primary'}`}
                    onClick={() => setReviewsView('taker')} data-id="4jebextvf" data-path="pages/UserProfile.js">

                      Quests Taken ({userData.questHistory.taken.length})
                    </button>
                    <button
                    className={`px-6 py-4 font-medium text-gray-700 border-b-2 whitespace-nowrap ${reviewsView === 'giver' ? 'border-primary text-primary' : 'border-transparent hover:text-primary'}`}
                    onClick={() => setReviewsView('giver')} data-id="0r1yruf73" data-path="pages/UserProfile.js">

                      Quests Given ({userData.questHistory.given.length})
                    </button>
                  </div>
                  
                  <div className="p-6" data-id="ym0ub9e5z" data-path="pages/UserProfile.js">
                    {reviewsView === 'taker' ?
                  <div className="overflow-x-auto" data-id="e5ked77q3" data-path="pages/UserProfile.js">
                        <table className="min-w-full divide-y divide-gray-200" data-id="o6py02nfw" data-path="pages/UserProfile.js">
                          <thead data-id="xuh7c0gkg" data-path="pages/UserProfile.js">
                            <tr data-id="rfpo34yq4" data-path="pages/UserProfile.js">
                              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="ylgj2sek9" data-path="pages/UserProfile.js">Quest Title</th>
                              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="s77bjse8v" data-path="pages/UserProfile.js">Type</th>
                              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="fin3g16xl" data-path="pages/UserProfile.js">Date</th>
                              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="wzhm1o0fo" data-path="pages/UserProfile.js">Status</th>
                              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="q1rqtbiy3" data-path="pages/UserProfile.js">Reward</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200" data-id="gkxte5fxg" data-path="pages/UserProfile.js">
                            {userData.questHistory.taken.map((quest) =>
                        <tr key={quest.id} className="hover:bg-gray-50" data-id="rybnkviga" data-path="pages/UserProfile.js">
                                <td className="px-4 py-3 whitespace-nowrap" data-id="xqzs9hvd7" data-path="pages/UserProfile.js">{quest.title}</td>
                                <td className="px-4 py-3 whitespace-nowrap" data-id="r8dsfodwi" data-path="pages/UserProfile.js">{quest.type}</td>
                                <td className="px-4 py-3 whitespace-nowrap" data-id="d3rk2zt1r" data-path="pages/UserProfile.js">{quest.date}</td>
                                <td className="px-4 py-3 whitespace-nowrap" data-id="xlxmvume1" data-path="pages/UserProfile.js">
                                  <span className={`px-2 py-1 text-xs rounded-full ${
                            quest.status === 'Completed' ? 'bg-green-100 text-green-800' :
                            quest.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'}`
                            } data-id="fsyp81qw6" data-path="pages/UserProfile.js">
                                    {quest.status}
                                  </span>
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap" data-id="nwnr3b6lr" data-path="pages/UserProfile.js">{quest.reward}</td>
                              </tr>
                        )}
                          </tbody>
                        </table>
                      </div> :

                  <div className="overflow-x-auto" data-id="7ez0ttn6x" data-path="pages/UserProfile.js">
                        <table className="min-w-full divide-y divide-gray-200" data-id="mpezov2jh" data-path="pages/UserProfile.js">
                          <thead data-id="ifxchx7wk" data-path="pages/UserProfile.js">
                            <tr data-id="tvr5nibd8" data-path="pages/UserProfile.js">
                              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="ki7clxert" data-path="pages/UserProfile.js">Quest Title</th>
                              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="3yg2vz8w2" data-path="pages/UserProfile.js">Type</th>
                              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="8o121fq1d" data-path="pages/UserProfile.js">Date</th>
                              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="utcf5nds1" data-path="pages/UserProfile.js">Status</th>
                              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="l9g1ynxrb" data-path="pages/UserProfile.js">Reward</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200" data-id="j8nq8e9tz" data-path="pages/UserProfile.js">
                            {userData.questHistory.given.map((quest) =>
                        <tr key={quest.id} className="hover:bg-gray-50" data-id="km7i0mqq8" data-path="pages/UserProfile.js">
                                <td className="px-4 py-3 whitespace-nowrap" data-id="jmhjemj6f" data-path="pages/UserProfile.js">{quest.title}</td>
                                <td className="px-4 py-3 whitespace-nowrap" data-id="zutvf97a2" data-path="pages/UserProfile.js">{quest.type}</td>
                                <td className="px-4 py-3 whitespace-nowrap" data-id="ec1cx4bdr" data-path="pages/UserProfile.js">{quest.date}</td>
                                <td className="px-4 py-3 whitespace-nowrap" data-id="qomdebsew" data-path="pages/UserProfile.js">
                                  <span className={`px-2 py-1 text-xs rounded-full ${
                            quest.status === 'Completed' ? 'bg-green-100 text-green-800' :
                            quest.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'}`
                            } data-id="l9w2dwlgf" data-path="pages/UserProfile.js">
                                    {quest.status}
                                  </span>
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap" data-id="224cz1a7c" data-path="pages/UserProfile.js">{quest.reward}</td>
                              </tr>
                        )}
                          </tbody>
                        </table>
                      </div>
                  }
                  </div>
                </div>
              }
              
              {activeTab === 'reviews' &&
              <div className="bg-white rounded-lg shadow-md" data-id="0bgph8trz" data-path="pages/UserProfile.js">
                  <div className="flex overflow-x-auto border-b" data-id="0rkgays4i" data-path="pages/UserProfile.js">
                    <button
                    className={`px-6 py-4 font-medium text-gray-700 border-b-2 whitespace-nowrap ${reviewsView === 'taker' ? 'border-primary text-primary' : 'border-transparent hover:text-primary'}`}
                    onClick={() => setReviewsView('taker')} data-id="vsu30n0ge" data-path="pages/UserProfile.js">

                      As Quest Taker ({userData.takerReviews.length})
                    </button>
                    <button
                    className={`px-6 py-4 font-medium text-gray-700 border-b-2 whitespace-nowrap ${reviewsView === 'giver' ? 'border-primary text-primary' : 'border-transparent hover:text-primary'}`}
                    onClick={() => setReviewsView('giver')} data-id="4y45wrojq" data-path="pages/UserProfile.js">

                      As Quest Giver ({userData.giverReviews.length})
                    </button>
                  </div>
                  
                  <div className="p-6" data-id="kd5lxsh3m" data-path="pages/UserProfile.js">
                    <div className="space-y-6" data-id="bh6rquaz5" data-path="pages/UserProfile.js">
                      {reviewsView === 'taker' ?
                    userData.takerReviews.map((review) =>
                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0" data-id="zp0gdxaz8" data-path="pages/UserProfile.js">
                            <div className="flex items-start" data-id="izz30og5l" data-path="pages/UserProfile.js">
                              <img
                          src={review.avatar}
                          alt={review.from}
                          className="w-12 h-12 rounded-full object-cover mr-4" data-id="cexrj1c25" data-path="pages/UserProfile.js" />

                              <div className="flex-1" data-id="jkezqc28o" data-path="pages/UserProfile.js">
                                <div className="flex justify-between" data-id="kvn35foqr" data-path="pages/UserProfile.js">
                                  <h4 className="font-medium" data-id="r1cmcjm9a" data-path="pages/UserProfile.js">{review.from}</h4>
                                  <span className="text-sm text-gray-500" data-id="2w94ogqq4" data-path="pages/UserProfile.js">{review.date}</span>
                                </div>
                                <div className="flex text-yellow-500 my-1" data-id="av1evzwry" data-path="pages/UserProfile.js">
                                  {[...Array(5)].map((_, i) =>
                            <i key={i} className={`fas fa-star ${i < review.rating ? '' : 'text-gray-300'}`} data-id="9ua6or2oe" data-path="pages/UserProfile.js"></i>
                            )}
                                </div>
                                <p className="text-gray-600" data-id="qellnpyrp" data-path="pages/UserProfile.js">{review.text}</p>
                              </div>
                            </div>
                          </div>
                    ) :
                    userData.giverReviews.map((review) =>
                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0" data-id="4qef95e1l" data-path="pages/UserProfile.js">
                            <div className="flex items-start" data-id="anjy7rqnu" data-path="pages/UserProfile.js">
                              <img
                          src={review.avatar}
                          alt={review.from}
                          className="w-12 h-12 rounded-full object-cover mr-4" data-id="4jixvzt9a" data-path="pages/UserProfile.js" />

                              <div className="flex-1" data-id="4vift3ki7" data-path="pages/UserProfile.js">
                                <div className="flex justify-between" data-id="e42dqgjoc" data-path="pages/UserProfile.js">
                                  <h4 className="font-medium" data-id="laxkt74o8" data-path="pages/UserProfile.js">{review.from}</h4>
                                  <span className="text-sm text-gray-500" data-id="zi7v0q1ev" data-path="pages/UserProfile.js">{review.date}</span>
                                </div>
                                <div className="flex text-yellow-500 my-1" data-id="42848hcf0" data-path="pages/UserProfile.js">
                                  {[...Array(5)].map((_, i) =>
                            <i key={i} className={`fas fa-star ${i < review.rating ? '' : 'text-gray-300'}`} data-id="i6xymixce" data-path="pages/UserProfile.js"></i>
                            )}
                                </div>
                                <p className="text-gray-600" data-id="4nhgyr6xm" data-path="pages/UserProfile.js">{review.text}</p>
                              </div>
                            </div>
                          </div>
                    )
                    }
                    </div>
                  </div>
                </div>
              }
              
              {activeTab === 'settings' &&
              <div className="bg-white rounded-lg shadow-md p-6" data-id="e5tsl02zv" data-path="pages/UserProfile.js">
                  <h3 className="text-xl font-semibold mb-6" data-id="70ld43k29" data-path="pages/UserProfile.js">Account Settings</h3>
                  
                  <div className="space-y-6" data-id="iczq5r9n4" data-path="pages/UserProfile.js">
                    <div data-id="tvvpbr5d4" data-path="pages/UserProfile.js">
                      <h4 className="font-medium mb-3" data-id="uyn70jprd" data-path="pages/UserProfile.js">Personal Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-id="z4nwl0rel" data-path="pages/UserProfile.js">
                        <div data-id="y4ftev39i" data-path="pages/UserProfile.js">
                          <label className="block text-sm font-medium text-gray-700 mb-1" data-id="11y4a18w8" data-path="pages/UserProfile.js">Name</label>
                          <input
                          type="text"
                          className="form-control"
                          defaultValue={authUser?.name || userData.name} data-id="0ciavl0y3" data-path="pages/UserProfile.js" />

                        </div>
                        <div data-id="ssn6g6f4u" data-path="pages/UserProfile.js">
                          <label className="block text-sm font-medium text-gray-700 mb-1" data-id="5nll6r2bc" data-path="pages/UserProfile.js">Location</label>
                          <input
                          type="text"
                          className="form-control"
                          defaultValue={userData.location} data-id="xt0253z3o" data-path="pages/UserProfile.js" />

                        </div>
                        <div className="md:col-span-2" data-id="wfyivyuur" data-path="pages/UserProfile.js">
                          <label className="block text-sm font-medium text-gray-700 mb-1" data-id="8uawwjojp" data-path="pages/UserProfile.js">Email Address</label>
                          <input
                          type="email"
                          className="form-control"
                          defaultValue={authUser?.email || "emma.rodriguez@example.com"} data-id="m3irafn5k" data-path="pages/UserProfile.js" />

                        </div>
                        <div className="md:col-span-2" data-id="xw1s8urdb" data-path="pages/UserProfile.js">
                          <label className="block text-sm font-medium text-gray-700 mb-1" data-id="uogws0xgl" data-path="pages/UserProfile.js">Bio</label>
                          <textarea
                          className="form-control"
                          rows="3"
                          defaultValue="Passionate helper with experience in tutoring, driving, and health assistance. Always looking to connect with new people and help out where I can!" data-id="qvl19gcf3" data-path="pages/UserProfile.js">
                        </textarea>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-6" data-id="jxcey0xxz" data-path="pages/UserProfile.js">
                      <h4 className="font-medium mb-3" data-id="crqi39w5c" data-path="pages/UserProfile.js">Notification Settings</h4>
                      <div className="space-y-3" data-id="t5ryb1s4z" data-path="pages/UserProfile.js">
                        <div className="flex items-center" data-id="s3j91x8v4" data-path="pages/UserProfile.js">
                          <input
                          id="notify-new-quests"
                          type="checkbox"
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                          defaultChecked data-id="z9zq68knl" data-path="pages/UserProfile.js" />

                          <label htmlFor="notify-new-quests" className="ml-2 block text-sm text-gray-700" data-id="fjnfx8nld" data-path="pages/UserProfile.js">
                            Notify me of new quests matching my preferences
                          </label>
                        </div>
                        <div className="flex items-center" data-id="592d3mu8k" data-path="pages/UserProfile.js">
                          <input
                          id="notify-messages"
                          type="checkbox"
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                          defaultChecked data-id="b365olyib" data-path="pages/UserProfile.js" />

                          <label htmlFor="notify-messages" className="ml-2 block text-sm text-gray-700" data-id="n68r75t3t" data-path="pages/UserProfile.js">
                            Notify me of new messages
                          </label>
                        </div>
                        <div className="flex items-center" data-id="bcplkjac9" data-path="pages/UserProfile.js">
                          <input
                          id="notify-reviews"
                          type="checkbox"
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                          defaultChecked data-id="o7c5bssn2" data-path="pages/UserProfile.js" />

                          <label htmlFor="notify-reviews" className="ml-2 block text-sm text-gray-700" data-id="0tap7wfrw" data-path="pages/UserProfile.js">
                            Notify me of new reviews
                          </label>
                        </div>
                        <div className="flex items-center" data-id="q2a7xg4s5" data-path="pages/UserProfile.js">
                          <input
                          id="notify-newsletter"
                          type="checkbox"
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" data-id="39d5w2jb2" data-path="pages/UserProfile.js" />

                          <label htmlFor="notify-newsletter" className="ml-2 block text-sm text-gray-700" data-id="55t33xiiz" data-path="pages/UserProfile.js">
                            Receive weekly newsletter and tips
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-6" data-id="7gdticbq3" data-path="pages/UserProfile.js">
                      <h4 className="font-medium mb-3" data-id="w2so6v4hl" data-path="pages/UserProfile.js">Privacy Settings</h4>
                      <div className="space-y-3" data-id="ult4cog9e" data-path="pages/UserProfile.js">
                        <div className="flex items-center" data-id="u6qhw9yoz" data-path="pages/UserProfile.js">
                          <input
                          id="privacy-profile"
                          type="checkbox"
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                          defaultChecked data-id="5w43a6p20" data-path="pages/UserProfile.js" />

                          <label htmlFor="privacy-profile" className="ml-2 block text-sm text-gray-700" data-id="2uidfceml" data-path="pages/UserProfile.js">
                            Make my profile visible to everyone
                          </label>
                        </div>
                        <div className="flex items-center" data-id="jgl60gojv" data-path="pages/UserProfile.js">
                          <input
                          id="privacy-contact"
                          type="checkbox"
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" data-id="5dt1fpq5o" data-path="pages/UserProfile.js" />

                          <label htmlFor="privacy-contact" className="ml-2 block text-sm text-gray-700" data-id="ywdzd4288" data-path="pages/UserProfile.js">
                            Show my contact details to quest partners only
                          </label>
                        </div>
                        <div className="flex items-center" data-id="rah4xo7e0" data-path="pages/UserProfile.js">
                          <input
                          id="privacy-location"
                          type="checkbox"
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                          defaultChecked data-id="3nzxdby1m" data-path="pages/UserProfile.js" />

                          <label htmlFor="privacy-location" className="ml-2 block text-sm text-gray-700" data-id="cxag140wm" data-path="pages/UserProfile.js">
                            Show my approximate location
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-6 flex justify-end space-x-4" data-id="ok51rcujf" data-path="pages/UserProfile.js">
                      <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50" data-id="0c10rwtoo" data-path="pages/UserProfile.js">
                        Cancel
                      </button>
                      <button className="px-4 py-2 bg-primary border border-transparent rounded-md text-sm font-medium text-white hover:bg-primary-dark" data-id="s3yiairk3" data-path="pages/UserProfile.js">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              }
              
              {/* Points History Tab */}
              {activeTab === 'points' &&
              <div className="bg-white rounded-lg shadow-md p-6" data-id="4tfmale8x" data-path="pages/UserProfile.js">
                  <h3 className="text-xl font-semibold mb-6" data-id="zzk46bl54" data-path="pages/UserProfile.js">Points History</h3>
                  
                  <div className="bg-mint rounded-lg p-4 text-center mb-6" data-id="di82fe27j" data-path="pages/UserProfile.js">
                    <p className="text-gray-700" data-id="j8bvj0rdx" data-path="pages/UserProfile.js">Current Balance</p>
                    <p className="text-3xl font-bold text-primary" data-id="c9bkfwmfb" data-path="pages/UserProfile.js">{pointsBalance} points</p>
                  </div>
                  
                  <div className="flex justify-end mb-4" data-id="kv74i88zc" data-path="pages/UserProfile.js">
                    <div className="flex space-x-2" data-id="9qu4j6kw7" data-path="pages/UserProfile.js">
                      <Link to="/points-top-up" className="btn btn-primary py-2 text-sm" data-id="nue6162ca" data-path="pages/UserProfile.js">
                        <i className="fas fa-plus mr-1" data-id="8pq7qyjsi" data-path="pages/UserProfile.js"></i> Top Up
                      </Link>
                      <Link to="/points-cash-out" className="btn btn-secondary py-2 text-sm" data-id="3bggx12gd" data-path="pages/UserProfile.js">
                        <i className="fas fa-money-bill-wave mr-1" data-id="munvtfenp" data-path="pages/UserProfile.js"></i> Cash Out
                      </Link>
                    </div>
                  </div>
                  
                  <div className="overflow-x-auto" data-id="2fhutnlpx" data-path="pages/UserProfile.js">
                    <table className="min-w-full divide-y divide-gray-200" data-id="5lt2awxx2" data-path="pages/UserProfile.js">
                      <thead data-id="wdhds608j" data-path="pages/UserProfile.js">
                        <tr data-id="w7k16ociy" data-path="pages/UserProfile.js">
                          <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="h8fuerfkz" data-path="pages/UserProfile.js">Date</th>
                          <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="hvr664huc" data-path="pages/UserProfile.js">Transaction</th>
                          <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="0qnurve67" data-path="pages/UserProfile.js">Type</th>
                          <th className="px-4 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="5f5pca72q" data-path="pages/UserProfile.js">Amount</th>
                          <th className="px-4 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="wk3uusxgg" data-path="pages/UserProfile.js">Balance</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200" data-id="0n8yc5no4" data-path="pages/UserProfile.js">
                        <tr className="hover:bg-gray-50" data-id="6zz5vwncd" data-path="pages/UserProfile.js">
                          <td className="px-4 py-3 whitespace-nowrap text-sm" data-id="wjmxdnciu" data-path="pages/UserProfile.js">2023-07-05</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm" data-id="6t0dx3n2a" data-path="pages/UserProfile.js">Top Up - Credit Card</td>
                          <td className="px-4 py-3 whitespace-nowrap" data-id="69ct06y0d" data-path="pages/UserProfile.js">
                            <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800" data-id="1j4x0ffdr" data-path="pages/UserProfile.js">Credit</span>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium text-green-600" data-id="el3fzychs" data-path="pages/UserProfile.js">+500</td>
                          <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium" data-id="okk9cd925" data-path="pages/UserProfile.js">{pointsBalance}</td>
                        </tr>
                        <tr className="hover:bg-gray-50" data-id="j7rd0lhvn" data-path="pages/UserProfile.js">
                          <td className="px-4 py-3 whitespace-nowrap text-sm" data-id="zprt0s9h3" data-path="pages/UserProfile.js">2023-07-02</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm" data-id="ldlzqwuf8" data-path="pages/UserProfile.js">Quest Completion - Dog Walking</td>
                          <td className="px-4 py-3 whitespace-nowrap" data-id="x5at6wyke" data-path="pages/UserProfile.js">
                            <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800" data-id="pa4jwouk1" data-path="pages/UserProfile.js">Credit</span>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium text-green-600" data-id="eqfksbfyc" data-path="pages/UserProfile.js">+250</td>
                          <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium" data-id="adft6iztg" data-path="pages/UserProfile.js">{pointsBalance - 500}</td>
                        </tr>
                        <tr className="hover:bg-gray-50" data-id="ho2x90gkb" data-path="pages/UserProfile.js">
                          <td className="px-4 py-3 whitespace-nowrap text-sm" data-id="8rwu6ol1h" data-path="pages/UserProfile.js">2023-06-25</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm" data-id="q62qnkcy5" data-path="pages/UserProfile.js">Cash Out - Bank Transfer</td>
                          <td className="px-4 py-3 whitespace-nowrap" data-id="7e0cz0jux" data-path="pages/UserProfile.js">
                            <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800" data-id="d93xd7hin" data-path="pages/UserProfile.js">Debit</span>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium text-red-600" data-id="45n31099b" data-path="pages/UserProfile.js">-1000</td>
                          <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium" data-id="73nfzc3p8" data-path="pages/UserProfile.js">{pointsBalance - 750}</td>
                        </tr>
                        <tr className="hover:bg-gray-50" data-id="kiyob8apj" data-path="pages/UserProfile.js">
                          <td className="px-4 py-3 whitespace-nowrap text-sm" data-id="227j7ixbj" data-path="pages/UserProfile.js">2023-06-20</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm" data-id="g8cg50ltu" data-path="pages/UserProfile.js">Top Up - E-Wallet</td>
                          <td className="px-4 py-3 whitespace-nowrap" data-id="9ayxhh8hr" data-path="pages/UserProfile.js">
                            <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800" data-id="wyuftey0w" data-path="pages/UserProfile.js">Credit</span>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium text-green-600" data-id="9gg2mgxfc" data-path="pages/UserProfile.js">+1000</td>
                          <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium" data-id="zkhgsdtdx" data-path="pages/UserProfile.js">{pointsBalance - 750 + 1000}</td>
                        </tr>
                        <tr className="hover:bg-gray-50" data-id="n4phm4ivc" data-path="pages/UserProfile.js">
                          <td className="px-4 py-3 whitespace-nowrap text-sm" data-id="0o3l3kkx8" data-path="pages/UserProfile.js">2023-06-15</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm" data-id="8lckwouga" data-path="pages/UserProfile.js">Quest Completion - Math Tutoring</td>
                          <td className="px-4 py-3 whitespace-nowrap" data-id="4ri9iku4c" data-path="pages/UserProfile.js">
                            <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800" data-id="f2c71n4af" data-path="pages/UserProfile.js">Credit</span>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium text-green-600" data-id="ps9q9z6ww" data-path="pages/UserProfile.js">+500</td>
                          <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium" data-id="jzqw503jl" data-path="pages/UserProfile.js">{pointsBalance - 1750 + 1000}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </section>
    </div>);

}
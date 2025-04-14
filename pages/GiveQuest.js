// Give Quest Page
function GiveQuest() {
  const { useState } = React;
  const Link = window.CustomLink;

  const [myQuests, setMyQuests] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  const handleQuestSubmit = (newQuest) => {
    setMyQuests([newQuest, ...myQuests]);
    setSuccessMessage('Your quest has been posted successfully!');

    // Clear message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <div data-id="ou99o2nk0" data-path="pages/GiveQuest.js">
      {/* Header */}
      <section className="bg-mint py-10" data-id="781q2oab0" data-path="pages/GiveQuest.js">
        <div className="container mx-auto px-4" data-id="bzle8ow8c" data-path="pages/GiveQuest.js">
          <h1 className="text-3xl md:text-4xl font-bold text-primary" data-id="3n516v850" data-path="pages/GiveQuest.js">Give a Quest</h1>
          <p className="text-dark mt-2" data-id="rkgvtrnru" data-path="pages/GiveQuest.js">Post a quest and find someone to help you.</p>
        </div>
      </section>
      
      <section className="py-12" data-id="n5g4khurm" data-path="pages/GiveQuest.js">
        <div className="container mx-auto px-4" data-id="tnn4543pm" data-path="pages/GiveQuest.js">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-id="3m4lhygh5" data-path="pages/GiveQuest.js">
            <div className="lg:col-span-2" data-id="pxkai8gm6" data-path="pages/GiveQuest.js">
              {successMessage &&
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" data-id="29ht9fqs0" data-path="pages/GiveQuest.js">
                  <span className="block sm:inline" data-id="q2hkfeij9" data-path="pages/GiveQuest.js">{successMessage}</span>
                </div>
              }
              
              <QuestForm onSubmit={handleQuestSubmit} data-id="v16vpzt7o" data-path="pages/GiveQuest.js" />
            </div>
            
            <div className="lg:col-span-1" data-id="7dnzlg9t4" data-path="pages/GiveQuest.js">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6" data-id="slrqvfgso" data-path="pages/GiveQuest.js">
                <h2 className="text-xl font-semibold text-primary mb-4" data-id="c1aow8v8u" data-path="pages/GiveQuest.js">Tips for Great Quests</h2>
                <ul className="space-y-3" data-id="8fl7hrwy1" data-path="pages/GiveQuest.js">
                  <li className="flex" data-id="lsdujqro3" data-path="pages/GiveQuest.js">
                    <i className="fas fa-check-circle text-primary mt-1 mr-2" data-id="ds6sn8nq7" data-path="pages/GiveQuest.js"></i>
                    <span data-id="15ssorv0v" data-path="pages/GiveQuest.js">Be specific about what you need help with</span>
                  </li>
                  <li className="flex" data-id="rqgsmgntn" data-path="pages/GiveQuest.js">
                    <i className="fas fa-check-circle text-primary mt-1 mr-2" data-id="z090zi21d" data-path="pages/GiveQuest.js"></i>
                    <span data-id="xzi6e3hmx" data-path="pages/GiveQuest.js">Provide clear location details</span>
                  </li>
                  <li className="flex" data-id="iicxcejdc" data-path="pages/GiveQuest.js">
                    <i className="fas fa-check-circle text-primary mt-1 mr-2" data-id="wpri3b1px" data-path="pages/GiveQuest.js"></i>
                    <span data-id="0oaa6phu6" data-path="pages/GiveQuest.js">Set a reasonable reward for the effort required</span>
                  </li>
                  <li className="flex" data-id="5y0qleqlp" data-path="pages/GiveQuest.js">
                    <i className="fas fa-check-circle text-primary mt-1 mr-2" data-id="6v22ydtlt" data-path="pages/GiveQuest.js"></i>
                    <span data-id="cqd1914h5" data-path="pages/GiveQuest.js">Respond promptly to quest takers</span>
                  </li>
                  <li className="flex" data-id="82rd2s41j" data-path="pages/GiveQuest.js">
                    <i className="fas fa-check-circle text-primary mt-1 mr-2" data-id="h19m918ib" data-path="pages/GiveQuest.js"></i>
                    <span data-id="6hg2x6pvw" data-path="pages/GiveQuest.js">Be clear about any special requirements</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6" data-id="1jqbc2xu4" data-path="pages/GiveQuest.js">
                <h2 className="text-xl font-semibold text-primary mb-4" data-id="jtrf23mgt" data-path="pages/GiveQuest.js">Why Choose Si Jalu?</h2>
                <div className="space-y-4" data-id="l9mo5lyy2" data-path="pages/GiveQuest.js">
                  <div className="flex" data-id="u9k577kzl" data-path="pages/GiveQuest.js">
                    <div className="flex-shrink-0" data-id="7x2veijm4" data-path="pages/GiveQuest.js">
                      <div className="w-10 h-10 rounded-full bg-mint flex items-center justify-center" data-id="3q71y7fs2" data-path="pages/GiveQuest.js">
                        <i className="fas fa-shield-alt text-primary" data-id="97eki2235" data-path="pages/GiveQuest.js"></i>
                      </div>
                    </div>
                    <div className="ml-4" data-id="69ivcjl2l" data-path="pages/GiveQuest.js">
                      <h3 className="font-medium" data-id="73ts8354a" data-path="pages/GiveQuest.js">Verified Users</h3>
                      <p className="text-sm text-gray-500" data-id="5gpbdcyf0" data-path="pages/GiveQuest.js">
                        All quest takers are verified for your safety
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex" data-id="y6aykkopt" data-path="pages/GiveQuest.js">
                    <div className="flex-shrink-0" data-id="oyovjqfky" data-path="pages/GiveQuest.js">
                      <div className="w-10 h-10 rounded-full bg-mint flex items-center justify-center" data-id="0bhz2502b" data-path="pages/GiveQuest.js">
                        <i className="fas fa-users text-primary" data-id="uwg3z76c0" data-path="pages/GiveQuest.js"></i>
                      </div>
                    </div>
                    <div className="ml-4" data-id="uaf7po7nz" data-path="pages/GiveQuest.js">
                      <h3 className="font-medium" data-id="uzlz2yo5f" data-path="pages/GiveQuest.js">Wide Community</h3>
                      <p className="text-sm text-gray-500" data-id="4m5gwiorr" data-path="pages/GiveQuest.js">
                        Thousands of helpful people ready to assist
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex" data-id="zd7lhteu2" data-path="pages/GiveQuest.js">
                    <div className="flex-shrink-0" data-id="0rc4qecpb" data-path="pages/GiveQuest.js">
                      <div className="w-10 h-10 rounded-full bg-mint flex items-center justify-center" data-id="h3b84hl6i" data-path="pages/GiveQuest.js">
                        <i className="fas fa-comment-dots text-primary" data-id="yb0uzbrya" data-path="pages/GiveQuest.js"></i>
                      </div>
                    </div>
                    <div className="ml-4" data-id="epjb0k25o" data-path="pages/GiveQuest.js">
                      <h3 className="font-medium" data-id="utq6kixps" data-path="pages/GiveQuest.js">Seamless Communication</h3>
                      <p className="text-sm text-gray-500" data-id="ltcce115r" data-path="pages/GiveQuest.js">
                        Chat directly with potential helpers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* My Quests Section */}
          {myQuests.length > 0 &&
          <div className="mt-12" data-id="b5qturbef" data-path="pages/GiveQuest.js">
              <h2 className="text-2xl font-semibold text-primary mb-6" data-id="efdkbskgl" data-path="pages/GiveQuest.js">My Quests</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-id="81omni0e0" data-path="pages/GiveQuest.js">
                {myQuests.map((quest) =>
              <div key={quest.id} className="card p-4" data-id="h4jduaxnj" data-path="pages/GiveQuest.js">
                    <div className="flex justify-between items-center mb-2" data-id="eomncdpyw" data-path="pages/GiveQuest.js">
                      <span className="font-medium text-sm text-primary" data-id="asg4vmjto" data-path="pages/GiveQuest.js">{quest.type}</span>
                      <span className="text-sm bg-green-100 text-green-800 py-1 px-2 rounded-full" data-id="bn555y8u6" data-path="pages/GiveQuest.js">
                        Active
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2" data-id="6xdv64n0w" data-path="pages/GiveQuest.js">{quest.title}</h3>
                    <p className="text-gray-600 text-sm mb-3" data-id="190sakizo" data-path="pages/GiveQuest.js">{truncateText(quest.description, 100)}</p>
                    <div className="flex justify-between text-sm text-gray-500" data-id="wvklf96ts" data-path="pages/GiveQuest.js">
                      <span data-id="br0vvx2mp" data-path="pages/GiveQuest.js">{quest.location}</span>
                      <span data-id="wleb9f3fm" data-path="pages/GiveQuest.js">{formatDate(quest.date)}</span>
                    </div>
                  </div>
              )}
              </div>
            </div>
          }
        </div>
      </section>
    </div>);

}
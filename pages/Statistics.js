// Statistics Page
function Statistics() {
  const Link = window.CustomLink;

  // Mock data for statistics
  const questTypesStats = [
  { type: 'Transportation', count: 245, percentage: 24.5, averagePrice: 35, color: 'bg-blue-500' },
  { type: 'Housechores', count: 210, percentage: 21.0, averagePrice: 28, color: 'bg-green-500' },
  { type: 'Education', count: 180, percentage: 18.0, averagePrice: 42, color: 'bg-purple-500' },
  { type: 'Hobby', count: 150, percentage: 15.0, averagePrice: 25, color: 'bg-yellow-500' },
  { type: 'Health', count: 120, percentage: 12.0, averagePrice: 45, color: 'bg-red-500' },
  { type: 'Social', count: 95, percentage: 9.5, averagePrice: 30, color: 'bg-indigo-500' }];


  const topQuestTakers = [
  { rank: 1, name: 'Alex Johnson', quests: 78, points: 3240, avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80' },
  { rank: 2, name: 'Emma Rodriguez', quests: 65, points: 2980, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80' },
  { rank: 3, name: 'Michael Chang', quests: 59, points: 2650, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80' },
  { rank: 4, name: 'Sarah Wilson', quests: 52, points: 2340, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80' },
  { rank: 5, name: 'David Kim', quests: 48, points: 2120, avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80' }];


  const topQuestGivers = [
  { rank: 1, name: 'Jamie Lee', quests: 65, points: 2860, avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80' },
  { rank: 2, name: 'Taylor Swift', quests: 54, points: 2420, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80' },
  { rank: 3, name: 'Sam Wilson', quests: 48, points: 2180, avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80' },
  { rank: 4, name: 'Chris Parker', quests: 42, points: 1950, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80' },
  { rank: 5, name: 'Jordan Smith', quests: 38, points: 1740, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80' }];


  const monthlyStats = [
  { month: 'Jan', quests: 84 },
  { month: 'Feb', quests: 92 },
  { month: 'Mar', quests: 110 },
  { month: 'Apr', quests: 105 },
  { month: 'May', quests: 125 },
  { month: 'Jun', quests: 148 },
  { month: 'Jul', quests: 136 },
  { month: 'Aug', quests: 152 },
  { month: 'Sep', quests: 165 },
  { month: 'Oct', quests: 172 },
  { month: 'Nov', quests: 155 },
  { month: 'Dec', quests: 140 }];


  // Find max value for scaling chart
  const maxMonthlyQuests = Math.max(...monthlyStats.map((stat) => stat.quests));

  return (
    <div data-id="aopbnnu02" data-path="pages/Statistics.js">
      {/* Header */}
      <section className="bg-mint py-10" data-id="2d4nnkue4" data-path="pages/Statistics.js">
        <div className="container mx-auto px-4" data-id="z6bq5ejcm" data-path="pages/Statistics.js">
          <h1 className="text-3xl md:text-4xl font-bold text-primary" data-id="vo34b0uw1" data-path="pages/Statistics.js">Statistics & Leaderboards</h1>
          <p className="text-dark mt-2" data-id="q2ite48uu" data-path="pages/Statistics.js">See community trends, quest popularity, and top performers.</p>
        </div>
      </section>
      
      {/* Quest Types Popularity */}
      <section className="py-12" data-id="fniuymjql" data-path="pages/Statistics.js">
        <div className="container mx-auto px-4" data-id="3t5gfsg1m" data-path="pages/Statistics.js">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-id="j1n6tcvez" data-path="pages/Statistics.js">
            {/* Quest Types Popularity Chart */}
            <div className="bg-white rounded-lg shadow-md p-6" data-id="0crz78fps" data-path="pages/Statistics.js">
              <h2 className="text-2xl font-semibold text-primary mb-6" data-id="1aw6gez0o" data-path="pages/Statistics.js">Quest Type Popularity</h2>
              
              <div className="space-y-6" data-id="eg0ttg1k8" data-path="pages/Statistics.js">
                {questTypesStats.map((stat, index) =>
                <div key={index} data-id="2vkfhfdlm" data-path="pages/Statistics.js">
                    <div className="flex justify-between mb-1" data-id="ylbz1kjr3" data-path="pages/Statistics.js">
                      <div className="flex items-center" data-id="kdq2slhad" data-path="pages/Statistics.js">
                        <div className={`w-3 h-3 ${stat.color} rounded-full mr-2`} data-id="chmuhpl8q" data-path="pages/Statistics.js"></div>
                        <span className="text-sm font-medium" data-id="qlr1goo2b" data-path="pages/Statistics.js">{stat.type}</span>
                      </div>
                      <span className="text-sm font-medium" data-id="7te10amuz" data-path="pages/Statistics.js">{stat.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5" data-id="cyjt883os" data-path="pages/Statistics.js">
                      <div
                      className={`${stat.color} h-2.5 rounded-full`}
                      style={{ width: `${stat.percentage}%` }} data-id="j9ur7byta" data-path="pages/Statistics.js">
                    </div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1" data-id="xsh7sfurk" data-path="pages/Statistics.js">
                      <span data-id="69gv1glpe" data-path="pages/Statistics.js">{stat.count} quests</span>
                      <span data-id="jlz6tdbon" data-path="pages/Statistics.js">Avg. ${stat.averagePrice}</span>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200" data-id="5a88kbxts" data-path="pages/Statistics.js">
                <h3 className="text-lg font-semibold mb-4" data-id="ht1edyct4" data-path="pages/Statistics.js">Key Insights</h3>
                <ul className="space-y-2 text-sm" data-id="g57xf2ow0" data-path="pages/Statistics.js">
                  <li className="flex items-start" data-id="g7che6p7y" data-path="pages/Statistics.js">
                    <i className="fas fa-circle-info text-primary mt-1 mr-2" data-id="jjzz5x3da" data-path="pages/Statistics.js"></i>
                    <span data-id="4407bmlqw" data-path="pages/Statistics.js">Transportation remains the most requested quest type with 24.5% of all quests.</span>
                  </li>
                  <li className="flex items-start" data-id="mogch6qvf" data-path="pages/Statistics.js">
                    <i className="fas fa-circle-info text-primary mt-1 mr-2" data-id="etllceg0m" data-path="pages/Statistics.js"></i>
                    <span data-id="fe3a25k3m" data-path="pages/Statistics.js">Health quests have the highest average reward at $45 per quest.</span>
                  </li>
                  <li className="flex items-start" data-id="m03bqqx50" data-path="pages/Statistics.js">
                    <i className="fas fa-circle-info text-primary mt-1 mr-2" data-id="y9em3u43y" data-path="pages/Statistics.js"></i>
                    <span data-id="yvgtvdaeh" data-path="pages/Statistics.js">Social quests are growing the fastest, up 18% from last month.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Monthly Activity Chart */}
            <div className="bg-white rounded-lg shadow-md p-6" data-id="gkaob8rke" data-path="pages/Statistics.js">
              <h2 className="text-2xl font-semibold text-primary mb-6" data-id="8a8kor72a" data-path="pages/Statistics.js">Monthly Quest Activity</h2>
              
              <div className="h-64 flex items-end space-x-2" data-id="jfljkrm2p" data-path="pages/Statistics.js">
                {monthlyStats.map((stat, index) =>
                <div key={index} className="flex-1 flex flex-col items-center" data-id="rjgtcfotd" data-path="pages/Statistics.js">
                    <div
                    className="w-full bg-primary rounded-t-sm"
                    style={{ height: `${stat.quests / maxMonthlyQuests * 100}%` }} data-id="yg9fo9jwj" data-path="pages/Statistics.js">
                  </div>
                    <div className="text-xs mt-2 text-gray-600" data-id="623tfm8bw" data-path="pages/Statistics.js">{stat.month}</div>
                  </div>
                )}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200" data-id="uys8pqvcd" data-path="pages/Statistics.js">
                <h3 className="text-lg font-semibold mb-4" data-id="ev4ucfeu5" data-path="pages/Statistics.js">Growth Trends</h3>
                <div className="grid grid-cols-3 gap-4" data-id="aq4azw9bl" data-path="pages/Statistics.js">
                  <div className="bg-green-50 p-4 rounded-lg text-center" data-id="updkre3ct" data-path="pages/Statistics.js">
                    <div className="text-2xl font-bold text-green-600" data-id="wlw579bry" data-path="pages/Statistics.js">+28%</div>
                    <div className="text-sm text-gray-600" data-id="8w1704ncq" data-path="pages/Statistics.js">Overall Growth</div>
                    <div className="text-xs text-gray-500" data-id="axr2vic1a" data-path="pages/Statistics.js">Year over year</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center" data-id="ejf5ikuet" data-path="pages/Statistics.js">
                    <div className="text-2xl font-bold text-blue-600" data-id="0hcnlga99" data-path="pages/Statistics.js">+4.2%</div>
                    <div className="text-sm text-gray-600" data-id="3kui1cvou" data-path="pages/Statistics.js">Monthly Growth</div>
                    <div className="text-xs text-gray-500" data-id="0jpituzc6" data-path="pages/Statistics.js">Last 30 days</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center" data-id="decu4mzu7" data-path="pages/Statistics.js">
                    <div className="text-2xl font-bold text-purple-600" data-id="ib0taajmr" data-path="pages/Statistics.js">172</div>
                    <div className="text-sm text-gray-600" data-id="gwyov9hya" data-path="pages/Statistics.js">Peak Month</div>
                    <div className="text-xs text-gray-500" data-id="ojfq7llwz" data-path="pages/Statistics.js">October 2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leaderboards */}
      <section className="py-12 bg-mint" data-id="8hss6g7vp" data-path="pages/Statistics.js">
        <div className="container mx-auto px-4" data-id="qon0mpdm8" data-path="pages/Statistics.js">
          <h2 className="text-3xl font-semibold text-primary mb-8 text-center" data-id="0vo9ekonm" data-path="pages/Statistics.js">Community Leaderboards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-id="2zavs75tk" data-path="pages/Statistics.js">
            {/* Top Quest Takers */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden" data-id="6c84936do" data-path="pages/Statistics.js">
              <div className="bg-primary text-white py-4 px-6" data-id="m8iva10px" data-path="pages/Statistics.js">
                <h3 className="text-xl font-semibold" data-id="m3p9jaked" data-path="pages/Statistics.js">Top Quest Takers</h3>
                <p className="text-mint text-sm" data-id="mkb8b23oq" data-path="pages/Statistics.js">Heroes helping others</p>
              </div>
              
              <div className="divide-y divide-gray-200" data-id="6jdua6y21" data-path="pages/Statistics.js">
                {topQuestTakers.map((user) =>
                <div key={user.rank} className="p-4 flex items-center hover:bg-gray-50" data-id="8g5p4w77o" data-path="pages/Statistics.js">
                    <div className="w-8 h-8 flex items-center justify-center font-bold text-primary mr-3" data-id="63d3htk2m" data-path="pages/Statistics.js">
                      #{user.rank}
                    </div>
                    <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-12 h-12 rounded-full object-cover mr-4" data-id="3og1er702" data-path="pages/Statistics.js" />

                    <div className="flex-1" data-id="xr3np6sqk" data-path="pages/Statistics.js">
                      <h4 className="font-medium" data-id="7uykl1eet" data-path="pages/Statistics.js">{user.name}</h4>
                      <p className="text-sm text-gray-500" data-id="vgva5ylpz" data-path="pages/Statistics.js">{user.quests} quests completed</p>
                    </div>
                    <div className="text-right" data-id="0vzycy7xz" data-path="pages/Statistics.js">
                      <div className="font-bold text-primary" data-id="umq6ortxk" data-path="pages/Statistics.js">{user.points}</div>
                      <div className="text-xs text-gray-500" data-id="x7t9le0t4" data-path="pages/Statistics.js">points</div>
                    </div>
                  </div>
                )}
                
                <div className="p-4 text-center" data-id="7wuh6fzia" data-path="pages/Statistics.js">
                  <button className="text-primary font-medium hover:underline" data-id="bcd9fdzlr" data-path="pages/Statistics.js">
                    View Full Leaderboard
                  </button>
                </div>
              </div>
            </div>
            
            {/* Top Quest Givers */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden" data-id="a3azouylu" data-path="pages/Statistics.js">
              <div className="bg-primary text-white py-4 px-6" data-id="dv3i8j73s" data-path="pages/Statistics.js">
                <h3 className="text-xl font-semibold" data-id="oq0cgkxv5" data-path="pages/Statistics.js">Top Quest Givers</h3>
                <p className="text-mint text-sm" data-id="d946xh1zu" data-path="pages/Statistics.js">People seeking the most help</p>
              </div>
              
              <div className="divide-y divide-gray-200" data-id="xvhv68f4v" data-path="pages/Statistics.js">
                {topQuestGivers.map((user) =>
                <div key={user.rank} className="p-4 flex items-center hover:bg-gray-50" data-id="l6wbqfo8l" data-path="pages/Statistics.js">
                    <div className="w-8 h-8 flex items-center justify-center font-bold text-primary mr-3" data-id="fd6ty5yye" data-path="pages/Statistics.js">
                      #{user.rank}
                    </div>
                    <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-12 h-12 rounded-full object-cover mr-4" data-id="y05161kl8" data-path="pages/Statistics.js" />

                    <div className="flex-1" data-id="oys1t0u2m" data-path="pages/Statistics.js">
                      <h4 className="font-medium" data-id="d16sndadj" data-path="pages/Statistics.js">{user.name}</h4>
                      <p className="text-sm text-gray-500" data-id="j2g7hjdcq" data-path="pages/Statistics.js">{user.quests} quests posted</p>
                    </div>
                    <div className="text-right" data-id="67l7mb7u7" data-path="pages/Statistics.js">
                      <div className="font-bold text-primary" data-id="alohadgav" data-path="pages/Statistics.js">{user.points}</div>
                      <div className="text-xs text-gray-500" data-id="8rbgs2b4x" data-path="pages/Statistics.js">points</div>
                    </div>
                  </div>
                )}
                
                <div className="p-4 text-center" data-id="6dfjfoxvw" data-path="pages/Statistics.js">
                  <button className="text-primary font-medium hover:underline" data-id="9z8hklnv6" data-path="pages/Statistics.js">
                    View Full Leaderboard
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Achievement Badges */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-6" data-id="e8as1xzww" data-path="pages/Statistics.js">
            <h3 className="text-xl font-semibold text-primary mb-6" data-id="ru34yj01k" data-path="pages/Statistics.js">Popular Achievement Badges</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4" data-id="tz912akcw" data-path="pages/Statistics.js">
              <div className="text-center" data-id="sim57awvj" data-path="pages/Statistics.js">
                <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center border-2 border-yellow-300" data-id="3kbhdf2ej" data-path="pages/Statistics.js">
                  <i className="fas fa-medal text-yellow-600 text-2xl" data-id="2ltkw4w8x" data-path="pages/Statistics.js"></i>
                </div>
                <p className="text-sm font-medium mt-2" data-id="548rr1udc" data-path="pages/Statistics.js">Super Helper</p>
                <p className="text-xs text-gray-500" data-id="s2rfnbyg4" data-path="pages/Statistics.js">2,415 awarded</p>
              </div>
              <div className="text-center" data-id="zhkzwk30y" data-path="pages/Statistics.js">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center border-2 border-blue-300" data-id="vsbwo5pyh" data-path="pages/Statistics.js">
                  <i className="fas fa-graduation-cap text-blue-600 text-2xl" data-id="7auj1qf6h" data-path="pages/Statistics.js"></i>
                </div>
                <p className="text-sm font-medium mt-2" data-id="qgnpew89r" data-path="pages/Statistics.js">Education Pro</p>
                <p className="text-xs text-gray-500" data-id="8lhc48mro" data-path="pages/Statistics.js">1,872 awarded</p>
              </div>
              <div className="text-center" data-id="cpwewb4mo" data-path="pages/Statistics.js">
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center border-2 border-green-300" data-id="w7iisp1wd" data-path="pages/Statistics.js">
                  <i className="fas fa-users text-green-600 text-2xl" data-id="udhj9gkd5" data-path="pages/Statistics.js"></i>
                </div>
                <p className="text-sm font-medium mt-2" data-id="f11ibph48" data-path="pages/Statistics.js">Community Star</p>
                <p className="text-xs text-gray-500" data-id="zprui31ta" data-path="pages/Statistics.js">1,654 awarded</p>
              </div>
              <div className="text-center" data-id="49zkso020" data-path="pages/Statistics.js">
                <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center border-2 border-purple-300" data-id="zy69ybmye" data-path="pages/Statistics.js">
                  <i className="fas fa-heart text-purple-600 text-2xl" data-id="qnpdp7hqd" data-path="pages/Statistics.js"></i>
                </div>
                <p className="text-sm font-medium mt-2" data-id="olt9swx0f" data-path="pages/Statistics.js">Health Hero</p>
                <p className="text-xs text-gray-500" data-id="b04qb51j8" data-path="pages/Statistics.js">1,245 awarded</p>
              </div>
              <div className="text-center" data-id="ipkauhrjo" data-path="pages/Statistics.js">
                <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center border-2 border-red-300" data-id="pvfasd2m6" data-path="pages/Statistics.js">
                  <i className="fas fa-car text-red-600 text-2xl" data-id="ax1p0zpza" data-path="pages/Statistics.js"></i>
                </div>
                <p className="text-sm font-medium mt-2" data-id="alcws48od" data-path="pages/Statistics.js">Transport Expert</p>
                <p className="text-xs text-gray-500" data-id="7uz2vbnpq" data-path="pages/Statistics.js">1,187 awarded</p>
              </div>
              <div className="text-center" data-id="tq65mx7ds" data-path="pages/Statistics.js">
                <div className="w-16 h-16 mx-auto bg-indigo-100 rounded-full flex items-center justify-center border-2 border-indigo-300" data-id="w693g8jig" data-path="pages/Statistics.js">
                  <i className="fas fa-comments text-indigo-600 text-2xl" data-id="fatzu8ju0" data-path="pages/Statistics.js"></i>
                </div>
                <p className="text-sm font-medium mt-2" data-id="87b1sq0ov" data-path="pages/Statistics.js">Social Butterfly</p>
                <p className="text-xs text-gray-500" data-id="0qoe26sx4" data-path="pages/Statistics.js">965 awarded</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Market Rates */}
      <section className="py-12" data-id="rwao049oa" data-path="pages/Statistics.js">
        <div className="container mx-auto px-4" data-id="v0da93wal" data-path="pages/Statistics.js">
          <h2 className="text-3xl font-semibold text-primary mb-8 text-center" data-id="vjj58ggpx" data-path="pages/Statistics.js">Quest Market Rates</h2>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden" data-id="mz4k5qf4u" data-path="pages/Statistics.js">
            <table className="min-w-full divide-y divide-gray-200" data-id="b0n0zmzlo" data-path="pages/Statistics.js">
              <thead className="bg-gray-50" data-id="f5gj7v1w6" data-path="pages/Statistics.js">
                <tr data-id="c6da2e35c" data-path="pages/Statistics.js">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="as6bhuobm" data-path="pages/Statistics.js">
                    Quest Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="53njatsi1" data-path="pages/Statistics.js">
                    Average Rate
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="reijy7wf9" data-path="pages/Statistics.js">
                    Low - High Range
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="322027ird" data-path="pages/Statistics.js">
                    Monthly Trend
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="yacs4c4fz" data-path="pages/Statistics.js">
                    Demand Level
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200" data-id="oc8ooook2" data-path="pages/Statistics.js">
                <tr data-id="62944a5gz" data-path="pages/Statistics.js">
                  <td className="px-6 py-4 whitespace-nowrap" data-id="biaejog2d" data-path="pages/Statistics.js">
                    <div className="flex items-center" data-id="pfqgx0url" data-path="pages/Statistics.js">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3" data-id="b31zn7kdi" data-path="pages/Statistics.js">
                        <i className="fa-solid fa-car text-blue-600" data-id="1gek6su0l" data-path="pages/Statistics.js"></i>
                      </div>
                      <span className="font-medium" data-id="drdrqs0wc" data-path="pages/Statistics.js">Transportation</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium" data-id="4lo3f7axe" data-path="pages/Statistics.js">$35.00</td>
                  <td className="px-6 py-4 whitespace-nowrap" data-id="949go3a8q" data-path="pages/Statistics.js">$15.00 - $75.00</td>
                  <td className="px-6 py-4 whitespace-nowrap" data-id="luflcts6q" data-path="pages/Statistics.js">
                    <div className="flex items-center" data-id="qlwvaeg7h" data-path="pages/Statistics.js">
                      <i className="fas fa-arrow-up text-green-500 mr-1" data-id="i20xagrwe" data-path="pages/Statistics.js"></i>
                      <span data-id="kysemlzvc" data-path="pages/Statistics.js">3.2%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap" data-id="h39gmrfsc" data-path="pages/Statistics.js">
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full" data-id="4i3q3zz5q" data-path="pages/Statistics.js">
                      High
                    </span>
                  </td>
                </tr>
                
                <tr data-id="x18co9xxy" data-path="pages/Statistics.js">
                  <td className="px-6 py-4 whitespace-nowrap" data-id="9k0rkmbgl" data-path="pages/Statistics.js">
                    <div className="flex items-center" data-id="9u7hxw288" data-path="pages/Statistics.js">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3" data-id="bswa5fco8" data-path="pages/Statistics.js">
                        <i className="fa-solid fa-broom text-green-600" data-id="fdrnjzgfr" data-path="pages/Statistics.js"></i>
                      </div>
                      <span className="font-medium" data-id="0p5km58cs" data-path="pages/Statistics.js">Housechores</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium" data-id="2wh27klle" data-path="pages/Statistics.js">$28.00</td>
                  <td className="px-6 py-4 whitespace-nowrap" data-id="1g93edqb4" data-path="pages/Statistics.js">$10.00 - $60.00</td>
                  <td className="px-6 py-4 whitespace-nowrap" data-id="qrn0ay7zo" data-path="pages/Statistics.js">
                    <div className="flex items-center" data-id="kwz49rjnn" data-path="pages/Statistics.js">
                      <i className="fas fa-arrow-up text-green-500 mr-1" data-id="9yn7q4r64" data-path="pages/Statistics.js"></i>
                      <span data-id="r07wxopgi" data-path="pages/Statistics.js">1.8%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap" data-id="dpd4qv6jw" data-path="pages/Statistics.js">
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full" data-id="sg3z96qsl" data-path="pages/Statistics.js">
                      High
                    </span>
                  </td>
                </tr>
                
                <tr data-id="dmhzjbbz8" data-path="pages/Statistics.js">
                  <td className="px-6 py-4 whitespace-nowrap" data-id="uhq9o71a7" data-path="pages/Statistics.js">
                    <div className="flex items-center" data-id="2gwgvsfpd" data-path="pages/Statistics.js">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3" data-id="qm82r5rqo" data-path="pages/Statistics.js">
                        <i className="fa-solid fa-graduation-cap text-purple-600" data-id="xluzxu8f5" data-path="pages/Statistics.js"></i>
                      </div>
                      <span className="font-medium" data-id="pf82znoz1" data-path="pages/Statistics.js">Education</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium" data-id="yz16ho9lb" data-path="pages/Statistics.js">$42.00</td>
                  <td className="px-6 py-4 whitespace-nowrap" data-id="zktmycw9m" data-path="pages/Statistics.js">$20.00 - $80.00</td>
                  <td className="px-6 py-4 whitespace-nowrap" data-id="k7w9ht73v" data-path="pages/Statistics.js">
                    <div className="flex items-center" data-id="781ld5gf8" data-path="pages/Statistics.js">
                      <i className="fas fa-arrow-up text-green-500 mr-1" data-id="3ch9n4kd1" data-path="pages/Statistics.js"></i>
                      <span data-id="2o6vuk5g0" data-path="pages/Statistics.js">4.5%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap" data-id="gz76wl9r4" data-path="pages/Statistics.js">
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full" data-id="1bg2txf7a" data-path="pages/Statistics.js">
                      High
                    </span>
                  </td>
                </tr>
                
                <tr data-id="si5bp1vwh" data-path="pages/Statistics.js">
                  <td className="px-6 py-4 whitespace-nowrap" data-id="bp9qhuzz3" data-path="pages/Statistics.js">
                    <div className="flex items-center" data-id="of5aijb0e" data-path="pages/Statistics.js">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3" data-id="e1gqrx4v8" data-path="pages/Statistics.js">
                        <i className="fa-solid fa-palette text-yellow-600" data-id="peuwrqvoa" data-path="pages/Statistics.js"></i>
                      </div>
                      <span className="font-medium" data-id="89exq4egq" data-path="pages/Statistics.js">Hobby</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium" data-id="srjyr1yu6" data-path="pages/Statistics.js">$25.00</td>
                  <td className="px-6 py-4 whitespace-nowrap" data-id="vshqr4gny" data-path="pages/Statistics.js">$10.00 - $50.00</td>
                  <td className="px-6 py-4 whitespace-nowrap" data-id="brp1mj2sa" data-path="pages/Statistics.js">
                    <div className="flex items-center" data-id="k6rakkt0g" data-path="pages/Statistics.js">
                      <i className="fas fa-equals text-gray-500 mr-1" data-id="9qwv9c5mq" data-path="pages/Statistics.js"></i>
                      <span data-id="s8l66dsbm" data-path="pages/Statistics.js">0.3%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap" data-id="fjk23j1t8" data-path="pages/Statistics.js">
                    <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full" data-id="h9smv9ey6" data-path="pages/Statistics.js">
                      Medium
                    </span>
                  </td>
                </tr>
                
                <tr data-id="spr1fkek8" data-path="pages/Statistics.js">
                  <td className="px-6 py-4 whitespace-nowrap" data-id="x4sy88ijr" data-path="pages/Statistics.js">
                    <div className="flex items-center" data-id="2fsc5wgis" data-path="pages/Statistics.js">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3" data-id="8imfcrdbq" data-path="pages/Statistics.js">
                        <i className="fa-solid fa-heart-pulse text-red-600" data-id="4qd4fpi7f" data-path="pages/Statistics.js"></i>
                      </div>
                      <span className="font-medium" data-id="b9fevwe1j" data-path="pages/Statistics.js">Health</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium" data-id="m6uihdxrc" data-path="pages/Statistics.js">$45.00</td>
                  <td className="px-6 py-4 whitespace-nowrap" data-id="kv63vjfxs" data-path="pages/Statistics.js">$25.00 - $90.00</td>
                  <td className="px-6 py-4 whitespace-nowrap" data-id="qcn6ll06v" data-path="pages/Statistics.js">
                    <div className="flex items-center" data-id="8qqtvvnwx" data-path="pages/Statistics.js">
                      <i className="fas fa-arrow-up text-green-500 mr-1" data-id="vk7ybpuab" data-path="pages/Statistics.js"></i>
                      <span data-id="psllud3qx" data-path="pages/Statistics.js">6.2%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap" data-id="5myts64a4" data-path="pages/Statistics.js">
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full" data-id="6axeuijnz" data-path="pages/Statistics.js">
                      High
                    </span>
                  </td>
                </tr>
                
                <tr data-id="c3sj9wni0" data-path="pages/Statistics.js">
                  <td className="px-6 py-4 whitespace-nowrap" data-id="wpgtpq1nr" data-path="pages/Statistics.js">
                    <div className="flex items-center" data-id="ubbqj63r8" data-path="pages/Statistics.js">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3" data-id="zb1l9vuur" data-path="pages/Statistics.js">
                        <i className="fa-solid fa-users text-indigo-600" data-id="040spp7xe" data-path="pages/Statistics.js"></i>
                      </div>
                      <span className="font-medium" data-id="1f2xgez41" data-path="pages/Statistics.js">Social</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium" data-id="3yda4eqd7" data-path="pages/Statistics.js">$30.00</td>
                  <td className="px-6 py-4 whitespace-nowrap" data-id="iwcu0byl5" data-path="pages/Statistics.js">$15.00 - $65.00</td>
                  <td className="px-6 py-4 whitespace-nowrap" data-id="04fxtc3o4" data-path="pages/Statistics.js">
                    <div className="flex items-center" data-id="6f3pjkh97" data-path="pages/Statistics.js">
                      <i className="fas fa-arrow-up text-green-500 mr-1" data-id="vpoes728e" data-path="pages/Statistics.js"></i>
                      <span data-id="zwpcf7fro" data-path="pages/Statistics.js">8.5%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap" data-id="514u0ltze" data-path="pages/Statistics.js">
                    <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full" data-id="xr3ysnhqn" data-path="pages/Statistics.js">
                      Medium
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 bg-white rounded-lg shadow-md p-6" data-id="n6fg022ue" data-path="pages/Statistics.js">
            <h3 className="text-xl font-semibold text-primary mb-4" data-id="4xdokpdqx" data-path="pages/Statistics.js">Market Insights</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-id="qwkbtm60y" data-path="pages/Statistics.js">
              <div className="bg-gray-50 p-4 rounded-lg" data-id="0vhaqimig" data-path="pages/Statistics.js">
                <h4 className="font-medium text-lg mb-2" data-id="yxmdr2v0n" data-path="pages/Statistics.js">Highest Growth</h4>
                <div className="flex items-center" data-id="qnciyj39w" data-path="pages/Statistics.js">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3" data-id="0s1gfrfuf" data-path="pages/Statistics.js">
                    <i className="fa-solid fa-users text-indigo-600" data-id="yd6jhedhr" data-path="pages/Statistics.js"></i>
                  </div>
                  <div data-id="70dsv6hda" data-path="pages/Statistics.js">
                    <p className="font-medium" data-id="4hurcvn9v" data-path="pages/Statistics.js">Social Quests</p>
                    <p className="text-sm text-gray-500" data-id="d2tv44wc7" data-path="pages/Statistics.js">+8.5% this month</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2" data-id="h1slnb6ox" data-path="pages/Statistics.js">
                  Social quests are trending up as more people seek companions for events and gatherings.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg" data-id="gq56u3cl6" data-path="pages/Statistics.js">
                <h4 className="font-medium text-lg mb-2" data-id="2825fbp4y" data-path="pages/Statistics.js">Highest Paying</h4>
                <div className="flex items-center" data-id="fsyk2lgyg" data-path="pages/Statistics.js">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3" data-id="714m9k3v7" data-path="pages/Statistics.js">
                    <i className="fa-solid fa-heart-pulse text-red-600" data-id="3gll02av2" data-path="pages/Statistics.js"></i>
                  </div>
                  <div data-id="o68kcp0wn" data-path="pages/Statistics.js">
                    <p className="font-medium" data-id="or2iaypve" data-path="pages/Statistics.js">Health Quests</p>
                    <p className="text-sm text-gray-500" data-id="fi45az67j" data-path="pages/Statistics.js">$45 average reward</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2" data-id="9iksh8117" data-path="pages/Statistics.js">
                  Health-related assistance commands premium rates due to specialized skills required.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg" data-id="ch6kh2pop" data-path="pages/Statistics.js">
                <h4 className="font-medium text-lg mb-2" data-id="7hqjbgy0g" data-path="pages/Statistics.js">Most Common</h4>
                <div className="flex items-center" data-id="a462cjemr" data-path="pages/Statistics.js">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3" data-id="b3j0ukik4" data-path="pages/Statistics.js">
                    <i className="fa-solid fa-car text-blue-600" data-id="em01cv1zx" data-path="pages/Statistics.js"></i>
                  </div>
                  <div data-id="lyjkwgzip" data-path="pages/Statistics.js">
                    <p className="font-medium" data-id="ytrdv80xj" data-path="pages/Statistics.js">Transportation</p>
                    <p className="text-sm text-gray-500" data-id="ma0f45ho2" data-path="pages/Statistics.js">24.5% of all quests</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2" data-id="3ta9ka36u" data-path="pages/Statistics.js">
                  Transportation assistance remains the most requested service on the platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);

}
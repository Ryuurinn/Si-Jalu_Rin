// Home Page
function Home() {
  const { useState } = React;
  const Link = window.CustomLink;
  const navigate = window.navigate;

  const [selectedQuest, setSelectedQuest] = useState(null);

  const handleQuestClick = (quest) => {
    setSelectedQuest(quest);
  };

  const closeModal = () => {
    setSelectedQuest(null);
  };

  return (
    <div data-id="5cdqgde08" data-path="pages/Home.js">
      <Hero data-id="4340hqv0w" data-path="pages/Home.js" />
      
      <QuestTypes data-id="vjxv7hx6l" data-path="pages/Home.js" />
      
      {/* Featured Quests */}
      <section className="py-16" data-id="h82thp3xc" data-path="pages/Home.js">
        <div className="container mx-auto px-4" data-id="oe2wk45k5" data-path="pages/Home.js">
          <h2 className="section-title" data-id="oyc2eh56x" data-path="pages/Home.js">Featured Quests</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto" data-id="qsztorf6e" data-path="pages/Home.js">
            Browse through these popular quests that people need help with right now.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-id="j7u2zbztm" data-path="pages/Home.js">
            {sampleQuests.slice(0, 3).map((quest) =>
            <QuestCard
              key={quest.id}
              quest={quest}
              onClick={handleQuestClick} data-id="fyx91dhkr" data-path="pages/Home.js" />

            )}
          </div>
          
          <div className="text-center mt-10" data-id="y8a02ad38" data-path="pages/Home.js">
            <Link to="/take-quest" className="btn btn-primary" data-id="5s7yp3gr7" data-path="pages/Home.js">
              View All Quests
            </Link>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 bg-mint" data-id="gr93q6lhw" data-path="pages/Home.js">
        <div className="container mx-auto px-4" data-id="6jjfkzriw" data-path="pages/Home.js">
          <h2 className="section-title" data-id="gunasfjmi" data-path="pages/Home.js">How Si Jalu Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12" data-id="3zt7o0y0f" data-path="pages/Home.js">
            <div className="text-center" data-id="593fv8y5z" data-path="pages/Home.js">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4" data-id="ngnpsbipb" data-path="pages/Home.js">
                <i className="fas fa-edit text-light text-2xl" data-id="3qgegggdy" data-path="pages/Home.js"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3" data-id="xas3cr559" data-path="pages/Home.js">Create a Quest</h3>
              <p className="text-dark" data-id="xjk454dcv" data-path="pages/Home.js">
                Post a detailed quest explaining what help you need, when, where, and what reward you're offering.
              </p>
            </div>
            
            <div className="text-center" data-id="ukhusbcgw" data-path="pages/Home.js">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4" data-id="jvbrpbqtm" data-path="pages/Home.js">
                <i className="fas fa-search text-light text-2xl" data-id="8eb0rykyr" data-path="pages/Home.js"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3" data-id="9bijf86ps" data-path="pages/Home.js">Connect</h3>
              <p className="text-dark" data-id="99yu0hree" data-path="pages/Home.js">
                Browse quests or wait for quest takers to respond to your posting. Message to finalize details.
              </p>
            </div>
            
            <div className="text-center" data-id="sz7dn5cok" data-path="pages/Home.js">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4" data-id="ryfulkx6y" data-path="pages/Home.js">
                <i className="fas fa-handshake text-light text-2xl" data-id="yccce828s" data-path="pages/Home.js"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3" data-id="fli0162mw" data-path="pages/Home.js">Complete Quest</h3>
              <p className="text-dark" data-id="71v20dbm4" data-path="pages/Home.js">
                Meet up, get help with your task, provide the agreed reward, and leave a review afterward.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12" data-id="tdhlvdaa8" data-path="pages/Home.js">
            <Link to="/give-quest" className="btn btn-primary" data-id="bj69lycu5" data-path="pages/Home.js">
              Post Your First Quest
            </Link>
          </div>
        </div>
      </section>
      
      <ImageGallery data-id="fy9ymkf0w" data-path="pages/Home.js" />
      
      {/* Testimonials */}
      <section className="py-16 bg-light" data-id="1ej7p6zzd" data-path="pages/Home.js">
        <div className="container mx-auto px-4" data-id="4umeirrox" data-path="pages/Home.js">
          <h2 className="section-title" data-id="g07ujm2n0" data-path="pages/Home.js">What Our Users Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8" data-id="kb7ekrvi6" data-path="pages/Home.js">
            <div className="bg-white p-6 rounded-lg shadow-md" data-id="b748du8g5" data-path="pages/Home.js">
              <div className="flex items-center mb-4" data-id="5tna8m7lg" data-path="pages/Home.js">
                <img
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&q=80"
                  alt="User"
                  className="w-12 h-12 rounded-full mr-4 object-cover" data-id="01rsgxgkn" data-path="pages/Home.js" />

                <div data-id="orrx94ewr" data-path="pages/Home.js">
                  <h4 className="font-medium" data-id="l5byagcqb" data-path="pages/Home.js">Michael J.</h4>
                  <div className="text-yellow-500 text-sm" data-id="s02wbdhtl" data-path="pages/Home.js">
                    <i className="fas fa-star" data-id="6c5s07j20" data-path="pages/Home.js"></i>
                    <i className="fas fa-star" data-id="f7pqpr35j" data-path="pages/Home.js"></i>
                    <i className="fas fa-star" data-id="offl9z6gm" data-path="pages/Home.js"></i>
                    <i className="fas fa-star" data-id="xusqzoddt" data-path="pages/Home.js"></i>
                    <i className="fas fa-star" data-id="cko0ogw4t" data-path="pages/Home.js"></i>
                  </div>
                </div>
              </div>
              <p className="text-gray-600" data-id="lacqg7b1a" data-path="pages/Home.js">
                "Si Jalu helped me find someone to help move my furniture when I was in a bind. Great service, very reliable people!"
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md" data-id="bqaiss8v5" data-path="pages/Home.js">
              <div className="flex items-center mb-4" data-id="4a9svhsg6" data-path="pages/Home.js">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&q=80"
                  alt="User"
                  className="w-12 h-12 rounded-full mr-4 object-cover" data-id="kcgf83x8x" data-path="pages/Home.js" />

                <div data-id="twzscd5mf" data-path="pages/Home.js">
                  <h4 className="font-medium" data-id="uo8yu34dj" data-path="pages/Home.js">Sarah T.</h4>
                  <div className="text-yellow-500 text-sm" data-id="kqvxvabqv" data-path="pages/Home.js">
                    <i className="fas fa-star" data-id="n4vs17i0c" data-path="pages/Home.js"></i>
                    <i className="fas fa-star" data-id="26wmdt58e" data-path="pages/Home.js"></i>
                    <i className="fas fa-star" data-id="g1c72yfku" data-path="pages/Home.js"></i>
                    <i className="fas fa-star" data-id="ef0vakdnn" data-path="pages/Home.js"></i>
                    <i className="fas fa-star-half-alt" data-id="j2d4skuac" data-path="pages/Home.js"></i>
                  </div>
                </div>
              </div>
              <p className="text-gray-600" data-id="ivevsqtq5" data-path="pages/Home.js">
                "I've been using Si Jalu as a quest taker to earn extra money. The platform is easy to use and I've met some great people!"
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md" data-id="bkuw75y4e" data-path="pages/Home.js">
              <div className="flex items-center mb-4" data-id="b028nm75w" data-path="pages/Home.js">
                <img
                  src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&q=80"
                  alt="User"
                  className="w-12 h-12 rounded-full mr-4 object-cover" data-id="labi25dyz" data-path="pages/Home.js" />

                <div data-id="1exx88sqv" data-path="pages/Home.js">
                  <h4 className="font-medium" data-id="9k7v4lqbp" data-path="pages/Home.js">David K.</h4>
                  <div className="text-yellow-500 text-sm" data-id="lwbjh3hq6" data-path="pages/Home.js">
                    <i className="fas fa-star" data-id="o52nfufvk" data-path="pages/Home.js"></i>
                    <i className="fas fa-star" data-id="0qkia1riy" data-path="pages/Home.js"></i>
                    <i className="fas fa-star" data-id="9th3o25mh" data-path="pages/Home.js"></i>
                    <i className="fas fa-star" data-id="l335595xl" data-path="pages/Home.js"></i>
                    <i className="fas fa-star" data-id="xyboqdj2l" data-path="pages/Home.js"></i>
                  </div>
                </div>
              </div>
              <p className="text-gray-600" data-id="hn8f5r1ai" data-path="pages/Home.js">
                "As a college student, I needed help with calculus. Found an amazing tutor on Si Jalu who helped me ace my exam!"
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-primary text-light text-center" data-id="18u4ud142" data-path="pages/Home.js">
        <div className="container mx-auto px-4" data-id="xh5qc4u7y" data-path="pages/Home.js">
          <h2 className="text-3xl font-bold mb-6" data-id="iozmekdux" data-path="pages/Home.js">Ready to Join Our Community?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-mint" data-id="ga99d9kwv" data-path="pages/Home.js">
            Whether you need help or want to help others, Si Jalu is the platform for you. 
            Join our growing community today.
          </p>
          <div className="flex flex-wrap justify-center gap-4" data-id="fj10gtbvh" data-path="pages/Home.js">
            <Link to="/give-quest" className="btn btn-secondary" data-id="zsapbh4wx" data-path="pages/Home.js">
              Give a Quest
            </Link>
            <Link to="/take-quest" className="btn bg-mint text-primary font-semibold hover:bg-transparent hover:text-mint border-2 border-mint" data-id="7l1f8m5cp" data-path="pages/Home.js">
              Take a Quest
            </Link>
          </div>
        </div>
      </section>
      
      {/* Quest Detail Modal */}
      {selectedQuest &&
      <Modal onClose={closeModal} data-id="b4eqzrxpr" data-path="pages/Home.js">
          <div className="max-w-2xl" data-id="p9m4rm3w3" data-path="pages/Home.js">
            <div className="flex justify-between items-center mb-4" data-id="amp2qozld" data-path="pages/Home.js">
              <div className="flex items-center" data-id="3n5lhn7mj" data-path="pages/Home.js">
                <i className={`${getQuestTypeIcon(selectedQuest.type)} text-primary mr-2`} data-id="6svnj2x8y" data-path="pages/Home.js"></i>
                <span className="text-sm font-medium" data-id="pha3r07n3" data-path="pages/Home.js">{selectedQuest.type}</span>
              </div>
              <span className="text-lg text-primary font-semibold" data-id="89pv4sotg" data-path="pages/Home.js">{selectedQuest.reward}</span>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4 text-dark" data-id="2kzng6umi" data-path="pages/Home.js">{selectedQuest.title}</h2>
            
            <p className="text-gray-600 mb-6" data-id="rkfogf1fq" data-path="pages/Home.js">{selectedQuest.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6" data-id="p3sad922h" data-path="pages/Home.js">
              <div className="flex items-center text-gray-500" data-id="jtdtrp4oo" data-path="pages/Home.js">
                <i className="fas fa-map-marker-alt mr-2" data-id="67lh92dwq" data-path="pages/Home.js"></i>
                <span data-id="uodcdw84y" data-path="pages/Home.js">{selectedQuest.location}</span>
              </div>
              
              <div className="flex items-center text-gray-500" data-id="vjoz3cv3p" data-path="pages/Home.js">
                <i className="far fa-calendar-alt mr-2" data-id="ugsy7gary" data-path="pages/Home.js"></i>
                <span data-id="kp1wzznmh" data-path="pages/Home.js">{formatDate(selectedQuest.date)}</span>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4 mb-6" data-id="wagcxfi0a" data-path="pages/Home.js">
              <h3 className="text-lg font-semibold mb-2" data-id="plvrai9ju" data-path="pages/Home.js">Posted by</h3>
              <div className="flex items-center" data-id="lk9n1u8wn" data-path="pages/Home.js">
                <img
                src={selectedQuest.poster.image}
                alt={selectedQuest.poster.name}
                className="w-12 h-12 rounded-full mr-4 object-cover" data-id="u3tw26655" data-path="pages/Home.js" />

                <div data-id="si1e3efco" data-path="pages/Home.js">
                  <div className="font-medium" data-id="5thrv518o" data-path="pages/Home.js">{selectedQuest.poster.name}</div>
                  <div className="flex items-center" data-id="p8vv7ez6e" data-path="pages/Home.js">
                    <i className="fas fa-star text-yellow-500 mr-1" data-id="y4yrhu0oz" data-path="pages/Home.js"></i>
                    <span data-id="rqdknqubx" data-path="pages/Home.js">{selectedQuest.poster.rating}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end" data-id="hgoitj8lw" data-path="pages/Home.js">
              <button className="btn btn-primary" data-id="9t3kbylcl" data-path="pages/Home.js">
                Apply for This Quest
              </button>
            </div>
          </div>
        </Modal>
      }
    </div>);

}
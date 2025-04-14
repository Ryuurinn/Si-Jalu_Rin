// Take Quest Page
function TakeQuest() {
  const { useState } = React;
  const Link = window.CustomLink;

  const [questList, setQuestList] = useState(sampleQuests);
  const [filteredQuests, setFilteredQuests] = useState(sampleQuests);
  const [selectedQuest, setSelectedQuest] = useState(null);
  const [activeTab, setActiveTab] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [showTagsDropdown, setShowTagsDropdown] = useState(false);

  // Available tabs (quest types + All)
  const tabs = ['All', ...questTypes.map((type) => type.name)];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    filterQuests(tab, searchTerm);
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterQuests(activeTab, term);
  };

  const filterQuests = (tab, term) => {
    let filtered = questList;

    // Filter by type
    if (tab !== 'All') {
      filtered = filtered.filter((quest) => quest.type === tab);
    }

    // Filter by search term
    if (term) {
      const lowercaseTerm = term.toLowerCase();
      filtered = filtered.filter((quest) =>
      quest.title.toLowerCase().includes(lowercaseTerm) ||
      quest.description.toLowerCase().includes(lowercaseTerm) ||
      quest.location.toLowerCase().includes(lowercaseTerm) ||
      quest.tags && quest.tags.some((tag) => tag.toLowerCase().includes(lowercaseTerm))
      );
    }

    // Filter by selected tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter((quest) =>
      quest.tags && selectedTags.every((tag) => quest.tags.includes(tag))
      );
    }

    setFilteredQuests(filtered);
  };

  const handleTagSelect = (tag) => {
    if (!selectedTags.includes(tag)) {
      const newTags = [...selectedTags, tag];
      setSelectedTags(newTags);
      filterQuests(activeTab, searchTerm);
    }
  };

  const handleTagRemove = (tag) => {
    const newTags = selectedTags.filter((t) => t !== tag);
    setSelectedTags(newTags);
    setTimeout(() => filterQuests(activeTab, searchTerm), 0);
  };

  const toggleTagsDropdown = () => {
    setShowTagsDropdown(!showTagsDropdown);
  };

  // Get all available tags for the current tab
  const getAvailableTags = () => {
    if (activeTab === 'All') {
      return questTypes.flatMap((type) => type.tags);
    } else {
      const currentType = questTypes.find((type) => type.name === activeTab);
      return currentType ? currentType.tags : [];
    }
  };

  const handleQuestClick = (quest) => {
    setSelectedQuest(quest);
  };

  const closeModal = () => {
    setSelectedQuest(null);
  };

  return (
    <div data-id="57dsezwtf" data-path="pages/TakeQuest.js">
      {/* Header */}
      <section className="bg-mint py-10" data-id="uyels695g" data-path="pages/TakeQuest.js">
        <div className="container mx-auto px-4" data-id="lb6gw7o4h" data-path="pages/TakeQuest.js">
          <h1 className="text-3xl md:text-4xl font-bold text-primary" data-id="olc1hx0f4" data-path="pages/TakeQuest.js">Take a Quest</h1>
          <p className="text-dark mt-2" data-id="0eybwkiuv" data-path="pages/TakeQuest.js">Browse available quests and help someone today.</p>
        </div>
      </section>
      
      <section className="py-12" data-id="vgmtw6ik9" data-path="pages/TakeQuest.js">
        <div className="container mx-auto px-4" data-id="hx97wz14v" data-path="pages/TakeQuest.js">
          {/* Search and Filter */}
          <div className="mb-8" data-id="u123az7mx" data-path="pages/TakeQuest.js">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6" data-id="0ohs50uiw" data-path="pages/TakeQuest.js">
              <Tabs
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={handleTabChange} data-id="kpmpymjoi" data-path="pages/TakeQuest.js" />

              
              <div className="w-full md:w-auto mt-4 md:mt-0" data-id="zjygflt99" data-path="pages/TakeQuest.js">
                <div className="relative" data-id="izfqs5l01" data-path="pages/TakeQuest.js">
                  <input
                    type="text"
                    placeholder="Search quests..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="form-control pr-10" data-id="zwq8q0uaa" data-path="pages/TakeQuest.js" />

                  <div className="absolute inset-y-0 right-0 flex items-center pr-3" data-id="44xayt18u" data-path="pages/TakeQuest.js">
                    <i className="fas fa-search text-gray-400" data-id="n4f3mjh8c" data-path="pages/TakeQuest.js"></i>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2" data-id="52uv0dgir" data-path="pages/TakeQuest.js">
              <span className="text-sm text-gray-600" data-id="3bnrtv3v3" data-path="pages/TakeQuest.js">
                <i className="fas fa-filter mr-1" data-id="71wabv1bz" data-path="pages/TakeQuest.js"></i> Filters:
              </span>
              
              <button className="text-sm bg-mint text-primary px-3 py-1 rounded-full flex items-center" data-id="qawo1mss2" data-path="pages/TakeQuest.js">
                Nearby <i className="fas fa-times-circle ml-1" data-id="wqww4m1r9" data-path="pages/TakeQuest.js"></i>
              </button>
              
              <button className="text-sm bg-mint text-primary px-3 py-1 rounded-full flex items-center" data-id="cy9tz6802" data-path="pages/TakeQuest.js">
                This Week <i className="fas fa-times-circle ml-1" data-id="59w9w29iz" data-path="pages/TakeQuest.js"></i>
              </button>
              
              {/* Selected Tags */}
              {selectedTags.map((tag, index) =>
              <div key={index} className="text-sm bg-primary text-white px-3 py-1 rounded-full flex items-center" data-id="qec041moz" data-path="pages/TakeQuest.js">
                  #{tag} <i className="fas fa-times-circle ml-1 cursor-pointer" onClick={() => handleTagRemove(tag)} data-id="97atvifzy" data-path="pages/TakeQuest.js"></i>
                </div>
              )}
              
              {/* Tags Dropdown */}
              <div className="relative" data-id="cbeantfaf" data-path="pages/TakeQuest.js">
                <button
                  className="text-sm border border-gray-300 text-gray-600 px-3 py-1 rounded-full flex items-center"
                  onClick={toggleTagsDropdown}
                  data-id="x1n0g076q"
                  data-path="pages/TakeQuest.js">

                  Add Tag <i className="fas fa-plus ml-1" data-id="hfvawxrdx" data-path="pages/TakeQuest.js"></i>
                </button>
                
                {showTagsDropdown &&
                <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20 max-h-60 overflow-y-auto" data-id="wd90gu2sv" data-path="pages/TakeQuest.js">
                    {getAvailableTags().
                  filter((tag) => !selectedTags.includes(tag)).
                  map((tag, index) =>
                  <button
                    key={index}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-mint hover:text-primary w-full text-left"
                    onClick={() => {
                      handleTagSelect(tag);
                      setShowTagsDropdown(false);
                    }} data-id="hkixxwntu" data-path="pages/TakeQuest.js">

                          #{tag}
                        </button>
                  )
                  }
                  </div>
                }
              </div>
              
              <button className="text-sm border border-gray-300 text-gray-600 px-3 py-1 rounded-full flex items-center" data-id="2fftbkqd9" data-path="pages/TakeQuest.js">
                More Filters <i className="fas fa-sliders-h ml-1" data-id="58ob1rc3i" data-path="pages/TakeQuest.js"></i>
              </button>
            </div>
          </div>
          
          {/* Quest Grid */}
          <div data-id="ynwwdwxuz" data-path="pages/TakeQuest.js">
            {filteredQuests.length > 0 ?
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-id="d9wyy6jdf" data-path="pages/TakeQuest.js">
                {filteredQuests.map((quest) =>
              <QuestCard
                key={quest.id}
                quest={quest}
                onClick={handleQuestClick} data-id="yy53bnrcj" data-path="pages/TakeQuest.js" />

              )}
              </div> :

            <div className="text-center py-12" data-id="1gnji0otc" data-path="pages/TakeQuest.js">
                <i className="fas fa-search text-4xl text-gray-300 mb-4" data-id="5haeqyjdb" data-path="pages/TakeQuest.js"></i>
                <h3 className="text-xl font-semibold text-gray-600 mb-2" data-id="f7ty1596s" data-path="pages/TakeQuest.js">No quests found</h3>
                <p className="text-gray-500" data-id="09sbkb6uf" data-path="pages/TakeQuest.js">
                  Try adjusting your filters or search terms to find what you're looking for.
                </p>
              </div>
            }
          </div>
        </div>
      </section>
      
      {/* How to Take Quests */}
      <section className="py-12 bg-mint" data-id="a8ydxw0te" data-path="pages/TakeQuest.js">
        <div className="container mx-auto px-4" data-id="sch55qqn1" data-path="pages/TakeQuest.js">
          <h2 className="section-title" data-id="xfem4yesq" data-path="pages/TakeQuest.js">How to Take Quests</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8" data-id="ju1u2woac" data-path="pages/TakeQuest.js">
            <div className="bg-white p-6 rounded-lg shadow-md text-center" data-id="844o30nrz" data-path="pages/TakeQuest.js">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4" data-id="y9zsmbz7c" data-path="pages/TakeQuest.js">
                <span className="text-light font-bold" data-id="5voisqi0h" data-path="pages/TakeQuest.js">1</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3" data-id="d93u5jmtf" data-path="pages/TakeQuest.js">Browse Quests</h3>
              <p className="text-gray-600" data-id="l8otqozj2" data-path="pages/TakeQuest.js">
                Find quests that match your skills and availability.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center" data-id="qygg1bsi9" data-path="pages/TakeQuest.js">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4" data-id="tfo2cc7e3" data-path="pages/TakeQuest.js">
                <span className="text-light font-bold" data-id="3kw9wl2o8" data-path="pages/TakeQuest.js">2</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3" data-id="73kn6a7kw" data-path="pages/TakeQuest.js">Apply</h3>
              <p className="text-gray-600" data-id="ikgf1d5kt" data-path="pages/TakeQuest.js">
                Send a message to the quest giver explaining why you're a good fit.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center" data-id="5z5em2h7f" data-path="pages/TakeQuest.js">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4" data-id="hp4c28u8m" data-path="pages/TakeQuest.js">
                <span className="text-light font-bold" data-id="ux8gr938f" data-path="pages/TakeQuest.js">3</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3" data-id="mv2ybqjij" data-path="pages/TakeQuest.js">Help Out</h3>
              <p className="text-gray-600" data-id="z3v0itp9m" data-path="pages/TakeQuest.js">
                Meet the quest giver and complete the requested task.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center" data-id="c5b7n2pao" data-path="pages/TakeQuest.js">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4" data-id="ngak4udcy" data-path="pages/TakeQuest.js">
                <span className="text-light font-bold" data-id="ydkadvplj" data-path="pages/TakeQuest.js">4</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3" data-id="pvhlrgyia" data-path="pages/TakeQuest.js">Get Rewarded</h3>
              <p className="text-gray-600" data-id="b4gzl9wh0" data-path="pages/TakeQuest.js">
                Receive your payment or reward and a positive review.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quest Detail Modal */}
      {selectedQuest &&
      <Modal onClose={closeModal} data-id="asyl3g19k" data-path="pages/TakeQuest.js">
          <div className="max-w-2xl" data-id="bqs99c9dg" data-path="pages/TakeQuest.js">
            <div className="flex justify-between items-center mb-4" data-id="5ui1c67aq" data-path="pages/TakeQuest.js">
              <div className="flex items-center" data-id="l21hfr6d7" data-path="pages/TakeQuest.js">
                <i className={`${getQuestTypeIcon(selectedQuest.type)} text-primary mr-2`} data-id="ubak23t39" data-path="pages/TakeQuest.js"></i>
                <span className="text-sm font-medium" data-id="1tv2qhux5" data-path="pages/TakeQuest.js">{selectedQuest.type}</span>
              </div>
              <span className="text-lg text-primary font-semibold" data-id="rxzdp1hqu" data-path="pages/TakeQuest.js">{selectedQuest.reward}</span>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4 text-dark" data-id="37hc6btpe" data-path="pages/TakeQuest.js">{selectedQuest.title}</h2>
            
            <p className="text-gray-600 mb-4" data-id="1hnvm1bwk" data-path="pages/TakeQuest.js">{selectedQuest.description}</p>
            
            {selectedQuest.tags && selectedQuest.tags.length > 0 &&
          <div className="flex flex-wrap gap-1 mb-4" data-id="y9iptrwtn" data-path="pages/TakeQuest.js">
                {selectedQuest.tags.map((tag, index) =>
            <span
              key={index}
              className="inline-block bg-mint text-primary text-xs px-2 py-1 rounded-full" data-id="6h6hn2bh3" data-path="pages/TakeQuest.js">

                    #{tag}
                  </span>
            )}
              </div>
          }
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6" data-id="lqgogcmwj" data-path="pages/TakeQuest.js">
              <div className="flex items-center text-gray-500" data-id="imkxto4o8" data-path="pages/TakeQuest.js">
                <i className="fas fa-map-marker-alt mr-2" data-id="94tjipsgb" data-path="pages/TakeQuest.js"></i>
                <span data-id="5trdsrgey" data-path="pages/TakeQuest.js">{selectedQuest.location}</span>
              </div>
              
              <div className="flex items-center text-gray-500" data-id="c9rbzbkdu" data-path="pages/TakeQuest.js">
                <i className="far fa-calendar-alt mr-2" data-id="i6q4134z7" data-path="pages/TakeQuest.js"></i>
                <span data-id="l85ofwjxn" data-path="pages/TakeQuest.js">{formatDate(selectedQuest.date)}</span>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4 mb-6" data-id="b3nr2apsn" data-path="pages/TakeQuest.js">
              <h3 className="text-lg font-semibold mb-2" data-id="l15k7qe3f" data-path="pages/TakeQuest.js">Posted by</h3>
              <div className="flex items-center" data-id="bs9jgt92n" data-path="pages/TakeQuest.js">
                <img
                src={selectedQuest.poster.image}
                alt={selectedQuest.poster.name}
                className="w-12 h-12 rounded-full mr-4 object-cover" data-id="ajx81yk8b" data-path="pages/TakeQuest.js" />

                <div data-id="ob2h94u8z" data-path="pages/TakeQuest.js">
                  <div className="font-medium" data-id="4boukklmg" data-path="pages/TakeQuest.js">{selectedQuest.poster.name}</div>
                  <div className="flex items-center" data-id="3220ehzep" data-path="pages/TakeQuest.js">
                    <i className="fas fa-star text-yellow-500 mr-1" data-id="nrionwspy" data-path="pages/TakeQuest.js"></i>
                    <span data-id="54yohi9bp" data-path="pages/TakeQuest.js">{selectedQuest.poster.rating}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6" data-id="z2bzvobyr" data-path="pages/TakeQuest.js">
              <h3 className="font-medium mb-2" data-id="imnnse9la" data-path="pages/TakeQuest.js">Send a message to apply for this quest</h3>
              <textarea
              className="form-control mb-3"
              rows="3"
              placeholder="Introduce yourself and explain why you're a good fit for this quest..." data-id="5pp1xs5wg" data-path="pages/TakeQuest.js">
            </textarea>
              <button className="btn btn-primary" data-id="fk5yk85kn" data-path="pages/TakeQuest.js">
                Send Application
              </button>
            </div>
          </div>
        </Modal>
      }
    </div>);

}
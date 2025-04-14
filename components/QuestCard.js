// QuestCard Component
function QuestCard({ quest, onClick }) {
  const typeIcon = getQuestTypeIcon(quest.type);

  return (
    <div className="quest-card card hover:cursor-pointer" onClick={() => onClick(quest)} data-id="h3vlzfmui" data-path="components/QuestCard.js">
      <div className="quest-card-header flex justify-between items-center" data-id="3sy45ou2i" data-path="components/QuestCard.js">
        <div className="flex items-center" data-id="lpapu83iw" data-path="components/QuestCard.js">
          <i className={`${typeIcon} text-primary mr-2`} data-id="u4b6fot4e" data-path="components/QuestCard.js"></i>
          <span className="text-sm font-medium" data-id="wxzbwupsn" data-path="components/QuestCard.js">{quest.type}</span>
        </div>
        <span className="text-sm text-primary font-semibold" data-id="0ygb7g49l" data-path="components/QuestCard.js">{quest.reward}</span>
      </div>
      
      <div className="quest-card-body" data-id="nv1lqs3mv" data-path="components/QuestCard.js">
        <h3 className="text-lg font-semibold mb-2 text-dark" data-id="5pbo8fwot" data-path="components/QuestCard.js">{quest.title}</h3>
        <p className="text-gray-600 mb-2" data-id="sz4kfhc6b" data-path="components/QuestCard.js">{truncateText(quest.description, 100)}</p>
        
        {quest.tags && quest.tags.length > 0 &&
        <div className="flex flex-wrap gap-1 mb-3" data-id="0fww8ts9q" data-path="components/QuestCard.js">
            {quest.tags.map((tag, index) =>
          <span
            key={index}
            className="inline-block bg-mint text-primary text-xs px-2 py-1 rounded-full" data-id="ctxh2syfz" data-path="components/QuestCard.js">

                #{tag}
              </span>
          )}
          </div>
        }
        
        <div className="flex items-center text-sm text-gray-500 mb-2" data-id="sfwc3giew" data-path="components/QuestCard.js">
          <i className="fas fa-map-marker-alt mr-2" data-id="oysxy6alk" data-path="components/QuestCard.js"></i>
          <span data-id="y7q5r8fd6" data-path="components/QuestCard.js">{quest.location}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-500" data-id="38l837psh" data-path="components/QuestCard.js">
          <i className="far fa-calendar-alt mr-2" data-id="ckaqvvegw" data-path="components/QuestCard.js"></i>
          <span data-id="vnde6tlhy" data-path="components/QuestCard.js">{formatDate(quest.date)}</span>
        </div>
      </div>
      
      <div className="quest-card-footer flex items-center" data-id="ef547vovh" data-path="components/QuestCard.js">
        <img
          src={quest.poster.image}
          alt={quest.poster.name}
          className="w-8 h-8 rounded-full mr-2 object-cover" data-id="sdi00lnxj" data-path="components/QuestCard.js" />

        <div data-id="4b1bfzc4s" data-path="components/QuestCard.js">
          <div className="text-sm font-medium" data-id="13pgu29tz" data-path="components/QuestCard.js">{quest.poster.name}</div>
          <div className="flex items-center" data-id="anqoe0z9t" data-path="components/QuestCard.js">
            <i className="fas fa-star text-yellow-500 mr-1 text-xs" data-id="xh4lanc52" data-path="components/QuestCard.js"></i>
            <span className="text-xs" data-id="v3vu9esp6" data-path="components/QuestCard.js">{quest.poster.rating}</span>
          </div>
        </div>
      </div>
    </div>);

}
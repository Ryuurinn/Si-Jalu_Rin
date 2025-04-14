// QuestTypes Component
function QuestTypes() {
  return (
    <section className="bg-mint py-16" data-id="5b9c0te0d" data-path="components/QuestTypes.js">
      <div className="container mx-auto px-4" data-id="b2ec6dma8" data-path="components/QuestTypes.js">
        <h2 className="section-title" data-id="4b9fn5equ" data-path="components/QuestTypes.js">Quest Types</h2>
        <p className="text-center text-dark mb-12 max-w-2xl mx-auto" data-id="5ka21phzd" data-path="components/QuestTypes.js">
          Whether you need help with transportation, housework, education, or hobbies, 
          Si Jalu has a quest category for you.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-id="8a7bam9xv" data-path="components/QuestTypes.js">
          {questTypes.map((type) =>
          <div key={type.id} className="quest-type-card" data-id="8kcp5jra2" data-path="components/QuestTypes.js">
              <div className="quest-type-icon" data-id="dygxjydot" data-path="components/QuestTypes.js">
                <i className={type.icon} data-id="fub59vswk" data-path="components/QuestTypes.js"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2" data-id="a90j2j87q" data-path="components/QuestTypes.js">{type.name}</h3>
              <p className="text-dark" data-id="i5s4lfuzp" data-path="components/QuestTypes.js">{type.description}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}
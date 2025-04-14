// Tabs Component
function Tabs({ tabs, activeTab, onTabChange }) {
  return (
    <div className="tabs" data-id="dza6hjnf2" data-path="components/Tabs.js">
      {tabs.map((tab, index) =>
      <div
        key={index}
        className={`tab ${activeTab === tab ? 'active' : ''}`}
        onClick={() => onTabChange(tab)} data-id="hibce5bjt" data-path="components/Tabs.js">

          {tab}
        </div>
      )}
    </div>);

}
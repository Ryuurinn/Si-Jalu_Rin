// Helper functions for Si Jalu

// Format date to readable format
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

// Filter quests by type
function filterQuestsByType(quests, type) {
  if (!type || type === 'All') return quests;
  return quests.filter((quest) => quest.type === type);
}

// Search quests by keyword in title or description
function searchQuests(quests, keyword) {
  if (!keyword) return quests;

  const lowercaseKeyword = keyword.toLowerCase();
  return quests.filter((quest) =>
  quest.title.toLowerCase().includes(lowercaseKeyword) ||
  quest.description.toLowerCase().includes(lowercaseKeyword)
  );
}

// Generate a unique ID for new quests
function generateId() {
  return Math.floor(Math.random() * 10000) + 1;
}

// Validate quest form data
function validateQuestForm(formData) {
  const errors = {};

  if (!formData.title.trim()) {
    errors.title = 'Title is required';
  }

  if (!formData.type) {
    errors.type = 'Quest type is required';
  }

  if (!formData.description.trim()) {
    errors.description = 'Description is required';
  }

  if (!formData.location.trim()) {
    errors.location = 'Location is required';
  }

  if (!formData.date) {
    errors.date = 'Date is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

// Get quest type icon by name
function getQuestTypeIcon(typeName) {
  const type = questTypes.find((t) => t.name === typeName);
  return type ? type.icon : 'fa-solid fa-question';
}

// Truncate text to specified length
function truncateText(text, maxLength = 100) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}
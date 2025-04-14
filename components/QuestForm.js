// QuestForm Component
function QuestForm({ onSubmit }) {
  const { useState } = React;

  const [formData, setFormData] = useState({
    title: '',
    type: '',
    description: '',
    location: '',
    reward: '',
    date: '',
    tags: []
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validateQuestForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      // Get tags based on quest type
      const questType = questTypes.find((type) => type.name === formData.type);
      const tags = formData.tags.length > 0 ? formData.tags :
      questType ? questType.tags.slice(0, 3) : [];

      const newQuest = {
        ...formData,
        tags,
        id: generateId(),
        status: 'open',
        poster: {
          name: 'Current User',
          rating: 4.7,
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
        }
      };

      onSubmit(newQuest);

      // Reset form
      setFormData({
        title: '',
        type: '',
        description: '',
        location: '',
        reward: '',
        date: '',
        tags: []
      });

      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6" data-id="dr9ptc3nb" data-path="components/QuestForm.js">
      <h2 className="text-2xl font-semibold text-primary mb-6" data-id="kmc1izqbn" data-path="components/QuestForm.js">Post a New Quest</h2>
      
      <div className="form-group" data-id="85eynh7ii" data-path="components/QuestForm.js">
        <label htmlFor="title" className="block mb-2 font-medium" data-id="rr2s2cwel" data-path="components/QuestForm.js">
          Quest Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className={`form-control ${errors.title ? 'border-red-500' : ''}`}
          placeholder="Enter a clear title for your quest" data-id="as0iwqodh" data-path="components/QuestForm.js" />

        {errors.title &&
        <p className="text-red-500 text-sm mt-1" data-id="5yhpnncxw" data-path="components/QuestForm.js">{errors.title}</p>
        }
      </div>
      
      <div className="form-group" data-id="h82d6u6j2" data-path="components/QuestForm.js">
        <label htmlFor="type" className="block mb-2 font-medium" data-id="v0kyult3z" data-path="components/QuestForm.js">
          Quest Type
        </label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          className={`form-control ${errors.type ? 'border-red-500' : ''}`} data-id="20lan2kbn" data-path="components/QuestForm.js">

          <option value="" data-id="u67vrdklf" data-path="components/QuestForm.js">Select a Quest Type</option>
          {questTypes.map((type) =>
          <option key={type.id} value={type.name} data-id="b6qvmh8jw" data-path="components/QuestForm.js">
              {type.name}
            </option>
          )}
        </select>
        {errors.type &&
        <p className="text-red-500 text-sm mt-1" data-id="pdw9ax729" data-path="components/QuestForm.js">{errors.type}</p>
        }
      </div>
      
      <div className="form-group" data-id="8bdjk1n0s" data-path="components/QuestForm.js">
        <label htmlFor="description" className="block mb-2 font-medium" data-id="60sbm1x7n" data-path="components/QuestForm.js">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          className={`form-control ${errors.description ? 'border-red-500' : ''}`}
          placeholder="Provide details about your quest" data-id="88q1d24ua" data-path="components/QuestForm.js">
        </textarea>
        {errors.description &&
        <p className="text-red-500 text-sm mt-1" data-id="dnxbcljct" data-path="components/QuestForm.js">{errors.description}</p>
        }
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-id="x4lqstsag" data-path="components/QuestForm.js">
        <div className="form-group" data-id="66cvcon57" data-path="components/QuestForm.js">
          <label htmlFor="location" className="block mb-2 font-medium" data-id="lb9n07gr7" data-path="components/QuestForm.js">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className={`form-control ${errors.location ? 'border-red-500' : ''}`}
            placeholder="Where will this quest take place?" data-id="0vorgpxn3" data-path="components/QuestForm.js" />

          {errors.location &&
          <p className="text-red-500 text-sm mt-1" data-id="prxjm47me" data-path="components/QuestForm.js">{errors.location}</p>
          }
        </div>
        
        <div className="form-group" data-id="jhgqlipak" data-path="components/QuestForm.js">
          <label htmlFor="reward" className="block mb-2 font-medium" data-id="ln47dvgxh" data-path="components/QuestForm.js">
            Reward
          </label>
          <input
            type="text"
            id="reward"
            name="reward"
            value={formData.reward}
            onChange={handleChange}
            className="form-control"
            placeholder="What will you offer in return?" data-id="02amrq27e" data-path="components/QuestForm.js" />

        </div>
      </div>
      
      <div className="form-group" data-id="3mccmjp9l" data-path="components/QuestForm.js">
        <label htmlFor="date" className="block mb-2 font-medium" data-id="k6x4h6ivb" data-path="components/QuestForm.js">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className={`form-control ${errors.date ? 'border-red-500' : ''}`} data-id="gkhma7kty" data-path="components/QuestForm.js" />

        {errors.date &&
        <p className="text-red-500 text-sm mt-1" data-id="wn3gvwc4y" data-path="components/QuestForm.js">{errors.date}</p>
        }
      </div>
      
      {formData.type &&
      <div className="form-group" data-id="3n710u7o8" data-path="components/QuestForm.js">
          <label className="block mb-2 font-medium" data-id="wc9a5qisr" data-path="components/QuestForm.js">Quest Tags</label>
          <div className="mb-2 text-sm text-gray-600" data-id="cw6d8bzun" data-path="components/QuestForm.js">
            Select tags to help people find your quest. Tags are automatically suggested based on your quest type.
          </div>
          
          <div className="flex flex-wrap gap-2 mb-3" data-id="15wjztgrh" data-path="components/QuestForm.js">
            {questTypes.find((t) => t.name === formData.type)?.tags.map((tag, index) => {
            const isSelected = formData.tags.includes(tag);
            return (
              <button
                key={index}
                type="button"
                className={`text-sm px-3 py-1 rounded-full transition-colors ${isSelected ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-mint hover:text-primary'}`}
                onClick={() => {
                  if (isSelected) {
                    setFormData((prev) => ({
                      ...prev,
                      tags: prev.tags.filter((t) => t !== tag)
                    }));
                  } else {
                    setFormData((prev) => ({
                      ...prev,
                      tags: [...prev.tags, tag]
                    }));
                  }
                }} data-id="msaug2y89" data-path="components/QuestForm.js">

                  #{tag} {isSelected && <i className="fas fa-check ml-1" data-id="tcx00r17a" data-path="components/QuestForm.js"></i>}
                </button>);

          })}
          </div>
          
          <div className="text-xs text-gray-500" data-id="onfd5eg1v" data-path="components/QuestForm.js">
            <i className="fas fa-info-circle mr-1" data-id="zthbz0iw8" data-path="components/QuestForm.js"></i>
            Selected tags: {formData.tags.length > 0 ? formData.tags.map((t) => `#${t}`).join(', ') : 'None - we\'ll suggest some based on your quest type'}
          </div>
        </div>
      }
      
      <button
        type="submit"
        className="btn btn-primary w-full mt-4"
        disabled={isSubmitting} data-id="x6cp40ln2" data-path="components/QuestForm.js">

        {isSubmitting ?
        <span data-id="0nyzn9fv1" data-path="components/QuestForm.js">
            <i className="fas fa-spinner fa-spin mr-2" data-id="9tt6b3azv" data-path="components/QuestForm.js"></i> 
            Posting Quest...
          </span> :
        'Post Quest'}
      </button>
    </form>);

}
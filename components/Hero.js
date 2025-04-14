// Hero Component
function Hero() {
  const Link = window.CustomLink;
  const navigate = window.navigate;

  return (
    <section className="hero" data-id="xphol86gb" data-path="components/Hero.js">
      <div className="container mx-auto px-4 py-16 md:py-24" data-id="t8q1qxq0z" data-path="components/Hero.js">
        <div className="flex flex-col md:flex-row items-center" data-id="pcew0luko" data-path="components/Hero.js">
          <div className="md:w-1/2 mb-8 md:mb-0" data-id="rhoes95ss" data-path="components/Hero.js">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4" data-id="fuqq2r664" data-path="components/Hero.js">
              Connect, Help, Reward
            </h1>
            <p className="text-xl text-dark mb-6" data-id="n7o0c3bsv" data-path="components/Hero.js">
              Si Jalu connects people who need assistance with those who can help. 
              Give quests when you need help, take quests to earn rewards.
            </p>
            <div className="flex flex-wrap gap-4" data-id="e8dmw9yp7" data-path="components/Hero.js">
              <Link to="/give-quest" className="btn btn-primary" data-id="mpnlv7jr4" data-path="components/Hero.js">
                Give a Quest
              </Link>
              <Link to="/take-quest" className="btn btn-secondary" data-id="7ieb1bca0" data-path="components/Hero.js">
                Take a Quest
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center" data-id="5pcv4glg3" data-path="components/Hero.js">
            <img
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="People helping each other"
              className="rounded-lg shadow-lg w-full max-w-md" data-id="aduvqsn8j" data-path="components/Hero.js" />

          </div>
        </div>
      </div>
    </section>);

}
// ImageGallery Component
function ImageGallery() {
  const { useState } = React;

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-16 bg-light" data-id="obtveraah" data-path="components/ImageGallery.js">
      <div className="container mx-auto px-4" data-id="i9mrk8b3t" data-path="components/ImageGallery.js">
        <h2 className="section-title" data-id="tzfx1o8cf" data-path="components/ImageGallery.js">Success Stories</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto" data-id="8itxdvmdo" data-path="components/ImageGallery.js">
          Take a look at some amazing moments shared by our community of quest givers and takers.
        </p>
        
        <div className="gallery-grid" data-id="782rxlegi" data-path="components/ImageGallery.js">
          {galleryImages.map((image) =>
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => openModal(image)} data-id="2i6jg07kt" data-path="components/ImageGallery.js">

              <img
              src={image.url}
              alt={image.title}
              className="w-full h-60 object-cover rounded-lg" data-id="p1vxts069" data-path="components/ImageGallery.js" />

            </div>
          )}
        </div>
        
        {selectedImage &&
        <Modal onClose={closeModal} data-id="jyh8nniuc" data-path="components/ImageGallery.js">
            <div className="flex flex-col md:flex-row md:items-start gap-6 max-w-4xl" data-id="aoyhzthjo" data-path="components/ImageGallery.js">
              <div className="md:w-2/3" data-id="03720tdof" data-path="components/ImageGallery.js">
                <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full rounded-lg" data-id="undvrlqjb" data-path="components/ImageGallery.js" />

              </div>
              <div className="md:w-1/3" data-id="lhgwuqsx8" data-path="components/ImageGallery.js">
                <h3 className="text-xl font-semibold text-primary mb-3" data-id="7n4k94z6j" data-path="components/ImageGallery.js">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600 mb-4" data-id="uu560qfod" data-path="components/ImageGallery.js">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </Modal>
        }
      </div>
    </section>);

}
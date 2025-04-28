import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import Gallery from './Gallery';

interface Activity {
  title: string;
  description: string;
  image: string;
  link?: string;
  galleryImages?: string[];
  longDescription?: string;
}

const volunteering: Activity[] = [
  {
    title: 'Volunteering in Cambodia',
    description: 'Teaching English and computer skills to local students in rural areas of Cambodia, focusing on digital literacy and educational development.',
    image: '/assets/images/beyond/volunteering/volunteering-placeholder.jpg',
    link: 'https://example.com/cambodia-volunteering',
    galleryImages: [
      '/assets/images/beyond/volunteering/gallery1-placeholder.jpg',
      '/assets/images/beyond/volunteering/gallery2-placeholder.jpg',
      '/assets/images/beyond/volunteering/gallery3-placeholder.jpg',
      '/assets/images/beyond/volunteering/gallery4-placeholder.jpg',
      '/assets/images/beyond/volunteering/gallery5-placeholder.jpg',
      '/assets/images/beyond/volunteering/gallery6-placeholder.jpg',
      '/assets/images/beyond/volunteering/gallery7-placeholder.jpg',
      '/assets/images/beyond/volunteering/gallery8-placeholder.jpg',
      '/assets/images/beyond/volunteering/gallery9-placeholder.jpg'
    ],
    longDescription: 'During my time in Cambodia, I had the privilege of working with a local community as a teacher. I taught English to a class of 50 children aged 5 to 13, as well as basic computer skills to the school staff. It was an incredibly rewarding experience, not only seeing the children\'s engagement in the classroom but also gaining a deeper understanding of Cambodian culture and the education system. As a side project, I decided to paint the school walls with the children after classes, which turned out to be a wonderful and creative way to connect with them.'
  },
  {
    title: 'Cookbook',
    description: 'My passion project. I\'m the author of a cookbook I published in January 2025, filled with personal recipes that reflect my love for cooking and creativity.',
    image: '/assets/images/beyond/cookbook/cookbook-placeholder.jpg',
    link: 'https://example.com/cookbook',
    galleryImages: [
      '/assets/images/beyond/cookbook/gallery1-placeholder.JPG',
      '/assets/images/beyond/cookbook/gallery2-placeholder.jpg',
      '/assets/images/beyond/cookbook/gallery3-placeholder.jpg',
      '/assets/images/beyond/cookbook/gallery4-placeholder.png',
      '/assets/images/beyond/cookbook/gallery5-placeholder.jpg',
      '/assets/images/beyond/cookbook/gallery6-placeholder.png',
      '/assets/images/beyond/cookbook/gallery7-placeholder.png',
      '/assets/images/beyond/cookbook/gallery8-placeholder.JPG',
      '/assets/images/beyond/cookbook/gallery9-placeholder.png'
    ],
    longDescription: 'This cookbook is divided into seven sections: basic savory recipes, small dishes and soups, main dishes, basic sweet recipes, sweet dishes, desserts, and cakes. The basic recipes can be easily combined with others—for example, serving soup with homemade bread or adding quick spreads and toppings to enhance the flavor. These small extras bring more depth and texture to meals, creating the feeling of a dish made with care and love.\n\nThe cover features a lemon, an ingredient I adore for its sour, fresh taste, which appears throughout the book. Lemons symbolize how simple ingredients can elevate a dish with unexpected depth.\n\nThis cookbook includes 80 recipes, all of which I have carefully selected and designed to inspire easy, flavorful meals. I illustrated the book, did the typesetting in InDesign, and personally published it. Each recipe reflects my love for cooking and my desire to make food feel personal and approachable, yet special.'
  }
];

const hobbies: Activity[] = [
  {
    title: 'Travel & Photography',
    description: '',
    image: '/assets/images/beyond/travel/travel-placeholder.jpg',
    galleryImages: [
      '/assets/images/beyond/travel/gallery1-placeholder.png',
      '/assets/images/beyond/travel/gallery2-placeholder.png',
      '/assets/images/beyond/travel/gallery3-placeholder.png',
      '/assets/images/beyond/travel/gallery4-placeholder.jpg',
      '/assets/images/beyond/travel/gallery5-placeholder.png',
      '/assets/images/beyond/travel/gallery6-placeholder.png',
      '/assets/images/beyond/travel/gallery7-placeholder.png',
      '/assets/images/beyond/travel/gallery8-placeholder.png',
      '/assets/images/beyond/travel/gallery9-placeholder.png'
    ],
    longDescription: 'My travels have been a journey of self-discovery and growth. From walking the Camino de Santiago to learning to dive, each experience has taught me valuable lessons about perseverance, resilience, and embracing new challenges. I\'ve gained a greater appreciation for the nature around us, whether night swimming with bioluminescent plankton, camping in the desert in Morocco, or hiking through Kyrgyzstan\'s mountains. Travel has deepened my understanding of different cultures and perspectives, especially during my time living with a family in Cambodia. I also love capturing these moments through photography, as a way to remind myself of the beauty in the world.'
  },
  {
    title: 'Creativity',
    description: '',
    image: '/assets/images/beyond/creativity/creativity-placeholder.png',
    galleryImages: [
      '/assets/images/beyond/creativity/gallery1-placeholder.png',
      '/assets/images/beyond/creativity/gallery2-placeholder.png',
      '/assets/images/beyond/creativity/gallery3-placeholder.jpg',
      '/assets/images/beyond/creativity/gallery4-placeholder.png',
      '/assets/images/beyond/creativity/gallery5-placeholder.png',
      '/assets/images/beyond/creativity/gallery6-placeholder.png',
      '/assets/images/beyond/creativity/gallery7-placeholder.JPG',
      '/assets/images/beyond/creativity/gallery8-placeholder.png',
      '/assets/images/beyond/creativity/gallery9-placeholder.PNG'
    ],
    longDescription: 'I\'ve always believed in taking my hobbies to the next level, finding purpose and meaning in everything I do. My journey into pottery began with the quest for the perfect coffee mug. When I couldn\'t find one, I decided to learn how to throw on a wheel, trim, glaze, and perfect the design, eventually creating over 60 of my own mugs. Yoga, which started as a personal practice, inspired me to become a certified instructor through Yoga Alliance (200-hour certification).\n\nMy love for baking eventually led me to write a cookbook and also to the joy of creating cakes for special occasions like birthdays and weddings. Recently, I\'ve delved into watercolors, blending this new passion with my other ones. I enjoy painting small sketches during my travels, and I got to illustrate my cookbook as well. These creative outlets are more than just hobbies for me, they\'re a way to express myself and continually grow.'
  }
];

const ActivityCard: React.FC<{ activity: Activity }> = ({ activity }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg overflow-hidden shadow-soft group hover:shadow-lg transition-shadow duration-300">
        <div className="h-48 overflow-hidden">
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <h4 className="text-xl font-semibold text-text mb-2">{activity.title}</h4>
          <p className="text-text/70 mb-4">{activity.description}</p>
          <button
            onClick={() => setIsGalleryOpen(true)}
            className="inline-flex items-center text-accent hover:text-accent-dark transition-colors duration-300"
          >
            <Heart size={16} className="mr-2" />
            <span>Learn More</span>
          </button>
        </div>
      </div>

      {activity.galleryImages && (
        <Gallery
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          images={activity.galleryImages}
          description={activity.longDescription || activity.description}
          title={activity.title}
        />
      )}
    </>
  );
};

const BeyondSection: React.FC = () => {
  return (
    <section id="beyond" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-text mb-2">Beyond Work</h2>
        <div className="w-20 h-1 bg-accent mb-10"></div>
        
        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-semibold text-text/90 mb-8">Volunteering & Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {volunteering.map((activity, index) => (
                <ActivityCard key={index} activity={activity} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-text/90 mb-8">Hobbies & Interests</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {hobbies.map((activity, index) => (
                <ActivityCard key={index} activity={activity} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondSection;
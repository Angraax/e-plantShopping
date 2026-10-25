const makePlant = (id, name, category, description, cost, image) => ({
  id,
  name,
  category,
  description,
  cost,
  price: cost,
  image,
});

const images = {
  monstera: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80',
  snake: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b30?auto=format&fit=crop&w=800&q=80',
  fiddle: 'https://images.unsplash.com/photo-1597055181300-a9bde6b4eaf3?auto=format&fit=crop&w=800&q=80',
  pilea: 'https://images.unsplash.com/photo-1632207691143-643e2f8c2d2b?auto=format&fit=crop&w=800&q=80',
  calathea: 'https://images.unsplash.com/photo-1616690241631-4c85c8c5d6d4?auto=format&fit=crop&w=800&q=80',
  pearls: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=800&q=80',
};

export const plantsArray = [
  {
    category: 'Statement Plants',
    plants: [
      makePlant('monstera', 'Monstera Deliciosa', 'Statement Plants', 'A tropical favorite with iconic split leaves and easy-going energy.', 32, images.monstera),
      makePlant('fiddle-leaf', 'Fiddle Leaf Fig', 'Statement Plants', 'Large, glossy violin-shaped leaves bring a little drama home.', 48, images.fiddle),
      makePlant('bird-of-paradise', 'Bird of Paradise', 'Statement Plants', 'Bold tropical foliage that turns an empty corner into a focal point.', 55, images.monstera),
      makePlant('rubber-tree', 'Rubber Tree', 'Statement Plants', 'Deep green leaves and an upright shape for a polished look.', 42, images.fiddle),
      makePlant('areca-palm', 'Areca Palm', 'Statement Plants', 'A feathery palm that gives your room an instant holiday feeling.', 39, images.monstera),
      makePlant('olive-tree', 'Indoor Olive Tree', 'Statement Plants', 'Silvery leaves and Mediterranean character for bright spaces.', 61, images.fiddle),
    ],
  },
  {
    category: 'Low-light Lovers',
    plants: [
      makePlant('snake-plant', 'Snake Plant', 'Low-light Lovers', 'Sculptural, resilient, and happy to thrive with very little fuss.', 24, images.snake),
      makePlant('zz-plant', 'ZZ Plant', 'Low-light Lovers', 'Glossy leaves and exceptional resilience for cozy corners.', 27, images.pilea),
      makePlant('cast-iron', 'Cast Iron Plant', 'Low-light Lovers', 'A dependable leafy companion for spaces without much sunshine.', 31, images.snake),
      makePlant('peace-lily', 'Peace Lily', 'Low-light Lovers', 'Elegant green leaves and delicate blooms for calm interiors.', 29, images.pilea),
      makePlant('parlor-palm', 'Parlor Palm', 'Low-light Lovers', 'A graceful compact palm that brings softness to indirect light.', 34, images.snake),
      makePlant('chinese-evergreen', 'Chinese Evergreen', 'Low-light Lovers', 'Patterned foliage that stays beautiful in forgiving conditions.', 26, images.pilea),
    ],
  },
  {
    category: 'Easy Care',
    plants: [
      makePlant('pilea', 'Chinese Money Plant', 'Easy Care', 'Cheerful round leaves that add a playful touch to any shelf.', 18, images.pilea),
      makePlant('string-of-pearls', 'String of Pearls', 'Easy Care', 'A trailing succulent with tiny bead-like leaves and lots of charm.', 22, images.pearls),
      makePlant('jade', 'Jade Plant', 'Easy Care', 'A long-lived succulent with plump leaves and a friendly shape.', 21, images.pearls),
      makePlant('haworthia', 'Haworthia', 'Easy Care', 'A small striped succulent made for sunny desks and windowsills.', 16, images.pilea),
      makePlant('aloe', 'Aloe Vera', 'Easy Care', 'A useful, architectural succulent that loves a bright window.', 20, images.pearls),
      makePlant('ponytail-palm', 'Ponytail Palm', 'Easy Care', 'A whimsical sculptural plant that stores water in its trunk.', 35, images.pilea),
    ],
  },
];

export const plants = plantsArray.flatMap((section) => section.plants);

/*
 * The flat list remains exported for the landing page and backwards-compatible
 * consumers, while plantsArray provides the category sections for the shop.
 */
export const legacyPlants = [
  {
    id: 'monstera',
    name: 'Monstera Deliciosa',
    category: 'Statement Plants',
    description: 'A tropical favorite with iconic split leaves and easy-going energy.',
    price: 32,
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'snake-plant',
    name: 'Snake Plant',
    category: 'Low-light Lovers',
    description: 'Sculptural, resilient, and happy to thrive with very little fuss.',
    price: 24,
    image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b30?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'fiddle-leaf',
    name: 'Fiddle Leaf Fig',
    category: 'Statement Plants',
    description: 'Bring a little drama home with large, glossy violin-shaped leaves.',
    price: 48,
    image: 'https://images.unsplash.com/photo-1597055181300-a9bde6b4eaf3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pilea',
    name: 'Chinese Money Plant',
    category: 'Easy Care',
    description: 'Cheerful round leaves that add a playful touch to any shelf.',
    price: 18,
    image: 'https://images.unsplash.com/photo-1632207691143-643e2f8c2d2b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'calathea',
    name: 'Calathea Orbifolia',
    category: 'Tropical Texture',
    description: 'Silvery striped foliage that makes every morning feel special.',
    price: 36,
    image: 'https://images.unsplash.com/photo-1616690241631-4c85c8c5d6d4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'string-of-pearls',
    name: 'String of Pearls',
    category: 'Easy Care',
    description: 'A trailing succulent with tiny bead-like leaves and lots of charm.',
    price: 22,
    image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=800&q=80',
  },
];

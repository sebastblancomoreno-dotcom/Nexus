TRUNCATE TABLE t_products RESTART IDENTITY;

INSERT INTO t_products (name, brand, description, price, image_url, demo_url, stock, category) VALUES 
('Minilogue XD', 'Korg', '4-voice analog polyphonic synthesizer with digital multi-engine', 649.00, 'https://media.sweetwater.com/api/i/q-82__ha-178f24b55c1ce9b9__ar-16x9__denyremote-false__bgalpha-100__q-85__alt-false__format-webp/images/items/750/MinilogueXD-large.jpg', 'https://soundcloud.com/korg/minilogue-xd-demo', 10, 'SYNTHESIZER');

INSERT INTO t_products (name, brand, description, price, image_url, demo_url, stock, category) VALUES 
('Matriarch', 'Moog', 'Paraphonic semi-modular analog synthesizer with stereo delay', 1999.00, 'https://media.sweetwater.com/api/i/q-82__ha-c92c906a5b6d70fb__ar-16x9__denyremote-false__bgalpha-100__q-85__alt-false__format-webp/images/items/750/Matriarch-large.jpg', 'https://youtube.com/embed/xyz123', 5, 'SYNTHESIZER');

TRUNCATE TABLE t_products RESTART IDENTITY CASCADE;

INSERT INTO t_products (name, brand, description, price, image_url, demo_url, stock, category) VALUES 
('Minilogue XD', 'Korg', '4-voice analog polyphonic synthesizer with digital multi-engine', 649.00, 'https://www.sweetwater.com/images/items/750/MinilogueXD-large.jpg', 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/korg/sets/minilogue-xd-demo-sounds&color=%23000000', 10, 'SYNTHESIZER'),
('Matriarch', 'Moog', 'Paraphonic semi-modular analog synthesizer with stereo delay', 1999.00, 'https://www.sweetwater.com/images/items/750/Matriarch-large.jpg', 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/moogaudio/sets/moog-matriarch&color=%23000000', 5, 'SYNTHESIZER'),
('Prophet-6', 'Sequential', '6-voice polyphonic analog synthesizer with studio-quality effects', 3499.00, 'https://www.sweetwater.com/images/items/750/Prophet6-large.jpg', 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/sequential_llc/sets/sequential-prophet-6-audio&color=%23000000', 8, 'SYNTHESIZER'),
('OB-6', 'Sequential', '6-voice polyphonic analog synthesizer with SEM-inspired filters', 3499.00, 'https://www.sweetwater.com/images/items/750/OB6-large.jpg', 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/ricky-antolini/sets/ob-6-patches&color=%23000000', 7, 'SYNTHESIZER'),
('Subsequent 37', 'Moog', '2-note paraphonic analog synthesizer with enhanced ladder filter', 1899.00, 'https://www.sweetwater.com/images/items/750/Sub37-large.jpg', 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/moogmusicinc/sets/subsequent-37&color=%23000000', 12, 'SYNTHESIZER'),
('TR-8S', 'Roland', 'Rhythm Performer with ACB and sample support', 749.00, 'https://www.sweetwater.com/images/items/750/TR8S-large.jpg', 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/rolandcom/sets/tr-8s-rhythm-performer-demo&color=%23000000', 15, 'DRUM_MACHINE');

INSERT INTO t_product_images (product_id, image_url) VALUES 
-- 1. Korg Minilogue XD
(1, '/assets/products/minilogue-xd/b68e33ce60366c49b6ed211f9e3410c5_pc.png'), 
(1, '/assets/products/minilogue-xd/baecaf881b2d5620a22801ccdd1df297.png'), 
(1, '/assets/products/minilogue-xd/c184d7caaebd0f5ee54d1df80b2749b0_pc.png'),
-- 2. Moog Matriarch
(2, '/assets/products/matriarch/moog-matriarch-dark-1024x640.jpg'), 
(2, '/assets/products/matriarch/moog-matriarch-dark-synth-1024x640.jpg'), 
(2, '/assets/products/matriarch/moog-matriarch-dark-synthesizer-1024x640.jpg'),
-- 3. Sequential Prophet-6
(3, '/assets/products/prophet-6/sequential-prophet-6.webp'), 
(3, '/assets/products/prophet-6/sequential-prophet-6 (1).webp'), 
(3, '/assets/products/prophet-6/sequential-prophet-6 (2).webp'),
-- 4. Sequential OB-6
(4, '/assets/products/ob-6/Dave-Smith-OB-6-Analogue-Synthesiser-510x510.jpg'), 
(4, '/assets/products/ob-6/Dave-Smith-OB-6-Analogue-Synthesiser-front-view-510x510.jpg'),
(4, '/assets/products/ob-6/Dave-Smith-OB-6-Analogue-Synthesiser-rear-view-510x510.jpg'),
-- 5. Moog Subsequent 37
(5, '/assets/products/subsequent-37/main_eea42393.jpg'), 
(5, '/assets/products/subsequent-37/main_fc427a4a.webp'),
(5, '/assets/products/subsequent-37/thumb_d_gallery_base_580ed2b0.webp'),
-- 6. Roland TR-8S
(6, '/assets/products/tr-8s/gallery02.jpg'), 
(6, '/assets/products/tr-8s/gallery03.jpg'),
(6, '/assets/products/tr-8s/gallery04.jpg');

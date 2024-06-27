const listeler = [
    [
        {
            "ogun_id": 1,
            "kahvalti": "Yulaf Ezmesi ve Taze Meyve (384 kalori)",
            "ogle_yemegi": "Izgara Tavuk Salatası (568 kalori)",
            "ara_ogun": "Yoğurt ve Kuruyemiş (350 kalori)",
            "aksam_yemegi": "Fırında Somon ve Quinoa (692 kalori)",
            "toplam_kalori": "1994 kalori"
        },
        {
            "ogun_id": 2,
            "kahvalti": "Tam Tahıllı Tost ve Avokado (358 kalori)",
            "ogle_yemegi": "Ton Balıklı Makarna Salatası (715 kalori)",
            "ara_ogun": "Muz ve Fıstık Ezmesi (195 kalori)",
            "aksam_yemegi": "Izgara Tavuk ve Bulgur (570 kalori)",
            "toplam_kalori": "1838 kalori"
        },
        {
            "ogun_id": 3,
            "kahvalti": "Smoothie Bowl (465 kalori)",
            "ogle_yemegi": "Nohutlu Kuskus Salatası (600 kalori)",
            "ara_ogun": "Havuç ve Humus (100 kalori)",
            "aksam_yemegi": "Sebzeli Tavuk Sote (458 kalori)",
            "toplam_kalori": "1623 kalori"
        },
        {
            "ogun_id": 4,
            "kahvalti": "Fıstık Ezmeli Tost (340 kalori)",
            "ogle_yemegi": "Sebzeli Mercimek Çorbası (355 kalori)",
            "ara_ogun": "Elma ve Peynir (205 kalori)",
            "aksam_yemegi": "Fırında Hindi ve Quinoa (522 kalori)",
            "toplam_kalori": "1422 kalori"
        },
        {
            "ogun_id": 5,
            "kahvalti": "Yumurta ve Avokadolu Tost (398 kalori)",
            "ogle_yemegi": "Sebzeli Köfte ve Bulgur Pilavı (500 kalori)",
            "ara_ogun": "Kuru Üzüm ve Badem (320 kalori)",
            "aksam_yemegi": "Izgara Tavuk ve Sebze (458 kalori)",
            "toplam_kalori": "1676 kalori"
        },
        {
            "ogun_id": 6,
            "kahvalti": "Meyveli Smoothie (316 kalori)",
            "ogle_yemegi": "Sebzeli Tavuk Wrap (500 kalori)",
            "ara_ogun": "Peynirli Kraker (230 kalori)",
            "aksam_yemegi": "Fırında Balık ve Quinoa (572 kalori)",
            "toplam_kalori": "1618 kalori"
        },
        {
            "ogun_id": 7,
            "kahvalti": "Meyveli Yulaf (384 kalori)",
            "ogle_yemegi": "Sebzeli Kinoa Salatası (392 kalori)",
            "ara_ogun": "Yoğurtlu Meyve (200 kalori)",
            "aksam_yemegi": "Izgara Tavuk ve Bulgur Pilavı (570 kalori)",
            "toplam_kalori": "1546 kalori"
        }
    ],
    [
        {
            "ogun_id": 1,
            "kahvalti": "Smoothie Bowl (495 kalori)",
            "ogle_yemegi": "Tavuklu Sandviç (635 kalori)",
            "ara_ogun": "Kuru Meyve ve Fındık (320 kalori)",
            "aksam_yemegi": "Fırında Somon ve Bulgur (320 kalori)",
            "toplam_kalori": 1770
        },
        {
            "ogun_id": 2,
            "kahvalti": "Yulaf Ezmesi ve Kuruyemiş (534 kalori)",
            "ogle_yemegi": "Fırında Köfte ve Patates (585 kalori)",
            "ara_ogun": "Muzlu Smoothie (315 kalori)",
            "aksam_yemegi": "Izgara Tavuk ve Pirinç (620 kalori)",
            "toplam_kalori": 2054
        },
        {
            "ogun_id": 3,
            "kahvalti": "Avokadolu Tost (520 kalori)",
            "ogle_yemegi": "Ton Balıklı Makarna (535 kalori)",
            "ara_ogun": "Yoğurtlu Meyve Karışımı (264 kalori)",
            "aksam_yemegi": "Izgara Hindi ve Kinoa (642 kalori)",
            "toplam_kalori": 1961
        },
        {
            "ogun_id": 4,
            "kahvalti": "Fıstık Ezmeli Muzlu Tost (355 kalori)",
            "ogle_yemegi": "Nohutlu Kuskus Salatası (615 kalori)",
            "ara_ogun": "Fındık ve Kuru Kayısı (300 kalori)",
            "aksam_yemegi": "Fırında Tavuk ve Patates (570 kalori)",
            "toplam_kalori": 1840
        },
        {
            "ogun_id": 5,
            "kahvalti": "Tam Tahıllı Tost ve Avokado (520 kalori)",
            "ogle_yemegi": "Fırında Somon ve Bulgur (620 kalori)",
            "ara_ogun": "Yoğurtlu Meyve ve Granola (320 kalori)",
            "aksam_yemegi": "Izgara Tavuk ve Pirinç (620 kalori)",
            "toplam_kalori": 2080
        },
        {
            "ogun_id": 6,
            "kahvalti": "Omlet (520 kalori)",
            "ogle_yemegi": "Sebzeli Tavuk Sote (450 kalori)",
            "ara_ogun": "Fındık ve Elma (295 kalori)",
            "aksam_yemegi": "Köfte ve Patates Püresi (585 kalori)",
            "toplam_kalori": 1850
        },
        {
            "ogun_id": 7,
            "kahvalti": "Fıstık Ezmeli Smoothie (379 kalori)",
            "ogle_yemegi": "Nohutlu Bulgur Salatası (569 kalori)",
            "ara_ogun": "Kuruyemiş ve Kuru Meyve (320 kalori)",
            "aksam_yemegi": "Köri Soslu Tavuk ve Kinoa (522 kalori)",
            "toplam_kalori": 1790
        }
    ],
    [
        {
            "ogun_id": 1,
            "kahvalti": "Sebzeli Omlet (164 kalori)",
            "ogle_yemegi": "Izgara Tavuk Salatası (318 kalori)",
            "ara_ogun": "Yoğurt ve Meyve (200 kalori)",
            "aksam_yemegi": "Izgara Somon (403 kalori)",
            "toplam_kalori": 1276
        },
        {
            "ogun_id": 2,
            "kahvalti": "1 Dilim Tahıllı Ekmek (80 kalori) ve Quinoa (111 kalori)",
            "ogle_yemegi": "Yulaf Ezmesi (180 kalori) ve Çilek (25 kalori)",
            "ara_ogun": "Havuç (26 kalori)",
            "aksam_yemegi": "Hindi Köftesi (250 kalori)",
            "toplam_kalori": 922
        },
        {
            "ogun_id": 3,
            "kahvalti": "Yoğurt (150 kalori) ve Granola ve Meyve (170 kalori)",
            "ogle_yemegi": "Nohutlu Akdeniz Salatası (410 kalori)",
            "ara_ogun": "Ceviz ve Elma (145 kalori)",
            "aksam_yemegi": "Izgara Tavuk (271 kalori)",
            "toplam_kalori": 1326
        },
        {
            "ogun_id": 4,
            "kahvalti": "Smoothie (202 kalori)",
            "ogle_yemegi": "Kinoa ve Sebze Tabağı (392 kalori)",
            "ara_ogun": "Salatalık ve Avokado (68 kalori)",
            "aksam_yemegi": "Fırında Levrek ve Sebzeler (355 kalori)",
            "toplam_kalori": 1017
        },
        {
            "ogun_id": 5,
            "kahvalti": "Meyveli Smoothie Bowl (320 kalori)",
            "ogle_yemegi": "Sebzeli Quinoa Salatası (281 kalori)",
            "ara_ogun": "Yoğurt ve Fındık (200 kalori)",
            "aksam_yemegi": "Fırında Tavuk ve Kuşkonmaz (312 kalori)",
            "toplam_kalori": 1113
        },
        {
            "ogun_id": 6,
            "kahvalti": "Sebzeli Omlet (164 kalori) ve 1 Dilim Tahıllı Ekmek (80 kalori)",
            "ogle_yemegi": "Izgara Tavuk Salatası (318 kalori)",
            "ara_ogun": "Humus ve Havuç (86 kalori)",
            "aksam_yemegi": "Izgara Somon ve Quinoa (514 kalori)",
            "toplam_kalori": 1162
        },
        {
            "ogun_id": 7,
            "kahvalti": "Smoothie (202 kalori)",
            "ogle_yemegi": "Kinoa ve Sebze Tabağı (392 kalori)",
            "ara_ogun": "Ceviz ve Elma (145 kalori)",
            "aksam_yemegi": "Fırında Levrek ve Sebzeler (355 kalori)",
            "toplam_kalori": 1094
        }
    ]
]
export default listeler;
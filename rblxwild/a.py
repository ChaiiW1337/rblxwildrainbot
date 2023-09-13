import pytesseract
import pyscreenshot as ImageGrab

def ekran_metnini_oku():
    ekran_goruntusu = ImageGrab.grab()  # Ekran görüntüsü al
    metin = pytesseract.image_to_string(ekran_goruntusu)  # OCR ile metni çıkar
    return metin.strip()  # Metindeki gereksiz boşlukları temizle ve döndür

while True:
    metin = ekran_metnini_oku()  # Ekran metnini oku
    print(metin)  # Metni ekrana yazdır

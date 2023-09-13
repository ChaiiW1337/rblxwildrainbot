import tkinter as tk
import time
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
from win10toast import ToastNotifier
import undetected_chromedriver as uc
from selenium import webdriver
from keyauth import api
import os
import sys
import os.path
import platform
import hashlib
from datetime import datetime
import urllib3

def auth():
 keyauthapp = api(
    name = "chaiiwashere",
    ownerid = "bcbeMitkD2",
    secret = "5ea0638c139d7886b03272e65321e511aebbcdb493dffc515cae18701cc16fab",
    version = "1.0",
    hash_to_check = getchecksum()
)
    # KeyAuth kimlik doğrulama kodunu buraya ekleyin
def getchecksum():
    md5_hash = hashlib.md5()
    file = open(''.join(sys.argv), "rb")
    md5_hash.update(file.read())
    digest = md5_hash.hexdigest()
    return digest

    if result:
        result_label.config(text="Doğrulandı")  # Başarılı ise sonucu güncelle
    else:
        result_label.config(text="Doğrulanamadı")  # Başarısız ise sonucu güncelle

# Ana pencereyi oluştur
root = tk.Tk()
root.title("KeyAuth Kimlik Doğrulama")
root.geometry("300x200")

# Anahtar giriş kutusunu oluştur
key_entry = tk.Entry(root, width=30)
key_entry.pack(pady=10)

# Doğrulama düğmesini oluştur
auth_button = tk.Button(root, text="Doğrula", command=auth)
auth_button.pack()

# Sonuç etiketini oluştur
result_label = tk.Label(root, text="")
result_label.pack(pady=10)

# Ana döngüyü başlat
root.mainloop()

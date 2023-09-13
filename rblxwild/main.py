import time
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
from win10toast import ToastNotifier
import undetected_chromedriver as uc
from selenium import webdriver

if __name__ == '__main__':
    x = input("Please Enter Your Cookie :")
    chop = webdriver.ChromeOptions()
    # C:\Program Files\Google\Chrome\Application\102.0.5005.63
    chop.add_extension('extension.crx')
    chromedriver = webdriver.Chrome('driver/chromedriver.exe', options=chop)
    chromedriver.maximize_window()
    chromedriver.get("https://rblxwild.com/crash")
    time.sleep(10)
    chromedriver.find_element(By.CLASS_NAME, "x-button").click()
    time.sleep(2)
    chromedriver.find_element(By.CLASS_NAME, "login-button").click()
    time.sleep(2)
    chromedriver.find_element_by_xpath("//div[@class='scoped-input-tabs']/li[2]").click()
    time.sleep(2)
    inputElement = chromedriver.find_element_by_xpath("//div[@class='scoped-text-input']/input[1]")
    inputElement.send_keys(x)
    chromedriver.find_element(By.CLASS_NAME, "input-checkbox-container").click()
    time.sleep(15)
    chromedriver.find_element(By.CLASS_NAME, "scoped-class-apiloader").click()
    time.sleep(5)

    while True:
        if chromedriver.find_element(By.CLASS_NAME, "scoped-class-app-sidebar-chat-rain").is_displayed():
            if chromedriver.find_element(By.CLASS_NAME, "join-button").is_displayed():
                chromedriver.find_element(By.CLASS_NAME, "join-button").click()
                time.sleep(360)
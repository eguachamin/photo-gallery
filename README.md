# Deber Splash Screen
## Evelyn Guachamin
## Instrucción: Implementar un ícono personalizado en la aplicación y un Splash Screen

### 1. Implementar un ícono personalizado en la aplicación

![Image](https://github.com/user-attachments/assets/a8f0db28-78b6-4296-9784-21d96aace6e4)

### 2. Splash Screen
#### Para el ingreso del SplashScreen se reliza los siguiente
#### 1.- Se instalar el plugin del Splash Screen

##### npm install @capacitor/splash-screen

#### 2.- Se prepara la imagen sel SplashScreen

![image](https://github.com/user-attachments/assets/0876248c-be12-4f13-8a47-79278bfdb7a1)

#### 3.- Se generan los recursos 

##### npx @capacitor/assets generate

#### 4.- Se modifica el capacitor para que pueda reconocer el plugin

![image](https://github.com/user-attachments/assets/9a6411c7-d60f-4bc0-a996-6403d382683e)

#### 5.- Y por último se llama a la función en el main.ts

![image](https://github.com/user-attachments/assets/7f92a99f-bc2e-4521-b233-779c87523435)

#### 6.- Ejecutamos el comando npx cap open android
#### y ya disponemos nuestro SplashScreen 
![image](https://github.com/user-attachments/assets/3f16ef64-83a3-417c-a9c2-1502c04e08fe)


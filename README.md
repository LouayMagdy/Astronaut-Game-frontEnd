# Front-End of Astronaut Game Web Application 👨‍🚀
## About the Game
a front-end system of a web flash game about an astronaut trying to collecct some doughnuts floating in space while some lava rocks are also floating. 
* Collision with doughnuts 🍩 will add 5 points to his life, while collision with a lava rock 🔥 will take 20 points from his life. 
* The astronaut should try to collect as much doughnuts 🍩 as possible as the score depends the most on the maximum number of collected food all over the played games. 
* He also should also take care of his life; as the score depends on it in case equality of the previous aspect ⚡.
## Development Info.
* Developed using **React Js** <img width ='32px' src ='https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/reactjs.svg'>
* there is a **JWT** to store once the user register but he can join as Anonymous user but in this case no score will be saved in the DB
* The Game loop screen is developed using **React Konva** and connected to the Backend using **Websocket**
  - The frontend sends:
    a. JWT if present 🔑
    b. Browser window dimensions
    c. Astronaut represented in 3 Circles Covering his body in konva 
  - The Backend sends: 
    a. Astronaut Life ⚡
    b. List of movables represented with type which is either rock or food and its coordinates. There is a thread in the backend moving it
  - Game ends after 2 minutes or if the Astronaut dies 
## Some Screen Shots from the game
* Welcome Page 🤝
![image](https://user-images.githubusercontent.com/95547833/218193191-d8f314cd-88f2-4a99-8c59-b0a6cf9f975c.png)
* Sign-in Page
![image](https://user-images.githubusercontent.com/95547833/218194212-2e9bdb3b-86d7-4051-89cf-d3483e431e33.png)
* Sign-up Page
![image](https://user-images.githubusercontent.com/95547833/218194319-b2ff7e78-ce1c-428a-9a76-50a901cac7d5.png)
* Game Menu for Anonymous User 😎
![image](https://user-images.githubusercontent.com/95547833/218194466-99f16d48-2c13-47f9-a556-32923d9989d8.png)
* Game Menu for a Registered User
![image](https://user-images.githubusercontent.com/95547833/218194674-fe1d0c11-1165-410b-b522-6e4628751fa1.png)
* JWT cached in local storage for a Registered User
![image](https://user-images.githubusercontent.com/95547833/218196075-17308d1f-33e7-4e27-8188-8ca7f252ef19.png)
* Ranking Page 📊🏆
![image](https://user-images.githubusercontent.com/95547833/218256598-4fd4a7ab-bfe3-41dc-979a-9629e3b66f0c.png)
* About page ❔
![image](https://user-images.githubusercontent.com/95547833/218202767-73959bb5-f66b-47e8-9bfd-373fc7c57bac.png)
the contact label in the navbar will direct the user to Gmail to type a mail to the me 
* Rules Page ❕
![image](https://user-images.githubusercontent.com/95547833/218203097-54f0b90b-174f-43d7-8ddd-ca44d7bdcd39.png)
* Match 👨‍🚀
![image](https://user-images.githubusercontent.com/95547833/218193044-b91b3d94-8b57-4f86-97ed-02fc8246cb9d.png)

*DESCLAIMER:* 
I am not as a specialist in game development. This project is just for practising React Js, Konva, Connection with Websockets, caching, ... So, I am sorry if the user found sth not user-friendly     

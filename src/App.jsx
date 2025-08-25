import Card from "./components/card";
import "./App.css";

function App() {
  const cards = [
    {
      title: "Photography",
      description: "Capturing moments and landscapes through my lens.",
      image: "https://media.istockphoto.com/id/610259354/photo/young-woman-using-dslr-camera.jpg?s=612x612&w=0&k=20&c=gjAR4JiqA8lkGQzssSrXxo3yl-cwr5j7Hy47cy-10c4="
    },
    {
      title: "Coding",
      description: "I love building web apps with React & Node.js.",
      image: "https://www.shutterstock.com/image-photo/hands-typing-on-laptop-programming-600nw-2480023489.jpg"
    },
    {
      title: "Travel",
      description: "Exploring new places and cultures excites me.",
      image: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?cs=srgb&dl=pexels-te-lensfix-380994-1371360.jpg&fm=jpg"
    },
    {
      title: "Gaming",
      description: "Relaxing with strategy and adventure games.",
      image: "https://media.istockphoto.com/id/1448738634/photo/portrait-of-a-gamer-wearing-headphones-and-playing-online-game-on-personal-computer.jpg?s=612x612&w=0&k=20&c=CI3YD8muH24PqgsZKjreO2vBharqbfuECxHGk9o5o4o="
    }
  ];

  return (
    <div className="app">
      <h1>Waseem</h1>
      <p>Full Stack Developer & Creative Enthusiast</p>
      <div className="card-container">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export default App;

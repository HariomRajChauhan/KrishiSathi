function Hero() {
  return (
    <div className="flex flex-row h-1/2 w-full">
      <div className="container bg-amber-700 text-2xl text-white p-7 w-1/2">
        <h1>Hero</h1>
        <p>This is the hero section</p>
      </div>

      <div className="hero-image w-1/2 h-full">
        <img className="w-1/1 p-1" src="https://img.freepik.com/free-photo/daughter-embracing-her-mother-park_8353-997.jpg?ga=GA1.1.1021813147.1738078261&semt=ais_hybrid" alt="hero" />
      </div>
    </div>
  );
}

export default Hero;

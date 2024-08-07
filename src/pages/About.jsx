const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">My Bare-Bones App</h1>
      </header>
      
      <nav className="bg-gray-200 p-4">
        <ul className="flex space-x-4">
          <li><a href="/" className="text-blue-600 hover:underline">Home</a></li>
          <li><a href="/about" className="text-blue-600 hover:underline">About</a></li>
          <li><a href="/contact" className="text-blue-600 hover:underline">Contact</a></li>
        </ul>
      </nav>
      
      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-xl font-semibold mb-4">About Us</h2>
        <p>This is the About page of our bare-bones application. You can add more content here.</p>
      </main>
      
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 My Bare-Bones App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;

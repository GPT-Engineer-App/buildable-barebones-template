import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const Contact = () => {
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
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <form className="space-y-4 max-w-md">
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Textarea placeholder="Your Message" />
          <Button type="submit">Send Message</Button>
        </form>
      </main>
      
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 My Bare-Bones App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;

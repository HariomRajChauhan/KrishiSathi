import Message from './components/Message';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Login from './components/Login';


function App()
{
  return (
    <div className='h-screen w-screen bg-gray-100 p-2 '>
      <NavBar  />
      <Hero />
      <Login />

      <h1>Chat App</h1>
      <Message />
    </div>
  );
}

export default App;
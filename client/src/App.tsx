import DashBoard from './components/DashBoard';
import NavBar from './components/NavBar';
import Recent from './components/Recent';
import DailyActivity from './components/DailyActivity';
import Profile from './components/Profile';
import FeedBack from './components/FeedBack';
import Footer from './components/Footer';
import Login from './components/Login';

function App() {
  return (
    <div className="h-screen w-screen bg-gray-100 p-4">
      {/* NavBar */}
      <NavBar />

      {/* Combined Daily Activity and Profile */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Daily Activity */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <DailyActivity />
        </div>

        {/* Profile */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <Profile />
        </div>
      </div>

      {/* Recent Section */}
      <div className="mt-6">
        <Recent />
      </div>

      {/* Feedback Section */}
      <div className="mt-6">
        <FeedBack />
      </div>

      {/* Footer */}
      <div className="mt-6">
        <Footer />
      </div>
      <div>
        <Login/>
      </div>
    </div>
  );
}

export default App;

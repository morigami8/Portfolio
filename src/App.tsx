import './App.css';
import ApplicationCard from './components/ApplicationCard';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const apps = [
    {
      title: 'App title',
      description: 'App description',
      imageUrl: '#',
      linkUrl: 'https://espn.com',
    },
  ];
  return (
    <>
      <Header />
      <main>
        <h1>My Projects</h1>
        <section aria-label="List of Applications">
          {apps.map((app) => (
            <ApplicationCard key={app.title} {...app} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;

import ProfileCard from './ProfileCard';

function App() {
  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>Assignment 4: React Profile Card using Props</h1>
      
      {/* Passing data via props */}
      <ProfileCard 
        name="Samruddhi Gawali" 
        image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" 
        description="Frontend Web Developer & React student building clean user interfaces." 
      />
    </div>
  );
}

export default App;

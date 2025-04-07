import Header from './components/Header';
import Article from './components/Article/Article';
import Sidebar from './components/Sidebar';

import CommentSection from './components/CommentSection/CommentSection';

const App: React.FC = () =>{
  return (
    <div className="app">
      <Header/>
        <div className='main'>
          
        
          <div className='content'>
           <Article />
           <CommentSection />
          </div>
          <Sidebar />
          
       </div>
       
       <div/>
       


    </div>
  );
  
};

export default App;
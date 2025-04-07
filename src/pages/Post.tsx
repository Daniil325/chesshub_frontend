import {Header} from '@/components/Header';
import {Article} from '@/components/ArticlePOST/Article';
import {Sidebar} from '@/components/Sidebar';

import {CommentSection} from '@/components/CommentSection/CommentSection';


const Post: React.FC = () =>{
  return (
    <div className="app">
      <Header/>
        <div className='main'>
          
        
          <div className='content'>
           <Article/>
           <CommentSection />
          </div>
          <Sidebar />
          
       </div>
       
       <div/>
       


    </div>
  );
  
};

export default Post;
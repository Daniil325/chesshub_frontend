import Article from "@/components/organisms/Article/Article";
import CommentSection from "@/components/organisms/CommentSection/CommentSection";
import { Header } from "@/components/organisms/Header";
import Sidebar from "@/components/organisms/Sidebar/Sidebar";

const Post: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <div className="main">
                <div className="content">
                    <Article />
                    <CommentSection />
                </div>
                <Sidebar />
            </div>

            <div />
        </div>
    );
};

export default Post;

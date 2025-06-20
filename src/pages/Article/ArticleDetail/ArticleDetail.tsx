import ArticlePOST from "@/components/organisms/ArticlePOST/ArticlePost";
import CommentSection from "@/components/organisms/CommentSection/CommentSection";
import { Header } from "@/components/organisms/Header";
import { useParams } from "react-router-dom";


export const ArticleDetail = () => {
    const { id } = useParams();

    return (
        <> 
            <Header/>
            <main className="main">
                <ArticlePOST id={id} />
                <CommentSection />
            </main>
            
        </>
       
    )
}
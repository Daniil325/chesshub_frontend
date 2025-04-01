import React from 'react';

const Pagination: React.FC = () => {
    return (
        <nav className="pagination">
           <button>1</button>
           <button>2</button>
           <button>3</button>
           <span>...</span>
           <button>50</button>
           <button>51</button>
        </nav>
    );
};

export default Pagination;
import React from 'react';
import { useLocalization } from "./LocalizationContext";
import { translations } from "./translations";


const Sidebar: React.FC = () => {
    const { language } = useLocalization();
    const t = translations[language];
    
    return (
        <aside className='sidebar'>
            <div className="interesting">
                <h3>{t.left_panel.interesting}</h3>
                <div className="interest-item">
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                    <div className="reaction-count">
                        <span className="icon4"><img src="/img/глаза_интерес.svg" alt="Icon 4"/> 999</span>
                        <span className ="icon5"><img src="/img/комментарии.svg" alt="Icon 5"/> 999</span>
                    </div>
                </div>
                <div className="interest-item">
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                    <div className="reaction-count">
                        <span className="icon4"><img src="/img/глаза_интерес.svg" alt="Icon 4"/> 999</span>
                        <span className ="icon5"><img src="/img/комментарии.svg" alt="Icon 5"/> 999</span>
                    </div>
                </div>
                <div className="interest-item">
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                    <div className="reaction-count">
                        <span className="icon4"><img src="/img/глаза_интерес.svg" alt="Icon 4"/> 999</span>
                        <span className ="icon5"><img src="/img/комментарии.svg" alt="Icon 5"/> 999</span>
                    </div>
                </div>
            </div>

            <div className="events">
                <h3>{t.left_panel.events}</h3>
                <div className="event-item">
                    <img src="/img/image 2.png" alt="Event Image"/>
                    <div className="event-details">
                        <span className="span">11.09.2001</span>
                        <p className="p11">Сидим, не рыпаемся.</p>
                        <p className="p12">{t.left_panel.format}</p>
                    </div>
                </div>
                <div className="event-item">
                    <img src="/img/image 2.png" alt="Event Image"/>
                    <div className="event-details">
                        <span className="span">11.09.2001</span>
                        <p className="p11">Сидим, не рыпаемся.</p>
                        <p className="p12">{t.left_panel.format}</p>
                    </div>
                </div>
                <div className="event-item">
                    <img src="/img/image 2.png" alt="Event Image"/>
                    <div className="event-details">
                        <span className="span">11.09.2001</span>
                        <p className="p11">Сидим, не рыпаемся.</p>
                        <p className="p12">{t.left_panel.format}</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
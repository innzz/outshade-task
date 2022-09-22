import React from 'react';
import "./index.css";
import RoadMapImg1 from '../../../assets/images/roadmapimg1.png';
import RoadMapImg2 from '../../../assets/images/roadmapimg2.png';
import RoadMapImg3 from '../../../assets/images/roadmapimg3.png';
import RoadMapImg4 from '../../../assets/images/roadmapimg4.png';
import RoadMapImg5 from '../../../assets/images/roadmapimg5.png';

const RoadMap = () => {
  return (
    <div className='roadmap-container'>
        <div className="roadmap-headings">
            <h1>ROADMAP(80 acres)</h1>
        </div>
        <div className="roadmap-cards-section">
                <div className="roadmap-card-section">
                    <div className="roadmap-card">
                        <div className="roadmap-card-image">
                            <img src={RoadMapImg2} alt="card image" />
                        </div>
                        <div className="roadmap-card-line"></div>
                        <div className="roadmap-card-texts">
                            <h3>April 2022</h3>
                            <h6>25 acres sale deed with Token & PDC</h6>
                        </div>
                    </div>
                </div>
                <div className="roadmap-card-section">
                    <div className="roadmap-card">
                        <div className="roadmap-card-image">
                            <img src={RoadMapImg1} alt="card image" />
                        </div>
                        <div className="roadmap-card-line"></div>
                        <div className="roadmap-card-texts">
                            <h3>April 2022</h3>
                            <h6>25 acres sale deed with Token & PDC</h6>
                        </div>
                    </div>
                </div>
                <div className="roadmap-card-section">
                    <div className="roadmap-card">
                        <div className="roadmap-card-image">
                            <img src={RoadMapImg3} alt="card image" />
                        </div>
                        <div className="roadmap-card-line"></div>
                        <div className="roadmap-card-texts">
                            <h3>April 2022</h3>
                            <h6>25 acres sale deed with Token & PDC</h6>
                        </div>
                    </div>
                </div>
                <div className="roadmap-card-section">
                    <div className="roadmap-card">
                        <div className="roadmap-card-image">
                            <img src={RoadMapImg4} alt="card image" />
                        </div>
                        <div className="roadmap-card-line"></div>
                        <div className="roadmap-card-texts">
                            <h3>April 2022</h3>
                            <h6>25 acres sale deed with Token & PDC</h6>
                        </div>
                    </div>
                </div>
                <div className="roadmap-card-section">
                    <div className="roadmap-card">
                        <div className="roadmap-card-image">
                            <img src={RoadMapImg1} alt="card image" />
                        </div>
                        <div className="roadmap-card-line"></div>
                        <div className="roadmap-card-texts">
                            <h3>April 2022</h3>
                            <h6>25 acres sale deed with Token & PDC</h6>
                        </div>
                    </div>
                </div>
                <div className="roadmap-card-section">
                    <div className="roadmap-card">
                        <div className="roadmap-card-image">
                            <img src={RoadMapImg5} alt="card image" />
                        </div>
                        <div className="roadmap-card-line"></div>
                        <div className="roadmap-card-texts">
                            <h3>April 2022</h3>
                            <h6>25 acres sale deed with Token & PDC</h6>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default RoadMap
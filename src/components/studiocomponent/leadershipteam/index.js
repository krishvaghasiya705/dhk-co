import React, { useState } from 'react'
import "./leadershipteam.scss"
import Commonbutton from './../../commonbutton/index';
import Leadershipdata from "../leadershipdata/leadershipdata";
import Leadersmodal from '../leadersmodal';

export default function Leadershipteam() {
    const [selectedLeader, setSelectedLeader] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLeaderClick = (leader) => {
        setSelectedLeader(leader);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedLeader(null), 300);
    };

    return (
        <>
            <div className='leader-ship-team-main'>
                <div className="container">
                    <div className='leader-ship-team-title'>
                        <h5>leadership team</h5>
                    </div>
                    <div className='leader-ship-team-list-flx'>
                        {Leadershipdata.map((i, index) => (
                            <div className='leader-ship-team-list-grd' key={index} onClick={() => handleLeaderClick(i)}>
                                <div className='leader-ship-team-list-img'>
                                    <img src={i.Leaderimg} alt="leadershipimg1" />
                                </div>
                                <div className='leader-ship-team-list-button'>
                                    <Commonbutton ButtonLink="none" Buttontext="info" />
                                </div>
                                <div className='leader-ship-team-list-title'>
                                    <h6>{i.Title}</h6>
                                </div>
                                <div className='leader-ship-team-list-para'>
                                    <p>{i.Leaderpara}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {selectedLeader && (
                <Leadersmodal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    leaderData={selectedLeader}
                />
            )}
        </>
    )
}

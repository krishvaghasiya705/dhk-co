import React, { useState, useRef } from 'react'
import "./whatwedo.scss"
import whatwedoimg1 from "../../../assets/images/whatwedoimg1.webp"
import whatwedoimg2 from "../../../assets/images/whatwedoimg2.webp"
import whatwedoimg3 from "../../../assets/images/whatwedoimg3.webp"
import whatwedoimg4 from "../../../assets/images/whatwedoimg4.webp"
import whatwedoimg5 from "../../../assets/images/whatwedoimg5.webp"
import whatwedoimg6 from "../../../assets/images/whatwedoimg6.webp"
import whatwedoimg7 from "../../../assets/images/whatwedoimg7.webp"
import whatwedoimg8 from "../../../assets/images/whatwedoimg8.webp"
import whatwedoimg9 from "../../../assets/images/whatwedoimg9.webp"

const whatWeDoData = [
  {
    label: 'hospitality',
    img: whatwedoimg1,
    desc: `Create welcoming spaces that blend guest comfort with refined sophistication, aligned with the operator's brand ethos and operational requirements.`
  },
  {
    label: 'interior design',
    img: whatwedoimg2,
    desc: `Through dhk Interior Design, create interior spaces that provide lasting value through materiality, sustainable design and sophisticated detailing.`
  },
  {
    label: 'mixed-use',
    img: whatwedoimg3,
    desc: `Build dynamic urban communities by weaving together living, working and leisure spaces designed to respond to their diverse functional needs. `
  },
  {
    label: 'office',
    img: whatwedoimg4,
    desc: `Design progressive workplaces that inspire collaboration, enhance wellbeing and adapt to the evolving needs of employers and employees alike.`
  },
  {
    label: 'public + education',
    img: whatwedoimg5,
    desc: `Shape inclusive, future-ready environments designed to nurture learning and enhance the experience of the people who use them.`
  },
  {
    label: 'residential',
    img: whatwedoimg6,
    desc: `Deliver considered spaces that enrich daily life and optimise value for developers through innovative space planning and sustainable construction.`
  },
  {
    label: 'retail',
    img: whatwedoimg7,
    desc: `Design engaging retail environments that create memorable customer experiences and support successful commercial outcomes.`
  },
  {
    label: 'sustainable',
    img: whatwedoimg8,
    desc: `Infuse sustainability throughout our design process, empowering clients and teams and embedding environmental principles from project inception to create meaningful outcomes that enhance health, economic and social value.`
  },
  {
    label: 'urban design',
    img: whatwedoimg9,
    desc: `Enhance urban lifestyles through integrated masterplans that prioritise people, promote inclusive public spaces and build vibrant, healthy communities.`
  },
];

export default function Whatwedo() {
    const [hoveredIdx, setHoveredIdx] = useState(null);
    const listRefs = useRef([]);
    const [headerPos, setHeaderPos] = useState({ top: 0, left: 0, width: 0 });

    const handleMouseEnter = (idx) => (e) => {
        const rect = listRefs.current[idx]?.getBoundingClientRect();
        const containerRect = e.currentTarget.parentNode.getBoundingClientRect();
        setHeaderPos({
            top: rect.top - containerRect.top,
            left: rect.left - containerRect.left,
            width: rect.width
        });
        setHoveredIdx(idx);
    };
    const handleMouseLeave = () => {
        setHoveredIdx(null);
    };

    return (
        <div className='whatwedo-main'>
            <div className="container">
                <div className='whatwedo-header blend-mode'>
                    <h3>what we do</h3>
                </div>
                <div className='whatwedo-list-rel ' style={{ position: 'relative' }}>
                    {/* Dynamic header shown on hover */}
                    {hoveredIdx !== null && (
                        <div
                            className='whatwedo-list-header show-on-hover'
                            style={{
                                display: 'block',
                                position: 'absolute',
                                top: headerPos.top,
                                left: headerPos.left,
                                width: headerPos.width,
                                zIndex: 1
                            }}
                        >
                            <div className='whatwedo-list-header-line blend-mode'></div>
                            <div className='whatwedo-list-header-grd'>
                                <div className='whatwedo-list-header-img'>
                                    <img src={whatWeDoData[hoveredIdx].img} alt={whatWeDoData[hoveredIdx].label} />
                                </div>
                                <div className='whatwedo-list-header-content blend-mode'>
                                    <p>{whatWeDoData[hoveredIdx].desc}</p>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className='whatwedo-list-flx'>
                        {whatWeDoData.map((item, idx) => (
                            <div
                                className='whatwedo-list blend-mode'
                                key={item.label}
                                ref={el => listRefs.current[idx] = el}
                                onMouseEnter={handleMouseEnter(idx)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <h4>{item.label}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

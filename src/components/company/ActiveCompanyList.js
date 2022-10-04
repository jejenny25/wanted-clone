import { useState, useEffect } from "react";
import styled from "styled-components"
import {Link} from "react-router-dom"

import axios from 'axios';

const ActiveCompanyList = () => {

    const url =`https://dev.wanted-clone.site/api/job-company/`;

    const [activeComsList,setActiveComsList] = useState([]);

    useEffect(() => {
        getCompanyList();
    }, []);

    const getCompanyList = async() => {
        try{
            const getData = await axios({
                method:'get',
                url: url,
            })
            //console.log(getData.data); 
            if(getData.data.code === 1000)
            {
                setActiveComsList(getData.data.result);
            }
        }
        catch(err){
            console.log(err);
        }
    }
    return (
        <ListStyled>
            <ul className="active-company-list">
                { activeComsList.map((item, index) => (
                    <li key={item.companyId}>
                        <Link to='/companyInfo' state={{ companyId : item.companyId}}>
                            <div className="thumbnail"><img src={item.companyImage} alt="" /></div>
                            <div className="txt-box">
                                <div className="logo"><img src={item.companyLogoImage} alt="" /></div>
                                <div className="txt-wrap">
                                    <p className="name">{item.companyName}</p>
                                    <p className="position">{item.positions}개 포지션</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
                {/* <li>
                    <Link to="/companyInfo" state={{ companyId : 2}}>
                        <div className="thumbnail"><img src="images/dummy/company01.png" alt="" /></div>
                        <div className="txt-box">
                            <div className="logo"><img src="images/dummy/company_logo01.png" alt="" /></div>
                            <div className="txt-wrap">
                                <p className="name">위메프</p>
                                <p className="position">39개 포지션</p>
                            </div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/companyInfo" state={{ companyId : 3}}>
                        <div className="thumbnail"><img src="images/dummy/company01.png" alt="" /></div>
                        <div className="txt-box">
                            <div className="logo"><img src="images/dummy/company_logo01.png" alt="" /></div>
                            <div className="txt-wrap">
                                <p className="name">위메프</p>
                                <p className="position">39개 포지션</p>
                            </div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/companyInfo" state={{ companyId : 4}}>
                        <div className="thumbnail"><img src="images/dummy/company01.png" alt="" /></div>
                        <div className="txt-box">
                            <div className="logo"><img src="images/dummy/company_logo01.png" alt="" /></div>
                            <div className="txt-wrap">
                                <p className="name">위메프</p>
                                <p className="position">39개 포지션</p>
                            </div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/companyInfo" state={{ companyId : 4}}>
                        <div className="thumbnail"><img src="images/dummy/company01.png" alt="" /></div>
                        <div className="txt-box">
                            <div className="logo"><img src="images/dummy/company_logo01.png" alt="" /></div>
                            <div className="txt-wrap">
                                <p className="name">위메프</p>
                                <p className="position">39개 포지션</p>
                            </div>
                        </div>
                    </Link>
                </li> */}
            </ul>
        </ListStyled>
    )
    }

const ListStyled = styled.div`
    margin-bottom:40px;
    .active-company-list {display:flex;}
    .active-company-list li {width:calc(20% - 9px)}
    .active-company-list li + li {margin-left:18px;}
    .active-company-list a .thumbnail {height: 147px; border-radius: 3px 3px 0 0; box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%); overflow:hidden;}
    .active-company-list a .thumbnail img {width:100%; height:100%;  object-fit: cover; vertical-align: bottom;  transition: all .5s ease-in-out;}
    .active-company-list a:hover .thumbnail img {transform:scale(1.06);}
    .active-company-list a .txt-box {padding: 34px 16px 0; height: 124px; border: 1px solid #e1e2e3; border-top: none; border-radius: 0 0 3px 3px; position: relative;}
    .active-company-list a .txt-box .logo {position: absolute; top: -25px; left: 16px; width: 50px; height: 50px; background-color:#fff; box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);}
    .active-company-list a .txt-box .logo img {width:100%; height:100%;}
    .active-company-list a .txt-box .name {position: relative; font-size: 16px; font-weight: 600; letter-spacing: -.3px; color: #333; line-height: 1.2; margin: 4px 0; overflow: hidden; max-height: 58px; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2;}
    .active-company-list a:hover .txt-box .name {color:#258bf7;}
    .active-company-list a .txt-box .position {margin-top:6px; color:#999;}
    
`;

export default ActiveCompanyList
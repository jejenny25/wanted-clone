import styled from "styled-components"
import axios from 'axios';

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import SubCatecory from "../../components/common/SubCatecory"

const AllJobgroup = () => {

    const [allHide, setAllHide] = useState(true);
    const [subType, setSubType] = useState("");
    const [allGrp, setAllGrp] = useState([]);
    const [allGrpRest, setAllGrpRest] = useState([
        {jobGroupId:4, jobGroupName:"디자인" },
        {jobGroupId:5, jobGroupName:"영업" },
        {jobGroupId:6, jobGroupName:"고객서비스·리테일" },
        {jobGroupId:7, jobGroupName:"게임제작" },
        {jobGroupId:8, jobGroupName:"HR" },
        {jobGroupId:9, jobGroupName:"미디어" },
        {jobGroupId:10, jobGroupName:"엔지니어링·설계" },
        {jobGroupId:11, jobGroupName:"금융" },
        {jobGroupId:12, jobGroupName:"물류·무역" },
        {jobGroupId:13, jobGroupName:"제조·생산" },
        {jobGroupId:14, jobGroupName:"의료·제약·바이오" },
        {jobGroupId:15, jobGroupName:"교육" },
        {jobGroupId:16, jobGroupName:"식·음료" },
        {jobGroupId:17, jobGroupName:"법류·법집행기관" },
        {jobGroupId:18, jobGroupName:"건설·시설" },
        {jobGroupId:19, jobGroupName:"공공·복지" }
    ]);


    const url =`https://dev.wanted-clone.site/api/job-group`;

    useEffect(() => { 
        getGroup();
    }, []);

    // useEffect(() => { 
        
    // }, [allGrp]);

    const getGroup = async() => {
        try{
            const getData = await axios({
                method:'get',
                url: url,
            })
            //console.log(getData.data); 
            if(getData.data.code === 1000)
            {
                setAllGrp(getData.data.result);
            }
        }
        catch(err){
            console.log(err);
        }
    }

    const openSubCategory = (category_type) =>{
        setSubType(category_type);
    }

    

    return (
        <AllJobGroupStyled onMouseEnter={() => {setAllHide(false)}} allHide={allHide}>
            <button type="type" className="btn btn-all-group"><img src="images/menu.png" alt="전체 직군" /></button>
            <div className="all-jobs-fixed">
                <div className="all-jobs-wrap" onMouseLeave={() => {setAllHide(true)}}>
                    <section className="jobs-wrap">
                        <Link to="/adList" className="item">직군 전체</Link>
                        <ul>
                            {allGrp
                            .filter((arr, index, callback) => index === callback.findIndex(t => t.jobGroupId === arr.jobGroupId))
                            .map((item, index) => (
                                
                                <li key={item.jobGroupId} onMouseEnter={() => {openSubCategory(`type`+ index )}}>
                                    <Link to="#" className="item">{item.jobGroupName}</Link>
                                </li>
                            ))}
                            <li><Link to="#" className="item" onMouseEnter={() => {openSubCategory("type3")}}>디자인</Link></li>
                            <li><Link to="#" className="item" onMouseEnter={() => {openSubCategory("type4")}}>영업</Link></li>
                            <li><Link to="#" className="item" onMouseEnter={() => {openSubCategory("type5")}}>고객서비스·리테일</Link></li>
                            <li><Link to="#" className="item">게임제작</Link></li>
                            <li><Link to="#" className="item">HR</Link></li>
                            <li><Link to="#" className="item">미디어</Link></li>
                            <li><Link to="#" className="item">엔지니어링·설계</Link></li>
                            <li><Link to="#" className="item">금융</Link></li>
                            <li><Link to="#" className="item">물류·무역</Link></li>
                            <li><Link to="#" className="item">제조·생산</Link></li>
                            <li><Link to="#" className="item">의료·제약·바이오</Link></li>
                            <li><Link to="#" className="item">교육</Link></li>
                            <li><Link to="#" className="item">식·음료</Link></li>
                            <li><Link to="#" className="item">법류·법집행기관</Link></li>
                            <li><Link to="#" className="item">건설·시설</Link></li>
                            <li><Link to="#" className="item">공공·복지</Link></li>
                        </ul>
                        <div className="banner">
                            <Link to="#"><span className="txt">프리랜서</span></Link>
                        </div>
                    </section>
                    <section className="detail-category-wrap">
                        <SubCatecory subtype={subType}/>
                    </section>
                </div>
            </div>
            
        </AllJobGroupStyled>
    )
}

const AllJobGroupStyled = styled.div`
    .btn-all-group {width:17px; height:14px; margin-right:15px;}
    .btn-all-group img {width:100%;}
    
    .all-jobs-fixed{position:fixed; display:${props=>props.allHide?'none':'block'}; left: 0; right: 0; bottom: 0; top: 50px; overflow: hidden; width: 100%;}
    
    .all-jobs-wrap {position: relative; height: 100%; width: 100%; max-width: 1100px; display: flex; margin: 0 auto; z-index: 1400;}
    .all-jobs-wrap .jobs-wrap {border-left: 1px solid #f7f9fa; border-right: 1px solid #f7f9fa; height: calc(100vh - 50px); width: 220px; background-color: #fff; overflow-y: auto;}
    .all-jobs-wrap .jobs-wrap .item {height: 40px; display: flex; align-items: center; font-weight:700; flex: 1 1; padding: 0 20px; width: 100%;}
    .all-jobs-wrap .jobs-wrap .item:hover {background-color: #f7f9fa; color: #36f;}

    .all-jobs-wrap .detail-category-wrap ul {display: flex; flex-direction: column; flex-wrap: wrap; height: calc(100vh - 50px); background-color: #f7f9fa;}
    .all-jobs-wrap .detail-category-wrap ul li {position: relative; display: flex; justify-content: space-between; align-items: center; width: 200px; padding: 0 20px;}
    .all-jobs-wrap .detail-category-wrap ul li .item {padding-top: 14px; display: inline-block; height: 40px; font-size: 13px; color: #333; flex: 1 1; vertical-align: middle; max-width: 140px; width: 100%; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;}
    .all-jobs-wrap .detail-category-wrap ul li .item:hover {color:#36f;}
    .all-jobs-wrap .detail-category-wrap ul li .icon-arrow_right {position:absolute; display:none; right: 20px; top: 14px; font-size: 16px; color: #36f;}
    .all-jobs-wrap .detail-category-wrap ul li .item:hover + .icon-arrow_right {display:block}
    
    .banner {width: 100%; padding: 8px 20px;}
    .banner a {display:block;width: 100%; height: 50px; display: flex; align-items: center; border-radius: 4px; background: #f5f7ff url('images/freelancer_banner.png') no-repeat 100%; background-size: 160px 50px;}
    .banner a .txt {display:block; margin-left: 16px; font-weight: 700; font-size: 13px; color: #0a4ff4;}
    
`
export default AllJobgroup


import styled from "styled-components";

import { useState, useEffect } from "react"

import {InnerStyled, BtnBigStyled, BtnBigBorderStyled} from "../../components/common/styled";

const ResumeToolbar = (props) => {

    const [nowLength, setNowLength] = useState(props.resumeLenght);
    const standardLenth = 1600;
    const [percent, setPercent] = useState("-97.5");
    const [pinPercent, setPinPercent] = useState("25%");
    const [basicNum, setBasicNum] = useState(400);
    const [basicpercent, setBasicpercent] = useState("19.5");
    const [txtPercent, setTxtPercent] = useState("0");
    const [bgColor, setBgColor] = useState("rgb(51, 51, 51)");
    const [emoji, setEmoji] = useState("💪");
    const [desc, setDesc] = useState("400자 이상 작성하시면 이력서를 완료할 수 있어요!");

    useEffect(() => {
        setNowLength(props.resumeLenght);
        const _percent = -(100 - ((nowLength/standardLenth) * 100));
        const _txt_percent =((nowLength/standardLenth) * 100);
        //console.log("_percent :" + _percent);
        setPercent(_percent);
        setTxtPercent(_txt_percent);
        if(nowLength > 399 && nowLength < 450){
            setBgColor("rgb(51, 102, 255)");    
            setEmoji("👏");
            setDesc("이력서 작성완료 최소 글자수를 달성했어요!");
        }else if(nowLength > 450 && nowLength < 1300){  
            setEmoji("😊");
            setDesc("원티드 회원들은 평균 1,300자 정도 작성했어요");
            setBasicNum(1300);
            setBasicpercent("72.75");
            setPinPercent("81.25%");
        }
        else if(nowLength > 1300 && nowLength < 1600){  
            setBasicpercent("80");
            setBasicNum(1600);
        }
        else if(nowLength > 1600){  
            setEmoji("👍");
            setDesc("훌륭한 이력서를 보유하고 계시는군요!");
            setPercent("0");
            setBasicNum(nowLength);
        }
    }, [props.resumeLenght]);

    return (
    
    <ResumeToolbarStyled>
        <InnerStyled>
            <div className="toolbar-wrap">
                <div className="progress-wrap">
                    <div className="progress-bar-wrap">
                        <div className="bar-top"  style={{"transform": "translateX("+ txtPercent +"%)", "color" : bgColor}}>
                        {nowLength < 1600 &&
                            <p className="done-num">{nowLength}</p>
                        }
                        </div>
                        <div className="bar-wrap">
                            <div className="bar" style={{ "transform": "translateX("+ percent +"%)", "backgroundColor": bgColor }} ></div>
                            <div className="pin" style={{ "left": pinPercent}}  ></div>
                        </div>
                        <div className="bar-bot">
                            <p className="start-num">0</p>
                            <p className="basic-num" style={{ "transform": "translateX("+ basicpercent +"%)"}}>{basicNum}</p>
                        </div>
                    </div>
                    <div className="txt-wrap">
                        <span className="emoji">{emoji}</span>
                        <p className="desc">{desc}</p>
                    </div>
                </div>

                <div className="btn-wrap">
                    <BtnBigBorderStyled>임시저장</BtnBigBorderStyled>
                    <BtnBigStyled>작성완료</BtnBigStyled>
                </div>
            </div>
        </InnerStyled>
    </ResumeToolbarStyled>
    
  )
}

const ResumeToolbarStyled = styled.div`
    position: fixed;
    top: auto;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    padding: 0 50px;
    background-color: #fff;
    border-top: 1px solid #e0e0e0;
    .toolbar-wrap {padding: 15px 0;}
    .progress-wrap {display:flex; align-items:center; }
    .progress-wrap .progress-bar-wrap {position:relative; width:150px; font-size: 10px; font-weight: 600;}
    .progress-wrap .progress-bar-wrap .bar-top{position: relative; overflow: hidden; height:17px;}
    .progress-wrap .progress-bar-wrap .bar-top .done-num{position: absolute; top: 0; left: 0; bottom: 0; width: 100%; transition: transform .4s linear,-webkit-transform .4s linear;}
    .progress-wrap .progress-bar-wrap .bar-wrap {position: relative; overflow: hidden; width: 100%; height: 9px; border-radius: 4.5px; background-color: #e1e2e3; transform: translateZ(0);}
    .progress-wrap .progress-bar-wrap .bar-wrap .bar {position: absolute; top: 0; left: 0; bottom: 0; width: 100%; transition: transform .4s linear; transform-origin: left; border-radius: 4.5px 0 0 4.5px;}
    .progress-wrap .progress-bar-wrap .bar-wrap .pin {    position: absolute; top: 0; bottom: 0; border-left: 1px dotted #36f;}
    .progress-wrap .progress-bar-wrap .bar-bot {position: relative; overflow: hidden; height: 14px;}
    .progress-wrap .progress-bar-wrap .bar-bot .start-num {position: absolute; top: 2px; left: 0; bottom: 0; color: #999;}
    .progress-wrap .progress-bar-wrap .bar-bot .basic-num {position: absolute; top: 2px; left: 0; width:100%; bottom: 0;}
    .progress-wrap .txt-wrap {display:flex; align-items:center;}
    .progress-wrap .txt-wrap .emoji {display:inline-block; width:32px; margin-left:6px; font-size: 16px;}
    .progress-wrap .txt-wrap .desc {font-size: 13px; color: #333; font-weight: 600;}
    .toolbar-wrap {display:flex; justify-content:space-between; align-items:center;}
    .toolbar-wrap .btn-wrap {display:flex; align-items:center;}
    .toolbar-wrap .btn-wrap button {width: 173px;}
    .toolbar-wrap .btn-wrap button + button {margin-left:9px;}
`;

export default ResumeToolbar

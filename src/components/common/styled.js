import styled from "styled-components"

export const InnerStyled = styled.div`
    width:1060px;
    margin:auto;
`;

export const ContainerStyled = styled.div`
    position:relative;
    padding-top:50px;
    padding-bottom:100px;
`;

export const ContainerNopadbotStyled = styled.div`
    position:relative;
    padding-top:50px;
`;

export const DividerStyled = styled.hr`
    display:block;
    width: 100%;
    height:1px;
    margin-top:0;
    margin-bottom:38px;
    /* margin-left: calc(-50vw + 50%); */
    background-color: #e1e2e3;
    border:0px;
`;

export const DividerStyled2 = styled.hr`
    display:block;
    height:1px;
    width: 100%;
    margin:0;
    background-color: #eee;
    border:0px;
`;

export const DividerStyled3 = styled.hr`
    display:block;
    height:1px;
    width: 100%;
    margin:0;
    background-color: #ececec;
    border:0px;
`;

export const H3TitStyled = styled.h3`
    font-size: 22px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -.3px;
    color: #333;
    margin: 20px 0 14px;
`;

export const Dimmed = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 300;
    background-color: rgba(0,0,0,.5);
`;

export const InpGrpStyled = styled.div`
    .inp-wrap + .inp-wrap {margin-top:25px;}
    .inp-wrap .label-txt {font-size: 14px; font-weight: 400; color:#767676;}
    .inp-wrap .inp-item {margin-top: 11px;}
    .inp-wrap .inp-txt {width: 100%; height: 50px; padding-right: 15px; padding-left: 15px; border-radius: 5px; border: 1px solid #e1e2e3; background-color: #fff; font-size: 15px; }
    .inp-wrap .inp-txt.has-err {border-color:#fe415c;}
    .inp-wrap .inp-txt:focus {border-color:#36f;}
    .inp-wrap .inp-txt::placeholder {color:#767676;}
    .inp-wrap .inp-txt:disabled {background-color:#f2f4f7;}

    .inp-wrap .inp-item.inp-select{margin-bottom: 10px;position: relative; flex: 1 1; line-height: 50px; padding: 0 15px; height: 50px; font-size: 15px; border-radius: 5px; border: 1px solid #e1e2e3; color: #333;}
    .inp-wrap .inp-item.inp-select select {position: absolute; top: 0; left: 0; width: 100%; padding: 0 15px; height: 50px; font-size: 15px; border-radius: 5px; border: 1px solid #e1e2e3; color: #333; opacity:0;}
    .inp-wrap .inp-item.inp-select .icon-arrow_right {position: absolute; top: 50%; transform: translateY(-50%); right: 10px; font-size: 20px;color: #333; z-index: -1;}

    .inp-item.has-btn{display:flex;}

    .inp-wrap .desc {margin-top: 6px; font-size: 12px; color: #767676;}
`;

export const AgreementStyled = styled.div`
    .all-wrap {color: #ececec; height: auto; padding-bottom: 14px; border-bottom: 1px solid #ececec; margin-bottom: 15px;}
    .agree-item {display:flex; align-items:center}
    .agree-item + .agree-item {margin-top:12px;}
    .agree-item .chk-wrap {position:relative; display:flexbox; display: flex; justify-content: center; align-items: center; width: 17.3px; height: 17.3px; margin-right: 10px;}
    .agree-item .inp-check {position: absolute; left: 1px; opacity: 0; width: 17.3px; height: 17.3px; vertical-align: top; cursor: pointer;}
    .agree-item .chk-wrap svg {color:#ccc} 
    .agree-item .inp-check:checked + svg {color:#3365FF} 
    .agree-item .txt {font-size: 15px; color:#939393;}
    .all-wrap .agree-item .txt  {color:#333;}
    .agree-item a {display:inline-block; margin-left:auto; font-size: 13px; line-height: 19px; color: #767676;}
    
`;

export const BtnBigStyled = styled.button`
    display:flex; align-items:center; justify-content:center; width:100%; height: 50px; border-radius: 25px; background-color: #36f; border: 1px solid #36f; font-size: 16px; font-weight: 600; color: #fff;
    :disabled{background-color: #f2f4f7; border-color: transparent; color: #cacaca; cursor: not-allowed;}
    .ico-mail {display:block; width:24px; height:24px; margin-right:10px;}
`;

export const BtnBigBorderStyled = styled.button`
    display:flex; align-items:center; justify-content:center; width:100%; height: 50px; border-radius: 25px; background-color: #fff; border: 1px solid #36f; color: #36f; font-size: 16px; font-weight: 600;
    .ico-bookmark {height:17px; margin-right:8px;}
`;

export const BtnBigBorderGrayStyled = styled.button`
    display:flex; align-items:center; justify-content:center; width:100%; height: 50px; border-radius: 25px; background-color: #fff; border: 1px solid #e1e2e3; color: #333; font-size: 16px; font-weight: 600;
    .ico-bookmark {height:17px; margin-right:8px;}
`;

export const BtnMidStyled = styled.button`
    display:flex; align-items:center; justify-content:center; min-width: 64px; padding: 0px 27px; height: 40px; font-size: 15px; border-radius: 25px; font-weight: 600; color: #fff;
    background-color:${props=>props.isFollow ?'#f2f4f7':'#36f'};
    border:${props=>props.isFollow ?'none':'1px solid #36f'};
    color:${props=>props.isFollow ?'#ccc':'#fff'};
`;

export const BtnMidBorderStyled = styled.button`
    display:flex; align-items:center; justify-content:center; min-width: 64px; padding: 0px 27px; height: 40px; font-size: 16px; border-radius: 25px; border: 1px solid #e1e2e3; font-weight: 400; color: #333;
`;

export const BtnMidBorderBlueStyled = styled.button`
    display:flex; align-items:center; justify-content:center; min-width: 64px; padding: 0px 27px; height: 40px; font-size: 16px; border-radius: 25px; border: 1px solid #36f; font-weight: 400; color: #36f;
`;

export const PageTit = styled.div`
    .tit {font-size: 20px; font-weight: 700; color: #333; padding: 50px 0 20px;}
`;

export const TooltipWrapStyled = styled.div`
    position: relative;
    .btn-tooltip {position: relative;}
    .tooltip {color: #333; font-size: 12px; font-weight: 400; min-height: 40px; position: absolute; padding: 11px 12px; background: #fff; border: 1px solid #999; z-index: 1; display: none; white-space: nowrap; top: calc(100% + 4px); left: 50%; transform: translateX(-50%);}
    .btn-tooltip:hover .tooltip {display:block;}
`

export const LabelStyled = styled.span`
    border-radius: 2px; background-color: #fff; display: inline-block; font-size: 10px; font-weight: 600; height: 19px; line-height: 19px; margin-top: 4px; padding: 0 5px; border:1px solid #00aead; color:#00aead;
`;

export const MyContWrapStyled = styled.div`
    position:relative;
    
    .aside-wrap {top: 0; left: 0; width: 250px; position: absolute;}
    .content-wrap {padding-left:270px;}
`
export const MyinfoInputBoxStyled = styled.div`
    padding:${props=>props.boxtype==="small"?'16px 30px':'41px 0 30px;'};
    border: 1px solid #e1e2e3;
    border-radius: 3px;
    background-color: #fff;
`;

export const MyInputItem = styled.div`
    display: block;
    position: relative;
    padding: 15px 0;
    .inp-label{top: 50%; left: 0; width: 150px; position: absolute; color: #999; font-size: 16px; font-weight:600; transform: translateY(-50%);}
    .input-wrap {position:relative; width: calc(100% - 150px); margin-left: 150px;}
    .input-wrap.type-sel:after {content: "";top: 25px; right: 20px; position: absolute; transform: translateY(-50%); border-top: 6px solid #999; border-left: 4px solid transparent; border-right: 4px solid transparent;}
    .input-wrap .inp-sel {width:100%; padding: 14px 20px; color: #999; font-size: 16px; font-weight: 400; border: 0; color:#333; border-radius: 3px; background-color:#f8f8fa; appearance: none;}
    .input-wrap .btn-slect {width:100%; padding: 12px 0; position: relative;color: #ccc; font-size: 16px; text-align: left; font-weight: 400; border: 0; border-bottom: 1px solid #e1e2e3;} 
    .input-wrap .btn-slect .icon-arrow_right{top: 50%; right: 0; position: absolute; color: #999;font-size: 24px; transform: translateY(-50%);}
    
    .input-wrap .input-grp {display:flex; align-items:center;}
    .input-wrap .input-grp .open-yn {font-size: 16px; line-height: 42px; color: #333;}
    .input-wrap .input-grp .open-yn:before{content: "ㅣ"; margin-right: 6px; margin-left: 10px; color: #ccc;}
    .input-wrap .sel-wrap {position:relative; width:124px;}
    .input-wrap .sel-wrap:after {content: "";top: 50%; right: 0; position: absolute; transform: translateY(-50%); border-top: 6px solid ${props=>props.interesting?'#258bf7':'#fb445f'};; border-left: 4px solid transparent; border-right: 4px solid transparent; }
    .input-wrap .sel-wrap .inp-sel-sm {cursor: pointer; position: relative; min-width: 100%; appearance: none; font-size: 16px; font-weight: 600; text-align: left; color:${props=>props.interesting?'#258bf7':'#fb445f'}; padding: 10px 20px 10px 0; border: none; background: none;}
    .input-wrap .sel-wrap .inp-sel-sm option {color:#333;}
    .input-wrap .explation {font-size: 12px; position: absolute; bottom: -20px; color:${props=>props.interesting?'#08ba9c':'#fb445f'}; }

`;

export const FontRedStyled = styled.span`
    color: #ff415c;
`;

export const StaticFromStyled = styled.div`
    padding: 0 30px 0 30px;
    .static-label {font-size:16px; line-height: 24px; color: #999; }
    .static-detail {display:flex; margin-top:9px;}
    .static-detail li {font-size:16px; line-height: 24px;}
    .static-detail li + li:before {display:inline-block; padding:0 3px; content:"|"; color:#ccc;}
`;

export const ThumbnailListStyled = styled.div`
    .swiper .swiper-slide .thumbnail {position: relative; height: auto; padding-bottom: 70%; padding-left: 0;}
    .swiper .swiper-slide .thumbnail img {position: absolute; width: 100%; height: 100%; left: 0; top: 0; border-radius: 4px; outline: 1px solid rgba(0,0,0,.05); outline-offset: -1px; object-fit:cover;}
    .swiper .swiper-slide .txt-wrap {margin-top: 17px;}
    .swiper .swiper-slide .txt-wrap .tit { font-size: 16px; font-weight:700;}
    .swiper .swiper-slide .txt-wrap .tag {margin-top:13px; font-size: 12px; font-weight: 500; color: #333; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;}
    .swiper .swiper-slide .category {display:flex; align-items:center}
    .swiper .swiper-slide .category .cat {display: inline-flex; justify-content: center; align-items: center; height: 20px; border: 1px solid; border-radius: 2px; font-size: 11px; font-weight: 700; line-height: normal; padding: 0 6px;}
    .swiper .swiper-slide .category .cat + .cat {margin-left:5px;}
    .swiper .swiper-slide .category .cat.type-article {color: #ff9100; border-color: #ff9100;}
    .swiper .swiper-slide .category .cat.type-vod {color:#5866dc; border-color:#5866dc;}
    .swiper .swiper-slide .category .cat.type-online {border-color: #1c1c1c; background-color: #1c1c1c; margin-right: 5px; color: #fff;}
    .swiper .swiper-slide .category .cat.type-online svg { margin-right: 5px;}
    .swiper .swiper-slide .category + .tit {margin-top:10px;}
    .swiper .swiper-slide .txt-wrap .date {margin-top:5px; font-size: 13px; font-weight: 500; color: #aaa;}
    
`;

export const ResumeInputItemStyled = styled.div`
    margin-bottom: 60px;
    .tit-wrap {padding: 20px 0 6px; font-size: 16px; font-weight: 500; color: #3b3d40; border-bottom: 1px solid #bababa; color:#333;}
    .input-guide { white-space: pre-wrap; padding: 10px; background-color: #f3f9fe; font-size: 12px; line-height: 1.42; letter-spacing: normal; color: #666; margin-top: 10px;}
    .inp-wrap {margin: 30px 0px 3px;}
    .txtarea-wrap {width:100%;}
    .txtarea-wrap textarea{width:100%; -webkit-appearance: none; resize:none; outline:0; font-size:16px; white-space: pre-wrap; word-break: break-all; word-wrap: break-word; caret-color: #000; overflow: hidden; line-height: 22px;}
    .btn-banner {display: flex; align-items: center; justify-content:space-between;  width: 100%; height: 70px; padding: 0 20px; border-radius: 3px; margin: 10px 0 20px; background: #f7f7f7;}
    .btn-banner p {font-size: 15px; font-weight: 500; line-height: 18px; color: #333;}
    .btn-banner .right-txt {display: flex; align-items: center;  font-size: 14px; font-weight: 700; line-height: 17px; color: #36f;}
    .btn-banner .right-txt svg {width:12px; height:12px; fill:#36f;}
    .btn-add-wrap .btn-add {width: 100%; padding: 30px 0; display: block; font-size: 18px; font-weight: 600; text-align: left; color: #36f; background-color: transparent; border-bottom: 1px solid #f1f1f1;}
`;

export const JobAdListStyled = styled.div`
    .swiper .swiper-slide .thumbnail {position: relative; height: auto; padding-bottom: 75%; padding-left: 0;}
    .swiper .swiper-slide .thumbnail img {position: absolute; width: 100%; height: 100%; left: 0; top: 0; border-radius: 4px; outline: 1px solid rgba(0,0,0,.05); outline-offset: -1px; object-fit:cover;}
    .swiper .swiper-slide .txt-wrap {margin-top: 17px;}

    .swiper .swiper-slide .txt-wrap .tit {color: #333; font-size: 18px; font-weight: 600; line-height: 1.2; max-height: 2.4em; overflow: hidden; text-align: left; word-break: break-word; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;}
    .swiper .swiper-slide .txt-wrap .company-name,
    .swiper .swiper-slide .txt-wrap .job-location,
    .swiper .swiper-slide .txt-wrap .reward {font-size: 14px; color:#333; font-weight:600; line-height: normal; text-align: left; word-break: break-word; width: 100%; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; margin-top: 10px;} 
    .swiper .swiper-slide .txt-wrap .job-location{ font-weight: 400; color: #999;}
`;

export const ComsListStyled = styled.div`
    .swiper .swiper-slide .thumbnail {position: relative; height: auto; padding-bottom: 52%; padding-left: 0; box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);}
    .swiper .swiper-slide .thumbnail img {position: absolute; width: 100%; height: 100%; left: 0; top: 0; border-radius: 4px; outline: 1px solid rgba(0,0,0,.05); outline-offset: -1px; object-fit:cover;}
    .swiper .swiper-slide .txt-wrap {display:flex; justify-content:space-between; align-items:center; margin-top: 17px;}
    .swiper .swiper-slide .txt-wrap .info-txt {display:flex; justify-content:space-between; align-items:center;}
    .swiper .swiper-slide .txt-wrap .info-txt .logo {width: 42px; height: 42px; border:1px solid rgb(0 0 0 / 10%); margin-right: 12px;}
    .swiper .swiper-slide .txt-wrap .info-txt .logo img {width:100%; height:100%; object-fit:cover}
    .swiper .swiper-slide .txt-wrap .info-txt .tit{font-size: 18px; font-weight: 700; color: #333;}
    .swiper .swiper-slide .txt-wrap .info-txt .sub-txt {font-size: 14px; font-weight: 500; color: #999;}
    .swiper .swiper-slide .txt-wrap .btn-follow {display:flex; justify-content:center; align-items:center; height: 40px; color: #36f; font-weight: 700; font-size: 15px; border: 1px solid #e1e2e3; padding: 12px 25.5px 11px; line-height: 1;border-radius: 25px; }
    
    .swiper .swiper-slide .theme-txt-wrap {margin-top:16px;}
    .swiper .swiper-slide .theme-txt-wrap .tit {font-size: 18px; font-weight: 700; line-height: 21.6px; color: #333;}
    .swiper .swiper-slide .theme-txt-wrap .sub-txt {margin-top: 8px; font-size: 14px; line-height: 16.8px; font-weight: 500; color: #939393; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;}

    .swiper .swiper-slide .logo-list {display:flex; margin-top:16px;}
    .swiper .swiper-slide .logo-list li {display:flex; justify-content:center; align-items:center; border:1px solid rgba(0,0,0,.05)}
    .swiper .swiper-slide .logo-list li + li {margin-left:8px;}
    .swiper .swiper-slide .logo-list li:last-child {border:none; font-weight: 500;}
`;

export const ErrTxt = styled.p`
    margin-top: 6px;
    font-size: 12px;
    color:#fe415c;
`;
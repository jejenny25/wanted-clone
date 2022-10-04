import {useState, useRef, useEffect} from "react"

const JobGroup = (props) => {
    const jobgrpEl = useRef(); // 
    const [isOpen, setOpen] = useState(false);

    const handleClickOutside = ({ target }) => {
        //console.log("isGrpOpen 123: " + props.isGrpOpen );
        if (isOpen && !jobgrpEl.current.contains(target))
        {
            console.log("닫혀라");
            setOpen(false);
            props.setIsGrpOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="job-group" ref={jobgrpEl}>
            <ul className="group-list">
                <li><button type="button" className="btn "><span>전체</span></button></li>
                <li><button type="button" className="btn "><span>개발</span></button></li>
                <li><button type="button" className="btn "><span>경영&middot;비즈니스</span></button></li>
                <li><button type="button" className="btn "><span>마케팅&middot;광고</span></button></li>
                <li><button type="button" className="btn "><span>디자인</span></button></li>
                <li><button type="button" className="btn "><span>영업</span></button></li>
                <li><button type="button" className="btn "><span>고개서비스&middot;리테일</span></button></li>
                <li><button type="button" className="btn "><span>게임 제작</span></button></li>
                <li><button type="button" className="btn "><span>HR</span></button></li>
                <li><button type="button" className="btn "><span>미디어</span></button></li>
                <li><button type="button" className="btn "><span>금융</span></button></li>
                <li><button type="button" className="btn "><span>엔지니어링&middot;설계</span></button></li>
                <li><button type="button" className="btn "><span>물류&middot;무역</span></button></li>
                <li><button type="button" className="btn "><span>제조&middot;생산</span></button></li>
                <li><button type="button" className="btn "><span>의료&middot;제약&middot;바이오</span></button></li>
                <li><button type="button" className="btn "><span>교육</span></button></li>
                <li><button type="button" className="btn "><span>식&middot;음료</span></button></li>
                <li><button type="button" className="btn "><span>법률&middot;법집행기관</span></button></li>
                <li><button type="button" className="btn "><span>건설&middot;시설</span></button></li>
                <li><button type="button" className="btn "><span>공공&middot;복지</span></button></li>
            </ul>
        </div>
    )
}

export default JobGroup
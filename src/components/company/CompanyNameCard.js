import styled from "styled-components"

const CompanyNameCard = () => {
  return (
    <CompanyNameCardStyled>
        <button type="button" className="btn btn-go-company">
            <div className="img"><img src="images/dummy/company_logo02.png" alt="" /></div>
            <div className="txt-wrap">
                <p className="nm">피큐레잇</p>
                <p className="field">IT, 컨텐츠</p>
            </div>
        </button>
        <button type="button" className="btn btn-fllow"><span>팔로우</span></button>
    </CompanyNameCardStyled>
  )
}

const CompanyNameCardStyled = styled.div`
    border-radius: 3px;
    border: 1px solid #e1e2e3;
    padding: 20px;
    margin-top:80px;
    display:flex;
    align-items: center;
    justify-content: space-between;

    .btn {display:flex; align-items:center; justify-content:center;}
    .btn-go-company .img {width:50px; height:50px; margin-right: 15px;}
    .btn-go-company .img img {width:100%;}
    .btn-go-company .txt-wrap p {font-weight:600; font-size:15px; text-align:left;}
    .btn-go-company .txt-wrap .field {margin-top:5px; color: #999;}

    .btn-fllow {height: 40px; font-size: 15px; color: #36f; background-color: #fff; border:1px solid #e1e2e3; min-width: 64px; padding: 0 27px; border-radius: 25px; font-weight:700;}
`;

export default CompanyNameCard
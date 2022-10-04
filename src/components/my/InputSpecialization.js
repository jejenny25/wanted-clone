import styled from "styled-components"

import {MyInputItem} from "../../components/common/styled"

const InputSpecialization = () => {
  return (
    <SpecializationStyled>
        <MyInputItem>
            <label htmlFor="" className="inp-label">직군</label>
            <div className="input-wrap type-sel">
                <select name="" id="" className="inp-sel">
                    <option value="">개발</option>
                </select>
            </div>
        </MyInputItem>
        <MyInputItem>
            <label htmlFor="" className="inp-label">직무</label>
            <div className="input-wrap">
                <button type="button" className="btn btn-job">프론트엔드 개발자</button>
                <button type="button" className="btn btn-edit">+</button>
            </div>
        </MyInputItem>
        <MyInputItem>
            <label htmlFor="" className="inp-label">경력</label>
            <div className="input-wrap type-sel">
                <select name="" id="" className="inp-sel">
                    <option value="">신입</option>
                </select>
            </div>
        </MyInputItem>
    </SpecializationStyled>
  )
}

const SpecializationStyled = styled.div`
    padding-right:30px;
    padding-left:30px;

    .btn-job {margin: 5px; padding: 8px 15px; color: #3b3d40; font-size:16px; line-height:22px; font-weight: 400; border: 1px solid #d1d1d1; border-radius: 0; background-color: #f8f8f8;}
    .btn-edit {margin: 5px; padding: 8px 15px; color: #86939e; font-weight: 400; line-height:22px; border: 1px dashed #d1d1d1; background-color: transparent; cursor: pointer;}
    
`;

export default InputSpecialization